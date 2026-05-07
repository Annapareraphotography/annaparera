'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

const categories = [
  {
    id: 'bodas',
    title: 'Bodas',
    subtitle: 'Wedding Photography',
    stories: [
      {
        couple: 'Silvia & David',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/DSC00577.jpg',
        href: '/bodas/silvia-david',
      },
      {
        couple: 'Evelyn & Carlos',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/DSC06109.jpg',
        href: '/bodas/evelyn-carlos',
      },
      {
        couple: 'Sonia & Pablo',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/DSC06819.jpg',
        href: '/bodas/sonia-pablo',
      },
    ],
    href: '/bodas',
  },
  {
    id: 'embarazo',
    title: 'Embarazo',
    subtitle: 'Maternity Sessions',
    stories: [
      {
        couple: 'María & Carlos',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/DSC09790.jpg',
        href: '/familia/embarazo-maria-carlos',
      },
      {
        couple: 'Laura',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/DSC04671.jpg',
        href: '/familia/embarazo-laura',
      },
      {
        couple: 'Sofía & Jorge',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/Diseno-sin-titulo-1.jpg',
        href: '/familia/embarazo-sofia-jorge',
      },
    ],
    href: '/familia',
  },
  {
    id: 'familia',
    title: 'Familia',
    subtitle: 'Family Portraits',
    stories: [
      {
        couple: 'Familia González',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/DSC01290.jpg',
        href: '/familia/familia-gonzalez',
      },
      {
        couple: 'Familia Martínez',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/DSC01649.jpg',
        href: '/familia/familia-martinez',
      },
      {
        couple: 'Familia Rodríguez',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/DSC03595.jpg',
        href: '/familia/familia-rodriguez',
      },
    ],
    href: '/familia',
  },
  {
    id: 'newborn',
    title: 'Newborn',
    subtitle: 'Recién Nacidos',
    stories: [
      {
        couple: 'Bebé Emma',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/DSC09256-Edit.jpg',
        href: '/familia/newborn-emma',
      },
      {
        couple: 'Bebé Lucas',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/DSC08040-1.jpg',
        href: '/familia/newborn-lucas',
      },
      {
        couple: 'Bebé Olivia',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/DSC04412.jpg',
        href: '/familia/newborn-olivia',
      },
    ],
    href: '/familia',
  },
];

// Explicit grid placements for each card position
// Even categories: featured LEFT (card 0 big, cards 1+2 stacked right)
// Odd categories: featured RIGHT (cards 0+1 stacked left, card 2 big)
function getGridPlacement(catIndex: number, cardIndex: number): string {
  const isEven = catIndex % 2 === 0;
  if (isEven) {
    // Featured left layout
    if (cardIndex === 0) return 'md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3';
    if (cardIndex === 1) return 'md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2';
    return 'md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3';
  } else {
    // Featured right layout
    if (cardIndex === 0) return 'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2';
    if (cardIndex === 1) return 'md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3';
    return 'md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3';
  }
}

