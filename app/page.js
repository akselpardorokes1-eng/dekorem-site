import Link from 'next/link';

function DekoremEmblem({ size = 72 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
    >
      {/* Arka yüzey - soluk */}
      <rect
        x="4" y="8" width="32" height="20" rx="2"
        fill="#E8752A" fillOpacity="0.45"
        transform="rotate(-6 20 18)"
      />
      {/* Ön yüzey - tam */}
      <rect
        x="20" y="28" width="32" height="20" rx="2"
        fill="#E8752A"
        transform="rotate(6 36 38)"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Navigasyon ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6">
        <Link href="/" className="flex items-center gap-3 group">
          <DekoremEmblem size={22} />
          <span className="font-jost font-light text-white text-sm tracking-[0.32em] group-hover:opacity-75 transition-opacity">
            dekorem
          </span>
        </Link>
        <div className="flex items-center gap-10">
          <Link
            href="/urunler"
            className="font-sans text-white/55 text-xs tracking-[0.18em] uppercase hover:text-white transition-colors"
          >
            Ürünler
          </Link>
          <Link
            href="/iletisim"
            className="font-sans text-white/55 text-xs tracking-[0.18em] uppercase hover:text-white transition-colors"
          >
            İletişim
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="min-h-screen bg-navy flex flex-col items-center justify-center relative overflow-hidden">

        {/* Arka plan: ince nokta deseni */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Kenar koyulaştırma (vignette) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_35%,#1B2064_100%)]" />

        {/* Ana içerik */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">

          {/* Logo: amblem + yazı */}
          <div className="flex flex-col items-center gap-6 mb-10">
            <DekoremEmblem size={90} />
            <span className="font-jost font-light text-white tracking-[0.6em] text-4xl md:text-[2.75rem] leading-none">
              dekorem
            </span>
          </div>

          {/* İnce turuncu ayraç */}
          <div className="w-12 h-px bg-orange mb-10" />

          {/* Slogan */}
          <h1 className="font-cormorant font-light italic text-white/80 text-2xl md:text-[1.75rem] lg:text-[2rem] leading-relaxed mb-12 max-w-sm md:max-w-md">
            Yüzeylere Karakter, Mekanlara Hayat
          </h1>

          {/* CTA butonları */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/urunler"
              className="px-10 py-3.5 bg-orange text-white font-sans text-xs tracking-[0.22em] uppercase hover:bg-[#d4671f] transition-colors min-w-[210px] text-center"
            >
              Ürünleri Keşfet
            </Link>
            <Link
              href="/iletisim"
              className="px-10 py-3.5 border border-white/30 text-white/80 font-sans text-xs tracking-[0.22em] uppercase hover:border-white/65 hover:text-white hover:bg-white/5 transition-all min-w-[210px] text-center"
            >
              İletişime Geç
            </Link>
          </div>
        </div>

        {/* Aşağı kaydırma göstergesi */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2.5 text-white/25 animate-bounce">
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
            <path d="M1 1L9 9L17 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

      </section>
    </>
  );
}
