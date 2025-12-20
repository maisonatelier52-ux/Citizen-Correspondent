// components/CategoryIntro.tsx
"use client";
import React, { useState } from "react";
import { Share2, Plus } from "lucide-react";
import Link from "next/link";

interface CategoryIntroProps {
  categoryName: string;
  description?: string;
  relatedTopics?: string[];
  onFollow?: () => void;
  onShare?: () => void;
  isFollowing?: boolean;
  className?: string;
}

const CategoryIntro: React.FC<CategoryIntroProps> = ({
  categoryName,
  description = "Our seasoned columnists and guest writers offer insightful perspectives, thought-provoking opinions, and in-depth analysis on the most pressing issues of the day. From politics and policy to culture and society, our editorials aim to spark meaningful conversations and provide a platform for diverse voices and viewpoints.",
  relatedTopics = ["Business", "Finance", "Politics", "World", "Health", "Education"],
  onFollow,
  onShare,
  isFollowing = false,
  className = "",
}) => {
  const [following, setFollowing] = useState(isFollowing);

  const handleFollow = () => {
    setFollowing(!following);
    onFollow?.();
  };

  const handleShare = () => {
    onShare?.();
  };

  return (
    <section className={`bg-white pt-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Category Name and Follow Button */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {categoryName}
          </h1>
          <button
            onClick={handleFollow}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200"
          >
            {following ? (
              <>
                <span className="text-sm font-medium text-gray-700">Following</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">Follow</span>
              </>
            )}
          </button>
        </div>

        {/* Description */}
        <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-4xl">
          {description}
        </p>

        {/* Share Icon and Related Topics */}
        <div className="flex items-center gap-6 flex-wrap">
          {/* Share Icon */}
          <button
            onClick={handleShare}
            className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
            title="Share"
            aria-label="Share category"
          >
            <Share2 className="w-5 h-5" />
          </button>

          {/* Related Topics */}
          <div className="flex items-center gap-3 flex-wrap">
            {relatedTopics.map((topic) => (
              <Link
                key={topic}
                href={`/category/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-1.5 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryIntro;

