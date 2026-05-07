'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

const weddingStories = {
  'sonia-pablo': {
    title: 'Sonia & Pablo',
    date: 'Octubre 2025',
    location: 'Can Tarranc, Blanes',
    description: 'Una celebración de la familia en mayúsculas, donde el amor se multiplica por tres.',
    story: [
      'Hay bodas que giran en torno a la pareja y otras, como la de Sonia y Pablo, que son una celebración de la familia en mayúsculas. Casarse en octubre tiene un encanto particular, pero hacerlo acompañados de su pequeño redefinió por completo la energía del día.',
      'El escenario elegido fue Can Tarranc, en Blanes, un espacio que el equipo de Grandalla Events preparó con mimo para acoger una jornada que prometía ser larga, intensa y, sobre todo, muy divertida.',
      'La ceremonia tuvo lugar en el exterior, aprovechando el verde del césped. Lejos de los rituales clásicos, Sonia y Pablo optaron por algo mucho más personal: una ceremonia de la arena diferente. Llenaron una "pecera" de arena fina que guardaba en su interior una fotografía suya, enterrando simbólicamente ese instante como si de una cápsula del tiempo se tratara.',
      'Un baile de sevillanas improvisado tomó el protagonismo durante el aperitivo. El suelo vibraba literalmente con los taconazos, contagiando una energía que dejó a todos fascinados.',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06819.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05915.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06421.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06041.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06176.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06616.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06816.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07053.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07081.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07171.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07480.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07354.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/JGZ7476.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07387.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07718.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07923.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07771.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/JGZ7902.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07639.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08503.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08622.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08710.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08822.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08858.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/JGZ9421.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09052.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09277.jpg',
    ],
  },
  'evelyn-carlos': {
    title: 'Evelyn & Carlos',
    date: 'Julio 2023',
    location: 'Mas Llombart',
    description: 'Una boda que vibró con energía y espontaneidad en pleno corazón del verano.',
    story: [
      'En pleno corazón del verano, Evelyn y Carlos celebraron su boda en Mas Llombart, una finca preciosa rodeada de entornos especiales, perfecta para una ceremonia al aire libre llena de momentos inolvidables.',
      'Desde el primer momento se notaba que iba a ser un día muy especial. La preparación de la novia tuvo lugar en el mismo Mas Llombart, rodeada de sus amigas más cercanas, risas nerviosas y una emoción contenida que se respiraba en el aire.',
      'La ceremonia civil, íntima y emotiva, se celebró en un rincón mágico de la finca. Evelyn y Carlos se prometieron amor eterno bajo un cielo azul intenso, rodeados de sus seres queridos. Fue un momento cargado de emoción, con alguna que otra lágrima de felicidad rodando por las mejillas.',
      'La fiesta fue el broche perfecto para un día inolvidable. La pista de baile no paró en ningún momento, con música que hizo vibrar a jóvenes y mayores por igual.',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06109.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05620.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05347.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05340-2.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05315-2.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05266.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05054.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05094.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05146.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04963.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06003.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06033.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05668.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05792.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06024.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05936.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06157.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06618.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07035.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07183.jpg',
    ],
  },
  'silvia-david': {
    title: 'Silvia & David',
    date: 'Septiembre 2024',
    location: 'La Masía, Esplugues',
    description: 'Una boda otoñal donde cada detalle contaba una historia de amor auténtico.',
    story: [
      'Silvia y David celebraron su boda en La Masía de Esplugues, un lugar que desprende magia y calidez en cada rincón. Septiembre les regaló un día perfecto, con esa luz dorada que tanto me gusta fotografiar.',
      'Los preparativos fueron un momento de complicidad y nervios compartidos. Silvia se dejó mimar por su madre y amigas, mientras David y sus amigos brindaban con champán en otra parte de la masía.',
      'La ceremonia civil fue íntima y profundamente emotiva. Las palabras que se dedicaron el uno al otro hicieron que más de uno tuviera que sacar el pañuelo. Fue uno de esos momentos que te recuerdan por qué amas este trabajo.',
      'El banquete y la fiesta fueron espectaculares. Risas, baile, abrazos sinceros y esa alegría desbordante que solo se vive en las bodas donde el amor se respira en cada esquina.',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09544.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09627.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09746.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09568.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06632.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00362.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00400.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00247.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00577.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00412.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07099.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07045.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01024.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01301.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01079.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01322.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01550.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07992.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08806.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08276.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08653.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC02305.jpg',
    ],
  },
};

export default function WeddingStoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  
  const story = weddingStories[slug as keyof typeof weddingStories];

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const navigate = useCallback((dir: 1 | -1) => {
    if (selectedIndex === null || !story) return;
    const next = selectedIndex + dir;
    if (next >= 0 && next < story.images.length) setSelectedIndex(next);
  }, [selectedIndex, story]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedIndex, navigate]);

  if (!story) {
    return (
      <main className="min-h-screen bg-[#f5e6db] dark:bg-neutral-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Historia no encontrada</h1>
          <Link href="/bodas" className="text-neutral-600 hover:text-neutral-900 underline">
            Volver a Bodas
          </Link>
        </div>
      </main>
    );
  }

  const heroImage = story.images[0];

  return (
    <main className="min-h-screen bg-[#f5e6db] dark:bg-neutral-950">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-neutral-900">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src={heroImage.replace('w_1200', 'c_fill,g_auto,w_1920,h_1080')}
            alt={story.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        {/* Back button */}
        <Link
          href="/bodas"
          className="absolute top-24 left-6 md:left-10 z-20 flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="uppercase tracking-[0.2em] text-xs">Bodas</span>
        </Link>

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-end pb-16 md:pb-20 px-4 text-white text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-white/60 mb-6"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              {story.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              {story.location}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.95]"
          >
            {story.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-5 text-lg md:text-xl text-white/70 font-light max-w-xl"
          >
            {story.description}
          </motion.p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 px-4">
        <div className="container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-12 h-[1px] bg-neutral-400 dark:bg-neutral-600 mx-auto mb-12"
          />
          {story.story.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 last:mb-0 font-light"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 md:pb-28 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-3 md:gap-4">
            {story.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="break-inside-avoid mb-3 md:mb-4 cursor-pointer group relative overflow-hidden rounded-sm"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={image}
                  alt={`${story.title} — ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#f5e6db] to-[#ede0d5] dark:from-neutral-900 dark:to-neutral-950">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-500 mb-4">
              ¿Preparando vuestra boda?
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-800 dark:text-white mb-6">
              Reserva tu fecha
            </h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light max-w-xl mx-auto mb-10">
              Cada historia de amor es única. Hablemos de cómo contar la vuestra.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-10 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm uppercase tracking-[0.2em] hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-300"
            >
              Contactar
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">
              {selectedIndex + 1} / {story.images.length}
            </div>

            {/* Prev */}
            {selectedIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next */}
            {selectedIndex < story.images.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={story.images[selectedIndex].replace('w_1200', 'w_1800')}
              alt={`${story.title} — ${selectedIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain select-none"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
