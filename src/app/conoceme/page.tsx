'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Mail, Phone, Instagram } from 'lucide-react';

const sections = [
  {
    number: '01',
    label: 'Esencia',
    title: 'Mi Esencia',
    image: '1-1',
    imageAlt: 'Anna Parera',
    paragraphs: [
      'Siempre soñadora, pero con los pies en la tierra, sensible y creativa, empática y paciente. Agradecida y detallista por naturaleza, buscando y creando conexión con las personas, viendo la vida de una manera optimista y disfrutando siempre de las pequeñas y grandes experiencias que nos da la vida.',
      'Cuidadora y buscadora del bienestar interior y el de las personas que me rodean. Fugitiva de los malos rollos y las críticas destructivas, y pasajera del viaje hacia ser una mejor persona cada día.',
    ],
    imageFirst: false,
  },
  {
    number: '02',
    label: 'Trabajo',
    title: 'El entorno laboral',
    image: 'DSC04475-2',
    imageAlt: 'Anna Parera fotografía',
    paragraphs: [
      'Entre mi trabajo a jornada completa en una multinacional y calendarios ajustados, la fotografía se ha convertido en ese rincón de paz que me habla bajito y me recuerda quién soy.',
      'Es un proyecto propio, sembrado con amor desde hace dos años, que voy regando día a día con horas robadas al reloj y mucha ilusión.',
      'Estudié Publicidad y Relaciones Públicas, y a los 21 años viví en Irlanda como au pair. Allí, entre sonrisas infantiles, algún que otro grito y tardes de lluvia, empecé a capturar momentos de los pequeños que cuidaba y de mi entorno, sin saber que, años más tarde, sería la semilla de este camino.',
      'La fotografía me permite escuchar la vida a través de la conexión familiar, el amor, la luz y las miradas. Y aunque no es mi día entero, es la parte del día que me hace sentir más viva.',
    ],
    imageFirst: true,
  },
  {
    number: '03',
    label: 'Personal',
    title: 'El entorno personal',
    image: 'DSC04848-Edit',
    imageAlt: 'Anna Parera vida personal',
    paragraphs: [
      'Nacida en Barcelona, pero la mirada siempre atenta a nuevos horizontes. Hace más de una década que comparto vida con mi compañero, con quien he crecido, reído y aprendido a caminar a paso lento y seguro.',
      'Soy amante de los deportes y de probar cosas nuevas, normalmente con habilidad, dedicación y resiliencia.',
      'Viajera de corazón, exploradora incansable... con miedo a los aviones, sí, pero decidida a no dejar que la inseguridad me frene. Cada vuelo es una pequeña gran superación.',
      'Amo los animales desde muy pequeña, y hoy me hace compañía Pingo, una chinchilla encantadora con espíritu tranquilo hasta que llegue el día en que pueda compartir la vida con un deseado perro.',
      'Disfruto de la naturaleza —más de montaña que de playa— y encuentro paz entre árboles, cimas y caminos silenciosos.',
      'Fanática culinaria: ¡Cuanto más extraño el plato, mejor! Pero mi auténtica adicción, la que nunca falla y siempre me hace feliz, son las palomitas bien saladas.',
    ],
    imageFirst: false,
  },
];

export default function ConocemePage() {
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
      <section ref={heroRef} className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-neutral-900">
        <motion.div style={{ scale: imgScale }} className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,c_fill,g_auto,w_1920,h_1080/1-1.jpg"
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#f5e6db] dark:to-neutral-950" />

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
            Sobre mí
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-9xl font-serif font-light mb-6 tracking-tight"
          >
            Conóceme
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-white/50 font-light max-w-md mx-auto"
          >
            La persona detrás de la cámara
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Content Sections */}
      {sections.map((section) => (
        <section key={section.number} className="py-20 md:py-28 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
              section.imageFirst ? '' : 'md:[&>*:first-child]:order-2'
            }`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: section.imageFirst ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
                  <img
                    src={`https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/${section.image}.jpg`}
                    alt={section.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-6"
              >
                <div>
                  <p className="text-xs text-teal-600 dark:text-teal-400 tracking-[0.3em] uppercase mb-3">
                    {section.number} — {section.label}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="w-12 h-[1px] bg-teal-600/40 dark:bg-teal-400/40" />
                <div className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

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
              Creemos juntos recuerdos que durarán para siempre
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
