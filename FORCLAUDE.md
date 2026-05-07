# FORCLAUDE.md - Anna Parera Photography Portfolio
## Complete Design System & Codebase Documentation

**Repository:** https://github.com/Annapareraphotography/annaparera  
**Live Site:** http://217.17.230.91:3987/  
**Framework:** Next.js 14.2.3 (App Router)  
**Styling:** Tailwind CSS + Framer Motion  
**Deployment:** Node.js production server

---

## 📐 **Design Philosophy**

### Core Principles
1. **Minimalist Elegance** - Let photography be the hero
2. **Warm & Inviting** - Peach/cream color palette
3. **Premium Feel** - Serif typography, subtle animations
4. **Mobile-First** - Optimized for touch and small screens
5. **Fast Loading** - Responsive images, lazy loading

### Visual Identity
- **Photography Style:** Natural, emotional, authentic moments
- **Target Audience:** Couples planning weddings, expecting parents, families
- **Mood:** Romantic, warm, timeless, professional

---

## 🎨 **Color System**

### Light Mode (Default)
```css
--background: 245 230 219    /* Peach/warm cream #f5e6db */
--foreground: 51 51 51       /* Dark text */
--card: 255 255 255          /* White cards */
--border: 229 206 194        /* Peach border #e5cec2 */
--muted: 235 220 209         /* Light peach #ebe0d1 */
--muted-foreground: 115 115 115  /* Gray text */
```

### Dark Mode
```css
--background: 41 37 36       /* Dark warm gray */
--foreground: 250 250 249    /* Off-white text */
--card: 41 37 36             /* Same as background */
--border: 68 64 60           /* Dark border */
--muted: 68 64 60            /* Muted background */
--muted-foreground: 161 161 170  /* Light gray text */
```

