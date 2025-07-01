"use client";

import React from "react";
import { useLanguage } from "@/lib/language-context";
import { projects } from "@/data/projects";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  className = "",
}) => {
  const { translations } = useLanguage();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="success" size="sm">
            {translations.projects.status.completed}
          </Badge>
        );
      case "in-progress":
        return (
          <Badge variant="warning" size="sm">
            {translations.projects.status.inProgress}
          </Badge>
        );
      case "planned":
        return (
          <Badge variant="secondary" size="sm">
            {translations.projects.status.planned}
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
            {translations.projects.categories.web}
          </Badge>
        );
      case "mobile":
        return (
          <Badge variant="primary" size="sm">
            {translations.projects.categories.mobile}
          </Badge>
        );
      case "fullstack":
        return (
          <Badge variant="primary" size="sm">
            {translations.projects.categories.fullstack}
          </Badge>
        );
      case "backend":
        return (
          <Badge variant="primary" size="sm">
            {translations.projects.categories.backend}
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
            {translations.projects.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {translations.projects.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                    {translations.projects.features}:
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
                        {translations.projects.moreFeatures}
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
                      {translations.projects.viewProject}
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.githubUrl}
                      className="flex-1"
                    >
                      {translations.projects.viewCode}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {translations.projects.cta.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {translations.projects.cta.description}
              </p>
              <div className="flex justify-center space-x-4">
                <Button href="https://github.com/jonathan1809" size="lg">
                  {translations.projects.cta.viewGitHub}
                </Button>
                <Button variant="outline" href="#contact" size="lg">
                  {translations.projects.cta.startProject}
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
