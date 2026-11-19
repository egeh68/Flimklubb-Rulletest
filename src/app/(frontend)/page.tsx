import Image from "next/image";
import Link from "next/link";
import config from "@payload-config";
import { getPayload } from "payload";

export default async function Homepage() {
  const payload = await getPayload({ config });

  const homePage = await payload.findGlobal({
    slug: "homepage",
    depth: 1,
  });

  return (
    <main className="home">
      <span className="home-label">Velkommen til Filmklubben-Rulletekst</span>
      {homePage.content?.map((block) => {
        if (block.blockType === "hero") {
          return (
            <section className="home-hero" key={block.id}>
              <div className="hero-image">
                {block.image &&
                  typeof block.image === "object" &&
                  block.image.url && (
                    <Image
                      src={block.image.url}
                      alt={block.image.alt}
                      width={600}
                      height={600}
                    />
                  )}
              </div>
              <div className="hero-content">
                <h1>
                  {block.title}
                  <span>{block.subtitle}</span>
                </h1>
                <p>{block.description}</p>
                <Link href={block.link.trim()} className="home-button">
                  {block.button}
                </Link>
              </div>
            </section>
          );
        }
        return null;
      })}
    </main>
  );
}
