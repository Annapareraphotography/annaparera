# Minerlab Portal Design System Analysis

## Overview
Minerlab portal is a **dark-mode-first, high-end crypto mining platform** with clean, modern design.

## Key Design Characteristics

### 1. Color Scheme
**Primary:** Emerald green (`--primary: 160 84% 39%` = emerald-500)
- Used for: Active states, accents, CTAs, live indicators
- Conveys: Growth, success, active status, mining/tech

**Background:**
- Dark mode default: `218 29% 5.5%` (very dark blue-tinted gray)
- Creates high contrast with light text
- Modern, premium feel

**Foreground:** `214.2857 31.8182% 91.3725%` (light gray/white)

**Muted:** `0 0% 12.1569%` (dark gray for secondary elements)

**Accents:**
- Emerald gradients on hover (`from-emerald-500/10`)
- Translucent borders (`border-emerald-500/30`)
- Pulsing green dots for "live" status

### 2. Typography
**Font:** Chakra Petch (tech/gaming aesthetic)
- Weights: 300, 400, 500, 600, 700
- Clean, geometric, slightly futuristic
- Perfect for tech/mining/gaming platforms

**Hierarchy:**
- Hero: Large, bold, centered
- Section headers: Medium weight, uppercase labels
- Body: Readable, good contrast

### 3. Layout Patterns

**Header:**
```tsx
- Sticky top with backdrop blur (backdrop-blur-xl)
- Semi-transparent background (bg-background/90)
- Emerald gradient accent line at top (1px)
- Minimal padding, clean spacing
- Logo + nav + auth section
- Mobile: Sheet drawer with 2-column pool grid
```

**Hero Section:**
```tsx
- Centered content
- Badge → Heading → Description → CTAs pattern
- Minimal, focused
- No heavy graphics, content-first
```

**Stat Cards:**
```tsx
- Grid layout (2 cols on mobile, 4 on desktop)
- Icon + label + animated counter + suffix
- Border, rounded, hover effects
- Intersection Observer for scroll-triggered counting
```

**Feature Cards:**
```tsx
- Rounded-xl borders
- Hover: border color change + shadow
- Icon in muted container
- Title + description
- Subtle transitions
```

### 4. Component Patterns

**Badges:**
```tsx
<Badge variant="outline" className="text-emerald-500 border-emerald-500/30">
  <Icon className="size-3" />
  Text
</Badge>
```
- Outline style
- Emerald color scheme
- Icon + text combo
- Gap spacing

**Buttons:**
```tsx
// Primary
<Button size="lg">Action</Button>

// Secondary
<Button variant="outline" size="lg">Action</Button>
```
- Generous padding (size="lg")
- Icons with proper spacing
- Hover states

**Dropdown Menus:**
```tsx
// Rich, detailed dropdowns
- Header section with stats
- 2-column grid for items
- Each item: icon + name + description
- Gradients on hover (per-item gradients!)
- Active state highlighting
- Footer with "view all" link
```

**Cards:**
```tsx
className="rounded-xl border bg-card p-6 hover:border-foreground/30 hover:shadow-md transition-all"
```
- Rounded-xl (12px radius)
- Border that changes on hover
- Background using semantic color
- Shadow on hover
- Smooth transitions

### 5. Visual Effects

**Backdrop Blur:**
```css
bg-background/90 backdrop-blur-xl
```
- Used on header
- Creates glassmorphism effect
- Premium feel

**Gradients:**
```tsx
// Accent line
<div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

// Card hover backgrounds
className="bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent"
```

**Animations:**
```tsx
// Counting numbers (useCountUp hook)
- Intersection Observer triggered
- Smooth easing
- Custom duration

// Pulsing status dots
<span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />

// Hover transitions
className="transition-all duration-200"
```

**Shadows:**
```css
--shadow-md: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 2px 4px -1px hsl(0 0% 0% / 0.17)
```
- Subtle, not aggressive
- Multi-layer shadows
- Consistent across components

### 6. Spacing System
- Consistent gap-* usage (gap-2, gap-3, gap-4)
- Generous padding (p-4, p-6)
- Section spacing: py-12 md:py-24 (mobile → desktop)
- Container max-width: max-w-7xl

