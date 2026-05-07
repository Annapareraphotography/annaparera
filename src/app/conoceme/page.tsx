'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function ConocemePage() {
  return (
    <main className="min-h-screen bg-[#f5e6db] dark:bg-neutral-950">
      {/* Header */}
      <section className="relative py-24 px-4 bg-white dark:bg-neutral-950">
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Link>

        <div className="container max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-light text-neutral-700 dark:text-neutral-300 mb-4"
          >
            ¿Quién soy?
          </motion.h1>
        </div>
      </section>

      {/* Mi Esencia */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            {...fadeIn}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-neutral-800 dark:text-neutral-200">
                Mi Esencia
              </h2>
              <div className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4">
                <p>
                  Siempre soñadora, pero con los pies en la tierra, sensible y creativa, empática y paciente. Agradecida y detallista por naturaleza, buscando y creando conexión con las personas, viendo la vida de una manera optimista y disfrutando siempre de las pequeñas y grandes experiencias que nos da la vida.
                </p>
                <p>
                  Cuidadora y buscadora del bienestar interior y el de las personas que me rodean. Fugitiva de los malos rollos y las críticas destructivas, y pasajera del viaje hacia ser una mejor persona cada día.
                </p>
              </div>
            </div>

            <div className="order-first md:order-last">
              <img
                src="https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/1-1.jpg"
                alt="Anna Parera"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* El entorno laboral */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            {...fadeIn}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img
                src="https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04475-2.jpg"
                alt="Anna Parera fotografía"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-neutral-800 dark:text-neutral-200">
                El entorno laboral
              </h2>
              <div className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4">
                <p>
                  Entre mi trabajo a jornada completa en una multinacional y calendarios ajustados, la fotografía se ha convertido en ese rincón de paz que me habla bajito y me recuerda quién soy.
                </p>
                <p>
                  Es un proyecto propio, sembrado con amor desde hace dos años, que voy regando día a día con horas robadas al reloj y mucha ilusión.
                </p>
                <p>
                  Estudié Publicidad y Relaciones Públicas, y a los 21 años viví en Irlanda como au pair. Allí, entre sonrisas infantiles, algún que otro grito y tardes de lluvia, empecé a capturar momentos de los pequeños que cuidaba y de mi entorno, sin saber que, años más tarde, sería la semilla de este camino.
                </p>
                <p>
                  La fotografía me permite escuchar la vida a través de la conexión familiar, el amor, la luz y las miradas. Y aunque no es mi día entero, es la parte del día que me hace sentir más viva.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* El entorno personal */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            {...fadeIn}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-neutral-800 dark:text-neutral-200">
                El entorno personal
              </h2>
              <div className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4">
                <p>
                  Nacida en Barcelona, pero la mirada siempre atenta a nuevos horizontes.
                </p>
                <p>
                  Hace más de una década que comparto vida con mi compañero, con quien he crecido, reído y aprendido a caminar a paso lento y seguro.
                </p>
                <p>
                  Soy amante de los deportes y de probar cosas nuevas, normalmente con habilidad, dedicación y resiliencia.
                </p>
                <p>
                  Viajera de corazón, exploradora incansable... con miedo a los aviones, sí, pero decidida a no dejar que la inseguridad me frene. Cada vuelo es una pequeña gran superación.
                </p>
                <p>
                  Amo los animales desde muy pequeña, y hoy me hace compañía Pingo, una chinchilla encantadora con espíritu tranquilo hasta que llegue el día en que pueda compartir la vida con un deseado perro.
                </p>
                <p>
                  Disfruto de la naturaleza —más de montaña que de playa— y encuentro paz entre árboles, cimas y caminos silenciosos.
                </p>
                <p>
                  Fanática culinaria: ¡Cuanto más extraño el plato, mejor! Pero mi auténtica adicción, la que nunca falla y siempre me hace feliz, son las palomitas bien saladas.
                </p>
              </div>
            </div>

            <div className="order-first md:order-last">
              <img
                src="https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04848-Edit.jpg"
                alt="Anna Parera vida personal"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#f5e6db] to-[#ede0d5] dark:bg-neutral-950">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeIn}
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
    </main>
  );
}
