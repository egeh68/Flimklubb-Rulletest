export default function HomePage() {
  return (
    <main className="home">
      <section className="home-hero">
        <span className="home-label">Velkommen til Filmklubben Rulletekst</span>
        <h1>
          Film er slutt
          <span> Samtalen begynner</span>
        </h1>
        <p>
          Oppdag spennende filmanmeldelser, inspirerende artikler og kommende
          filmkvelder. Hos oss møtes filmelskere for å dele opplevelser,
          meninger og gode historier.
        </p>
        <a href="/articles" className="home-button">
          utforsk article
        </a>
      </section>
    </main>
  );
}
