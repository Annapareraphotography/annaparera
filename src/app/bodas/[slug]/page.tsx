'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const story = weddingStories[slug as keyof typeof weddingStories];

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
