import { useEffect, useState } from "react";
import { statsService } from "@/services/stats";

export const useSession = () => {
  const [sessionId, setSessionId] = useState<string>("");
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Initialize session
    const id = statsService.getSessionId();
    const visited = statsService.hasSessionBeenVisited();

    setSessionId(id);
    setHasVisited(visited);
  }, []);

  const markAsVisited = () => {
    statsService.markSessionAsVisited();
    setHasVisited(true);
  };

  return {
    sessionId,
    hasVisited,
    markAsVisited,
  };
};
