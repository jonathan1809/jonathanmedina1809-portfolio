import React, { useState, useEffect } from "react";

interface SessionDebugProps {
  className?: string;
}

const SessionDebug: React.FC<SessionDebugProps> = ({ className = "" }) => {
  const [sessionInfo, setSessionInfo] = useState({
    hasVisited: false,
    sessionId: "",
    isNewSession: false,
  });

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited") === "true";
    const sessionId = sessionStorage.getItem("sessionId") || "";

    setSessionInfo({
      hasVisited,
      sessionId,
      isNewSession: !hasVisited,
    });
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div
      className={`p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs ${className}`}
    >
      <h4 className="font-semibold mb-2">Session Debug (Dev Only)</h4>
      <div className="space-y-1">
        <div>Session ID: {sessionInfo.sessionId}</div>
        <div>Has Visited: {sessionInfo.hasVisited ? "Yes" : "No"}</div>
        <div>Is New Session: {sessionInfo.isNewSession ? "Yes" : "No"}</div>
      </div>
    </div>
  );
};

export default SessionDebug;
