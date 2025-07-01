"use client";

import React, { useState, useEffect } from "react";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import { motion } from "framer-motion";

interface ExperienceData {
  id: string;
  technologies: string[];
}

interface ExperienceSectionProps {
  className?: string;
}

// Mock data for experiences
const experienceData: ExperienceData[] = [
  {
    id: "upwork",
    technologies: [
      "AWS Amplify Gen 2",
      "Next.js",
      "Zustand",
      "React Hook Form",
      "Radix UI",
      "TypeScript",
    ],
  },
  {
    id: "tripPlanner",
    technologies: [
      ".NET Core",
      "PostgreSQL",
      "Next.js",
      "React Native",
      "Railway",
      "Vercel",
      "GitHub",
    ],
  },
  {
    id: "sesol",
    technologies: [
      "React 18",
      "Redux Toolkit",
      "NestJS",
      "GraphQL",
      "AWS",
      "MUI",
      "GitHub",
    ],
  },
  {
    id: "itjuana",
    technologies: [
      "React 18",
      "Redux Toolkit",
      ".NET Core",
      "AWS",
      "OpenAI",
      "GitHub",
      "LaunchDarkly",
    ],
  },
  {
    id: "3pillar",
    technologies: [
      "React 18",
      "Redux Toolkit",
      "NestJS",
      "AWS",
      "Tailwind",
      "GitHub",
      "Styled Components",
    ],
  },
  {
    id: "unosquare",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: "frontrunner",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
  },
  {
    id: "voyastic",
    technologies: [
      "Angular 4",
      "JavaScript",
      "ExpressJs",
      "MySQL",
      "HTML5",
      "CSS3",
    ],
  },
];

// Mock API function for future backend integration
const fetchExperiences = async (): Promise<ExperienceData[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // In the future, this would be a real API call
  // return fetch('/api/experiences').then(res => res.json());

  return experienceData;
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  className = "",
}) => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        setLoading(true);
        const data = await fetchExperiences();
        setExperienceData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load experiences"
        );
      } finally {
        setLoading(false);
      }
    };

    loadExperiences();
  }, []);

  // Combine backend data with translations
  const experiences = experienceData.map((data) => {
    const positionKey = data.id as keyof typeof t.experience.positions;
    const position = t.experience.positions[positionKey];

    return {
      id: data.id,
      company: position.company,
      position: position.position,
      period: position.period,
      location: position.location,
      description: position.description,
      technologies: data.technologies,
      highlights: position.highlights,
    };
  });

  return (
    <section
      id="experience"
      className={`py-20 bg-white dark:bg-gray-900 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experience.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.experience.description}
          </p>
        </div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
                Loading experiences...
              </p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-red-600 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Unable to load experiences
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md mx-auto">
                {error}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Try again
              </button>
            </div>
          )}

          {!loading &&
            !error &&
            experiences.map((experience, index) => (
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
                <Card hover className="relative group">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Timeline indicator */}
                    <div className="lg:col-span-1">
                      <div className="flex items-start space-x-4">
                        <div className="relative">
                          <div className="w-4 h-4 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                          {index < experiences.length - 1 && (
                            <div className="absolute top-4 left-2 w-0.5 h-16 bg-gray-200 dark:bg-gray-700"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {experience.period}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {experience.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {experience.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {experience.company}
                        </h4>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                          Technologies & Tools
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map(
                            (tech: string, techIndex: number) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                size="sm"
                                className="group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-200"
                              >
                                {tech}
                              </Badge>
                            )
                          )}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                          {t.experience.keyAchievements}
                        </h5>
                        <ul className="space-y-2">
                          {experience.highlights.map(
                            (highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="text-sm text-gray-600 dark:text-gray-400 flex items-start group/item"
                              >
                                <span className="text-blue-500 mr-3 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                                  •
                                </span>
                                <span className="leading-relaxed">
                                  {highlight}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
        </motion.div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <Card className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {t.experience.whatILearned.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  {t.experience.whatILearned.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t.experience.whatILearned.collaboration}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Effective communication and teamwork across diverse teams
                    and cultures
                  </p>
                </div>

                <div className="group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t.experience.whatILearned.architecture}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Building robust, scalable systems that grow with business
                    needs
                  </p>
                </div>

                <div className="group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t.experience.whatILearned.delivery}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Rapid iteration and deployment with quality and reliability
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

export default ExperienceSection;
