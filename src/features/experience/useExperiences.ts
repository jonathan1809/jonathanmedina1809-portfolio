import { useState, useEffect } from "react";
import { fetchExperiences } from "@/data/experience";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export const useExperiences = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchExperiences();

        // Combine backend data with translations
        const translatedExperiences = data.map((experienceData) => {
          const positionKey =
            experienceData.id as keyof typeof t.experience.positions;
          const position = t.experience.positions[positionKey];

          return {
            id: experienceData.id,
            company: position.company,
            position: position.position,
            period: position.period,
            location: position.location,
            description: position.description,
            technologies: experienceData.technologies,
            highlights: position.highlights,
          };
        });

        setExperiences(translatedExperiences);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : t.common.failedToLoadExperiences
        );
      } finally {
        setLoading(false);
      }
    };

    loadExperiences();
  }, [language, t]);

  const refetch = () => {
    setLoading(true);
    setError(null);
    // The useEffect will handle the refetch
  };

  return {
    experiences,
    loading,
    error,
    refetch,
  };
};
