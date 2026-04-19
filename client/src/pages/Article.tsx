import { useParams } from "wouter";
import { ArrowLeft, Share2, Bookmark, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommentSection from "@/components/CommentSection";
import RelatedArticles from "@/components/RelatedArticles";
import AdPlaceholder from "@/components/AdPlaceholder";

export default function Article() {
  const params = useParams();
  const articleId = params.id || "1";

  // Mock article data - in a real app, this would come from an API
  const article = {
    id: articleId,
    title: "The Future of AI: How Generative Models Will Transform Tech",
    subtitle:
      "Exploring the latest breakthroughs in artificial intelligence and their implications for the tech industry and society.",
    author: "Sarah Chen",
    authorBio:
      "Tech journalist and AI researcher with 8+ years of experience covering emerging technologies.",
    date: "April 18, 2024",
    readTime: "8 min read",
    views: 2847,
    category: "AI & ML",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663576772143/DqjCRG8g5EWNjwa3KEEwKg/featured-article-bg-dDrnZwjcwg4byMhEpzJpGB.webp",
    content: `
      <p>Artificial intelligence has reached a pivotal moment in its evolution. The emergence of large language models and generative AI systems has fundamentally changed how we think about machine learning and its applications in the real world.</p>

      <h3>The Rise of Generative Models</h3>
      <p>Over the past two years, we've witnessed an unprecedented acceleration in AI capabilities. Models like GPT-4, Claude, and other large language models have demonstrated remarkable abilities in understanding and generating human language. This represents a significant leap from previous generations of AI systems.</p>

      <p>What makes these models particularly interesting is their versatility. They can be applied to a wide range of tasks, from content creation to code generation, from customer service to scientific research. This flexibility has opened up new possibilities for businesses and individuals alike.</p>

      <h3>Real-World Applications</h3>
      <p>The impact of generative AI is already visible across multiple industries. In healthcare, AI models are being used to analyze medical images and assist in diagnosis. In finance, they're helping with fraud detection and risk assessment. In education, they're personalizing learning experiences for students.</p>

      <p>Perhaps most notably, AI is transforming how we work. Developers are using AI coding assistants to write better code faster. Writers are using AI tools to brainstorm ideas and improve their writing. Designers are leveraging AI to automate repetitive tasks and focus on creative work.</p>

      <h3>Challenges and Considerations</h3>
      <p>However, this rapid advancement also brings challenges. Questions about bias in AI systems, the environmental impact of training large models, and the potential for misuse are all important considerations.</p>

      <p>There are also concerns about job displacement and the need for new skills in the workforce. As AI becomes more capable, society will need to adapt and ensure that the benefits are distributed fairly.</p>

      <h3>The Road Ahead</h3>
      <p>Looking forward, we can expect AI to become even more integrated into our daily lives. We'll likely see improvements in areas like multimodal AI (systems that can process text, images, and other data types), more efficient models that require less computational power, and better tools for explaining and understanding AI decisions.</p>

      <p>The key will be to develop and deploy these technologies responsibly, with careful consideration for their societal impact. As we stand at this crossroads, the decisions we make today will shape the future of AI and its role in society.</p>

      <p>The future of AI is not predetermined. It will be shaped by the choices of researchers, engineers, policymakers, and society as a whole. By staying informed and engaged, we can help ensure that AI develops in a way that benefits everyone.</p>
    `,
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Back Button */}
      <div className="container pt-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Articles
        </a>
      </div>

      {/* Hero Image */}
      <div className="w-full h-96 md:h-[500px] bg-gray-200 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="container py-12 md:py-16">
        <div className="max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-sm font-semibold rounded-full border border-cyan-200">
                {article.category}
              </span>
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-gray-600 mb-6">{article.subtitle}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                  SC
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{article.author}</p>
                  <p className="text-xs text-gray-500">{article.readTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 ml-auto">
                <div className="flex items-center gap-1">
                  <Eye size={16} />
                  <span>{article.views} views</span>
                </div>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-gray-900">About the author:</span>{" "}
              {article.authorBio}
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-sm md:prose-base max-w-none mb-8">
            <div
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{
                __html: article.content.replace(
                  /<h3>/g,
                  '<h3 class="font-display font-bold text-2xl text-gray-900 mt-8 mb-4">'
                ),
              }}
            />
          </div>

          {/* Share and Actions */}
          <div className="flex flex-wrap items-center gap-4 py-6 border-t border-b border-gray-200">
            <span className="text-sm font-medium text-gray-600">Share this article:</span>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
              <Share2 size={18} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600">
              <Bookmark size={18} />
            </button>
          </div>
        </div>
      </article>

      {/* Mid-article Ad */}
      <section className="container py-8 flex justify-center">
        <AdPlaceholder size="leaderboard" />
      </section>

      {/* Comments Section */}
      <section className="container max-w-3xl py-12">
        <CommentSection articleId={article.id} commentCount={12} />
      </section>

      {/* Related Articles */}
      <section className="container max-w-3xl py-12">
        <RelatedArticles currentArticleId={article.id} />
      </section>

      {/* Bottom Ad */}
      <section className="container py-8 flex justify-center">
        <AdPlaceholder size="leaderboard" />
      </section>

      <Footer />
    </div>
  );
}
