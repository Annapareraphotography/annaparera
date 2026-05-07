'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Heart, Users, Smile } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const servicios = [
  { 
    titulo: 'Familiar', 
    img: 'DSC1721-scaled', 
    icon: Users,
    descripcion: 'Sesiones naturales que capturan la conexión y el amor de vuestra familia'
  },
  { 
    titulo: 'Peques', 
    img: 'DSC02239-2-scaled', 
    icon: Smile,
    descripcion: 'La energía y personalidad única de vuestros pequeños'
  },
  { 
    titulo: 'Embarazo', 
    img: 'DSC04725', 
    icon: Heart,
    descripcion: 'La belleza y emoción de la espera'
  },
  { 
    titulo: 'Newborn', 
    img: 'DSC09256-Edit', 
    icon: Baby,
    descripcion: 'Los primeros días, tan frágiles y perfectos'
  },
];

export default function FamiliaPage() {
  return (
    <main className="min-h-screen bg-[#f5e6db] dark:bg-neutral-950">
      {/* Hero Video */}
      <section className="relative h-screen overflow-hidden">
        <video 
          src="https://res.cloudinary.com/df5oaz5cx/video/upload/v1776101179/Video-Web_u2wcrt.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">
              Maternidad & Familia
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl">
              Documentando los momentos más tiernos de vuestra vida familiar
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {servicios.map((servicio, i) => {
              const Icon = servicio.icon;
              return (
                <motion.div
                  key={servicio.titulo}
                  {...fadeIn}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={`https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80/${servicio.img}.jpg`}
                    alt={`Fotografía ${servicio.titulo} Barcelona`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <Icon className="w-12 h-12 mb-4 text-teal-400" />
                    <h3 className="text-3xl font-serif font-light mb-3">
                      {servicio.titulo}
                    </h3>
                    <p className="text-neutral-200 leading-relaxed">
                      {servicio.descripcion}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-teal-50 via-purple-50 to-blue-50 dark:from-teal-950/20 dark:via-purple-950/20 dark:to-blue-950/20">
        <motion.div {...fadeIn} className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 dark:text-white mb-6">
            Reserva tu sesión
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
            Creemos juntos recuerdos que durarán para siempre
          </p>
          
          <a
            href="/contacto"
            className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contactar ahora
          </a>
        </motion.div>
      </section>
    </main>
  );
}
