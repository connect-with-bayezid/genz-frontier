import { ArrowRight } from "lucide-react";
import ArticleCard from "./ArticleCard";

interface RelatedArticlesProps {
  currentArticleId: string;
}

const relatedArticles = [
  {
    id: "rel-1",
    title: "Machine Learning Basics: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of machine learning and how it powers modern AI applications.",
    category: "AI & ML",
    author: "Dr. Lisa Chen",
    date: "Apr 12, 2024",
    readTime: "10 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663576772143/DqjCRG8g5EWNjwa3KEEwKg/article-card-pattern-istMeWfiFu7r4DMd4DBGnH.webp",
  },
  {
    id: "rel-2",
    title: "The Ethics of Artificial Intelligence",
    excerpt:
      "Exploring the moral and ethical considerations in developing and deploying AI systems.",
    category: "Ethics",
    author: "James Mitchell",
    date: "Apr 10, 2024",
    readTime: "12 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663576772143/DqjCRG8g5EWNjwa3KEEwKg/trending-section-bg-8rWasdeosE2wci2meDvRZs.webp",
  },
  {
    id: "rel-3",
    title: "Top AI Tools for Developers in 2024",
    excerpt:
      "A comprehensive review of the best AI tools and frameworks available for modern development.",
    category: "Tools",
    author: "Nina Patel",
    date: "Apr 8, 2024",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663576772143/DqjCRG8g5EWNjwa3KEEwKg/hero-banner-27tYk5trMSpcN9AmuciXA7.webp",
  },
];

export default function RelatedArticles({
  currentArticleId,
}: RelatedArticlesProps) {
  const filtered = relatedArticles.filter(
    (article) => article.id !== currentArticleId
  );

  return (
    <section className="py-12 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-2">
          Related Articles
        </h2>
        <p className="text-gray-600 text-sm">
          Explore more stories on similar topics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors group"
        >
          View All Articles
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </section>
  );
}
