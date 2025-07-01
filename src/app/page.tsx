import Hero from "@/components/organisms/Hero";
import AboutSection from "@/features/about/AboutSection";
import SkillsSection from "@/features/skills/SkillsSection";
import ExperienceSection from "@/features/experience/ExperienceSection";
import ProjectsSection from "@/features/projects/ProjectsSection";
import BlogSection from "@/features/blog/BlogSection";
import ContactSection from "@/features/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