### 7. Mobile Responsive
**Header:**
- Desktop: Horizontal nav
- Mobile: Sheet drawer from right
- 2-column pool grid in mobile menu
- Compact spacing

**Stats:**
- 2 columns on mobile
- 4 columns on desktop
- Smaller text sizes on mobile

**Content:**
- Full-width on mobile with padding
- Centered containers on desktop

### 8. Design Philosophy
1. **Content-first:** No distracting backgrounds, clean layout
2. **High contrast:** Dark bg, light text, emerald accents
3. **Subtle animations:** Smooth, not flashy
4. **Semantic colors:** Uses HSL CSS variables for theming
5. **Consistency:** Same patterns repeated across components
6. **Performance:** Minimal JS, CSS-driven effects
7. **Accessibility:** Proper contrast, focus states

### 9. Key Innovations
**Auth UI Flash Prevention:**
```html
<!-- Inline script before body renders -->
<script>
  try{if(localStorage.getItem('access_token'))document.documentElement.dataset.authed='1'}catch(e){}
</script>

<!-- CSS hides wrong state immediately -->
html:not([data-authed]) [data-auth-show="authed"] { display: none !important; }
html[data-authed] [data-auth-show="anon"] { display: none !important; }
```
No auth UI flash on page load!

**Dropdown Menu Design:**
- 2-column grid for visual scanning
- Per-item gradients (each pool has unique gradient)
- Live status indicators
- Rich metadata (description, symbol, active status)
- Footer "view all" link

**Stat Cards with Intersection Observer:**
- Only count when visible (performance)
- Smooth easing function
- Custom formatters (e.g., "4.6B it/s")

## How to Apply to Shabaky

### Color Mapping
| Minerlab | Shabaky |
|----------|---------|
| Emerald green (#10B981) | Yellow/gold (#F59E0B) |
| Dark blue-gray bg | Keep dark or use lighter variant |
| High contrast text | Same approach |

### Components to Rebuild
1. **Header** - Use same sticky blur pattern, yellow accent line
2. **Hero** - Badge → Heading → Description → CTAs
3. **Stats** - Same grid + counting animation
4. **Features** - Same card pattern with yellow theme
5. **Pricing** - Adapt card pattern
6. **FAQ** - Use same accordion patterns

### Visual Effects to Apply
1. Backdrop blur on header ✓
2. Gradient accent lines (yellow) ✓
3. Counting animations on stats ✓
4. Pulsing status dots (yellow) ✓
5. Hover gradients (yellow variants) ✓
6. Smooth transitions ✓

### Typography
- **Consider:** Chakra Petch for Shabaky tech feel
- **Or:** Inter/Outfit for cleaner business feel
- **Arabic:** Cairo or Tajawal (good Arabic support)

### Layout Structure
```
Header (sticky, blur, yellow accent)
↓
Hero (badge, h1, description, CTAs)
↓
Stats (4-col grid, counting animation)
↓
Features (3-col grid, hover effects)
↓
Testimonials (scroll area, cards)
↓
Pricing (3-col grid, highlight best)
↓
FAQ (accordion)
↓
CTA (yellow gradient background)
↓
Footer
```

## Implementation Strategy

### Phase 1: Setup
1. Install missing dependencies (framer-motion, react-countup)
2. Copy Minerlab globals.css theme variables (adapt colors)
3. Update tailwind.config to match Minerlab patterns
4. Set up dark mode provider

### Phase 2: Core Components
1. Rebuild header with Minerlab patterns
2. Create stat card component with counting
3. Create feature card component
4. Create pricing card component

### Phase 3: Pages
1. Rebuild home page hero
2. Add stats section
3. Rebuild features section
4. Add testimonials
5. Rebuild pricing
6. Add FAQ

### Phase 4: Polish
1. Add hover effects
2. Add animations
3. Mobile responsive testing
4. Performance optimization

## Dependencies to Install
```bash
npm install framer-motion react-countup react-intersection-observer
```

## Next Steps
1. ✅ Analyze Minerlab design
2. ⏳ Install dependencies
3. ⏳ Create Shabaky theme (yellow-based)
4. ⏳ Rebuild header
5. ⏳ Rebuild home page sections
6. ⏳ Test and polish
