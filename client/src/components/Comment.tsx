import { ThumbsUp, MessageCircle, Flag } from "lucide-react";
import { useState } from "react";

interface CommentProps {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  replies?: Comment[];
  isReply?: boolean;
}

interface Comment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  replies?: Comment[];
}

export default function Comment({
  id,
  author,
  avatar,
  date,
  content,
  likes: initialLikes,
  replies = [],
  isReply = false,
}: CommentProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      // In a real app, this would be sent to a backend
      console.log("Reply submitted:", replyText);
      setReplyText("");
      setShowReplyForm(false);
    }
  };

  return (
    <div className={`${isReply ? "ml-8 md:ml-12 border-l-2 border-gray-200 pl-4 md:pl-6" : ""}`}>
      <div className="flex gap-4 py-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
            {avatar}
          </div>
        </div>

        {/* Comment Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-gray-900">{author}</span>
            <span className="text-xs text-gray-500">{date}</span>
          </div>

          {/* Comment Text */}
          <p className="text-gray-700 text-sm leading-relaxed mb-3">{content}</p>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 text-xs font-medium transition-colors ${
                liked
                  ? "text-cyan-600"
                  : "text-gray-500 hover:text-cyan-600"
              }`}
            >
              <ThumbsUp size={16} className={liked ? "fill-current" : ""} />
              <span>{likes}</span>
            </button>

            <button
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-cyan-600 transition-colors"
            >
              <MessageCircle size={16} />
              <span>Reply</span>
            </button>

            <button className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-red-500 transition-colors">
              <Flag size={16} />
              <span>Report</span>
            </button>
          </div>

          {/* Reply Form */}
          {showReplyForm && (
            <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 resize-none"
                rows={3}
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleReplySubmit}
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-medium rounded-lg transition-colors"
                >
                  Post Reply
                </button>
                <button
                  onClick={() => setShowReplyForm(false)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-medium rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Replies */}
          {replies.length > 0 && (
            <div className="mt-4 space-y-0">
              {replies.map((reply) => (
                <Comment
                  key={reply.id}
                  {...reply}
                  isReply={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
