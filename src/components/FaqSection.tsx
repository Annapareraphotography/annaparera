'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface Faq {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqs: Faq[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 px-4 bg-[#f5e6db] dark:bg-neutral-950">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-neutral-800 dark:text-white">
            Todo lo que necesitas saber
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="border border-neutral-200/60 dark:border-neutral-800/60 rounded-sm overflow-hidden bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-start justify-between gap-6 p-6 md:p-8 text-left transition-colors duration-300 hover:bg-white/60 dark:hover:bg-neutral-900/60"
              >
                <span className="font-serif text-lg md:text-xl font-light text-neutral-800 dark:text-white leading-relaxed pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex-shrink-0 mt-1"
                >
                  <Plus className="w-5 h-5 text-teal-600 dark:text-teal-400" strokeWidth={1.5} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
