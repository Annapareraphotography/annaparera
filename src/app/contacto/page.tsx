'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-purple-50 to-blue-50 dark:from-teal-950/20 dark:via-purple-950/20 dark:to-blue-950/20 py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-neutral-900 dark:text-white mb-6">
            Contacto
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Estoy emocionada de conocer vuestra historia. Hablemos de cómo puedo capturar vuestros momentos especiales.
          </p>
        </motion.div>

        <motion.div 
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:annaparera@annaparera.com"
              className="flex items-center gap-4 p-6 rounded-2xl border-2 border-transparent hover:border-teal-600 dark:hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Email</p>
                <p className="text-neutral-900 dark:text-white font-medium">
                  annaparera@annaparera.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/34697639357"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl border-2 border-transparent hover:border-teal-600 dark:hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">WhatsApp</p>
                <p className="text-neutral-900 dark:text-white font-medium">
                  +34 697 63 93 57
                </p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/annaparerafoto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl border-2 border-transparent hover:border-teal-600 dark:hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Instagram className="w-7 h-7 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Instagram</p>
                <p className="text-neutral-900 dark:text-white font-medium">
                  @annaparerafoto
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 rounded-2xl border-2 border-neutral-200 dark:border-neutral-700">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Ubicación</p>
                <p className="text-neutral-900 dark:text-white font-medium">
                  Barcelona, España
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-8">
            <h2 className="text-2xl font-serif font-light text-neutral-900 dark:text-white mb-6 text-center">
              Horario de atención
            </h2>
            <p className="text-center text-neutral-600 dark:text-neutral-400">
              Lunes a Viernes: 10:00 - 18:00<br />
              Sábado: Con cita previa<br />
              Domingo: Cerrado
            </p>
          </div>
        </motion.div>

        <motion.div 
          {...fadeIn}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 italic">
            "Me encantaría conocer vuestra historia y crear juntos recuerdos que duren para siempre"
          </p>
        </motion.div>
      </div>
    </main>
  );
}
