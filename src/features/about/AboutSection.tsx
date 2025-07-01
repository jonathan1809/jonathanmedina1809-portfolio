"use client";

import React from "react";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = "" }) => {
  const highlights = [
    {
      icon: "🚀",
      title: "6+ years of experience",
      description: "Building web applications with modern technologies",
    },
    {
      icon: "🌍",
      title: "International projects",
      description: "Worked on projects in Sweden and other countries",
    },
    {
      icon: "🧹",
      title: "Clean code advocate",
      description: "Focus on maintainable and scalable architecture",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 bg-white dark:bg-gray-900 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I&apos;m a Full Stack Developer with over 6 years of experience
            building web applications. I specialize in React, Next.js, and
            Node.js, with a focus on clean code and scalable architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I started my journey as a developer over 6 years ago, and since
                then, I&apos;ve had the privilege of working on diverse projects
                across different industries. My experience spans from small
                startups to large enterprises, giving me a well-rounded
                perspective on software development.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;ve worked on international projects, particularly in
                Sweden, where I learned the importance of collaboration,
                communication, and delivering high-quality solutions that meet
                both technical and business requirements.
              </p>
            </div>

            {/* Skills Preview */}
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">React</Badge>
                <Badge variant="primary">Next.js</Badge>
                <Badge variant="primary">TypeScript</Badge>
                <Badge variant="primary">Node.js</Badge>
                <Badge variant="primary">NestJS</Badge>
                <Badge variant="primary">PostgreSQL</Badge>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} hover className="border-l-4 border-l-blue-500">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{highlight.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
