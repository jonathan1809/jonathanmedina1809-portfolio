"use client";

import React from "react";
import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import Button from "./Button";

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {isDark ? t.common.dark : t.common.light}
      </span>
      <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
        {isDark ? "☀️" : "🌙"}
      </Button>
    </div>
  );
};

export default ThemeToggle;
