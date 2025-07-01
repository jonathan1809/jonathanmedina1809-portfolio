# 🚀 Jonathan Medina - Personal Portfolio

A modern, responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features a blue color palette, dark mode support, internationalization (English/Spanish), and a feature-based architecture.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-black?style=for-the-badge&logo=framer)

## 🌟 Features

- **🎨 Modern Design**: Clean, professional design with blue color palette
- **🌙 Dark Mode**: Toggle between light and dark themes
- **🌍 Internationalization**: Full English and Spanish support
- **📱 Mobile-First**: Responsive design optimized for all devices
- **⚡ Performance**: Optimized with Next.js 15 and App Router
- **🎭 Animations**: Smooth animations with Framer Motion
- **📝 Blog**: MDX-based blog system
- **📧 Contact Form**: Functional contact form with Resend integration
- **🏗️ Feature-Based Architecture**: Scalable and maintainable code structure
- **🎯 Atomic Design**: Reusable component system

## 🏗️ Architecture Decisions

### Why Feature-Based Architecture?

The project uses a **feature-based architecture** instead of a traditional layer-based approach for several reasons:

1. **Scalability**: Each feature is self-contained and can be developed independently
2. **Maintainability**: Related code (components, hooks, types) is co-located
3. **Team Collaboration**: Multiple developers can work on different features without conflicts
4. **Testing**: Features can be tested in isolation
5. **Code Splitting**: Natural boundaries for code splitting and lazy loading

### Why Atomic Design?

The **Atomic Design** methodology provides:

1. **Reusability**: Components can be reused across the application
2. **Consistency**: Design system ensures visual consistency
3. **Maintainability**: Changes to design system propagate automatically
4. **Scalability**: Easy to add new components following established patterns

### Why TypeScript?

TypeScript provides:

1. **Type Safety**: Catch errors at compile time
2. **Better IDE Support**: Enhanced autocomplete and refactoring
3. **Documentation**: Types serve as living documentation
4. **Refactoring Confidence**: Safe refactoring with type checking

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Atomic Design components
│   ├── atoms/            # Basic building blocks
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Icon.tsx
│   │   └── ThemeToggle.tsx
│   ├── molecules/         # Simple combinations
│   │   └── Navigation.tsx
│   └── organisms/         # Complex components
│       ├── Footer.tsx
│       └── Hero.tsx
├── features/              # Feature-based modules
│   ├── about/
│   │   └── AboutSection.tsx
│   ├── blog/
│   │   └── BlogSection.tsx
│   ├── contact/
│   │   ├── ContactSection.tsx
│   │   ├── useContactForm.ts
│   │   └── index.ts
│   ├── experience/
│   │   ├── ExperienceSection.tsx
│   │   └── useExperiences.ts
│   ├── projects/
│   │   ├── ProjectsSection.tsx
│   │   └── useProjects.ts
│   └── skills/
│       └── SkillsSection.tsx
├── data/                  # Mock data and API functions
│   ├── experience.ts
│   └── projects.ts
├── i18n/                  # Internationalization
│   └── locales/
│       ├── en.json
│       └── es.json
├── lib/                   # Utilities and contexts
│   ├── language-context.tsx
│   ├── theme-context.tsx
│   ├── translations.ts
│   └── utils.ts
├── services/              # External service integrations
│   ├── api.ts
│   ├── contact.ts
│   └── index.ts
└── styles/                # Additional styles
```

## 🛠️ Tech Stack

### Core Technologies

- **Next.js 15**: React framework with App Router
- **TypeScript 5.0**: Type-safe JavaScript
- **Tailwind CSS 4.0**: Utility-first CSS framework
- **Framer Motion 11.0**: Animation library

### Development Tools

- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **pnpm**: Fast, disk space efficient package manager

### External Services

- **Resend**: Email service for contact form
- **Vercel**: Deployment platform

### Configuration Files

- **`.nvmrc`**: Node.js version specification
- **`vercel.json`**: Vercel deployment configuration
- **`.prettierrc`**: Code formatting rules
- **`env.example`**: Environment variables template
- **`.github/workflows/ci.yml`**: GitHub Actions CI/CD pipeline

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 22.0 or higher
- **pnpm**: Version 8.0 or higher

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies with pnpm**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env.local
   ```

   Add your Resend API key:

   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors automatically