function StoryCard({ story, index, layoutIndex }: { story: { couple: string; image: string; href: string }; index: number; layoutIndex: number }) {
  const isFeatured = layoutIndex % 2 === 0 ? index === 0 : index === 2;
  const placement = getGridPlacement(layoutIndex, index);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-sm ${placement} ${
        isFeatured ? 'aspect-[3/4] md:aspect-auto' : 'aspect-[4/5]'
      }`}
    >
      <Link href={story.href} className="block w-full h-full">
        <motion.img
          src={story.image}
          alt={story.couple}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        
        {/* Gradient overlay - subtle by default, stronger on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent transition-all duration-500 group-hover:from-black/80 group-hover:via-black/30" />
        
        {/* Name overlay with slide-up animation on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-2 transition-colors duration-500 group-hover:text-white/80">
            {isFeatured ? 'Destacado' : 'Ver historia'}
          </p>
          <h3 className={`font-serif text-white leading-tight ${
            isFeatured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'
          }`}>
            {story.couple}
          </h3>
          
          {/* Animated line accent */}
          <div className="mt-3 h-[1px] bg-white/40 w-0 group-hover:w-16 transition-all duration-700 ease-out" />
        </div>

        {/* Corner arrow indicator */}
        <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/0 group-hover:bg-white/20 transition-all duration-500 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CataloguePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

  const filterOptions = [
    { id: 'all', label: 'Todo', count: categories.reduce((sum, c) => sum + c.stories.length, 0) },
    { id: 'bodas', label: 'Bodas', count: categories.find(c => c.id === 'bodas')?.stories.length || 0 },
    { id: 'embarazo', label: 'Embarazo', count: categories.find(c => c.id === 'embarazo')?.stories.length || 0 },
    { id: 'familia', label: 'Familia', count: categories.find(c => c.id === 'familia')?.stories.length || 0 },
    { id: 'newborn', label: 'Newborn', count: categories.find(c => c.id === 'newborn')?.stories.length || 0 },
  ];

  return (
    <main className="min-h-screen bg-[#f5e6db] dark:bg-neutral-950">
      {/* Immersive Hero */}
      <section ref={heroRef} className="relative h-[75vh] md:h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        <motion.div style={{ scale: videoScale }} className="absolute inset-0">
          <video 
            src="https://res.cloudinary.com/df5oaz5cx/video/upload/v1776101179/Video-Web_u2wcrt.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#f5e6db] dark:to-neutral-950" />
        
        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 text-center px-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base uppercase tracking-[0.35em] text-white/70 mb-6"
          >
            Fotografía con alma · Barcelona
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-9xl font-serif font-light text-white mb-6 tracking-tight"
          >
            Anna Parera
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-white/60 font-light max-w-md mx-auto"
          >
            Bodas · Familia · Embarazo · Newborn
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Descubrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50">
        <div className="container max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-wrap gap-2 justify-center">
            {filterOptions.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setSelectedCategory(filter.id)}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === filter.id
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md'
                    : 'bg-neutral-100 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-200'
                }`}
              >
                {filter.label}
                <span className={`ml-1.5 text-[10px] transition-colors duration-300 ${
                  selectedCategory === filter.id
                    ? 'text-white/60 dark:text-neutral-500'
                    : 'text-neutral-400 dark:text-neutral-600'
                }`}>
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Grid */}
      <section className="py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="space-y-32">
            <AnimatePresence mode="wait">
              {filteredCategories.map((category, catIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-10"
                >
                  {/* Category Header */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-end justify-between"
                  >
                    <div>
                      <p className="text-xs text-teal-600 dark:text-teal-400 tracking-[0.3em] uppercase mb-2">
                        {String(catIndex + 1).padStart(2, '0')} — {category.subtitle}
                      </p>
                      <h2 className="text-5xl md:text-7xl font-serif font-light text-neutral-900 dark:text-white">
                        {category.title}
                      </h2>
                    </div>
                    <Link
                      href={category.href}
                      className="group flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors pb-2"
                    >
                      <span className="hidden sm:inline">Ver colección</span>
                      <span className="w-8 h-[1px] bg-neutral-300 group-hover:w-12 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-all duration-500" />
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>

                  {/* Image Grid - Asymmetric layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4">
                    {category.stories.map((story, imgIndex) => (
                      <StoryCard
                        key={imgIndex}
                        story={story}
                        index={imgIndex}
                        layoutIndex={catIndex}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5e6db] via-[#ede0d5] to-[#e5d5c8] dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
              ¿Empezamos?
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-neutral-800 dark:text-white leading-tight">
              Reserva tu sesión
            </h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Creemos juntos recuerdos que durarán para siempre. Cada historia merece ser contada con autenticidad.
            </p>
            <div className="pt-2">
              <motion.a
                href="mailto:annaparera@annaparera.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-12 py-4 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 rounded-full text-sm font-medium tracking-wide transition-colors duration-300"
              >
                Contactar ahora
              </motion.a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4 text-sm text-neutral-500 dark:text-neutral-400">
              <a href="mailto:annaparera@annaparera.com" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                annaparera@annaparera.com
              </a>
              <span className="hidden sm:block text-neutral-300 dark:text-neutral-700">·</span>
              <a href="https://wa.me/34697639357" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                +34 697 63 93 57
              </a>
              <span className="hidden sm:block text-neutral-300 dark:text-neutral-700">·</span>
              <a href="https://www.instagram.com/annaparerafoto" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                @annaparerafoto
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
