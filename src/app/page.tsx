'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// ---------- Split hero services ----------
const services = [
  {
    id: 'bodas',
    title: 'Bodas',
    subtitle: 'Wedding Photography',
    tagline: 'Historias de amor eternas',
    image:
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto/Home-Bodas-1.jpg',
    href: '/bodas',
  },
  {
    id: 'familia',
    title: 'Maternidad y Familia',
    subtitle: 'Maternity & Family',
    tagline: 'Momentos que se quedan para siempre',
    image:
      'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto/Sin-titulo-10-x-10-cm.jpg',
    href: '/familia',
  },
];

// ---------- Catalogue ----------
type Photo = { id: string; href: string; label: string };
type Collection = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  photos: Photo[];
};

const cld = (id: string, w = 900) =>
  `https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_${w}/${id}.jpg`;

const collections: Collection[] = [
  {
    id: 'bodas',
    number: '01',
    title: 'Bodas',
    subtitle: 'Wedding Stories',
    description:
      'Días únicos contados desde la emoción real. Luz natural, gestos auténticos y detalles que perduran.',
    href: '/bodas',
    photos: [
      { id: 'DSC00577', href: '/bodas/silvia-david', label: 'Silvia & David' },
      { id: 'DSC06109', href: '/bodas/evelyn-carlos', label: 'Evelyn & Carlos' },
      { id: 'DSC06819', href: '/bodas/sonia-pablo', label: 'Sonia & Pablo' },
      { id: 'DSC09544', href: '/bodas/silvia-david', label: 'Silvia & David' },
      { id: 'DSC05915', href: '/bodas/sonia-pablo', label: 'Sonia & Pablo' },
      { id: 'DSC05620', href: '/bodas/evelyn-carlos', label: 'Evelyn & Carlos' },
      { id: 'DSC07171', href: '/bodas/sonia-pablo', label: 'Sonia & Pablo' },
      { id: 'DSC00400', href: '/bodas/silvia-david', label: 'Silvia & David' },
      { id: 'DSC05146', href: '/bodas/evelyn-carlos', label: 'Evelyn & Carlos' },
      { id: 'DSC07480', href: '/bodas/sonia-pablo', label: 'Sonia & Pablo' },
      { id: 'DSC01301', href: '/bodas/silvia-david', label: 'Silvia & David' },
      { id: 'DSC06618', href: '/bodas/evelyn-carlos', label: 'Evelyn & Carlos' },
    ],
  },
  {
    id: 'embarazo',
    number: '02',
    title: 'Embarazo',
    subtitle: 'Maternity Sessions',
    description:
      'La belleza de la espera. Sesiones íntimas que celebran el cuerpo, la luz y la nueva vida.',
    href: '/familia',
    photos: [
      { id: 'DSC09790', href: '/familia/embarazo-maria-carlos', label: 'María & Carlos' },
      { id: 'DSC04671', href: '/familia/embarazo-laura', label: 'Laura' },
      { id: 'Diseno-sin-titulo-1', href: '/familia/embarazo-sofia-jorge', label: 'Sofía & Jorge' },
      { id: 'DSC06227', href: '/familia/embarazo-maria-carlos', label: 'María & Carlos' },
      { id: 'DSC07886', href: '/familia/embarazo-maria-carlos', label: 'María & Carlos' },
      { id: 'DSC04407-Enhanced-NR', href: '/familia/embarazo-maria-carlos', label: 'María & Carlos' },
      { id: 'DSC06606', href: '/familia/embarazo-laura', label: 'Laura' },
      { id: 'DSC09375', href: '/familia/embarazo-maria-carlos', label: 'María & Carlos' },
      { id: 'DSC02869', href: '/familia/embarazo-maria-carlos', label: 'María & Carlos' },
    ],
  },
  {
    id: 'familia',
    number: '03',
    title: 'Familia',
    subtitle: 'Family Portraits',
    description:
      'Retratos familiares vivos, sin poses forzadas. Lo que sois, en su mejor versión.',
    href: '/familia',
    photos: [
      { id: 'DSC01290', href: '/familia/familia-gonzalez', label: 'Familia González' },
      { id: 'DSC01649', href: '/familia/familia-martinez', label: 'Familia Martínez' },
      { id: 'DSC03595', href: '/familia/familia-rodriguez', label: 'Familia Rodríguez' },
      { id: 'DSC1598', href: '/familia/familia-gonzalez', label: 'Familia González' },
      { id: 'DSC08631', href: '/familia/familia-gonzalez', label: 'Familia González' },
      { id: 'DSC01731', href: '/familia/familia-gonzalez', label: 'Familia González' },
      { id: 'DSC05791', href: '/familia/familia-gonzalez', label: 'Familia González' },
      { id: 'DSC06319', href: '/familia/familia-gonzalez', label: 'Familia González' },
      { id: 'DSC03568', href: '/familia/familia-rodriguez', label: 'Familia Rodríguez' },
      { id: 'DSC05569', href: '/familia/familia-martinez', label: 'Familia Martínez' },
      { id: 'DSC01524-Enhanced-NR-2', href: '/familia/familia-martinez', label: 'Familia Martínez' },
    ],
  },
  {
    id: 'newborn',
    number: '04',
    title: 'Newborn',
    subtitle: 'Recién Nacidos',
    description:
      'Los primeros días, la piel diminuta, el silencio. Sesiones cálidas y delicadas en casa o estudio.',
    href: '/familia',
    photos: [
      { id: 'DSC09256-Edit', href: '/familia/newborn-emma', label: 'Bebé Emma' },
      { id: 'DSC08040-1', href: '/familia/newborn-lucas', label: 'Bebé Lucas' },
      { id: 'DSC04412', href: '/familia/newborn-olivia', label: 'Bebé Olivia' },
      { id: 'DSC05466', href: '/familia/newborn-emma', label: 'Bebé Emma' },
      { id: 'DSC03462', href: '/familia/newborn-emma', label: 'Bebé Emma' },
      { id: 'DSC04508', href: '/familia/newborn-emma', label: 'Bebé Emma' },
      { id: 'DSC04290', href: '/familia/newborn-emma', label: 'Bebé Emma' },
      { id: 'DSC07908-Edit', href: '/familia/newborn-lucas', label: 'Bebé Lucas' },
      { id: 'DSC04408', href: '/familia/newborn-olivia', label: 'Bebé Olivia' },
      { id: 'DSC04242', href: '/familia/newborn-olivia', label: 'Bebé Olivia' },
    ],
  },
];

