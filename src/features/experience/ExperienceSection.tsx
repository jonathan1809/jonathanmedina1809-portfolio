"use client";

import React from "react";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  className = "",
}) => {
  const experiences = [
    {
      company: "Sesol AB",
      position: "Senior Full Stack Developer",
      period: "2023 - Present",
      location: "Stockholm, Sweden",
      description:
        "Leading development of enterprise applications using React, Next.js, and Node.js. Implementing clean architecture patterns and mentoring junior developers.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AWS",
      ],
      highlights: [
        "Led a team of 5 developers in building a customer portal",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    },
    {
      company: "ITjuana",
      position: "Full Stack Developer",
      period: "2022 - 2023",
      location: "Remote",
      description:
        "Developed web applications for various clients using modern JavaScript frameworks and cloud services.",
      technologies: ["React", "Node.js", "MongoDB", "Firebase", "Docker"],
      highlights: [
        "Built 10+ client applications with 100% client satisfaction",
        "Reduced development time by 30% through component library",
        "Implemented automated testing achieving 90% code coverage",
      ],
    },
    {
      company: "3PillarGlobal",
      position: "Software Developer",
      period: "2021 - 2022",
      location: "Remote",
      description:
        "Worked on multiple projects for enterprise clients, focusing on scalable and maintainable code.",
      technologies: ["React", "Java", "Spring", "MySQL", "Redis"],
      highlights: [
        "Developed microservices architecture for e-commerce platform",
        "Collaborated with international teams across different time zones",
        "Contributed to open-source projects and internal tools",
      ],
    },
    {
      company: "Upwork",
      position: "Freelance Developer",
      period: "2020 - 2021",
      location: "Remote",
      description:
        "Provided development services to clients worldwide, specializing in React and Node.js applications.",
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
      highlights: [
        "Completed 50+ projects with 5-star average rating",
        "Specialized in e-commerce and SaaS applications",
        "Built long-term relationships with recurring clients",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 bg-white dark:bg-gray-900 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey has taken me through various companies and
            projects, each contributing to my growth as a developer and team
            member.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} hover className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Timeline indicator */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {experience.period}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.position}
                    </h3>
                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {experience.company}
                    </h4>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h5 className="font-medium text-gray-900 dark:text-white">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {experience.highlights.map(
                        (highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            {highlight}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
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
                What I&apos;ve Learned
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Throughout my career, I&apos;ve learned that success in software
                development comes from a combination of technical skills,
                effective communication, and the ability to adapt to changing
                requirements and technologies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-gray-500 dark:text-gray-400">
                  🤝 Team Collaboration
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  📈 Scalable Architecture
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  🚀 Continuous Delivery
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
