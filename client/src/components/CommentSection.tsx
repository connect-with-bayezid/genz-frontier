import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import Comment from "./Comment";

interface CommentData {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  replies?: CommentData[];
}

interface CommentSectionProps {
  articleId: string;
  commentCount?: number;
}

const mockComments: CommentData[] = [
  {
    id: "1",
    author: "Alex Chen",
    avatar: "A",
    date: "2 hours ago",
    content:
      "This is an insightful article! The breakdown of AI models was particularly helpful. Looking forward to more deep dives like this.",
    likes: 24,
    replies: [
      {
        id: "1-1",
        author: "Sarah Johnson",
        avatar: "S",
        date: "1 hour ago",
        content:
          "I completely agree! The examples were really clear and easy to follow.",
        likes: 8,
      },
      {
        id: "1-2",
        author: "Mike Davis",
        avatar: "M",
        date: "45 minutes ago",
        content:
          "Great points about the future implications. Do you think we'll see these models in production within the next year?",
        likes: 5,
      },
    ],
  },
  {
    id: "2",
    author: "Jordan Park",
    avatar: "J",
    date: "1 hour ago",
    content:
      "Really well-researched piece. I especially appreciated the comparison with previous generations of AI. This helps put things in perspective.",
    likes: 18,
    replies: [],
  },
  {
    id: "3",
    author: "Emma Wilson",
    avatar: "E",
    date: "30 minutes ago",
    content:
      "Does anyone else think the ethical implications deserve more discussion? The article touched on it but I'd love to see a dedicated piece on this.",
    likes: 12,
    replies: [
      {
        id: "3-1",
        author: "David Kumar",
        avatar: "D",
        date: "15 minutes ago",
        content:
          "Great question! Ethics in AI is definitely becoming more important. Would be great to see GenZ Frontier cover this more.",
        likes: 3,
      },
    ],
  },
];

export default function CommentSection({
  articleId,
  commentCount = mockComments.length,
}: CommentSectionProps) {
  const [comments, setComments] = useState<CommentData[]>(mockComments);
  const [newComment, setNewComment] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "popular">("newest");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async () => {
    if (newComment.trim()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      const comment: CommentData = {
        id: `new-${Date.now()}`,
        author: "You",
        avatar: "Y",
        date: "just now",
        content: newComment,
        likes: 0,
        replies: [],
      };

      setComments([comment, ...comments]);
      setNewComment("");
      setIsSubmitting(false);
    }
  };

  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === "popular") {
      return b.likes - a.likes;
    }
    return 0; // Keep newest order
  });

  return (
    <section className="py-12 border-t border-gray-200">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="text-cyan-500" size={24} />
          <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900">
            Comments
          </h2>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
            {commentCount}
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          Join the conversation and share your thoughts on this article.
        </p>
      </div>

      {/* New Comment Form */}
      <div className="mb-8 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
        <h3 className="font-semibold text-gray-900 mb-4">Share Your Thoughts</h3>
        <div className="space-y-3">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="What do you think about this article? Share your insights, questions, or feedback..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 resize-none text-sm"
            rows={4}
          />
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">
              Be respectful and constructive. Comments are moderated.
            </p>
            <button
              onClick={handleSubmitComment}
              disabled={!newComment.trim() || isSubmitting}
              className="flex items-center gap-2 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
            >
              <Send size={16} />
              <span>{isSubmitting ? "Posting..." : "Post Comment"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div className="mb-6 flex items-center gap-4">
        <span className="text-sm font-medium text-gray-600">Sort by:</span>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy("newest")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              sortBy === "newest"
                ? "bg-cyan-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Newest
          </button>
          <button
            onClick={() => setSortBy("popular")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              sortBy === "popular"
                ? "bg-cyan-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Most Popular
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-0 divide-y divide-gray-200">
        {sortedComments.length > 0 ? (
          sortedComments.map((comment) => (
            <Comment
              key={comment.id}
              {...comment}
            />
          ))
        ) : (
          <div className="py-12 text-center">
            <MessageSquare size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 font-medium">No comments yet</p>
            <p className="text-gray-400 text-sm">
              Be the first to share your thoughts!
            </p>
          </div>
        )}
      </div>

      {/* Load More */}
      {sortedComments.length > 5 && (
        <div className="mt-8 text-center">
          <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-cyan-500 hover:text-cyan-600 transition-colors">
            Load More Comments
          </button>
        </div>
      )}
    </section>
  );
}
