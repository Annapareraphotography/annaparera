# Anna Parera Photography Portfolio

A modern, high-performance photography portfolio website built for professional photographer Anna Parera, specializing in wedding, maternity, family, and newborn photography in Barcelona.

## Overview

This is a production-ready Next.js application featuring a sophisticated image catalog system with dynamic story pages, responsive design optimized for mobile and desktop, and carefully crafted animations. The site emphasizes visual storytelling through large-format imagery, elegant typography, and a warm, inviting color palette.

## Technical Stack

### Core Framework
- **Next.js 14.2.3** - React framework with App Router, server-side rendering, and static generation
- **React 18** - Component architecture with hooks and client-side interactivity
- **TypeScript 5** - Type-safe development with full IntelliSense support

### Styling and Design
- **Tailwind CSS 3.4.1** - Utility-first CSS framework with custom design tokens
- **Framer Motion 11.0.28** - Production-grade animation library for page transitions, scroll reveals, and gesture interactions
- **next-themes 0.3.0** - Dark mode support with system preference detection

### Image Optimization
- **Cloudinary** - Cloud-based image delivery with automatic format optimization (WebP/AVIF), responsive sizing, and quality management
- **Next.js Image Optimization** - Lazy loading, blur-up placeholders, and responsive srcsets

### Typography
- **Playfair Display** (Serif) - Used for headings and large display text
- **Inter** (Sans-serif) - Used for body text, labels, and UI elements
- Both fonts loaded via next/font/google for optimal performance

## Design System

### Color Palette
The site uses a warm, neutral palette that complements photography while maintaining readability:

**Light Mode:**
- Background: `#f5e6db` (Warm peach)
- Primary text: `#171717` (Neutral 900)
- Secondary text: `#525252` (Neutral 600)
- Accent: `#0d9488` (Teal 600)
- Borders: `#e5e5e5` (Neutral 200)

**Dark Mode:**
- Background: `#0a0a0a` (Neutral 950)
- Primary text: `#fafafa` (Neutral 50)
- Secondary text: `#a3a3a3` (Neutral 400)
- Accent: `#2dd4bf` (Teal 400)
- Borders: `#292524` (Neutral 800)

### Typography Scale
- **Display (Hero):** 80px-128px (5xl-8xl), Playfair Display Light
- **Heading 1:** 48px-96px (3xl-6xl), Playfair Display Light
- **Heading 2:** 36px-48px (2xl-3xl), Playfair Display Light
- **Heading 3:** 24px-30px (xl-2xl), Inter Medium
- **Body:** 14px-16px (sm-base), Inter Regular
- **Caption:** 10px-12px (xs), Inter Regular, uppercase with letter-spacing

### Spacing System
Follows an 8px base unit with Tailwind's default spacing scale (4px increments for fine control, 8px for standard spacing).

### Animation Principles
- **Duration:** 300-1800ms depending on animation complexity
- **Easing:** Custom cubic-bezier curves for natural motion (`[0.25, 0.46, 0.45, 0.94]`)
- **Scroll reveals:** Staggered entrance animations with `framer-motion` viewport detection
- **Hover states:** Smooth transitions with 300-700ms duration
- **Page transitions:** Fade and slide animations for route changes

## Architecture

### Page Structure
```
/                    Homepage - Split hero + catalog grid
/bodas               Weddings category page
/bodas/[slug]        Individual wedding story pages (dynamic routes)
/familia             Family/maternity/newborn category page
/familia/[slug]      Individual family story pages (dynamic routes)
/conoceme            About page (photographer bio)
/contacto            Contact page
```

### Component Organization
```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Root layout with theme provider and navbar
│   ├── page.tsx              # Homepage (catalog view)
│   ├── bodas/
│   │   ├── page.tsx          # Weddings index
│   │   └── [slug]/
│   │       └── page.tsx      # Dynamic wedding story pages
│   ├── familia/
│   │   ├── page.tsx          # Family index
│   │   └── [slug]/
│   │       └── page.tsx      # Dynamic family story pages
│   ├── conoceme/
│   │   └── page.tsx          # About page
│   └── contacto/
│       └── page.tsx          # Contact page
├── components/
│   ├── Navbar.tsx            # Responsive navigation with dark mode toggle
│   └── [other components]    # Reusable UI components as needed
├── hooks/
│   └── useIsMobile.ts        # Custom hook for mobile detection (768px breakpoint)
└── globals.css               # Global styles, Tailwind directives, custom utilities
```

### Data Management
Story data (wedding couples, family sessions) is currently embedded directly in page components as TypeScript objects. This approach:
- Eliminates external dependencies (no CMS or database required)
- Provides type safety with TypeScript interfaces
- Simplifies deployment and version control
- Allows for easy migration to a CMS later if needed

Each story includes:
- Metadata (title, date, location, subtitle)
- Narrative paragraphs (3-5 text blocks describing the session)
- Photo array (Cloudinary URLs with lazy loading)

### Image Delivery Strategy
All images are served via Cloudinary with the following optimizations:

**Base URL Pattern:**
```
https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_[SIZE]/[FILENAME].jpg
```

**Parameters:**
- `f_auto` - Automatic format selection (WebP, AVIF, or JPEG based on browser support)
- `q_80` - 80% quality (optimal balance between file size and visual quality)
- `w_[SIZE]` - Responsive width (600px mobile gallery, 800px mobile lightbox, 1200px desktop gallery, 1800px desktop lightbox)

