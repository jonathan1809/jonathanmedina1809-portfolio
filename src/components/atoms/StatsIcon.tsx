import React from "react";
import { Eye, FileText, TrendingUp, Users } from "lucide-react";

interface StatsIconProps {
  type: "visits" | "downloads" | "trending" | "users";
  className?: string;
}

const StatsIcon: React.FC<StatsIconProps> = ({ type, className = "" }) => {
  const iconClasses = `w-4 h-4 ${className}`;

  switch (type) {
    case "visits":
      return <Eye className={iconClasses} />;
    case "downloads":
      return <FileText className={iconClasses} />;
    case "trending":
      return <TrendingUp className={iconClasses} />;
    case "users":
      return <Users className={iconClasses} />;
    default:
      return <Eye className={iconClasses} />;
  }
};

export default StatsIcon;
