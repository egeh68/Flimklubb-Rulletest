import { Article } from "@/payload-types";
import Link from "next/link";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article>
      <h2>{article.title}</h2>
      {article.image &&
        typeof article.image === "object" &&
        article.image.url && (
          <img src={article.image.url} alt={article.title} />
        )}
      <h3>{article.subtitle}</h3>
      <p>{article.description}</p>
      {article.author && typeof article.author === "object" && (
        <p>{article.author.name}</p>
      )}
      <Link href={`/articles/${article.slug}`}>Les mer</Link>
      {article.publishedDate && (
        <p>
          {new Date(article.publishedDate).toLocaleDateString("nb-no", {
            timeZone: "Europe/Oslo",
          })}
        </p>
      )}
    </article>
  );
}
