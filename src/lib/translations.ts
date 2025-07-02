import enTranslations from "@/i18n/locales/en.json";
import esTranslations from "@/i18n/locales/es.json";

export type Language = "en" | "es";

export interface Translations {
  navigation: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    blog: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    viewProjects: string;
  };
  about: {
    title: string;
    description: string;
    journey: string;
    journeyText1: string;
    journeyText2: string;
    coreTechnologies: string;
    highlights: {
      experience: {
        title: string;
        description: string;
      };
      international: {
        title: string;
        description: string;
      };
      cleanCode: {
        title: string;
        description: string;
      };
    };
  };
  skills: {
    title: string;
    description: string;
    categories: {
      languages: string;
      frameworks: string;
      tools: string;
      databases: string;
      mobile: string;
      architectures: string;
      devops: string;
      softSkills: string;
    };
    alwaysLearning: {
      title: string;
      description: string;
      exploring: string;
      learning: string;
    };
  };
  experience: {
    title: string;
    description: string;
    present: string;
    keyAchievements: string;
    whatILearned: {
      title: string;
      description: string;
      collaboration: string;
      architecture: string;
      delivery: string;
    };
    positions: {
      sesol: {
        company: string;
        position: string;
        period: string;
        location: string;
        description: string;
        highlights: string[];
      };
      itjuana: {
        company: string;
        position: string;
        period: string;
        location: string;
        description: string;
        highlights: string[];
      };
      "3pillar": {
        company: string;
        position: string;
        period: string;
        location: string;
        description: string;
        highlights: string[];
      };
      upwork: {
        company: string;
        position: string;
        period: string;
        location: string;
        description: string;
        highlights: string[];
      };
    };
  };
  projects: {
    title: string;
    description: string;
    viewProject: string;
    viewCode: string;
    featured: string;
    features: string;
    moreFeatures: string;
    status: {
      completed: string;
      inProgress: string;
      planned: string;
    };
    categories: {
      web: string;
      mobile: string;
      fullstack: string;
      backend: string;
    };
    cta: {
      title: string;
      description: string;
      viewGitHub: string;
      startProject: string;
    };
    items: {
      ecommerce: {
        title: string;
        description: string;
        features: string[];
      };
      saas: {
        title: string;
        description: string;
        features: string[];
      };
      taskManagement: {
        title: string;
        description: string;
        features: string[];
      };
      portfolio: {
        title: string;
        description: string;
        features: string[];
      };
      apiGateway: {
        title: string;
        description: string;
        features: string[];
      };
      mobileBackend: {
        title: string;
        description: string;
        features: string[];
      };
      excursionesLola: {
        title: string;
        description: string;
        features: string[];
      };
    };
  };
  blog: {
    title: string;
    subtitle: string;
    private: {
      title: string;
      description: string;
      topics: string;
      comingSoon: string;
    };
    topics: string[];
  };
  contact: {
    title: string;
    description: string;
    form: {
      title: string;
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      success: string;
      error: string;
    };
    success: string;
    error: string;
    info: {
      title: string;
      description: string;
      email: string;
      linkedin: string;
      github: string;
      availability: string;
    };
    services: {
      title: string;
      items: string[];
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    getInTouch: string;
    copyright: string;
    availableForWork: string;
  };
  common: {
    loading: string;
    error: string;
    tryAgain: string;
    dark: string;
    light: string;
    currentlyExploring: string;
    learning: string;
    focusAreas: string;
    aiMlIntegration: string;
    advancedTypescript: string;
    performanceOptimization: string;
    loadingExperiences: string;
    unableToLoadExperiences: string;
    failedToLoadExperiences: string;
    loadingProjects: string;
    unableToLoadProjects: string;
    failedToLoadProjects: string;
    technologiesAndTools: string;
    effectiveCommunication: string;
    buildingRobustSystems: string;
    rapidIteration: string;
  };
  stats: {
    loading: string;
    visits: string;
  };
}

const translations: Record<Language, Translations> = {
  en: enTranslations as Translations,
  es: esTranslations as Translations,
};

export const getTranslations = (language: Language): Translations => {
  return translations[language] || translations.en;
};

export const t = (language: Language, key: string): string => {
  const keys = key.split(".");
  let value: unknown = translations[language] || translations.en;

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key; // Return the key if translation not found
    }
  }

  return typeof value === "string" ? value : key;
};
