'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import Link from 'next/link';

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const story = familiaStories[slug as keyof typeof familiaStories];

  if (!story) {
    return (
      <main className="min-h-screen bg-[#f5e6db] dark:bg-neutral-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Historia no encontrada</h1>
          <Link href="/" className="text-neutral-600 hover:text-neutral-900 underline">
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5e6db] dark:bg-neutral-950">
      {/* Header */}
      <section className="relative py-24 px-4 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Link>

        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-2">
              {story.category}
            </p>
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">
              {story.date} · {story.location}
            </p>
            <h1 className="text-6xl md:text-7xl font-serif font-light text-neutral-900 dark:text-white mb-6">
              {story.title}
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light">
              {story.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl mx-auto">
          {story.story.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {story.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${story.title} ${index + 1}`}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
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

      {/* Lightbox */}
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