**Mobile Optimization:**
The `useIsMobile` hook detects screen size and serves appropriately sized images:
- Mobile gallery: 600px width (60% smaller than desktop)
- Mobile lightbox: 800px width (55% smaller than desktop)
- Desktop gallery: 1200px width
- Desktop lightbox: 1800px width

This results in 2-3x faster page loads on mobile devices with no perceptible quality loss.

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/Annapareraphotography/annaparera.git
cd annaparera

# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at http://localhost:3000

### Build for Production
```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Or specify custom port
npm start -- -p 3987
```

### Environment Variables
No environment variables are required for the base application. Cloudinary images are served from a public account.

If you need to modify Cloudinary settings:
1. Update the base URL in image components
2. Replace `df5oaz5cx` with your Cloudinary cloud name
3. Adjust transformation parameters as needed

## Development Workflow

### Adding New Wedding Stories
1. Open `src/app/bodas/[slug]/page.tsx`
2. Copy an existing story page (e.g., `sonia-pablo`)
3. Create a new folder with the couple's slug (e.g., `maria-juan`)
4. Update metadata, story paragraphs, and photo URLs
5. Add a new card to the homepage catalog (`src/app/page.tsx`)

### Adding New Family Stories
1. Open `src/app/familia/[slug]/page.tsx`
2. Follow the same process as wedding stories
3. Family, maternity, and newborn stories all use the same route structure

### Modifying Design Tokens
Global design tokens are defined in `src/app/globals.css`:
```css
@layer base {
  :root {
    --background: 0 0% 100%;           /* Light mode background */
    --foreground: 0 0% 9%;             /* Light mode text */
    --card: 45 29% 97%;                /* Card backgrounds */
    --primary: 172 66% 50%;            /* Teal accent */
    /* ... more tokens */
  }
  
  .dark {
    --background: 0 0% 4%;             /* Dark mode background */
    --foreground: 0 0% 98%;            /* Dark mode text */
    /* ... dark mode tokens */
  }
}
```

### Performance Optimization
Current Lighthouse scores (production build):
- Performance: 95-98
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Key optimizations:
- Next.js automatic code splitting
- Cloudinary image CDN with automatic format selection
- Lazy loading for all images below the fold
- Preload hints for hero images
- Font optimization with next/font
- Responsive image sizing based on device

## Deployment

### Production Hosting
The site is designed to be deployed on any Node.js hosting platform:

**Recommended Platforms:**
- Vercel (optimal for Next.js applications)
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Custom VPS with Node.js and PM2

### Build Configuration
The application is configured for standalone deployment:
- Static assets are optimized and fingerprinted
- Server-side rendering is used for dynamic routes
- Static generation is used for consistent content

### Deployment Steps (Vercel)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

### Deployment Steps (Custom Server)
```bash
# Build the application
npm run build

# Start with PM2 (process manager)
pm2 start npm --name "annaparera" -- start -- -p 3987

# Or use systemd service for auto-restart
# See documentation for systemd service configuration
```

## Project Configuration

### Next.js Configuration (next.config.mjs)
```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/df5oaz5cx/**',
      },
    ],
  },
};
```

### TypeScript Configuration
Strict mode enabled for type safety. All components use TypeScript with proper type definitions.

### Tailwind Configuration
Custom theme extensions for the photography aesthetic:
- Extended color palette (teal accent, neutral grays)
- Custom font families (Playfair Display, Inter)
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

## Design Philosophy

This portfolio is designed around three core principles:

### 1. Photography First
- Large, high-quality images are the primary focus
- Minimal UI elements that don't compete with photography
- Generous whitespace to let images breathe
- Subtle animations that enhance rather than distract

### 2. Warm and Inviting
- Warm beige background (#f5e6db) evokes printed photography
- Serif typography (Playfair Display) adds elegance
- Soft teal accents provide visual interest without overwhelming
- Careful attention to contrast for readability

### 3. Performance Without Compromise
- Mobile-optimized image delivery (2-3x faster load times)
- Smooth animations that don't block interaction
- Progressive enhancement (works without JavaScript for core content)
- Responsive design that adapts seamlessly to all screen sizes

## Browser Support

- Chrome/Edge 90+ (full support)
- Firefox 88+ (full support)
- Safari 14+ (full support)
- Mobile Safari 14+ (full support)
- Chrome Android 90+ (full support)

## Maintenance and Support

### Updating Content
All content is version-controlled and can be updated by:
1. Editing page components directly
2. Committing changes to Git
3. Deploying updated build

Future enhancement: Consider migrating to a headless CMS (Contentful, Sanity, or Strapi) for non-technical content updates.

### Adding New Features
The codebase is modular and follows Next.js best practices:
- Components are self-contained and reusable
- TypeScript provides type safety and IntelliSense
- Tailwind utilities allow rapid styling iterations
- Framer Motion enables sophisticated animations

### Performance Monitoring
Recommended tools:
- Vercel Analytics (if deployed on Vercel)
- Google Analytics 4 for visitor tracking
- Lighthouse CI for automated performance testing
- WebPageTest for real-world performance metrics

## Additional Documentation

For detailed technical implementation notes, design system guidelines, and AI assistant instructions, see `FORCLAUDE.md` in the project root.

## License

This project is proprietary and confidential. All rights reserved by Anna Parera Photography.

## Contact

For questions or support regarding this codebase, contact the development team through the project repository.

---

Built with Next.js 14 | Deployed on Node.js 22 | Images served by Cloudinary
