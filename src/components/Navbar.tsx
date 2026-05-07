'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/bodas', label: 'Bodas' },
  { href: '/familia', label: 'Familia' },
  { href: '/conoceme', label: 'Conóceme' },
];

const LOGO_POSITIVO = 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_100,w_200/Logo_en_Positivo_1_uium9i.png';
const LOGO_NEGATIVO = 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_100,w_200/Logo_en_Negativo_uapzpr.png';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Determine if page should have transparent header
  const isTransparentPage = pathname === '/' || pathname === '/bodas' || pathname === '/familia';
  const usePositiveLogo = scrolled || !isTransparentPage;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${
          scrolled
            ? 'bg-white/90 dark:bg-neutral-950/90 shadow-sm border-b border-neutral-200/60 dark:border-neutral-800/60'
            : 'bg-[#f5e6db]/80 dark:bg-neutral-950/80 border-b border-[#e5cec2]/40 dark:border-neutral-800/40'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="relative block h-8 transition-opacity duration-300 hover:opacity-80"
            >
              <img
                src={usePositiveLogo ? LOGO_POSITIVO : LOGO_NEGATIVO}
                alt="Anna Parera"
                className="h-full w-auto object-contain"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[13px] uppercase tracking-[0.15em] font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-teal-600 dark:bg-teal-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              ))}

              <div className="mx-3 w-px h-5 bg-neutral-300 dark:bg-neutral-700 transition-colors duration-500" />

              <Link
                href="/contacto"
                className="text-[13px] uppercase tracking-[0.15em] font-medium px-5 py-2.5 rounded-full bg-neutral-900 text-white hover:bg-teal-600 dark:bg-white dark:text-neutral-900 dark:hover:bg-teal-400 transition-all duration-300"
              >
                Contacto
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-neutral-900 dark:text-white transition-colors duration-300"
            >
              <div className="w-6 flex flex-col items-end gap-[5px]">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 7, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="block h-[1.5px] bg-current origin-center"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block h-[1.5px] w-4 bg-current"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -7, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="block h-[1.5px] bg-current"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#f5e6db]/98 dark:bg-neutral-950/98 backdrop-blur-md" />

            <div className="relative flex flex-col items-center justify-center h-full px-8">
              {/* Mobile menu logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-8"
              >
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <img
                    src={LOGO_POSITIVO}
                    alt="Anna Parera"
                    className="h-7 w-auto object-contain"
                  />
                </Link>
              </motion.div>
              <nav className="flex flex-col items-center gap-2">
                {[...navLinks, { href: '/contacto', label: 'Contacto' }].map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-4xl font-serif font-light text-neutral-900 dark:text-white py-3 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile social link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="absolute bottom-12 flex flex-col items-center gap-3"
              >
                <a
                  href="https://www.instagram.com/annaparerafoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  Instagram
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
