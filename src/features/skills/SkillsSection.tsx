"use client";

import React from "react";
import Card from "@/components/atoms/Card";
import Icon from "@/components/atoms/Icon";

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ className = "" }) => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Sass", icon: "sass" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "NestJS", icon: "nestjs" },
        { name: "Express", icon: "express" },
        { name: "Python", icon: "python" },
        { name: "Java", icon: "java" },
        { name: "Spring", icon: "spring" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "MySQL", icon: "mysql" },
        { name: "Redis", icon: "redis" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "git" },
        { name: "Docker", icon: "docker" },
        { name: "AWS", icon: "aws" },
        { name: "Firebase", icon: "firebase" },
        { name: "Figma", icon: "figma" },
        { name: "VS Code", icon: "vscode" },
        { name: "Linux", icon: "linux" },
        { name: "Ubuntu", icon: "ubuntu" },
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I&apos;ve worked with a wide range of technologies throughout my
            career. Here are the main tools and frameworks I use to build modern
            web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} hover className="text-center">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <Icon
                        name={skill.icon}
                        size="lg"
                        className="text-gray-700 dark:text-gray-300"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Technology evolves rapidly, and I believe in continuous
                learning. I&apos;m always exploring new tools, frameworks, and
                best practices to stay current and deliver the best solutions
                for my clients.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  🚀 Currently exploring: AI/ML Integration
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  📚 Learning: Advanced TypeScript Patterns
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
