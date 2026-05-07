'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Mail, Phone, Instagram } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const bodas = [
  { titulo: 'Silvia & David', img: 'DSC00577-1', alt: 'Boda romántica en Barcelona' },
  { titulo: 'Evelyn & Carlos', img: 'DSC06143', alt: 'Celebración de boda emotiva' },
  { titulo: 'Sonia & Pablo', img: 'DSC06819-1', alt: 'Reportaje de boda natural' },
];

export default function BodasPage() {
  return (
    <main className="min-h-screen bg-[#f5e6db] dark:bg-neutral-950">
      {/* Hero Video Section */}
      <section className="relative h-screen overflow-hidden">
        <video 
          src="https://res.cloudinary.com/df5oaz5cx/video/upload/v1776101177/homepage_atlsvc.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-6xl md:text-8xl font-serif font-light mb-4">
              Anna Parera
            </h1>
            <p className="text-2xl md:text-3xl font-light">
              fotógrafa de vida
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-4">
        <div className="container max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-teal-600 dark:text-teal-400" />
            <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
              Más allá de lo auténtico, busco lo brutalmente emocionante. Se trata de documentar la pasión desatada y esa alegría contagiosa que compartís con los vuestros, creando un legado visual que, cada vez que lo miréis, os haga sentir que la música sigue sonando.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {bodas.map((boda, i) => (
              <motion.div
                key={boda.titulo}
                {...fadeIn}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={`https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80/${boda.img}.jpg`}
                  alt={boda.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 left-6 right-6">
                  <h3 className="text-2xl font-serif font-light text-white">
                    {boda.titulo}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-teal-50 via-purple-50 to-blue-50 dark:from-teal-950/20 dark:via-purple-950/20 dark:to-blue-950/20">
        <motion.div {...fadeIn} className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 dark:text-white mb-6">
            ¿Conectamos?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
            Cuéntame sobre vuestro día especial
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:annaparera@annaparera.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              annaparera@annaparera.com
            </a>
            <a
              href="https://wa.me/34697639357"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950 rounded-full font-medium transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              +34 697 63 93 57
            </a>
          </div>

          <div className="mt-8">
            <a
              href="https://www.instagram.com/annaparerafoto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-teal-600 dark:text-neutral-400 dark:hover:text-teal-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @annaparerafoto
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
