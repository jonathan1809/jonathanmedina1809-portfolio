"use client";

import React from "react";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

interface BlogSectionProps {
  className?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ className = "" }) => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section
      id="blog"
      className={`py-20 bg-gray-50 dark:bg-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.blog.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        <Card className="max-w-2xl mx-auto text-center p-12">
          <div className="space-y-6">
            <div className="text-6xl">🔒</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {t.blog.private.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t.blog.private.description}
            </p>
            <div className="space-y-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.blog.private.topics}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {t.blog.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            <Button variant="outline" size="lg">
              {t.blog.private.comingSoon}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BlogSection;
