'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

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

export default function CataloguePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === selectedCategory);

  return (
    <main className="min-h-screen bg-[#f5e6db] dark:bg-neutral-950">
      {/* Minimal Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
        <video 
          src="https://res.cloudinary.com/df5oaz5cx/video/upload/v1776101179/Video-Web_u2wcrt.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white dark:from-neutral-950/80 dark:via-neutral-950/60 dark:to-neutral-950" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-7xl md:text-9xl font-serif font-light text-neutral-900 dark:text-white mb-4 tracking-tight">
            Anna Parera
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-light tracking-wide">
            Photography Portfolio
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-white/90 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { id: 'all', label: 'Todo' },
              { id: 'bodas', label: 'Bodas' },
              { id: 'embarazo', label: 'Embarazo' },
              { id: 'familia', label: 'Familia' },
              { id: 'newborn', label: 'Newborn' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedCategory(filter.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === filter.id
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Grid */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <motion.div layout className="space-y-24">
            <AnimatePresence mode="wait">
              {filteredCategories.map((category, catIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                  className="space-y-8"
                >
                  {/* Category Header */}
                  <div className="flex items-end justify-between border-b border-[#e5cec2] dark:border-neutral-800 pb-4">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 dark:text-white">
                        {category.title}
                      </h2>
                      <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1 tracking-widest uppercase">
                        {category.subtitle}
                      </p>
                    </div>
                    <Link
                      href={category.href}
                      className="group flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      Ver colección completa
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Image Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* All Stories (clickable to individual pages) */}
                    {'stories' in category && category.stories?.map((story, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                        className="group relative aspect-[4/5] overflow-hidden bg-neutral-100 dark:bg-neutral-900"
                      >
                        <Link href={story.href} className="block w-full h-full">
                          <img
                            src={story.image}
                            alt={story.couple}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          
                          {/* Name overlay */}
                          <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-3xl font-serif text-white">{story.couple}</h3>
                          </div>

                          {/* Hover overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                            <div className="text-white text-sm font-medium flex items-center gap-2">
                              Ver historia
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#f5e6db] to-[#ede0d5] dark:bg-neutral-950">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light text-neutral-800 dark:text-white">
              Reserva tu sesión
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Creemos juntos recuerdos que durarán para siempre
            </p>
            <div className="pt-4">
              <a
                href="mailto:annaparera@annaparera.com"
                className="inline-block px-12 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contactar ahora
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 text-sm text-neutral-600 dark:text-neutral-400">
              <a href="mailto:annaparera@annaparera.com" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                annaparera@annaparera.com
              </a>
              <span className="hidden sm:block">·</span>
              <a href="https://wa.me/34697639357" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                +34 697 63 93 57
              </a>
              <span className="hidden sm:block">·</span>
              <a href="https://www.instagram.com/annaparerafoto" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                Instagram
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
