"use client";

import React from "react";
import Card from "@/components/atoms/Card";
import Icon from "@/components/atoms/Icon";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ className = "" }) => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "C#", icon: "csharp" },
        { name: "HTML", icon: "html5" },
        { name: "CSS", icon: "css3" },
        { name: "SQL", icon: "sql" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React 18", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Redux Toolkit", icon: "redux" },
        { name: "Node.js", icon: "nodejs" },
        { name: "NestJS", icon: "nestjs" },
        { name: "Express.js", icon: "express" },
        { name: ".NET Core", icon: "dotnet" },
        { name: "MUI", icon: "materialui" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Styled Components", icon: "styledcomponents" },
        { name: "Zustand", icon: "zustand" },
        { name: "React Hook Form", icon: "reacthookform" },
        { name: "TypeORM", icon: "typeorm" },
        { name: "Sequelize", icon: "sequelize" },
        { name: "Radix UI", icon: "radixui" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "AWS", icon: "aws" },
        { name: "Docker", icon: "docker" },
        { name: "GitHub", icon: "github" },
        { name: "GitHub Actions", icon: "githubactions" },
        { name: "Railway", icon: "railway" },
        { name: "Vercel", icon: "vercel" },
        { name: "LaunchDarkly", icon: "launchdarkly" },
        { name: "OpenAI API", icon: "openai" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "MySQL", icon: "mysql" },
      ],
    },
    {
      title: "Mobile Development",
      skills: [{ name: "React Native", icon: "react" }],
    },
    {
      title: "Architectures & Best Practices",
      skills: [
        { name: "RESTful APIs", icon: "api" },
        { name: "GraphQL", icon: "graphql" },
        { name: "Microservices", icon: "microservices" },
        { name: "Clean Code", icon: "code" },
        { name: "Atomic Design", icon: "design" },
      ],
    },
    {
      title: "DevOps & Testing",
      skills: [
        { name: "CI/CD Pipelines", icon: "cicd" },
        { name: "Jest", icon: "jest" },
        { name: "Cypress", icon: "cypress" },
        { name: "React Testing Library", icon: "testinglibrary" },
        { name: "Unit Testing", icon: "unittesting" },
        { name: "Integration Testing", icon: "integrationtesting" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Effective Communication", icon: "communication" },
        { name: "Leadership", icon: "leadership" },
        { name: "Problem-solving", icon: "problemsolving" },
        { name: "Team Management", icon: "teamwork" },
        { name: "International Collaboration", icon: "collaboration" },
        { name: "Mentorship", icon: "mentorship" },
        { name: "Cross-functional Collaboration", icon: "crossfunctional" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 bg-gray-50 dark:bg-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.skills.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.skills.description}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Card hover className="text-center">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 group"
                      >
                        <Icon
                          name={skill.icon}
                          size="md"
                          className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                        />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {t.skills.alwaysLearning.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  {t.skills.alwaysLearning.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3 group-hover:scale-110 transition-transform duration-200">
                    <span className="text-xl">🚀</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t.common.currentlyExploring}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t.common.aiMlIntegration}
                  </p>
                </div>

                <div className="group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full mb-3 group-hover:scale-110 transition-transform duration-200">
                    <span className="text-xl">📚</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t.common.learning}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t.common.advancedTypescript}
                  </p>
                </div>

                <div className="group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3 group-hover:scale-110 transition-transform duration-200">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t.common.focusAreas}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t.common.performanceOptimization}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