pnpm type-check   # Run TypeScript type checking

# Code Quality
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting

# Maintenance
pnpm clean        # Clean build artifacts
pnpm clean:all    # Clean everything including node_modules
pnpm reinstall    # Clean and reinstall dependencies

# Package management
pnpm add <package>    # Add a dependency
pnpm remove <package> # Remove a dependency
pnpm update          # Update all dependencies
```

## 🌍 Internationalization

The portfolio supports both English and Spanish through a custom i18n system:

### Translation Structure

```typescript
// Example translation structure
{
  "nav": {
    "home": "Home",
    "about": "About",
    "experience": "Experience"
  },
  "hero": {
    "title": "Hi, I'm Jonathan Medina",
    "subtitle": "Full Stack Developer"
  }
}
```

### Adding New Languages

1. Create a new locale file in `src/i18n/locales/`
2. Add the language to the language context
3. Update the language switcher component

## 🎨 Customization

### Colors

The portfolio uses a blue color palette defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    900: '#1e3a8a',
  }
}
```

### Components

All components follow Atomic Design principles and can be customized in their respective files:

- **Atoms**: `src/components/atoms/`
- **Molecules**: `src/components/molecules/`
- **Organisms**: `src/components/organisms/`

### Content

Update content in the translation files:

- **English**: `src/i18n/locales/en.json`
- **Spanish**: `src/i18n/locales/es.json`

## 📧 Contact Form Setup

The contact form uses Resend for email delivery:

1. **Sign up for Resend**: [resend.com](https://resend.com)
2. **Get your API key** from the dashboard
3. **Add to environment variables**:
   ```env
   RESEND_API_KEY=re_123456789
   ```
4. **Update recipient email** in `src/app/api/contact/route.ts`

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

3. **Environment Variables**
   Add your environment variables in Vercel dashboard:

   - `RESEND_API_KEY`: Your Resend API key

4. **Deploy**
   - Vercel will automatically deploy on every push to main
   - Preview deployments for pull requests

### Environment Variables for Production

```env
# Required
RESEND_API_KEY=re_your_api_key_here

# Optional
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📊 Performance Optimization

### Built-in Optimizations

- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting by pages
- **Tree Shaking**: Unused code elimination
- **Minification**: Production build optimization

### Best Practices Implemented

- **Lazy Loading**: Components load when needed
- **Memoization**: React.memo for expensive components
- **Bundle Analysis**: Regular bundle size monitoring
- **SEO Optimization**: Meta tags and structured data

## 🧪 Testing

### Manual Testing Checklist

- [ ] Responsive design on all devices
- [ ] Dark/light mode toggle
- [ ] Language switching (EN/ES)
- [ ] Contact form submission
- [ ] Navigation links
- [ ] Blog functionality
- [ ] Performance metrics

### Performance Metrics

- **Lighthouse Score**: 95+ on all categories
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Under 500KB initial load

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Jonathan Medina** is a Full Stack Developer with expertise in:

- **Frontend**: React, Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, Python, Django
- **Databases**: PostgreSQL, MongoDB, Redis
- **Cloud**: AWS, Vercel, Docker
- **Mobile**: React Native, Flutter

### Contact Information

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **LinkedIn**: [linkedin.com/in/jonathanmedina](https://linkedin.com/in/jonathanmedina)
- **GitHub**: [github.com/jonathan1809](https://github.com/jonathan1809)
- **Portfolio**: [your-portfolio-url.com](https://your-portfolio-url.com)

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS approach
- **Framer Motion**: For smooth animations
- **Resend**: For reliable email delivery
- **Vercel**: For seamless deployment

---

⭐ **Star this repository if you found it helpful!**
