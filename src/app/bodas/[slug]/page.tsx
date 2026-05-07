'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';

// Section type definitions
type TextPhotoSection = { type: 'text-photo'; date: string; location: string; text: string[]; image: string };
type PhotoGrid2Section = { type: 'photo-grid-2'; images: string[] };
type PhotoGrid3Section = { type: 'photo-grid-3'; images: string[] };
type PhotoGrid4Section = { type: 'photo-grid-4'; images: string[] };
type PhotoFullSection = { type: 'photo-full'; image: string };
type TextOnlySection = { type: 'text-only'; text: string[] };
type PhotoTextGridSection = { type: 'photo-text-grid'; images: string[]; text: string[] };
type CustomGridSection = { type: 'custom-grid'; layout: 'l-shape'; images: string[] };

type Section = 
  | TextPhotoSection 
  | PhotoGrid2Section 
  | PhotoGrid3Section 
  | PhotoGrid4Section 
  | PhotoFullSection 
  | TextOnlySection 
  | PhotoTextGridSection
  | CustomGridSection;

type WeddingStory = {
  title: string;
  date: string;
  location: string;
  description: string;
  heroImage: string;
  sections: Section[];
};

const weddingStories: Record<string, WeddingStory> = {
  'silvia-david': {
    title: 'Silvia & David',
    date: 'Septiembre 2025',
    location: 'La Masía d\'Esplugues',
    description: 'Una boda otoñal donde cada detalle contaba una historia de amor auténtico.',
    heroImage: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,c_fill,g_auto,w_1920,h_1080/DSC09544.jpg',
    sections: [
      {
        type: 'text-photo',
        date: 'Septiembre 2025',
        location: 'La Masía d\'Esplugues',
        text: [
          'Dicen que septiembre tiene una luz diferente, un dorado especial que lo envuelve todo. Pero os aseguro que la luz de este día no venía (solo) del sol, sino de ellos. Hay bodas que son pura fiesta y otras que son puro protocolo. La suya fue, sencillamente, pura verdad. Una boda de día, relajada y pensada para disfrutar con los suyos, donde lo importante no eran los tiempos marcados, sino los abrazos apretados.',
          'El escenario elegido fue la Parroquia de Santa Maria Reina en Pedralbes. Un lugar imponente por su arquitectura, pero que se sintió increíblemente íntimo en cuanto Silvia cruzó la puerta.',
          'Si tuviera que definir la ceremonia en una palabra sería: emoción. Nada de posturas forzadas. Aquí hubo nervios de los buenos, voces entrecortadas al leer los votos y, sobre todo, muchas lágrimas (de las de felicidad, claro). Ver a David no pudiendo contener la emoción al verla llegar fue uno de esos momentos que me recuerdan por qué soy fotógrafa de bodas.',
        ],
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09544.jpg',
      },
      {
        type: 'photo-grid-3',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09627.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09746.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09568.jpg',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06632.jpg',
      },
      {
        type: 'text-only',
        text: [
          'Tras el "sí, quiero" y la lluvia de arroz, hicimos un pequeño cambio de guion. Lejos de la improvisación total, Silvia y David tenían claro que querían jugar un poco con la cámara. Me pidieron una dirección de arte más marcada, buscando recrear unas ideas creativas muy concretas que traían en mente.',
          'Confieso que al principio asomó un poco de vergüenza (esa risa nerviosa que no falla), pero fueron los novios más obedientes del mundo. Se dejaron guiar, confiaron ciegamente en mis indicaciones a pesar del corte inicial y esa mezcla de timidez y entrega dio como resultado unas imágenes sencillamente espectaculares.',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00362.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00400.jpg',
        ],
      },
      {
        type: 'photo-grid-3',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00247.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00577.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC00412.jpg',
        ],
      },
      {
        type: 'photo-text-grid',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07099.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07045.jpg',
        ],
        text: [
          'Llegamos a La Masía de Esplugues con ganas de celebrar. Al ser una boda de día, el aperitivo en el exterior fue una gozada. La temperatura era perfecta y se respiraba mucha tranquilidad y buen rollo: cervezas, risas, reencuentros y esa sensación de "estamos en casa".',
          'La comida siguió la misma línea: sencilla pero emotiva. Hubo regalos especiales para los más allegados y, por supuesto, el corte del pastel, que dio el pistoletazo de salida a la parte más gamberra del día.',
        ],
      },
      {
        type: 'photo-grid-4',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01024.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01301.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01079.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01322.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'Y llegó el momento del baile. Aquí voy a ser sincera: olvidad las coreografías de película. Silvia y David le tenían pánico a este momento pero justamente eso fue lo que lo hizo mágico.',
          'Se agarraron el uno al otro como salvavidas, entre risas nerviosas, algún pisotón perdonado al instante y esa vergüenza compartida que solo tienen dos personas que se conocen de verdad. Fue un baile "a su manera": tímido, pero increíblemente tierno y real.',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC01550.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07992.jpg',
        ],
      },
      {
        type: 'photo-grid-4',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08806.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08276.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08653.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC02305.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'Gracias, chicos, por dejarme ser la fotógrafa de vuestra historia y por demostrar que las bodas sencillas, cuando hay amor del bueno, son las más espectaculares.',
        ],
      },
    ],
  },
  'evelyn-carlos': {
    title: 'Evelyn & Carlos',
    date: 'Julio 2023',
    location: 'Mas Llombart',
    description: 'Una boda que vibró con energía y espontaneidad en pleno corazón del verano.',
    heroImage: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,c_fill,g_auto,w_1920,h_1080/DSC06109.jpg',
    sections: [
      {
        type: 'text-only',
        text: [
          'En pleno corazón del verano, Evelyn y Carlos celebraron su boda en Mas Llombart, una finca preciosa rodeada de entornos especiales, perfecta para una ceremonia al aire libre llena de momentos inolvidables. Como fotógrafa de bodas, me apasiona capturar esas bodas que vibran con energía y espontaneidad, y esta fue una de esas donde la conexión con los novios y su gente fue instantánea.',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06109.jpg',
      },
      {
        type: 'text-only',
        text: [
          'Desde el primer momento se notaba que iba a ser un día muy especial. La preparación de la novia tuvo lugar en el mismo Mas Llombart, rodeada de sus amigas más cercanas, risas nerviosas y una emoción contenida que se respiraba en el aire. Evelyn, con una sonrisa que no se borró en ningún momento, se dejó acompañar con calma, mientras los detalles empezaban a cobrar protagonismo: su ramo, los zapatos, las joyas, la mirada de sus amigas y sobretodo su padre al verla vestida… cada instante era puro oro para mi cámara.',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05620.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05347.jpg',
        ],
      },
      {
        type: 'photo-grid-3',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05340-2.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05315-2.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05266.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'Carlos se preparó en su casa, rodeado de sus amigos y familiares más cercanos, en un ambiente distendido y familiar. Lo acompañamos para captar esos momentos íntimos y naturales que muchas veces se pierden: concentración para abrocharse los gemelos, nervios en el momento de ajustar el ramito de flores de su solapa y un último vistazo al reloj antes de salir rumbo al lugar de la ceremonia.',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05054.jpg',
      },
      {
        type: 'photo-grid-3',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05094.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05146.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC04963.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'Uno de los grandes protagonistas de la boda fue sin duda su perro, que tuvo la misión más tierna del día: llevar los anillos. En un momento absolutamente emotivo y original, el perro caminó hacia la pareja en mitad de la ceremonia, entre sonrisas y lágrimas de los invitados. Son esos momentos únicos los que hacen que un reportaje de boda sea irrepetible.',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06003.jpg',
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06033.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05668.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'Durante la ceremonia, además, se vivió uno de los momentos más emotivos de toda la jornada: el lanzamiento de globos de helio en recuerdo de los seres queridos que ya no están. Fue un homenaje precioso, íntimo, que unió a todos en un instante de silencio y memoria compartida.',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05792.jpg',
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06024.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05936.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'Después de tantas emociones, Evelyn y Carlos se tomaron un ratito solo para ellos. Un momento de calma, de mirarse sin prisas, de respirar juntos antes de seguir celebrando. Fue de esos instantes que no se planean, pero se quedan grabados para siempre.',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06157.jpg',
      },
      {
        type: 'text-only',
        text: [
          'Ya en la cena y la fiesta, la alegría fue protagonista absoluta. Mucha gente joven, con ganas de celebrar, de bailar y de disfrutar hasta el último minuto. Música, brindis, carcajadas y abrazos por doquier.',
        ],
      },
      {
        type: 'photo-full',
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06618.jpg',
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07035.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07183.jpg',
        ],
      },
    ],
  },
  'sonia-pablo': {
    title: 'Sonia & Pablo',
    date: 'Octubre 2025',
    location: 'Can Tarranc, Blanes',
    description: 'Una celebración de la familia en mayúsculas, donde el amor se multiplica por tres.',
    heroImage: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,c_fill,g_auto,w_1920,h_1080/DSC06819.jpg',
    sections: [
      {
        type: 'text-photo',
        date: 'Octubre 2025',
        location: 'Can Tarranc, Blanes',
        text: [
          'Hay bodas que giran en torno a la pareja y otras, como la de Sonia y Pablo, que son una celebración de la familia en mayúsculas. Casarse en octubre tiene un encanto particular, pero hacerlo acompañados de su pequeño redefinió por completo la energía del día.',
          'El escenario elegido fue Can Tarranc, en Blanes, un espacio que el equipo de Grandalla Events preparó con mimo para acoger una jornada que prometía ser larga, intensa y, sobre todo, muy divertida. Se respiraba desde el inicio un ambiente relajado, donde los protocolos dejaban paso a la naturalidad de una familia celebrando el amor.',
        ],
        image: 'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06819.jpg',
      },
      {
        type: 'photo-grid-4',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC05915.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06421.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06041.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06176.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'Antes de que todo comenzara, cada uno se preparó en una de las habitaciones de la masía, con emoción y tranquilidad a la vez y rodeado de sus seres más allegados. Y aquí es imposible no hacer una pausa para admirar el entorno: Can Tarranc brilló por una atención al detalle espectacular.',
          'La ceremonia tuvo lugar en el exterior, aprovechando el verde del césped para enmarcar el momento. Lejos de los rituales clásicos, Sonia y Pablo optaron por algo mucho más personal: una ceremonia de la arena diferente. Llenaron una "pecera" de arena fina que guardaba en su interior una fotografía suya, enterrando simbólicamente ese instante como si de una cápsula del tiempo se tratara.',
          'Fue un acto cargado de significado. La emoción de los novios era evidente, con lágrimas difíciles de contener y la presencia constante de su hijo, convirtiendo el "sí, quiero" en un momento de unión familiar absoluta.',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06616.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC06816.jpg',
        ],
      },
      {
        type: 'custom-grid',
        layout: 'l-shape',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07053.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07081.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07171.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'La sesión de pareja fue breve, aprovechando diferentes rincones de la finca de manera ágil. Sin embargo, esa falta de tiempo no restó intensidad. Al contrario, las imágenes capturaron la conexión real y la complicidad de dos personas que, entre el ajetreo del día, encontraron su pequeño oasis de calma y emoción.',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07480.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07354.jpg',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/JGZ7476.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07387.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'Mientras caía la tarde y la luz natural daba paso al atardecer, el aperitivo en el exterior trajo la primera gran sorpresa. La sangre andaluza de la familia salió a relucir de la forma más espontánea y espectacular.',
          'Un baile de sevillanas improvisado, pero perfectamente coordinado, tomó el protagonismo. El suelo vibraba literalmente con los taconazos, contagiando una energía y una fuerza que dejó a todos los presentes fascinados. Fue el preludio perfecto para una noche que prometía ritmo.',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07718.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07923.jpg',
        ],
      },
      {
        type: 'photo-grid-3',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07771.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/JGZ7902.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC07639.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'La celebración continuó con esa misma energía rompedora, uniendo cena y fiesta en un torbellino de diversión. Huyeron de protocolos sustituyendo el pastel nupcial por una piñata y agilizando los regalos con una divertida rifa. Diversión y desmadre asegurado para todas las edades.',
        ],
      },
      {
        type: 'photo-grid-3',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08503.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08622.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08710.jpg',
        ],
      },
      {
        type: 'photo-grid-2',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08822.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC08858.jpg',
        ],
      },
      {
        type: 'photo-grid-3',
        images: [
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/JGZ9421.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09052.jpg',
          'https://res.cloudinary.com/df5oaz5cx/image/upload/f_auto,q_80,w_1200/DSC09277.jpg',
        ],
      },
      {
        type: 'text-only',
        text: [
          'Sonia, Pablo (y peque), gracias por montar este "sarao" tan auténtico y por dejarnos ser testigos de vuestra gran familia por un día.',
          '¡Que el ritmo no pare nunca!',
        ],
      },
    ],
  },
};

