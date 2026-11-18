import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home">
      <span className="home-label">Velkommen til Filmklubben Rulletekst</span>
      <section className="home-hero">
        <div className="hero-image">
          <Image
            src="/images/Power.webp"
            alt="Plakat for TV-serien Power"
            width={600}
            height={600}
          />
        </div>
        <div className="hero-content">
          <h1>
            Film er slutt
            <span> Samtalen begynner</span>
          </h1>
          <p>
            Oppdag spennende filmanmeldelser, inspirerende artikler og kommende
            filmkvelder. Hos oss møtes filmelskere for å dele opplevelser,
            meninger og gode historier. Oppdag spennende filmanmeldelser,
            inspirerende artikler og kommende filmkvelder. Hos oss møtes
            filmelskere for å dele opplevelser, meninger og gode historier.
          </p>
          <Link href="/articles" className="home-button">
            Utforsk artikler
          </Link>
        </div>
      </section>
    </main>
  );
}
