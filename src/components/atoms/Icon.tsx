"use client";

import React from "react";

interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = "md", className = "" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const iconMap: Record<string, string> = {
    // Frontend
    react: "devicon-react-original",
    nextjs: "devicon-nextjs-original",
    typescript: "devicon-typescript-plain",
    javascript: "devicon-javascript-plain",
    html5: "devicon-html5-plain",
    css3: "devicon-css3-plain",
    tailwind: "devicon-tailwindcss-plain",
    sass: "devicon-sass-original",

    // Backend
    nodejs: "devicon-nodejs-plain",
    nestjs: "devicon-nestjs-plain",
    express: "devicon-express-original",
    python: "devicon-python-plain",
    java: "devicon-java-plain",
    spring: "devicon-spring-plain",

    // Database
    postgresql: "devicon-postgresql-plain",
    mongodb: "devicon-mongodb-plain",
    mysql: "devicon-mysql-plain",
    redis: "devicon-redis-plain",

    // Tools & Others
    git: "devicon-git-plain",
    docker: "devicon-docker-plain",
    aws: "devicon-amazonwebservices-original",
    firebase: "devicon-firebase-plain",
    figma: "devicon-figma-plain",
    vscode: "devicon-vscode-plain",
    linux: "devicon-linux-plain",
    ubuntu: "devicon-ubuntu-plain",
  };

  const iconClass = iconMap[name.toLowerCase()] || "devicon-javascript-plain";
  const sizeClass = sizes[size];

  return (
    <i className={`${iconClass} ${sizeClass} ${className}`} title={name} />
  );
};

export default Icon;
