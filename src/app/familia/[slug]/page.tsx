'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';

const familiaStories = {
  // Embarazo stories
  'embarazo-maria-carlos': {
    title: 'María & Carlos',
    date: 'Primavera 2025',
    location: 'Barcelona',
    category: 'Embarazo',
    description: 'Esperando la llegada de su primer bebé con amor y emoción.',
    story: [
      'María y Carlos esperan la llegada de su primer bebé, un momento de vida que querían capturar para siempre. La sesión se realizó en un ambiente natural, aprovechando la luz suave de la tarde.',
      'La conexión entre ellos era evidente en cada momento. Risas, miradas cómplices y esa emoción contenida de estar a punto de convertirse en padres.',
      'Capturamos momentos íntimos y naturales, sin poses forzadas. Solo ellos, su amor y la espera de ese pequeño ser que está por llegar.',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09790.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/Diseno-sin-titulo-1.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06227.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07886.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04407-Enhanced-NR.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC02869.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09375.jpg',
    ],
  },
  'embarazo-laura': {
    title: 'Laura',
    date: 'Otoño 2024',
    location: 'Collserola',
    category: 'Embarazo',
    description: 'Una sesión de maternidad llena de luz y naturalidad.',
    story: [
      'Laura quería una sesión diferente, rodeada de naturaleza. Nos adentramos en Collserola para capturar la belleza de este momento.',
      'La luz del atardecer creó una atmósfera mágica, perfecta para capturar la serenidad y la fuerza de la maternidad.',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04671.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06606.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09790.jpg',
    ],
  },
  'embarazo-sofia-jorge': {
    title: 'Sofía & Jorge',
    date: 'Verano 2025',
    location: 'Estudio Barcelona',
    category: 'Embarazo',
    description: 'Una sesión íntima en estudio, llena de amor y conexión.',
    story: [
      'Sofía y Jorge optaron por una sesión en estudio, buscando un ambiente controlado y cálido para capturar este momento especial.',
      'La sencillez de los fondos y la luz suave permitieron que el protagonismo fuera completamente de ellos y su bebé en camino.',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/Diseno-sin-titulo-1.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06227.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07886.jpg',
    ],
  },
  // Familia stories
  'familia-gonzalez': {
    title: 'Familia González',
    date: 'Primavera 2025',
    location: 'Parque de la Ciutadella',
    category: 'Familia',
    description: 'Una tarde de risas, juegos y amor familiar.',
    story: [
      'La familia González quería capturar un día normal de su vida: juegos, risas y mucho amor. Nos reunimos en el Parque de la Ciutadella para una sesión completamente natural.',
      'Los niños jugaban libremente mientras capturaba esos momentos espontáneos que hacen únicas las fotos familiares: abrazos, cosquillas, y miradas de complicidad.',
      'No hubo poses forzadas, solo una familia disfrutando de su tiempo juntos mientras yo documentaba su historia.',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01290.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC1598.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08631.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01731.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05791.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06319.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05808.jpg',
    ],
  },
  'familia-martinez': {
    title: 'Familia Martínez',
    date: 'Verano 2024',
    location: 'Barcelona',
    category: 'Familia',
    description: 'Momentos cotidianos convertidos en recuerdos eternos.',
    story: [
      'Los Martínez querían capturar la esencia de su familia: la conexión, el amor y esos pequeños momentos que hacen especial el día a día.',
      'Una sesión relajada donde cada momento fue auténtico y lleno de vida.',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01649.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01524-Enhanced-NR-2.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05569.jpg',
    ],
  },
  'familia-rodriguez': {
    title: 'Familia Rodríguez',
    date: 'Otoño 2024',
    location: 'Montjuïc',
    category: 'Familia',
    description: 'Una sesión llena de naturalidad y amor familiar.',
    story: [
      'La familia Rodríguez eligió Montjuïc como escenario para su sesión. Un lugar con vistas espectaculares y mucha tranquilidad.',
      'Capturamos momentos espontáneos mientras paseaban y disfrutaban de la tarde juntos.',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC03595.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC03568.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01290.jpg',
    ],
  },
  // Newborn stories
  'newborn-emma': {
    title: 'Bebé Emma',
    date: 'Invierno 2025',
    location: 'Estudio Barcelona',
    category: 'Newborn',
    description: 'Los primeros días de vida de la pequeña Emma.',
    story: [
      'Emma llegó al estudio con apenas 10 días de vida. Una sesión newborn requiere paciencia, calma y mucho amor.',
      'Capturamos esos detalles que se olvidan tan rápido: sus pequeñas manos, sus expresiones mientras dormía, la conexión con sus padres.',
      'Cada foto es un testimonio de estos primeros días, tan efímeros como preciosos.',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09256-Edit.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05466.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC03462.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04508.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04290.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC03486.jpg',
    ],
  },
  'newborn-lucas': {
    title: 'Bebé Lucas',
    date: 'Primavera 2025',
    location: 'Domicilio familiar',
    category: 'Newborn',
    description: 'Una sesión newborn en casa, llena de calidez y amor.',
    story: [
      'Lucas tenía solo una semana cuando realizamos esta sesión en su hogar. La comodidad de estar en casa permitió que todo fluyera naturalmente.',
      'Capturamos momentos íntimos con sus padres, la luz natural entrando por la ventana, y esos pequeños detalles que hacen única cada sesión newborn.',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08040-1.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07908-Edit.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05805.jpg',
    ],
  },
  'newborn-olivia': {
    title: 'Bebé Olivia',
    date: 'Otoño 2024',
    location: 'Estudio Barcelona',
    category: 'Newborn',
    description: 'Los primeros días de Olivia, capturados con delicadeza.',
    story: [
      'Olivia fue un amor durante toda la sesión. Dormida y tranquila, nos permitió capturar cada detalle de sus primeros días de vida.',
      'Una sesión llena de dulzura, donde cada foto cuenta la historia de una vida que acaba de comenzar.',
    ],
    images: [
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04412.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04408.jpg',
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04242.jpg',
    ],
  },
};

export default function FamiliaStoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  const story = familiaStories[slug as keyof typeof familiaStories];
  
  // Helper to get responsive image URL
  const getGalleryImageUrl = (url: string) => {
    return url.replace('w_1200', isMobile ? 'w_600' : 'w_1200');
  };
  
  const getLightboxImageUrl = (url: string) => {
    return url.replace('w_1200', isMobile ? 'w_800' : 'w_1800');
  };

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
          <Link href="/familia" className="text-neutral-600 hover:text-neutral-900 underline">
            Volver a Familia
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
          href="/familia"
          className="absolute top-24 left-6 md:left-10 z-20 flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="uppercase tracking-[0.2em] text-xs">Familia</span>
        </Link>

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-end pb-16 md:pb-20 px-4 text-white text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4"
          >
            {story.category}
          </motion.p>
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
                  src={getGalleryImageUrl(image)}
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
              ¿Quieres una sesión así?
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-800 dark:text-white mb-6">
              Reserva tu sesión
            </h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light max-w-xl mx-auto mb-10">
              Capturemos juntos esos momentos que queréis recordar siempre.
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
              src={getLightboxImageUrl(story.images[selectedIndex])}
              alt={`${story.title} — ${selectedIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain select-none cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipeThreshold = 50;
                if (offset.x > swipeThreshold && selectedIndex > 0) {
                  navigate(-1);
                } else if (offset.x < -swipeThreshold && selectedIndex < story.images.length - 1) {
                  navigate(1);
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
