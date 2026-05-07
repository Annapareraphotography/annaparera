'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';

// Section type definitions
type TextPhotoSection = { type: 'text-photo'; text: string[]; image: string };
type PhotoGrid2Section = { type: 'photo-grid-2'; images: string[] };
type PhotoGrid3Section = { type: 'photo-grid-3'; images: string[] };
type PhotoFullSection = { type: 'photo-full'; image: string };
type TextOnlySection = { type: 'text-only'; text: string[] };
type PhotoTextGridSection = { type: 'photo-text-grid'; images: string[]; text: string[] };

type Section = 
  | TextPhotoSection 
  | PhotoGrid2Section 
  | PhotoGrid3Section 
  | PhotoFullSection 
  | TextOnlySection 
  | PhotoTextGridSection;

type FamiliaStory = {
  title: string;
  category: string;
  description: string;
  heroImage: string;
  sections: Section[];
};

const familiaStories: Record<string, FamiliaStory> = {
  'embarazo': {
    title: 'Embarazo',
    category: 'Maternidad',
    description: 'Capturando la belleza y emoción de la espera.',
    heroImage: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,c_fill,g_auto,w_1920,h_1080/DSC09790.jpg',
    sections: [
      {
        type: 'text-photo',
        text: [
          'La maternidad es una etapa de una belleza y emoción incomparables... y sí, también de algún que otro antojo incontrolable y la búsqueda de la postura perfecta para dormir.',
          'Esta propuesta fotográfica se centra en capturar la esencia y la magia de este viaje único de manera natural y auténtica. La intención no es forzar poses, sino permitir que la conexión, el amor y la anticipación de la llegada del nuevo miembro de la familia se reflejen espontáneamente en cada imagen. Se busca crear un ambiente donde vosotros os sintáis cómodos y relajados, como en vuestro propio hogar, facilitando que la narrativa visual fluya sin artificios.',
          'El mejor momento para realizar la sesión de embarazo suele ser entre la semana 28 y 34 de gestación. En este periodo, el vientre ya es visible y bonito, pero vosotras aún os acostumbráis a sentir cómodas y con energía.',
        ],
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09790.jpg',
      },
      {
        type: 'text-only',
        text: [
          'Las sesiones se pueden adaptar al ambiente que mejor resuene con vosotros:',
          'En vuestro hogar: Se aprovecha la luz natural que inunda los espacios de vuestro domicilio, creando un ambiente íntimo y personal. Esto permite documentar la preparación del nido y la calidez de vuestro entorno familiar.',
          'En exteriores: Para quienes deseáis un escenario más abierto y evocador, se pueden realizar sesiones en entornos como la playa, la montaña o cualquier lugar que posea un significado especial para vosotros.',
          'En estudio: Para un estilo más atemporal, minimalista y enfocado en la silueta y las texturas, el estudio ofrece un lienzo controlado que permite resaltar la belleza de la forma y la luz.',
        ],
      },
      {
        type: 'photo-grid-3',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/Diseno-sin-titulo-1.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06227.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07886.jpg',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04407-Enhanced-NR.jpg',
      },
      {
        type: 'text-only',
        text: [
          'Durante la sesión, se reserva un pequeño ratito para realizar fotografías individuales a la futura mamá, capturando su brillo y fortaleza en este momento tan especial. Además, si hay hermanitos o hermanitas, ¡están totalmente invitados a participar! Su interacción con las mamis y el vientre añade un toque de ternura y anticipación inigualable.',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC02869.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09375.jpg',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04671.jpg',
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06606.jpg',
      },
      {
        type: 'text-only',
        text: [
          'Las sesiones de embarazo tienen una duración aproximada de 1 hora, un tiempo óptimo para capturar la esencia de esta etapa sin generar fatiga. Una semana antes de la sesión, se proporciona una presentación con consejos detallados sobre vestuario y un recordatorio para asegurar una buena preparación.',
        ],
      },
    ],
  },
  'newborn': {
    title: 'Newborn',
    category: 'Recién Nacidos',
    description: 'Los primeros días de un tesoro fugaz.',
    heroImage: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,c_fill,g_auto,w_1920,h_1080/DSC09256-Edit.jpg',
    sections: [
      {
        type: 'text-photo',
        text: [
          'Los primeros días de un recién nacido son un tesoro fugaz, repleto de una delicadeza y dulzura únicas.',
          'El enfoque en la fotografía newborn es natural y respetuoso, priorizando la autenticidad de esos primeros gestos, el sueño y las pequeñas interacciones, sin forzar poses incómodas o inseguras para el bebé.',
          'La premisa es que tanto el recién nacido como vosotros os sintáis seguros y en calma, como en vuestro propio hogar, propiciando un espacio de paz donde la belleza y la ternura surjan de manera espontánea.',
          'Para capturar esa etapa tan especial, se recomienda realizar la sesión entre los 7 y 15 días iniciales del nacimiento del bebé. Durante este periodo, suelen dormir más profundamente y mantienen una mayor flexibilidad, lo que facilita esas poses tan tiernas y naturales.',
        ],
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09256-Edit.jpg',
      },
      {
        type: 'text-only',
        text: [
          'Para estas sesiones, especialmente sensibles, se ofrecen las siguientes opciones:',
          'En vuestro hogar: Este es el entorno ideal, ya que el bebé se encuentra en su propio espacio. La luz natural de vuestras estancias, la calidez y familiaridad del ambiente son perfectos para capturar la esencia del recién nacido.',
          'En estudio: Para quienes prefieren un entorno controlado con acceso a atrezzo y una iluminación precisa, el estudio es una alternativa que permite lograr resultados limpios y atemporales.',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05466.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC03462.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'Las sesiones newborn requieren paciencia y flexibilidad, adaptándose completamente al ritmo del bebé (tomas, cambios, momentos de sueño). Por ello, su duración suele ser de 1 hora y 30 minutos aproximadamente. Para garantizar una preparación adecuada, una semana antes de la sesión, se envía una presentación con consejos de vestuario y un recordatorio con todo lo necesario.',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04508.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04290.jpg',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC03486.jpg',
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08040-1.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07908-Edit.jpg',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05805.jpg',
      },
      {
        type: 'text-only',
        text: [
          'Para aquellos que deseéis inmortalizar cada instante desde el principio, se ofrece también la fotografía de parto o de nacimiento. Este servicio íntimo y respetuoso documenta la llegada de vuestro bebé al mundo, capturando esos momentos irrepetibles con la máxima sensibilidad y discreción.',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04412.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04408.jpg',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04242.jpg',
      },
    ],
  },
  'familiar': {
    title: 'Familiar',
    category: 'Familia',
    description: 'Capturando la calidez y conexión familiar.',
    heroImage: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,c_fill,g_auto,w_1920,h_1080/DSC01290.jpg',
    sections: [
      {
        type: 'text-photo',
        text: [
          'En el arte de la fotografía familiar, uno de los objetivos es capturar la calidez y la conexión que existe entre todos los integrantes de la familia. La diversión y la naturalidad prevalecen durante toda la sesión para que no sólo sea el resultado final el objetivo, sino también crear y recordar una divertida experiencia compartida entre todos vosotros!',
          'Las sesiones familiares son ideales en cualquier época del año, pero muchas familias optan por realizarlas en primavera u otoño, cuando los colores naturales del entorno pueden aportar un toque especial. Se recomienda reservar mínimo con un mes de antelación.',
        ],
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01290.jpg',
      },
      {
        type: 'text-only',
        text: [
          'La ubicación de la sesión puede ser en exteriores, en un parque, jardín, playa o incluso en el mismo hogar. También puede ser en el estudio, para un enfoque más íntimo. La elección del lugar se adaptará a la personalidad, preferencias y estilo que queráis.',
        ],
      },
      {
        type: 'photo-grid-3',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC1598.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08631.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01731.jpg',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05791.jpg',
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06319.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05808.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'Por lo general, las sesiones familiares tienen una duración máxima de 1h dependiendo del número de personas que seáis. Este tiempo permite capturar una variedad de poses y momentos naturales, garantizando una experiencia relajada y divertida.',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01649.jpg',
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01524-Enhanced-NR-2.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05569.jpg',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC03595.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC03568.jpg',
        ],
      },
    ],
  },
  'peques': {
    title: 'Peques',
    category: 'Infantil',
    description: 'La magia de cada etapa, sin límite de edad.',
    heroImage: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,c_fill,g_auto,w_1920,h_1080/DSC05821.jpg',
    sections: [
      {
        type: 'text-only',
        text: [
          'Estas sesiones están pensadas para capturar la magia de cada etapa, desde que vuestro bebé se mantiene sentado (alrededor de los 6 meses) hasta que ya son niños mayores. No hay límite de edad: cualquier momento es perfecto para detener el tiempo y guardar un bonito recuerdo de cómo son ahora.',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05821.jpg',
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00770.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00232.jpg',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00931.jpg',
      },
      {
        type: 'photo-text-grid',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05475.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05783.jpg',
        ],
        text: [
          'Para sacarles el máximo partido, si el peque tiene entre 6 meses y 2 años, mi consejo es agendar la sesión por la mañana. Es el momento en el que están más descansados, con la barriguita llena y nos regalan sus mejores sonrisas. Con niños más mayores, la flexibilidad es mayor: buscaremos el momento en que se sientan más activos y felices para capturar su verdadera esencia.',
          'Un detalle importante: si queréis las fotos para una fecha concreta (como su cumpleaños o un regalo especial), recordad que debemos realizar la sesión con al menos tres semanas de antelación para asegurar la entrega a tiempo.',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01852.jpg',
      },
    ],
  },
};

export default function FamiliaStoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedImage, setSelectedImage] = useState<{ url: string; index: number } | null>(null);
  const isMobile = useIsMobile();
  
  const story = familiaStories[slug as keyof typeof familiaStories];

  // Collect all images for lightbox navigation
  const allImages: string[] = [];
  if (story) {
    story.sections.forEach((section) => {
      if (section.type === 'text-photo') {
        allImages.push(section.image);
      } else if (section.type === 'photo-full') {
        allImages.push(section.image);
      } else if (section.type === 'photo-grid-2' || section.type === 'photo-grid-3') {
        allImages.push(...section.images);
      } else if (section.type === 'photo-text-grid') {
        allImages.push(...section.images);
      }
    });
  }
  
  const getGalleryImageUrl = (url: string) => {
    return url.replace('w_1200', isMobile ? 'w_600' : 'w_1200');
  };
  
  const getLightboxImageUrl = (url: string) => {
    return url.replace('w_1200', isMobile ? 'w_800' : 'w_1800');
  };

  const navigate = useCallback((dir: 1 | -1) => {
    if (selectedImage === null) return;
    const next = selectedImage.index + dir;
    if (next >= 0 && next < allImages.length) {
      setSelectedImage({ url: allImages[next], index: next });
    }
  }, [selectedImage, allImages]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedImage, navigate]);

  if (!story) {
    return (
      <main className="min-h-screen bg-[#f5e6db] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Historia no encontrada</h1>
          <Link href="/familia" className="text-neutral-600 hover:text-neutral-900 underline">
            Volver a Familia
          </Link>
        </div>
      </main>
    );
  }

  const handleImageClick = (url: string) => {
    const index = allImages.indexOf(url);
    setSelectedImage({ url, index });
  };

  return (
    <main className="min-h-screen bg-[#f5e6db]">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img
            src={story.heroImage}
            alt={story.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        {/* Back button */}
        <Link
          href="/familia"
          className="absolute top-24 left-6 md:left-10 z-20 flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="uppercase tracking-[0.2em] text-xs">Familia</span>
        </Link>

        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 md:pb-20 px-4 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.25em] text-white/60 mb-6"
          >
            {story.category}
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
        </div>
      </section>

      {/* Sections */}
      <div className="bg-[#f5e6db]">
        {story.sections.map((section, sectionIndex) => {
          // text-photo section
          if (section.type === 'text-photo') {
            return (
              <section key={sectionIndex} className="py-16 md:py-20 px-4">
                <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    {section.text.map((paragraph, i) => (
                      <p key={i} className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="cursor-pointer"
                    onClick={() => handleImageClick(section.image)}
                  >
                    <img
                      src={getGalleryImageUrl(section.image)}
                      alt={story.title}
                      className="w-full h-auto rounded-sm"
                    />
                  </motion.div>
                </div>
              </section>
            );
          }

          // text-only section
          if (section.type === 'text-only') {
            return (
              <section key={sectionIndex} className="py-12 md:py-16 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="container max-w-3xl mx-auto space-y-6"
                >
                  {section.text.map((paragraph, i) => (
                    <p key={i} className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              </section>
            );
          }

          // photo-full section
          if (section.type === 'photo-full') {
            return (
              <section key={sectionIndex} className="px-0 py-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="cursor-pointer"
                  onClick={() => handleImageClick(section.image)}
                >
                  <img
                    src={getGalleryImageUrl(section.image)}
                    alt={story.title}
                    className="w-full h-auto"
                  />
                </motion.div>
              </section>
            );
          }

          // photo-grid-2 section
          if (section.type === 'photo-grid-2') {
            return (
              <section key={sectionIndex} className="px-0 py-1">
                <div className="grid grid-cols-2 gap-1">
                  {section.images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="cursor-pointer"
                      onClick={() => handleImageClick(image)}
                    >
                      <img
                        src={getGalleryImageUrl(image)}
                        alt={`${story.title} ${i + 1}`}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          }

          // photo-grid-3 section
          if (section.type === 'photo-grid-3') {
            return (
              <section key={sectionIndex} className="px-0 py-1">
                <div className="grid grid-cols-3 gap-1">
                  {section.images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="cursor-pointer"
                      onClick={() => handleImageClick(image)}
                    >
                      <img
                        src={getGalleryImageUrl(image)}
                        alt={`${story.title} ${i + 1}`}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          }

          // photo-text-grid section
          if (section.type === 'photo-text-grid') {
            return (
              <section key={sectionIndex} className="px-4 py-1">
                <div className="container max-w-6xl mx-auto grid md:grid-cols-3 gap-1">
                  {section.images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="cursor-pointer"
                      onClick={() => handleImageClick(image)}
                    >
                      <img
                        src={getGalleryImageUrl(image)}
                        alt={`${story.title} ${i + 1}`}
                        className="w-full h-auto rounded-sm"
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col justify-center space-y-4 p-6"
                  >
                    {section.text.map((paragraph, i) => (
                      <p key={i} className="text-base md:text-lg text-neutral-600 leading-relaxed font-light">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                </div>
              </section>
            );
          }

          return null;
        })}
      </div>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#f5e6db] to-[#ede0d5]">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
              ¿Interesado en una sesión?
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-800 mb-6">
              Reserva tu fecha
            </h2>
            <p className="text-lg text-neutral-500 font-light max-w-xl mx-auto mb-10">
              Cada momento es único. Hablemos de cómo capturar el vuestro.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-10 py-4 bg-neutral-900 text-white text-sm uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors duration-300"
            >
              Contactar
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">
              {selectedImage.index + 1} / {allImages.length}
            </div>

            {/* Prev */}
            {selectedImage.index > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next */}
            {selectedImage.index < allImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={selectedImage.index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={getLightboxImageUrl(selectedImage.url)}
              alt={`${story.title} — ${selectedImage.index + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain select-none cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
