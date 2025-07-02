"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import {
  LinkedInIcon,
  GitHubIcon,
  EmailIcon,
  CvDownloadButton,
  StatsDisplay,
} from "@/components";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  const { translations } = useLanguage();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jonathanmedinagomez/",
      icon: (
        <LinkedInIcon className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/jonathan1809",
      icon: (
        <GitHubIcon className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
      ),
    },
    {
      name: "Email",
      url: "mailto:jonathangomez117@outlook.com",
      icon: (
        <EmailIcon className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
      ),
    },
  ];

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                {translations.hero.title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                {translations.hero.subtitle}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                {translations.hero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl px-6 py-3 text-lg"
              >
                {translations.hero.cta}
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 dark:border-blue-400 dark:text-blue-400 px-6 py-3 text-lg"
              >
                {translations.hero.viewProjects}
              </Link>
              <CvDownloadButton />
            </div>

            {/* Stats Display */}
            <StatsDisplay className="mt-4" />

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                  title={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                  <Image
                    src="/profile-photo.jpeg"
                    alt="Jonathan Medina"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - positioned outside the grid to avoid overlap */}
        <div className="flex justify-center mt-8 lg:mt-12">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
