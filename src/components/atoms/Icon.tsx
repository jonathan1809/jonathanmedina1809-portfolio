"use client";

import React from "react";

interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

// Fallback icon component for technologies not in Devicon
const FallbackIcon: React.FC<{ name: string; className?: string }> = ({
  name,
  className = "",
}) => {
  // Get initials from the name (first 2 characters)
  const getInitials = (name: string) => {
    const words = name.split(" ");
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div
      className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 ${className}`}
      title={name}
    >
      <span className="text-xs font-medium text-gray-600 dark:text-gray-300 px-1 text-center leading-none">
        {getInitials(name)}
      </span>
    </div>
  );
};

const Icon: React.FC<IconProps> = ({ name, size = "md", className = "" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const iconMap: Record<string, string> = {
    // Languages
    javascript: "devicon-javascript-plain",
    typescript: "devicon-typescript-plain",
    csharp: "devicon-csharp-plain",
    html5: "devicon-html5-plain",
    css3: "devicon-css3-plain",
    sql: "devicon-mysql-plain", // Using MySQL icon for SQL

    // Frameworks & Libraries
    react: "devicon-react-original",
    nextjs: "devicon-nextjs-plain",
    redux: "devicon-redux-original",
    nodejs: "devicon-nodejs-plain",
    nestjs: "devicon-nestjs-plain",
    express: "devicon-express-original",
    dotnet: "devicon-dotnetcore-plain",
    materialui: "devicon-materialui-plain",
    tailwind: "devicon-tailwindcss-plain",
    reacthookform: "devicon-react-original", // Using React icon
    sequelize: "devicon-sequelize-plain",

    // Tools & Platforms
    aws: "devicon-amazonwebservices-plain-wordmark",
    docker: "devicon-docker-plain",
    github: "devicon-github-original",
    githubactions: "devicon-github-original", // Using GitHub icon
    railway: "devicon-railway-plain",
    vercel: "devicon-vercel-plain",

    // Databases
    postgresql: "devicon-postgresql-plain",
    mongodb: "devicon-mongodb-plain",
    mysql: "devicon-mysql-plain",

    // Mobile Development
    reactnative: "devicon-react-original", // Using React icon

    // Architectures & Best Practices
    graphql: "devicon-graphql-plain",

    // DevOps & Testing
    jest: "devicon-jest-plain",

    // Additional technologies from experience
    python: "devicon-python-plain",
    firebase: "devicon-firebase-plain",
    redis: "devicon-redis-plain",
  };

  const iconClass = iconMap[name.toLowerCase()];
  const sizeClass = sizes[size];

  // If icon exists in Devicon, use it
  if (iconClass) {
    return (
      <i className={`${iconClass} ${sizeClass} ${className}`} title={name} />
    );
  }

  // If icon doesn't exist, use fallback
  return <FallbackIcon name={name} className={`${sizeClass} ${className}`} />;
};

export default Icon;
