import React from "react";
import { useLanguage } from "@/lib/language-context";
import { useStats } from "@/hooks/useStats";
import StatsIcon from "@/components/atoms/StatsIcon";

interface StatsDisplayProps {
  className?: string;
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ className = "" }) => {
  const { translations } = useLanguage();
  const { stats, loading } = useStats();

  if (loading) {
    return (
      <div
        className={`flex space-x-6 text-sm text-gray-600 dark:text-gray-400 ${className}`}
      >
        <div className="animate-pulse">{translations.stats.loading}</div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 ${className}`}
    >
      <StatsIcon type="visits" className="text-blue-600 dark:text-blue-400" />
      <span>
        {stats.pageViews.toLocaleString()} {translations.stats.visits}
      </span>
    </div>
  );
};

export default StatsDisplay;