### Accent Colors
- **Teal (Primary CTA):** `bg-teal-600` - Professional, trustworthy (#0d9488)
- **Peach Body Sections:** `bg-[#f5e6db]` - Warm, inviting
- **White Header Sections:** `bg-white` - Clean, elegant
- **Neutral Text:** `text-neutral-900` (dark) / `text-neutral-600` (medium)

### Color Usage Rules
1. **Headers:** Always white background with dark text
2. **Body Sections:** Peach background (#f5e6db)
3. **CTAs:** Teal for primary actions (Contact, Reserva)
4. **Navigation:** Neutral 900 for active state
5. **Overlays:** Black with opacity (bg-black/70 for photo overlays)

---

## 🔤 **Typography System**

### Font Families
```tsx
// layout.tsx
import { Inter } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
```

### Font Usage
- **Sans-serif (Inter):** Body text, UI elements, buttons
- **Serif (Playfair Display):** Headings, hero titles, names

### Type Scale
```css
/* Hero Titles */
.text-6xl sm:text-7xl md:text-9xl font-serif font-light

/* Section Headings */
.text-5xl md:text-7xl font-serif font-light

/* Story Titles */
.text-3xl md:text-5xl font-serif

/* Body Text */
.text-lg md:text-xl text-neutral-600 font-light

/* Small Labels */
.text-xs uppercase tracking-[0.3em] text-teal-600
```

### Typography Rules
1. **Always use `font-light`** for serif headings (elegant, premium)
2. **Body text:** 18-20px (lg-xl) with generous line-height
3. **Uppercase + letter-spacing** for category labels
4. **Never use bold** on serif headings (breaks elegance)

---

## 🖼️ **Image System**

### Cloudinary Integration
**Base URL:** `https://res.cloudinary.com/df5oaz5cx/image/upload/`

### Responsive Image URLs
```tsx
// Mobile Optimization (screens < 768px)
const getGalleryImageUrl = (url: string) => {
  return url.replace('w_1200', isMobile ? 'w_600' : 'w_1200');
};

const getLightboxImageUrl = (url: string) => {
  return url.replace('w_1200', isMobile ? 'w_800' : 'w_1800');
};
```

### Image Transformations
- **Gallery thumbs:** `f_auto,q_80,w_600` (mobile) / `w_1200` (desktop)
- **Lightbox:** `w_800` (mobile) / `w_1800` (desktop)
- **Hero images:** `c_fill,g_auto,w_1920,h_1080`

### Image Loading Strategy
1. **Hero images:** Preload (visible immediately)
2. **Gallery images:** `loading="lazy"` (load as user scrolls)
3. **Lightbox:** Load on-demand (when user clicks)

### Image Guidelines
- **Always use `f_auto`** - Cloudinary auto-formats (WebP/AVIF)
- **Always use `q_80`** - 80% quality (optimal size/quality balance)
- **Use `c_fill,g_auto`** for crops - Smart cropping, preserves faces
- **Never hardcode widths** - Use responsive sizes via useIsMobile hook

---

## 🏗️ **Project Structure**

```
annaparera/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout (fonts, theme)
│   │   ├── page.tsx              # Homepage (catalogue)
│   │   ├── globals.css           # Global styles, CSS variables
│   │   ├── bodas/
│   │   │   ├── page.tsx          # Wedding gallery index
│   │   │   └── [slug]/page.tsx   # Individual wedding story
│   │   ├── familia/
│   │   │   ├── page.tsx          # Family gallery index
│   │   │   └── [slug]/page.tsx   # Individual family story
│   │   ├── conoceme/page.tsx     # About page
│   │   └── contacto/page.tsx     # Contact page
│   ├── components/
│   │   └── Navbar.tsx            # Main navigation (responsive)
│   └── hooks/
│       └── useIsMobile.ts        # Mobile detection hook
├── public/                       # Static assets
│   ├── favicon.ico
│   └── icon.png
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
├── next.config.mjs               # Next.js configuration
└── tsconfig.json                 # TypeScript configuration
```

### Key Files Explained

#### `src/app/layout.tsx`
- Root layout wrapping entire app
- Loads fonts (Inter, Playfair Display)
- Applies `next-themes` for dark mode
- SEO metadata

#### `src/app/page.tsx`
- Homepage catalogue
- Video hero section
- Category filter (Todo, Bodas, Embarazo, Familia, Newborn)
- Story grid with hover effects
- Contact CTA section

#### `src/app/bodas/[slug]/page.tsx`
- Dynamic route for wedding stories
- Data structure: weddingStories object with slug keys
- Hero section with parallax
- Story narrative (4 paragraphs)
- Masonry gallery
- Lightbox with swipe gestures

#### `src/app/familia/[slug]/page.tsx`
- Dynamic route for family/embarazo/newborn stories
- Same structure as bodas
- Shares familiaStories object

#### `src/components/Navbar.tsx`
- Responsive navigation (desktop menu + mobile hamburger)
- Framer Motion animations
- Mobile overlay menu
- Theme-adaptive styling

#### `src/hooks/useIsMobile.ts`
- Custom hook for responsive behavior
- Returns boolean: true if screen < 768px
- Used for image optimization

---

## 🎭 **Animation System (Framer Motion)**

### Philosophy
- **Subtle, not showy** - Animations enhance, don't distract
- **Performance-first** - Optimized for mobile
- **Purposeful motion** - Every animation serves UX

### Common Patterns

#### Fade In on Scroll
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-60px' }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

#### Hover Scale (Photos)
```tsx
<div className="group">
  <img className="transition-transform duration-700 group-hover:scale-[1.03]" />
</div>
```

#### Lightbox Enter/Exit
```tsx
<AnimatePresence>
  {selectedIndex !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        key={selectedIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
      />
    </motion.div>
  )}
</AnimatePresence>
```

#### Swipe Gestures (Lightbox)
```tsx
<motion.img
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.2}
  onDragEnd={(e, { offset }) => {
    if (offset.x > 50) navigatePrev();
    if (offset.x < -50) navigateNext();
  }}
/>
```

### Performance Optimizations
1. **Use `transform` and `opacity`** - GPU-accelerated
2. **`viewport={{ once: true }}`** - Animate only once
3. **Lazy animations** - Only animate visible elements
4. **Reduce motion on mobile** - Consider adding prefersReducedMotion

---

## 📱 **Responsive Design**

### Breakpoints (Tailwind)
```
sm:  640px   (Small tablets)
md:  768px   (Tablets, use as mobile/desktop split)
lg:  1024px  (Laptops)
xl:  1280px  (Large desktops)
2xl: 1536px  (Extra large)
```

### Mobile-First Approach
**Default styles = mobile, add breakpoints for larger screens**

Example:
```tsx
<h1 className="text-6xl md:text-9xl">  {/* 6xl on mobile, 9xl on desktop */}
<div className="h-14 md:h-20">        {/* Smaller navbar on mobile */}
<img className="w-600 md:w-1200" />   {/* Smaller images on mobile */}
```

### Common Responsive Patterns

#### Container Sizing
```tsx
className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

#### Gallery Grid
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
```

#### Masonry (Variable Heights)
```tsx
className="columns-1 md:columns-2 lg:columns-3 gap-4"
```

#### Hero Section Heights
```tsx
className="h-[70vh] md:h-[85vh]"  // Shorter on mobile
```

#### Text Sizing
```tsx
className="text-lg md:text-xl"    // Body text
className="text-5xl md:text-7xl"  // Headings
```

### Mobile-Specific Features
1. **Hamburger menu** (< 768px) - Full-screen overlay
2. **Swipeable filter** - Horizontal scroll with snap
3. **Touch gestures** - Lightbox swipe navigation
4. **Optimized images** - w_600 gallery, w_800 lightbox

---

## 🗂️ **Data Structure**

### Story Object Schema
```tsx
interface Story {
  title: string;           // "Sonia & Pablo"
  date: string;            // "Octubre 2025"
  location: string;        // "Can Tarranc, Blanes"
  description: string;     // Short tagline
  story: string[];         // Array of 4 paragraphs
  images: string[];        // Array of Cloudinary URLs
}
```

### Wedding Stories
```tsx
const weddingStories = {
  'sonia-pablo': { /* Story object */ },
  'evelyn-carlos': { /* Story object */ },
  'silvia-david': { /* Story object */ },
};
```

### Family Stories
```tsx
const familiaStories = {
  // Embarazo
  'embarazo-maria-carlos': { /* Story */ },
  'embarazo-laura': { /* Story */ },
  'embarazo-sofia-jorge': { /* Story */ },
  
  // Familia
  'familia-gonzalez': { /* Story */ },
  'familia-martinez': { /* Story */ },
  'familia-rodriguez': { /* Story */ },
  
  // Newborn
  'newborn-emma': { /* Story */ },
  'newborn-lucas': { /* Story */ },
  'newborn-olivia': { /* Story */ },
};
```

### Homepage Categories
```tsx
const categories = [
  {
    id: 'bodas',
    title: 'Bodas',
    subtitle: 'Wedding Photography',
    stories: [
      { name: 'Silvia & David', slug: 'silvia-david', coverImage: '...' },
      // More stories
    ]
  },
  // More categories
];
```

---

## 🧩 **Component Patterns**

### Story Page Template
```tsx
export default function StoryPage() {
  const isMobile = useIsMobile();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  // Helper functions
  const getGalleryImageUrl = (url: string) => {
    return url.replace('w_1200', isMobile ? 'w_600' : 'w_1200');
  };
  
  return (
    <main>
      {/* Hero with parallax */}
      <section ref={heroRef}>
        <motion.img style={{ scale: heroScale }} />
      </section>
      
      {/* Story narrative */}
      <section>
        {story.story.map(paragraph => (
          <motion.p whileInView={{ opacity: 1 }}>{paragraph}</motion.p>
        ))}
      </section>
      
      {/* Gallery */}
      <section>
        <div className="columns-1 md:columns-3">
          {story.images.map((image, index) => (
            <img 
              src={getGalleryImageUrl(image)} 
              onClick={() => setSelectedIndex(index)} 
            />
          ))}
        </div>
      </section>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div className="fixed inset-0 z-50">
            <motion.img 
              src={getLightboxImageUrl(story.images[selectedIndex])}
              drag="x"
              onDragEnd={handleSwipe}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
```

### Filter Component Pattern
```tsx
<div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x">
  {options.map(option => (
    <button 
      className={`px-5 py-2.5 rounded-full flex-shrink-0 snap-start ${
        selected ? 'bg-neutral-900 text-white' : 'bg-neutral-100'
      }`}
    >
      {option.label}
    </button>
  ))}
</div>
```

### Card Hover Effect
```tsx
<div className="group relative overflow-hidden">
  <img className="transition-transform duration-700 group-hover:scale-110" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70">
    <h3 className="text-white">{title}</h3>
  </div>
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
    {/* Hover overlay */}
  </div>
</div>
```

---

## 🔧 **Key Technologies**

### Core Stack
- **Next.js 14.2.3** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **next-themes** - Dark mode support

### Image Optimization
- **Cloudinary** - Image CDN with transformations
- **useIsMobile hook** - Responsive image loading
- **Lazy loading** - Native browser feature

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Type checking

---

## 🚀 **Build & Deployment**

### Development
```bash
npm install
npm run dev          # http://localhost:3000
```

### Production Build
```bash
npm run build        # Creates .next/ folder
npm start            # Runs production server on port 3000
```

### Custom Port (Production)
```bash
PORT=3987 npm start  # Run on port 3987
```

### Server Management
```bash
# Kill process on port
lsof -ti:3987 | xargs kill -9

# Start in background
nohup npm start > /tmp/anna-server.log 2>&1 &

# Check if running
netstat -tlnp | grep :3987

# Check BUILD_ID
cat .next/BUILD_ID
```

---

## 📝 **Adding New Content**

### Add New Wedding Story

1. **Add to data structure** in `src/app/bodas/[slug]/page.tsx`:
```tsx
const weddingStories = {
  // Existing stories...
  'new-couple': {
    title: 'María & Juan',
    date: 'Noviembre 2025',
    location: 'Masía Can Ametller, Barcelona',
    description: 'Una celebración íntima en el corazón de Cataluña.',
    story: [
      'First paragraph of the story...',
      'Second paragraph...',
      'Third paragraph...',
      'Fourth paragraph...',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/photo1.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/photo2.jpg',
      // More images...
    ],
  },
};
```

2. **Add to homepage** in `src/app/page.tsx`:
```tsx
const categories = [
  {
    id: 'bodas',
    stories: [
      // Existing stories...
      {
        name: 'María & Juan',
        slug: 'new-couple',
        coverImage: 'https://res.cloudinary.com/.../photo1.jpg',
      },
    ],
  },
];
```

3. **Upload images to Cloudinary** - Use consistent naming

4. **Rebuild**:
```bash
npm run build
```

### Add New Family/Embarazo/Newborn Story

Same process, but in `src/app/familia/[slug]/page.tsx` and the familia category in homepage.

---

## 🎨 **Styling Guidelines**

### CSS Class Naming
- Use **descriptive, component-based** names
- Prefer Tailwind utilities over custom CSS
- Use `@layer utilities` for reusable custom styles

### Tailwind Patterns
```tsx
// Container
className="container max-w-7xl mx-auto px-4"

// Card
className="bg-card rounded-sm overflow-hidden"

// Button Primary
className="px-5 py-2.5 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors"

// Button Secondary
className="px-5 py-2.5 bg-neutral-100 text-neutral-600 rounded-full hover:bg-neutral-200 transition-colors"

// Text Heading
className="text-5xl md:text-7xl font-serif font-light text-neutral-900 dark:text-white"

// Text Body
className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"

// Section Spacing
className="py-20 md:py-28 px-4"
```

### Dark Mode Strategy
```tsx
// Always add dark mode variants
className="bg-white dark:bg-neutral-950"
className="text-neutral-900 dark:text-white"
className="border-neutral-200 dark:border-neutral-800"
```

### Custom CSS (globals.css)
- **CSS variables** for colors (allows theme switching)
- **Scrollbar hiding** for clean horizontal scroll
- **No custom classes** unless absolutely necessary

---

## 🐛 **Common Issues & Solutions**

### Issue: Images not loading
**Solution:** Check Cloudinary URL format, ensure `f_auto,q_80,w_XXXX` syntax

### Issue: Animations stuttering on mobile
**Solution:** 
- Reduce number of animated elements
- Use `viewport={{ once: true }}`
- Consider disabling animations on mobile

### Issue: Gallery images too large on mobile
**Solution:** Use `useIsMobile()` hook + `getGalleryImageUrl()` helper

### Issue: Lightbox swipe not working
**Solution:** Ensure `drag="x"`, `dragConstraints`, and `onDragEnd` are set correctly

### Issue: Filter menu cut off on mobile
**Solution:** Use `overflow-x-auto scrollbar-hide snap-x` on container, `flex-shrink-0` on buttons

### Issue: Dark mode colors not working
**Solution:** Check CSS variables in `globals.css`, ensure dark: variants on all color classes

### Issue: Build failing
**Solution:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📋 **Maintenance Checklist**

### Monthly
- [ ] Update Next.js and dependencies (`npm update`)
- [ ] Check for broken Cloudinary images
- [ ] Review site performance (Lighthouse)
- [ ] Test on latest mobile devices

### When Adding Content
- [ ] Upload images to Cloudinary (consistent naming)
- [ ] Add story data to appropriate file
- [ ] Add to homepage categories
- [ ] Write 4-paragraph story narrative
- [ ] Test lightbox navigation
- [ ] Test on mobile (swipe gestures)
- [ ] Rebuild and deploy

### When Modifying Design
- [ ] Check dark mode compatibility
- [ ] Test responsive behavior (375px - 1920px)
- [ ] Verify animation performance on mobile
- [ ] Ensure color contrast (WCAG AA)
- [ ] Test with slow 3G network

---

## 🔐 **Environment & Secrets**

### Required Environment Variables
```env
# None currently - all images on public Cloudinary
```

### Cloudinary Account
- **Account:** df5oaz5cx
- **Base URL:** https://res.cloudinary.com/df5oaz5cx/image/upload/
- **Transformations:** f_auto, q_80, w_XXXX, c_fill, g_auto

---

## 🧪 **Testing**

### Manual Testing Checklist
- [ ] Homepage loads video (desktop) and is responsive
- [ ] Filter menu scrollable on mobile, shows all 5 options
- [ ] All story cards clickable
- [ ] Story pages load with hero, narrative, gallery
- [ ] Lightbox opens on image click
- [ ] Lightbox swipe gestures work (mobile)
- [ ] Lightbox arrow navigation works (desktop)
- [ ] Dark mode toggle works
- [ ] Mobile navigation menu opens/closes
- [ ] Contact page displays correctly
- [ ] All links work (no 404s)

### Performance Testing
```bash
# Check image sizes
curl -s https://res.cloudinary.com/.../photo.jpg | wc -c

# Check page load time
curl -w "@curl-format.txt" -o /dev/null -s http://217.17.230.91:3987/
```

---

## 💡 **Tips for AI Assistants**

### When Making Changes
1. **Always check current code** before modifying
2. **Test on mobile** - most users are mobile
3. **Preserve design consistency** - match existing patterns
4. **Use responsive images** - Never hardcode w_1200
5. **Keep animations subtle** - Elegance over flash

### When Adding Features
1. **Follow existing patterns** - Check similar components first
2. **Mobile-first** - Start with mobile styles, add breakpoints
3. **Performance matters** - Optimize images, lazy load
4. **Dark mode** - Always add dark: variants
5. **Document changes** - Update this file if adding new patterns

### When Debugging
1. **Check BUILD_ID** - Ensure latest code is deployed
2. **Clear cache** - `rm -rf .next` and rebuild
3. **Check browser console** - Look for errors
4. **Test responsive** - Use DevTools mobile view
5. **Verify image URLs** - Check Cloudinary transformations

---

## 📞 **Support & Resources**

### Documentation
- **Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Cloudinary:** https://cloudinary.com/documentation

### This Codebase
- **GitHub:** https://github.com/Annapareraphotography/annaparera
- **Live Site:** http://217.17.230.91:3987/
- **Contact:** annaparera@annaparera.com

---

## 🎯 **Quick Reference**

### File to Edit for...
- **Add wedding story:** `src/app/bodas/[slug]/page.tsx` + homepage
- **Add family story:** `src/app/familia/[slug]/page.tsx` + homepage
- **Change colors:** `src/app/globals.css` (CSS variables)
- **Modify navigation:** `src/components/Navbar.tsx`
- **Update fonts:** `src/app/layout.tsx`
- **Edit contact page:** `src/app/contacto/page.tsx`
- **Edit about page:** `src/app/conoceme/page.tsx`

### Commands
```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Custom port
PORT=3987 npm start

# Kill process
lsof -ti:3987 | xargs kill -9

# Check status
netstat -tlnp | grep :3987
```

---

**Last Updated:** May 7, 2026  
**Version:** 2.0 (Mobile Optimized)  
**Maintained by:** Anna Parera Photography Team