export default function WeddingStoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedImage, setSelectedImage] = useState<{ url: string; index: number } | null>(null);
  const isMobile = useIsMobile();
  
  const story = weddingStories[slug as keyof typeof weddingStories];

  // Collect all images for lightbox navigation
  const allImages: string[] = [];
  if (story) {
    story.sections.forEach((section) => {
      if (section.type === 'text-photo') {
        allImages.push(section.image);
      } else if (section.type === 'photo-full') {
        allImages.push(section.image);
      } else if (section.type === 'photo-grid-2' || section.type === 'photo-grid-3' || section.type === 'photo-grid-4') {
        allImages.push(...section.images);
      } else if (section.type === 'photo-text-grid') {
        allImages.push(...section.images);
      } else if (section.type === 'custom-grid') {
        allImages.push(...section.images);
      }
    });
  }
  
  const getGalleryImageUrl = (url: string) => {
    return url.replace('w_1200', isMobile ? 'w_600' : 'w_1200');
  };
  
  const getLightboxImageUrl = (url: string) => {
    return url.replace('w_1200', isMobile ? 'w_800' : 'w_1800');
  };

  const navigate = useCallback((dir: 1 | -1) => {
    if (selectedImage === null) return;
    const next = selectedImage.index + dir;
    if (next >= 0 && next < allImages.length) {
      setSelectedImage({ url: allImages[next], index: next });
    }
  }, [selectedImage, allImages]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedImage, navigate]);

  if (!story) {
    return (
      <main className="min-h-screen bg-[#f5e6db] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Historia no encontrada</h1>
          <Link href="/bodas" className="text-neutral-600 hover:text-neutral-900 underline">
            Volver a Bodas
          </Link>
        </div>
      </main>
    );
  }

  const handleImageClick = (url: string) => {
    const index = allImages.indexOf(url);
    setSelectedImage({ url, index });
  };

  return (
    <main className="min-h-screen bg-[#f5e6db]">
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img
            src={story.heroImage}
            alt={story.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        {/* Back button */}
        <Link
          href="/bodas"
          className="absolute top-24 left-6 md:left-10 z-20 flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="uppercase tracking-[0.2em] text-xs">Bodas</span>
        </Link>

        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 md:pb-20 px-4 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-white/60 mb-6"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              {story.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              {story.location}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.95]"
          >
            {story.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-5 text-lg md:text-xl text-white/70 font-light max-w-xl"
          >
            {story.description}
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <div className="bg-[#f5e6db]">
        {story.sections.map((section, sectionIndex) => {
          // text-photo section
          if (section.type === 'text-photo') {
            return (
              <section key={sectionIndex} className="py-16 md:py-20 px-4">
                <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                      {section.date} · {section.location}
                    </div>
                    {section.text.map((paragraph, i) => (
                      <p key={i} className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="cursor-pointer"
                    onClick={() => handleImageClick(section.image)}
                  >
                    <img
                      src={getGalleryImageUrl(section.image)}
                      alt={story.title}
                      className="w-full h-auto rounded-sm"
                    />
                  </motion.div>
                </div>
              </section>
            );
          }

          // text-only section
          if (section.type === 'text-only') {
            return (
              <section key={sectionIndex} className="py-12 md:py-16 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="container max-w-3xl mx-auto space-y-6"
                >
                  {section.text.map((paragraph, i) => (
                    <p key={i} className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              </section>
            );
          }

          // photo-full section
          if (section.type === 'photo-full') {
            return (
              <section key={sectionIndex} className="px-0 py-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="cursor-pointer"
                  onClick={() => handleImageClick(section.image)}
                >
                  <img
                    src={getGalleryImageUrl(section.image)}
                    alt={story.title}
                    className="w-full h-auto"
                  />
                </motion.div>
              </section>
            );
          }

          // photo-grid-2 section
          if (section.type === 'photo-grid-2') {
            return (
              <section key={sectionIndex} className="px-0 py-1">
                <div className="grid grid-cols-2 gap-1">
                  {section.images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="cursor-pointer"
                      onClick={() => handleImageClick(image)}
                    >
                      <img
                        src={getGalleryImageUrl(image)}
                        alt={`${story.title} ${i + 1}`}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          }

          // photo-grid-3 section
          if (section.type === 'photo-grid-3') {
            return (
              <section key={sectionIndex} className="px-0 py-1">
                <div className="grid grid-cols-3 gap-1">
                  {section.images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="cursor-pointer"
                      onClick={() => handleImageClick(image)}
                    >
                      <img
                        src={getGalleryImageUrl(image)}
                        alt={`${story.title} ${i + 1}`}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          }

          // photo-grid-4 section
          if (section.type === 'photo-grid-4') {
            return (
              <section key={sectionIndex} className="px-0 py-1">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                  {section.images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="cursor-pointer"
                      onClick={() => handleImageClick(image)}
                    >
                      <img
                        src={getGalleryImageUrl(image)}
                        alt={`${story.title} ${i + 1}`}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          }

          // photo-text-grid section
          if (section.type === 'photo-text-grid') {
            return (
              <section key={sectionIndex} className="px-4 py-1">
                <div className="container max-w-6xl mx-auto grid md:grid-cols-3 gap-1">
                  {section.images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="cursor-pointer"
                      onClick={() => handleImageClick(image)}
                    >
                      <img
                        src={getGalleryImageUrl(image)}
                        alt={`${story.title} ${i + 1}`}
                        className="w-full h-auto rounded-sm"
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col justify-center space-y-4 p-6"
                  >
                    {section.text.map((paragraph, i) => (
                      <p key={i} className="text-base md:text-lg text-neutral-600 leading-relaxed font-light">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                </div>
              </section>
            );
          }

          // custom-grid section (L-shape for Sonia & Pablo)
          if (section.type === 'custom-grid' && section.layout === 'l-shape') {
            return (
              <section key={sectionIndex} className="px-0 py-1">
                <div className="grid grid-cols-2 gap-1">
                  <div className="flex flex-col gap-1">
                    {section.images.slice(0, 2).map((image, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="cursor-pointer"
                        onClick={() => handleImageClick(image)}
                      >
                        <img
                          src={getGalleryImageUrl(image)}
                          alt={`${story.title} ${i + 1}`}
                          className="w-full h-auto"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="cursor-pointer"
                    onClick={() => handleImageClick(section.images[2])}
                  >
                    <img
                      src={getGalleryImageUrl(section.images[2])}
                      alt={`${story.title} 3`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </section>
            );
          }

          return null;
        })}
      </div>

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#f5e6db] to-[#ede0d5]">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4">
              ¿Preparando vuestra boda?
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-neutral-800 mb-6">
              Reserva tu fecha
            </h2>
            <p className="text-lg text-neutral-500 font-light max-w-xl mx-auto mb-10">
              Cada historia de amor es única. Hablemos de cómo contar la vuestra.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-10 py-4 bg-neutral-900 text-white text-sm uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors duration-300"
            >
              Contactar
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">
              {selectedImage.index + 1} / {allImages.length}
            </div>

            {/* Prev */}
            {selectedImage.index > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next */}
            {selectedImage.index < allImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={selectedImage.index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={getLightboxImageUrl(selectedImage.url)}
              alt={`${story.title} — ${selectedImage.index + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain select-none cursor-grab active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
