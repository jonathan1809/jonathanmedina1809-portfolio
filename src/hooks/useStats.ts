import { useState, useEffect } from "react";

interface Stats {
  pageViews: number;
  cvDownloads: number;
}

export const useStats = () => {
  const [stats, setStats] = useState<Stats>({ pageViews: 0, cvDownloads: 0 });
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/stats");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error("Error fetching stats:", error);
      // Keep the current stats if fetch fails
    } finally {
      setLoading(false);
    }
  };

  const refetchStats = async () => {
    await fetchStats();
  };

  const incrementPageView = async () => {
    try {
      // Check if user has already visited in this session
      const hasVisited = sessionStorage.getItem("hasVisited");
      const sessionId = sessionStorage.getItem("sessionId");

      // Generate a unique session ID if it doesn't exist
      if (!sessionId) {
        const newSessionId =
          Date.now().toString() + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem("sessionId", newSessionId);
      }

      if (!hasVisited) {
        // Mark as visited for this session
        sessionStorage.setItem("hasVisited", "true");

        // Increment the counter only for new sessions
        await fetch("/api/stats", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "page_view",
            sessionId: sessionId || sessionStorage.getItem("sessionId"),
          }),
        });
        setStats(prev => ({ ...prev, pageViews: prev.pageViews + 1 }));
      }
    } catch (error) {
      console.error("Error incrementing page view:", error);
    }
  };

  const incrementCvDownload = async () => {
    try {
      const sessionId = sessionStorage.getItem("sessionId");

      // Optimistically update the UI first
      setStats(prev => ({ ...prev, cvDownloads: prev.cvDownloads + 1 }));

      // Then make the API call
      const response = await fetch("/api/stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "cv_download",
          sessionId: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (!result.success) {
        // If the API call failed, revert the optimistic update
        setStats(prev => ({ ...prev, cvDownloads: prev.cvDownloads - 1 }));
        console.error("Failed to increment CV download counter");
      }
    } catch (error) {
      // If there's an error, revert the optimistic update
      setStats(prev => ({ ...prev, cvDownloads: prev.cvDownloads - 1 }));
      console.error("Error incrementing CV download:", error);
    }
  };

  useEffect(() => {
    fetchStats();
    incrementPageView();
  }, []);

  return {
    stats,
    loading,
    incrementCvDownload,
    refetchStats,
  };
};
