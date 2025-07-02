import { useState, useEffect, useCallback } from "react";
import { statsService } from "@/services/stats";
import { useSession } from "./useSession";
import type { Stats } from "@/types/stats";

export const useStats = () => {
  const [stats, setStats] = useState<Stats>({ pageViews: 0 });
  const [loading, setLoading] = useState(true);
  const { sessionId, hasVisited, markAsVisited } = useSession();

  const fetchStats = async () => {
    try {
      setLoading(true);
      const data = await statsService.getStats();
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

  const incrementPageView = useCallback(async () => {
    try {
      // Check if user has already visited in this session
      if (!hasVisited) {
        // Mark as visited for this session
        markAsVisited();

        // Increment the counter only for new sessions
        const result = await statsService.incrementPageView(sessionId);

        if (result.success) {
          setStats(prev => ({ ...prev, pageViews: prev.pageViews + 1 }));
        }
      }
    } catch (error) {
      console.error("Error incrementing page view:", error);
    }
  }, [hasVisited, markAsVisited, sessionId]);

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    if (sessionId) {
      incrementPageView();
    }
  }, [incrementPageView, sessionId]);

  return {
    stats,
    loading,
    refetchStats,
  };
};
