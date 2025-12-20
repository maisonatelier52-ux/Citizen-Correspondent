// components/HorizontalArticleCard.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";

export interface HorizontalArticleCardProps {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  bookmarked?: boolean;
  onBookmarkToggle?: () => void;
  heading?: string;
}

const HorizontalArticleCard: React.FC<HorizontalArticleCardProps> = ({
  slug,
  category,
  title,
  excerpt,
  date,
  image,
  bookmarked = false,
  onBookmarkToggle,
  heading,
}) => {
  return (
    <div className="bg-white border-t border-gray-200 pt-4">
      {heading && (
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>
          <span className="text-gray-500 text-lg">›</span>
        </div>
      )}
      <article className="flex flex-col md:flex-row gap-6">
      {/* Image Section */}
      <Link href={`/article/${slug}`} title={title} className="block shrink-0 w-full md:w-96">
        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 384px"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </div>
      </Link>

      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center space-y-4 py-4">
        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          {category}
        </div>
        <Link href={`/article/${slug}`} title={title}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight hover:text-orange-600 transition-colors">
            {title}
          </h2>
        </Link>
        <p className="text-base text-gray-700 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>{date}</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onBookmarkToggle?.();
            }}
            aria-label={bookmarked ? "Remove bookmark" : "Save bookmark"}
            className="text-gray-400 hover:text-orange-600 transition-colors"
          >
            <Bookmark
              className="w-4 h-4"
              fill={bookmarked ? "currentColor" : "none"}
              strokeWidth={bookmarked ? 0 : 2}
            />
          </button>
        </div>
      </div>
    </article>
    </div>
  );
};

export default HorizontalArticleCard;

