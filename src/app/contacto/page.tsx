'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin, ChevronDown } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'annaparera@annaparera.com',
    href: 'mailto:annaparera@annaparera.com',
    description: 'Respondo en 24-48 horas',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+34 697 63 93 57',
    href: 'https://wa.me/34697639357',
    description: 'Respuesta más rápida',
    external: true,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@annaparerafoto',
    href: 'https://www.instagram.com/annaparerafoto',
    description: 'Mira mi trabajo reciente',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Barcelona, España',
    description: 'Disponible para viajar',
  },
];

export default function ContactoPage() {
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
            src="https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,c_fill,g_auto,w_1920,h_1080/DSC06319.jpg"
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
            Hablemos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-9xl font-serif font-light mb-6 tracking-tight"
          >
            Contacto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-white/50 font-light max-w-md mx-auto"
          >
            Me encantaría conocer vuestra historia
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

      {/* Main Content */}
      <section className="py-24 px-4">
        <div className="container max-w-5xl mx-auto">
          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20 space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
              ¿Empezamos?
            </p>
            <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-light max-w-2xl mx-auto">
              Estoy emocionada de conocer vuestra historia. Ya sea una boda, una sesión familiar o la llegada de vuestro bebé, 
              hablemos de cómo crear juntos recuerdos que duren para siempre.
            </p>
            <div className="pt-2 flex justify-center">
              <div className="w-12 h-[1px] bg-teal-600/40 dark:bg-teal-400/40" />
            </div>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-20">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              const Wrapper = method.href ? 'a' : 'div';
              const linkProps = method.href
                ? {
                    href: method.href,
                    ...(method.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                  }
                : {};

              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Wrapper
                    {...linkProps}
                    className={`group flex items-start gap-5 p-7 rounded-sm bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60 transition-all duration-500 ${
                      method.href
                        ? 'hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg cursor-pointer'
                        : ''
                    }`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f5e6db] dark:bg-neutral-800 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-1.5">
                        {method.label}
                      </p>
                      <p className="text-lg text-neutral-900 dark:text-white font-medium truncate">
                        {method.value}
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                        {method.description}
                      </p>
                    </div>
                    {method.href && (
                      <div className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                        <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    )}
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          {/* Two Column: Schedule + CTA */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="p-8 rounded-sm bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-6">
                Horario de atención
              </p>
              <div className="space-y-4">
                {[
                  { day: 'Lunes – Viernes', hours: '10:00 – 18:00' },
                  { day: 'Sábado', hours: 'Con cita previa' },
                  { day: 'Domingo', hours: 'Cerrado' },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">{item.day}</span>
                    <span className="text-neutral-500 dark:text-neutral-400 text-sm">{item.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Para bodas y sesiones de fin de semana, contacta con antelación para confirmar disponibilidad.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative p-8 rounded-sm overflow-hidden flex flex-col justify-center items-center text-center"
            >
              <img
                src="https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_800/DSC00577-1.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 space-y-5">
                <h3 className="text-3xl md:text-4xl font-serif text-white font-light">
                  ¿Lista para reservar?
                </h3>
                <p className="text-white/60 text-sm max-w-xs mx-auto">
                  Cuéntame vuestro proyecto y encontraremos la fecha perfecta
                </p>
                <motion.a
                  href="mailto:annaparera@annaparera.com"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-10 py-3.5 bg-white hover:bg-neutral-100 text-neutral-900 rounded-full text-sm font-medium tracking-wide transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Escribir ahora
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
