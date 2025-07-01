# Jonathan Medina - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, internationalization support, and a clean, professional design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Dark Mode**: Toggle between light and dark themes
- **Internationalization**: Support for English and Spanish
- **Atomic Design**: Well-structured component architecture
- **Feature-based Architecture**: Organized by features and functionality
- **Smooth Animations**: CSS transitions and hover effects
- **SEO Optimized**: Meta tags and structured data
- **Contact Form**: Functional contact form with validation
- **Blog Section**: Placeholder for authenticated blog access

## 📋 Sections

1. **Hero**: Introduction with photo, tagline, and social links
2. **About**: Professional background and experience highlights
3. **Skills**: Technology stack with icons and categories
4. **Experience**: Work history timeline with achievements
5. **Projects**: Featured projects with descriptions and links
6. **Blog**: Private blog section (authentication required)
7. **Contact**: Contact form and professional information

## 🛠️ Tech Stack

### Frontend

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library (ready for implementation)

### Development Tools

- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Turbopack**: Fast bundler for development

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Atomic Design components
│   ├── atoms/            # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Icon.tsx
│   ├── molecules/        # Simple component combinations
│   │   └── Navigation.tsx
│   ├── organisms/        # Complex UI components
│   │   ├── Hero.tsx
│   │   └── Footer.tsx
│   └── templates/        # Page layouts (future use)
├── features/             # Feature-based organization
│   ├── about/
│   ├── skills/
│   ├── experience/
│   ├── projects/
│   ├── blog/
│   └── contact/
├── lib/                  # Utility libraries
│   ├── theme-context.tsx
│   ├── language-context.tsx
│   └── utils.ts
├── hooks/               # Custom React hooks
├── styles/              # Additional styles
├── utils/               # Utility functions
├── i18n/                # Internationalization
└── content/             # Content files
    └── blog/            # MDX blog posts
```

## 🎨 Design System

### Color Palette

- **Primary Blue**: #2563EB, #3B82F6, #93C5FD
- **Neutral Grays**: Full gray scale for text and backgrounds
- **Semantic Colors**: Success (green), warning (yellow), error (red)

### Typography

- **Primary Font**: Geist Sans (system font fallback)
- **Monospace Font**: Geist Mono for code snippets

### Components

- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Hover effects and padding options
- **Badge**: Color-coded tags and labels
- **Icon**: Technology icons using Devicon classes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Internationalization

The portfolio supports English and Spanish languages. The language context manages translations and provides a language toggle in the navigation.

### Adding New Languages

1. Add translations to `src/i18n/config.ts`
2. Update the language context
3. Add language options to the navigation

## 🎭 Dark Mode

Dark mode is implemented using Tailwind CSS classes and a theme context. The theme preference is saved in localStorage and respects the user's system preference.

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: Single column layout, collapsible navigation
- **Tablet**: Two-column layouts where appropriate
- **Desktop**: Full multi-column layouts with enhanced spacing

## 🔧 Customization

### Personal Information

Update the following files with your information:

- `src/app/layout.tsx` - Meta tags and title
- `src/components/organisms/Hero.tsx` - Personal details and social links
- `src/features/about/AboutSection.tsx` - About content
- `src/features/experience/ExperienceSection.tsx` - Work experience
- `src/features/projects/ProjectsSection.tsx` - Project details
- `src/features/contact/ContactSection.tsx` - Contact information

### Styling

- Modify `tailwind.config.ts` for theme customization
- Update component styles in individual component files
- Add custom CSS in `src/app/globals.css`

### Content

- Replace placeholder images with actual project screenshots
- Update project descriptions and links
- Add real blog posts in the `src/content/blog/` directory

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on push

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 📝 Blog Implementation

The blog section is currently a placeholder. To implement a full blog:

1. **Authentication**: Add NextAuth.js for user authentication
2. **Database**: Set up Prisma with PostgreSQL for blog posts
3. **MDX Support**: Configure MDX for rich blog content
4. **Admin Panel**: Create an admin interface for managing posts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: jonathangomez117@outlook.com
- **LinkedIn**: [Jonathan Medina Gomez](https://www.linkedin.com/in/jonathanmedinagomez/)
- **GitHub**: [jonathan1809](https://github.com/jonathan1809)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
