import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Anna Parera | Fotógrafa de Bodas y Maternidad en Barcelona',
  description: 'Fotógrafa profesional de bodas, maternidad, newborn y familia en Barcelona. Capturando momentos auténticos y emotivos.',
  keywords: ['fotógrafa Barcelona', 'bodas Barcelona', 'fotografía maternidad', 'newborn Barcelona', 'fotografía familiar'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex items-center justify-between h-20">
                <a href="/" className="text-2xl font-serif font-light hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  Anna Parera
                </a>
                <div className="flex items-center gap-6">
                  <a href="/bodas" className="text-sm hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    Bodas
                  </a>
                  <a href="/familia" className="text-sm hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    Familia
                  </a>
                  <a href="/conoceme" className="text-sm hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    Conóceme
                  </a>
                  <a href="/contacto" className="text-sm px-4 py-2 bg-teal-600 text-white hover:bg-teal-500 rounded-full transition-colors">
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="pt-20">
            {children}
          </div>
          <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 px-4">
            <div className="container max-w-7xl mx-auto text-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                © {new Date().getFullYear()} Anna Parera. Todos los derechos reservados.
              </p>
              <div className="flex justify-center gap-6">
                <a href="https://www.instagram.com/annaparerafoto" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-teal-600 dark:text-neutral-400 dark:hover:text-teal-400 transition-colors">
                  Instagram
                </a>
                <a href="/politica-de-privacidad" className="text-neutral-600 hover:text-teal-600 dark:text-neutral-400 dark:hover:text-teal-400 transition-colors">
                  Privacidad
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
