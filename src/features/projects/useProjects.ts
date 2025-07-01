import { useState, useEffect } from "react";
import { fetchProjects, Project } from "@/data/projects";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

interface TranslatedProject
  extends Omit<Project, "title" | "description" | "features"> {
  title: string;
  description: string;
  features: string[];
}

export const useProjects = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [projects, setProjects] = useState<TranslatedProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();

        // Combine backend data with translations
        const translatedProjects = data.map((project) => {
          const projectKey = project.title as keyof typeof t.projects.items;
          const projectData = t.projects.items[projectKey];

          return {
            ...project,
            title: projectData.title,
            description: projectData.description,
            features: projectData.features,
          };
        });

        setProjects(translatedProjects);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : t.common.failedToLoadProjects
        );
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [language, t]);

  const refetch = () => {
    setLoading(true);
    setError(null);
    // The useEffect will handle the refetch
  };

  return {
    projects,
    loading,
    error,
    refetch,
  };
};
