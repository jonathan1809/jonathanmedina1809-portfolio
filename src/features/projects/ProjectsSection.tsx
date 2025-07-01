"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import { fetchProjects, Project } from "@/data/projects";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  className = "",
}) => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : t.common.failedToLoadProjects
        );
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Combine backend data with translations
  const translatedProjects = projects.map((project) => {
    const projectKey = project.title as keyof typeof t.projects.items;
    const projectData = t.projects.items[projectKey];

    return {
      ...project,
      title: projectData.title,
      description: projectData.description,
      features: projectData.features,
    };
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="success" size="sm">
            {t.projects.status.completed}
          </Badge>
        );
      case "in-progress":
        return (
          <Badge variant="warning" size="sm">
            {t.projects.status.inProgress}
          </Badge>
        );
      case "planned":
        return (
          <Badge variant="secondary" size="sm">
            {t.projects.status.planned}
          </Badge>
        );
      default:
        return null;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "web":
        return (
          <Badge variant="primary" size="sm">
            {t.projects.categories.web}
          </Badge>
        );
      case "mobile":
        return (
          <Badge variant="primary" size="sm">
            {t.projects.categories.mobile}
          </Badge>
        );
      case "fullstack":
        return (
          <Badge variant="primary" size="sm">
            {t.projects.categories.fullstack}
          </Badge>
        );
      case "backend":
        return (
          <Badge variant="primary" size="sm">
            {t.projects.categories.backend}
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      className={`py-20 bg-gray-50 dark:bg-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.projects.description}
          </p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
              {t.common.loadingProjects}
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
              {t.common.unableToLoadProjects}
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
              {t.common.tryAgain}
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {translatedProjects.map((project) => (
              <Card key={project.id} hover className="flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-t-lg flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {getStatusBadge(project.status)}
                    {getCategoryBadge(project.category)}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      {t.projects.features}:
                    </h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      {project.features.length > 3 && (
                        <li className="text-blue-600 dark:text-blue-400 font-medium">
                          +{project.features.length - 3}{" "}
                          {t.projects.moreFeatures}
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.liveUrl}
                        className="flex-1"
                      >
                        {t.projects.viewProject}
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        href={project.githubUrl}
                        className="flex-1"
                      >
                        {t.projects.viewCode}
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t.projects.cta.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t.projects.cta.description}
              </p>
              <div className="flex justify-center space-x-4">
                <Button href="https://github.com/jonathan1809" size="lg">
                  {t.projects.cta.viewGitHub}
                </Button>
                <Button variant="outline" href="#contact" size="lg">
                  {t.projects.cta.startProject}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
