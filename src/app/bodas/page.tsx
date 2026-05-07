'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Mail, Phone, Instagram } from 'lucide-react';

const bodas = [
  {
    titulo: 'Silvia & David',
    slug: 'silvia-david',
    img: 'DSC00577-1',
    alt: 'Boda romántica en Barcelona',
    date: 'Septiembre 2024',
    location: 'La Masía, Esplugues',
  },
  {
    titulo: 'Evelyn & Carlos',
    slug: 'evelyn-carlos',
    img: 'DSC06143',
    alt: 'Celebración de boda emotiva',
    date: 'Julio 2023',
    location: 'Mas Llombart',
  },
  {
    titulo: 'Sonia & Pablo',
    slug: 'sonia-pablo',
    img: 'DSC06819-1',
    alt: 'Reportaje de boda natural',
    date: 'Octubre 2025',
    location: 'Can Tarranc, Blanes',
  },
];

export default function BodasPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <main className="min-h-screen bg-[#f5e6db] dark:bg-neutral-950">
      {/* Hero Video Section */}
      <section ref={heroRef} className="relative h-[75vh] md:h-screen overflow-hidden bg-neutral-900">
        <motion.div style={{ scale: videoScale }} className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,c_fill,g_auto,w_1920,h_1080/DSC00577-1.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#f5e6db] dark:to-neutral-950" />
        
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base uppercase tracking-[0.35em] text-white/70 mb-6"
          >
            Fotografía de bodas · Barcelona
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-9xl font-serif font-light mb-6 tracking-tight"
          >
            Bodas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-white/50 font-light max-w-md mx-auto"
          >
            Cada historia de amor merece ser contada
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

      {/* Introduction */}
      <section className="py-28 px-4">
        <div className="container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
              Mi enfoque
            </p>
            <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
              Más allá de lo auténtico, busco lo brutalmente emocionante. Se trata de documentar la pasión desatada y esa alegría contagiosa que compartís con los vuestros, creando un legado visual que, cada vez que lo miréis, os haga sentir que la música sigue sonando.
            </p>
            <div className="pt-2 flex justify-center">
              <div className="w-12 h-[1px] bg-teal-600/40 dark:bg-teal-400/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            {bodas.map((boda, i) => (
              <motion.div
                key={boda.slug}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  href={`/bodas/${boda.slug}`}
                  className="group block relative overflow-hidden rounded-sm"
                >
                  <div className={`relative ${i === 0 ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[16/9] md:aspect-[3/1]'}`}>
                    <img
                      src={`https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1400/${boda.img}.jpg`}
                      alt={boda.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/30" />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                      <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-2">
                          {boda.date} · {boda.location}
                        </p>
                        <h3 className="text-3xl md:text-5xl font-serif text-white mb-3">
                          {boda.titulo}
                        </h3>
                        <div className="flex items-center gap-3">
                          <div className="h-[1px] bg-white/40 w-0 group-hover:w-12 transition-all duration-700 ease-out" />
                          <span className="text-xs uppercase tracking-[0.2em] text-white/0 group-hover:text-white/60 transition-all duration-500 delay-200">
                            Ver historia
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Corner arrow */}
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 flex items-center justify-center rounded-full bg-white/0 group-hover:bg-white/20 transition-all duration-500 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
              ¿Conectamos?
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-neutral-800 dark:text-white leading-tight">
              Cuéntame vuestra historia
            </h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Cada boda es única. Me encantaría conocer la vuestra y crear juntos recuerdos que durarán para siempre.
            </p>
            <div className="pt-2">
              <motion.a
                href="mailto:annaparera@annaparera.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-12 py-4 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 rounded-full text-sm font-medium tracking-wide transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                Contactar ahora
              </motion.a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4 text-sm text-neutral-500 dark:text-neutral-400">
              <a href="mailto:annaparera@annaparera.com" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                annaparera@annaparera.com
              </a>
              <span className="hidden sm:block text-neutral-300 dark:text-neutral-700">·</span>
              <a href="https://wa.me/34697639357" className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                +34 697 63 93 57
              </a>
              <span className="hidden sm:block text-neutral-300 dark:text-neutral-700">·</span>
              <a href="https://www.instagram.com/annaparerafoto" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5" />
                @annaparerafoto
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
