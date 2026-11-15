import config from "@payload-config";

import { getPayload } from "payload";
import { ArticleCard } from "@/components/Articles/ArticleCard";

export default async function ArticlesPage() {
  const payload = await getPayload({ config });

  const articles = await payload.find({
    collection: "articles",
  });

  return (
    <main>
      <h1>Articles</h1>

      {articles.docs.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </main>
  );
}
