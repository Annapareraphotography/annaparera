'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BodasNetWidget() {
  useEffect(() => {
    // Polyfill for crypto.randomUUID if not available
    if (typeof crypto !== 'undefined' && !crypto.randomUUID) {
      (crypto as any).randomUUID = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      };
    }

    const script = document.createElement('script');
    script.src = 'https://cdn1.bodas.net/js/wp-widget.js?symfnw-ES171-1-20241007-002_www_m_';
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).wpShowReviews === 'function') {
        try {
          (window as any).wpShowReviews(240692, 'red');
        } catch (error) {
          console.warn('Bodas.net widget failed to load:', error);
        }
      }
    };
    script.onerror = () => {
      console.warn('Failed to load Bodas.net widget script');
    };
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#f5e6db] to-[#ede0d5] dark:from-neutral-950 dark:to-neutral-900">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 mb-4">
            Opiniones
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-neutral-800 dark:text-white">
            Lo que dicen de nosotros
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          id="wp-widget-reviews"
          className="max-w-4xl mx-auto"
        >
          <div id="wp-widget-preview" className="text-center text-sm text-neutral-600 dark:text-neutral-400">
            Lee{' '}
            <a
              href="https://www.bodas.net/fotografos/anna-parera--e240692/opiniones"
              rel="nofollow"
              className="text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors underline decoration-1 underline-offset-4"
            >
              nuestras opiniones
            </a>
            {' '}en{' '}
            <a href="https://www.bodas.net" rel="nofollow" className="inline-flex items-center gap-1 hover:opacity-70 transition-opacity">
              <img
                src="https://cdn1.bodas.net/assets/img/logos/gen_logoHeader.svg"
                height="18"
                alt="bodas.net"
                className="inline-block align-middle"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
