import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Sparkles, TrendingUp } from "lucide-react";

const featuredArticles = [
  {
    id: 1,
    title: "The Future of AI: How Generative Models Will Transform Tech",
    excerpt:
      "Exploring the latest breakthroughs in artificial intelligence and their implications for the tech industry and society at large.",
    category: "AI & ML",
    author: "Sarah Chen",
    date: "Apr 18, 2024",
    readTime: "8 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663576772143/DqjCRG8g5EWNjwa3KEEwKg/featured-article-bg-dDrnZwjcwg4byMhEpzJpGB.webp",
    featured: true,
  },
  {
    id: 2,
    title: "Startup Spotlight: 5 Emerging Tech Companies to Watch",
    excerpt:
      "Discover the most innovative startups disrupting the tech landscape with groundbreaking solutions and visionary leadership.",
    category: "Startups",
    author: "Alex Rivera",
    date: "Apr 17, 2024",
    readTime: "6 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663576772143/DqjCRG8g5EWNjwa3KEEwKg/article-card-pattern-istMeWfiFu7r4DMd4DBGnH.webp",
  },
  {
    id: 3,
    title: "Web Development Trends 2024: What's Next?",
    excerpt:
      "A comprehensive guide to the latest web development trends, frameworks, and best practices shaping the industry.",
    category: "Web Dev",
    author: "Jordan Park",
    date: "Apr 16, 2024",
    readTime: "7 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663576772143/DqjCRG8g5EWNjwa3KEEwKg/trending-section-bg-8rWasdeosE2wci2meDvRZs.webp",
  },
  {
    id: 4,
    title: "Cybersecurity Alert: New Vulnerabilities Discovered",
    excerpt:
      "Security researchers reveal critical vulnerabilities affecting millions of devices worldwide. Here's what you need to know.",
    category: "Security",
    author: "Mike Thompson",
    date: "Apr 15, 2024",
    readTime: "5 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663576772143/DqjCRG8g5EWNjwa3KEEwKg/hero-banner-27tYk5trMSpcN9AmuciXA7.webp",
  },
  {
    id: 5,
    title: "Cloud Computing: Choosing the Right Platform",
    excerpt:
      "A detailed comparison of leading cloud platforms and how to select the best solution for your business needs.",
    category: "Cloud",
    author: "Emma Wilson",
    date: "Apr 14, 2024",
    readTime: "9 min read",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663576772143/DqjCRG8g5EWNjwa3KEEwKg/footer-accent-bg-8jYAvqtyb8BiHK5DSQu26P.webp",
  },
];

const trendingArticles = [
  {
    id: 6,
    title: "Apple Announces Revolutionary New Product Line",
    category: "News",
    author: "Lisa Anderson",
    date: "2 hours ago",
    readTime: "4 min read",
  },
  {
    id: 7,
    title: "Meta's Latest AI Model Outperforms Competitors",
    category: "AI & ML",
    author: "David Kumar",
    date: "4 hours ago",
    readTime: "5 min read",
  },
  {
    id: 8,
    title: "Google Releases New Privacy Features",
    category: "Privacy",
    author: "Nina Patel",
    date: "6 hours ago",
    readTime: "3 min read",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200 mb-6">
              <Sparkles size={16} className="text-cyan-600" />
              <span className="text-sm font-medium text-cyan-700">
                Latest in Tech & Innovation
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-gray-900 mb-4 leading-tight">
              Stay Ahead in Tech
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the latest news, in-depth reviews, and expert insights on technology, startups, and innovation shaping the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
                Read Latest
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </section>

      {/* Top Ad Placement */}
      <section className="container py-8 flex justify-center">
        <AdPlaceholder size="leaderboard" />
      </section>

      {/* Featured & Latest Articles Grid */}
      <section className="container py-12 md:py-20">
        <div className="mb-8">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-2">
            Featured Stories
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredArticles.slice(0, 4).map((article) => (
            <a key={article.id} href={`/article/${article.id}`} className="hover:no-underline">
              <ArticleCard {...article} />
            </a>
          ))}
        </div>

        {/* Mid-page Ad */}
        <div className="my-12 flex justify-center">
          <AdPlaceholder size="leaderboard" />
        </div>
      </section>

      {/* Trending Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="text-cyan-500" size={28} />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900">
              Trending Now
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingArticles.map((article, index) => (
              <a
                key={article.id}
                href={`/article/${article.id}`}
                className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow block"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                    <span className="font-display font-bold text-cyan-600 text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-gray-900 mb-2 line-clamp-2 hover:text-cyan-600 transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                      <span className="px-2 py-1 bg-gray-100 rounded">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar Ad Section */}
      <section className="container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-8">
              Latest Articles
            </h2>
            <div className="space-y-6">
              {featuredArticles.slice(2).map((article) => (
              <a
                key={article.id}
                href={`/article/${article.id}`}
                className="flex gap-6 pb-6 border-b border-gray-100 hover:opacity-75 transition-opacity cursor-pointer block"
              >
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 bg-cyan-50 text-cyan-600 text-xs font-semibold rounded border border-cyan-200">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
              </a>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <AdPlaceholder size="sidebar" />

            {/* Newsletter Box */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
              <h3 className="font-display font-bold text-gray-900 mb-2">
                Weekly Newsletter
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get curated tech news delivered to your inbox every week.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white border border-cyan-200 text-sm mb-3 focus:outline-none focus:border-cyan-500"
              />
              <button className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm rounded-lg transition-colors">
                Subscribe
              </button>
            </div>

            <AdPlaceholder size="sidebar" />
          </aside>
        </div>
      </section>

      {/* Bottom Ad Placement */}
      <section className="container py-8 flex justify-center">
        <AdPlaceholder size="leaderboard" />
      </section>

      <Footer />
    </div>
  );
}
