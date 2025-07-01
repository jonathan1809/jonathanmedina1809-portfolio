export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface ExperienceData {
  id: string;
  technologies: string[];
}

// Data that would come from backend (only static data like technologies)
export const experienceData: ExperienceData[] = [
  {
    id: "upwork",
    technologies: ["Next.js", "AWS Amplify v2", "TypeScript", "React", "AWS"],
  },
  {
    id: "sesol",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
    ],
  },
  {
    id: "itjuana",
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "Docker"],
  },
  {
    id: "3pillar",
    technologies: ["React", "Java", "Spring", "MySQL", "Redis"],
  },
];

// Mock API function for future backend integration
export const fetchExperiences = async (): Promise<ExperienceData[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));

  // In the future, this would be a real API call
  // return fetch('/api/experiences').then(res => res.json());

  return experienceData;
};
