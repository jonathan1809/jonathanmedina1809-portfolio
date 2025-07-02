"use client";

import React from "react";
import { useLanguage } from "@/lib/language-context";
import { useContactForm } from "./useContactForm";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import { LinkedInIcon, GitHubIcon, EmailIcon } from "@/components";

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = "" }) => {
  const { translations } = useLanguage();
  const { formData, loading, error, success, handleInputChange, handleSubmit } =
    useContactForm();

  const contactInfo = [
    {
      icon: <EmailIcon className="text-gray-600 dark:text-gray-400" />,
      title: "Email",
      value: "jonathangomez117@outlook.com",
      href: "mailto:jonathangomez117@outlook.com",
    },
    {
      icon: <LinkedInIcon className="text-gray-600 dark:text-gray-400" />,
      title: "LinkedIn",
      value: "Jonathan Medina Gomez",
      href: "https://www.linkedin.com/in/jonathanmedinagomez/",
    },
    {
      icon: <GitHubIcon className="text-gray-600 dark:text-gray-400" />,
      title: "GitHub",
      value: "github.com/jonathan1809",
      href: "https://github.com/jonathan1809",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 bg-white dark:bg-gray-900 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translations.contact.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {translations.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {translations.contact.form.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users but visible to bots */}
              <div className="absolute left-[-9999px]">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {translations.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder={translations.contact.form.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {translations.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder={translations.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {translations.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  placeholder={translations.contact.form.messagePlaceholder}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading
                  ? translations.contact.form.sending
                  : translations.contact.form.send}
              </Button>

              {/* Status Messages */}
              {success && (
                <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                  {translations.contact.success}
                </div>
              )}
              {error && (
                <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                  {error}
                </div>
              )}
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {translations.contact.info.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {translations.contact.info.description}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                {translations.contact.services.title}
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {translations.contact.services.items.map((service, index) => (
                  <li key={index}>• {service}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
