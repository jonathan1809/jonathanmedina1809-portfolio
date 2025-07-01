"use client";

import React from "react";
import { useLanguage } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import { LinkedInIcon, GitHubIcon, EmailIcon } from "@/components";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jonathanmedinagomez/",
      icon: <LinkedInIcon className="text-gray-400 hover:text-blue-400" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/jonathan1809",
      icon: <GitHubIcon className="text-gray-400 hover:text-blue-400" />,
    },
    {
      name: "Email",
      url: "mailto:jonathangomez117@outlook.com",
      icon: <EmailIcon className="text-gray-400 hover:text-blue-400" />,
    },
  ];

  return (
    <footer className={`bg-gray-900 dark:bg-black text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">Jonathan Medina</h3>
            <p className="text-gray-400 text-sm">{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {t.navigation.about}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {t.navigation.skills}
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {t.navigation.experience}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {t.navigation.projects}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {t.navigation.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              {t.footer.getInTouch}
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">📧 jonathangomez117@outlook.com</p>
              <p className="text-gray-400">🌍 {t.footer.availableForWork}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jonathan Medina.{" "}
              {t.footer.copyright.split("© 2024 Jonathan Medina. ")[1]}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
