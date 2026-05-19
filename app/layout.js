import { Cormorant_Garamond, DM_Sans, Jost } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata = {
  title: 'Dekorem | PVC Kaplama',
  description: 'Yüzeylere Karakter, Mekanlara Hayat. Profesyonel PVC yüzey kaplama çözümleri.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${cormorant.variable} ${dmSans.variable} ${jost.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
