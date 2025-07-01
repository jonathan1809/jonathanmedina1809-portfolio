export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  category: "web" | "mobile" | "fullstack" | "backend";
  status: "completed" | "in-progress" | "planned";
}

// Mock API function for future backend integration
export const fetchProjects = async (): Promise<Project[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // In the future, this would be a real API call
  // return fetch('/api/projects').then(res => res.json());

  return [
    {
      id: "excursiones-lola",
      title: "excursionesLola", // Translation key
      description: "excursionesLola", // Translation key
      image: "/images/projects/excursiones-lola.jpg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "FastAPI",
        "Python",
        "React Native",
        "Swift",
        "PostgreSQL",
      ],
      liveUrl: "https://www.excurcioneslola.com/",
      features: [], // Will be populated from translations
      category: "fullstack",
      status: "in-progress",
    },
    {
      id: "portfolio",
      title: "portfolio", // Translation key
      description: "portfolio", // Translation key
      image: "/images/projects/portfolio.jpg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "i18n",
      ],
      githubUrl: "https://github.com/jonathan1809/portfolio",
      liveUrl: "https://jonathanmedina.dev",
      features: [], // Will be populated from translations
      category: "web",
      status: "in-progress",
    },
  ];
};
