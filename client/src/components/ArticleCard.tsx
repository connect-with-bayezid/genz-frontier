import { Clock, User } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

export default function ArticleCard({
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  image,
  featured = false,
}: ArticleCardProps) {
  return (
    <article
      className={`group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Image Container */}
      {image && (
        <div className="relative overflow-hidden bg-gray-100 h-48 md:h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-semibold rounded-full border border-cyan-200">
            {category}
          </span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>

        {/* Title */}
        <h3
          className={`font-display font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors ${
            featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
          }`}
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <User size={14} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
