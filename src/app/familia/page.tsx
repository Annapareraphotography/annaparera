'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, Mail, Phone, Instagram } from 'lucide-react';

const sections = [
  {
    id: 'embarazo',
    title: 'Embarazo',
    subtitle: 'Maternity Sessions',
    description: 'La belleza y emoción de la espera. Sesiones íntimas que capturan la conexión con la vida que está por llegar.',
    stories: [
      { name: 'María & Carlos', slug: 'embarazo-maria-carlos', img: 'DSC09790', location: 'Barcelona' },
      { name: 'Laura', slug: 'embarazo-laura', img: 'DSC04671', location: 'Collserola' },
      { name: 'Sofía & Jorge', slug: 'embarazo-sofia-jorge', img: 'Diseno-sin-titulo-1', location: 'Estudio Barcelona' },
    ],
  },
  {
    id: 'familia',
    title: 'Familia',
    subtitle: 'Family Portraits',
    description: 'Sesiones naturales que capturan la conexión y el amor de vuestra familia. Sin poses, solo vosotros.',
    stories: [
      { name: 'Familia González', slug: 'familia-gonzalez', img: 'DSC01290', location: 'Parc de la Ciutadella' },
      { name: 'Familia Martínez', slug: 'familia-martinez', img: 'DSC01649', location: 'Barcelona' },
      { name: 'Familia Rodríguez', slug: 'familia-rodriguez', img: 'DSC03595', location: 'Montjuïc' },
    ],
  },
  {
    id: 'newborn',
    title: 'Newborn',
    subtitle: 'Recién Nacidos',
    description: 'Los primeros días, tan frágiles y perfectos. Cada detalle capturado con delicadeza y amor.',
    stories: [
      { name: 'Bebé Emma', slug: 'newborn-emma', img: 'DSC09256-Edit', location: 'Estudio Barcelona' },
      { name: 'Bebé Lucas', slug: 'newborn-lucas', img: 'DSC08040-1', location: 'Domicilio familiar' },
      { name: 'Bebé Olivia', slug: 'newborn-olivia', img: 'DSC04412', location: 'Estudio Barcelona' },
    ],
  },
];

function getGridPlacement(sectionIndex: number, cardIndex: number): string {
  const isEven = sectionIndex % 2 === 0;
  if (isEven) {
    if (cardIndex === 0) return 'md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3';
    if (cardIndex === 1) return 'md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2';
    return 'md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3';
  } else {
    if (cardIndex === 0) return 'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2';
    if (cardIndex === 1) return 'md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3';
    return 'md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3';
  }
}

export default function FamiliaPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <main className="min-h-screen bg-[#f5e6db] dark:bg-neutral-950">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[75vh] md:h-screen overflow-hidden bg-neutral-900">
        <motion.div style={{ scale: imgScale }} className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,c_fill,g_auto,w_1920,h_1080/DSC04725.jpg"
            alt=""
            className="w-full h-full object-cover opacity-60"
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
            Maternidad · Familia · Newborn
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-9xl font-serif font-light mb-6 tracking-tight"
          >
            Familia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-white/50 font-light max-w-md mx-auto"
          >
            Documentando los momentos más tiernos de vuestra vida
          </motion.p>
        </motion.div>

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
              Cada familia tiene su propia magia. Mi objetivo es capturar esos momentos espontáneos, las risas contagiosas, 
              las miradas de complicidad y ese amor que se siente sin necesidad de palabras.
            </p>
            <div className="pt-2 flex justify-center">
              <div className="w-12 h-[1px] bg-teal-600/40 dark:bg-teal-400/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="pb-24 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="space-y-32">
            {sections.map((section, sectionIndex) => (
              <div key={section.id} className="space-y-10">
                {/* Section Header */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
                >
                  <div>
                    <p className="text-xs text-teal-600 dark:text-teal-400 tracking-[0.3em] uppercase mb-2">
                      {String(sectionIndex + 1).padStart(2, '0')} — {section.subtitle}
                    </p>
                    <h2 className="text-5xl md:text-7xl font-serif font-light text-neutral-900 dark:text-white">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-base text-neutral-500 dark:text-neutral-400 max-w-lg font-light">
                      {section.description}
                    </p>
                  </div>
                </motion.div>

                {/* Asymmetric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4">
                  {section.stories.map((story, imgIndex) => {
                    const isFeatured = sectionIndex % 2 === 0 ? imgIndex === 0 : imgIndex === 2;
                    const placement = getGridPlacement(sectionIndex, imgIndex);

                    return (
                      <motion.div
                        key={story.slug}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, delay: imgIndex * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className={`group relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-sm ${placement} ${
                          isFeatured ? 'aspect-[3/4] md:aspect-auto' : 'aspect-[4/5]'
                        }`}
                      >
                        <Link href={`/familia/${story.slug}`} className="block w-full h-full">
                          <img
                            src={`https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/${story.img}.jpg`}
                            alt={story.name}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent transition-all duration-500 group-hover:from-black/80 group-hover:via-black/30" />

                          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-2 transition-colors duration-500 group-hover:text-white/80">
                              {story.location}
                            </p>
                            <h3 className={`font-serif text-white leading-tight ${
                              isFeatured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'
                            }`}>
                              {story.name}
                            </h3>
                            <div className="mt-3 h-[1px] bg-white/40 w-0 group-hover:w-16 transition-all duration-700 ease-out" />
                          </div>

                          <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/0 group-hover:bg-white/20 transition-all duration-500 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
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
              Reserva tu sesión
            </h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Creemos juntos recuerdos que durarán para siempre. Cada familia es única y merece ser capturada con autenticidad.
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