// ---------- Hero panel ----------
function ServicePanel({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: index === 0 ? -30 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 + index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group flex-1 min-h-[55vh] md:min-h-screen overflow-hidden bg-neutral-900"
    >
      <Link href={service.href} className="block w-full h-full">
        <motion.img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/40 transition-all duration-700 group-hover:bg-black/25" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#f5e6db] mb-2">
            {service.subtitle}
          </p>
          <h2 className="font-serif font-light text-white leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
            {service.title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/70 font-light max-w-xs">
            {service.tagline}
          </p>
          <div className="mt-10 flex items-center gap-3 text-white/90">
            <span className="text-xs uppercase tracking-[0.3em]">Descubrir</span>
            <span className="block h-[1px] w-10 bg-white/60 transition-all duration-500 group-hover:w-20 group-hover:bg-white" />
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ---------- Catalog plate ----------
function PlateCard({ photo, idx }: { photo: Photo; idx: number }) {
  // Alternate plate aspect ratios for a printed-catalog rhythm
  const aspects = ['aspect-[4/5]', 'aspect-[5/6]', 'aspect-[3/4]', 'aspect-[4/5]'];
  const aspect = aspects[idx % aspects.length];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: (idx % 2) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="break-inside-avoid"
    >
      {/* Plate header — small typographic mark above the image */}
      <div className="flex items-baseline justify-between mb-3 px-1">
        <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-500">
          Pl. {String(idx + 1).padStart(2, '0')}
        </span>
        <span className="hidden md:block h-[1px] flex-1 mx-4 bg-neutral-300/60 dark:bg-neutral-700/60" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
          —
        </span>
      </div>

      <Link
        href={photo.href}
        className={`group relative block overflow-hidden bg-neutral-100 dark:bg-neutral-900 ${aspect}`}
      >
        <img
          src={cld(photo.id, 1800)}
          alt={photo.label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-[1.04]"
        />

        {/* Hover vignette */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-700" />

        {/* Inner border like a printed plate */}
        <div className="absolute inset-3 md:inset-4 border border-white/0 group-hover:border-white/40 transition-colors duration-700 pointer-events-none" />

        {/* Centered caption — fades in on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="text-center px-6">
            <p className="font-serif italic text-white text-2xl md:text-3xl leading-tight">
              {photo.label}
            </p>
            <div className="mt-3 mx-auto h-[1px] w-10 bg-white/70" />
          </div>
        </div>
      </Link>
    </motion.figure>
  );
}

// ---------- Collection section ----------
function CollectionSection({ collection, index }: { collection: Collection; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <section className="relative">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-10 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className={`flex flex-col md:flex-row md:items-end gap-6 md:gap-12 ${
            reverse ? 'md:flex-row-reverse md:text-right' : ''
          }`}
        >
          <div className="flex-1">
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-teal-600 dark:text-teal-400 mb-3">
              {collection.number} &nbsp;—&nbsp; {collection.subtitle}
            </p>
            <h3 className="font-serif font-light text-neutral-900 dark:text-white leading-[1] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
              {collection.title}
            </h3>
          </div>
          <div className="md:max-w-sm">
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
              {collection.description}
            </p>
            <Link
              href={collection.href}
              className="group inline-flex items-center gap-3 mt-5 text-xs uppercase tracking-[0.3em] text-neutral-900 dark:text-white"
            >
              <span>Ver colección</span>
              <span className="block h-[1px] w-8 bg-neutral-400 group-hover:w-14 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-all duration-500" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Catalog plate grid */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 pb-28 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-16 lg:gap-x-24 gap-y-16 md:gap-y-24">
          {collection.photos.map((photo, i) => (
            <PlateCard key={`${photo.id}-${i}`} photo={photo} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Page ----------
export default function CataloguePage() {
  return (
    <main className="relative min-h-screen bg-[#f5e6db] dark:bg-neutral-950">
      {/* Centered title overlay - hidden on mobile to avoid overlapping */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="hidden lg:block absolute top-0 left-0 right-0 z-30 pointer-events-none pt-24 md:pt-28 px-4 text-center"
      >
        <h1 className="font-serif font-light text-white text-3xl sm:text-4xl md:text-5xl tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          Anna Parera
        </h1>
        <p className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/75 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          Fotógrafa de vida
        </p>
      </motion.div>

      {/* Split hero */}
      <section className="relative flex flex-col md:flex-row min-h-screen">
        {services.map((service, i) => (
          <ServicePanel key={service.id} service={service} index={i} />
        ))}
        <div aria-hidden className="hidden md:block absolute inset-y-0 left-1/2 w-[1px] bg-white/15 z-20" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-[10px] uppercase tracking-[0.35em]">Catálogo</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Catalogue intro */}
      <section className="container max-w-4xl mx-auto px-4 pt-24 md:pt-32 pb-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-teal-600 dark:text-teal-400 mb-5"
        >
          Catálogo
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif font-light text-neutral-900 dark:text-white text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]"
        >
          Cada momento, su propia luz
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed"
        >
          Un recorrido por mis colecciones — bodas, embarazo, familia y recién nacidos.
        </motion.p>
      </section>

      {/* Collections */}
      <div className="divide-y divide-neutral-200/60 dark:divide-neutral-800/60">
        {collections.map((c, i) => (
          <CollectionSection key={c.id} collection={c} index={i} />
        ))}
      </div>

      {/* Footer credit strip */}
      <section className="py-16 px-4 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-500">
          Anna Parera · Barcelona
        </p>
      </section>
    </main>
  );
}
