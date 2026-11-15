import config from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { RichText } from "@payloadcms/richtext-lexical/react";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlesDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const payload = await getPayload({ config });
  const articles = await payload.find({
    collection: "articles",
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  const article = articles.docs[0];
  if (!article) {
    notFound();
  }

  return (
    <main>
      <h2>{article.title}</h2>
      {article.image &&
        typeof article.image === "object" &&
        article.image.url && (
          <img src={article.image.url} alt={article.title} />
        )}
      <p>{article.subtitle}</p>
      <p>{article.description}</p>
      <RichText data={article.content} />
      {article.author && typeof article.author === "object" && (
        <p>{article.author.name}</p>
      )}
      {article.publishedDate && (
        <p>
          {new Date(article.publishedDate).toLocaleDateString("nb-no", {
            timeZone: "Europe/Oslo",
          })}
        </p>
      )}
    </main>
  );
}
