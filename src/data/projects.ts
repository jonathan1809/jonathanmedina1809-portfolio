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

export const projects: Project[] = [
  {
    id: "excursiones-lola",
    title: "Excursiones Lola - Agencia de Viajes",
    description:
      "Plataforma completa para agencia de viajes con más de 10 años de experiencia en Aguascalientes. Sistema de reservas, gestión de destinos y experiencia de usuario optimizada.",
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
    features: [
      "Sistema de reservas en tiempo real",
      "Gestión de destinos y paquetes turísticos",
      "Aplicación móvil nativa (Android/iOS)",
      "Panel de administración completo",
      "Integración con WhatsApp Business",
      "Sistema de testimonios y calificaciones",
      "Calendario de viajes programados",
      "Pagos en línea seguros",
    ],
    category: "fullstack",
    status: "in-progress",
  },
  {
    id: "portfolio",
    title: "Portfolio Personal",
    description:
      "Portfolio profesional desarrollado con Next.js, TypeScript y Tailwind CSS. Incluye modo oscuro, soporte multiidioma y diseño responsive.",
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
    features: [
      "Diseño responsive y moderno",
      "Modo oscuro/claro",
      "Soporte multiidioma (ES/EN)",
      "Animaciones con Framer Motion",
      "Sección de blog privada",
      "Formulario de contacto funcional",
      "Arquitectura Atomic Design",
    ],
    category: "web",
    status: "in-progress",
  },
];
