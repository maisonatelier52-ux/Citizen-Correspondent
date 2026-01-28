// components/FeaturedArticleCard.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";

export interface FeaturedArticleCardProps {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  bookmarked?: boolean;
  onBookmarkToggle?: () => void;
  href?: string;
}

const FeaturedArticleCard: React.FC<FeaturedArticleCardProps> = ({
  slug,
  category,
  title,
  excerpt,
  date,
  image,
  bookmarked = false,
  onBookmarkToggle,
  href,
}) => {
  const articleHref = href || `/${slug}`;
  return (
    <article className="relative w-full h-[500px] overflow-hidden group">
      <Link href={articleHref} title={title} className="block h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          fetchPriority="high"
        />
      </Link>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="space-y-3">
          <div className="text-sm font-semibold text-white uppercase tracking-wide">
            {category}
          </div>
          <Link href={articleHref} title={title}>
            <h2 className="text-3xl font-bold leading-tight hover:text-orange-400 transition-colors">
              {title}
            </h2>
          </Link>
          <p className="text-sm text-gray-200 line-clamp-2">{excerpt}</p>
          <div className="flex items-center gap-4 text-sm">
            <span>{date}</span>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onBookmarkToggle?.();
              }}
              aria-label={bookmarked ? "Remove bookmark" : "Save bookmark"}
              className="text-white hover:text-orange-400 transition-colors"
            >
              <Bookmark
                className="w-3 h-3"
                fill={bookmarked ? "currentColor" : "none"}
                strokeWidth={bookmarked ? 0 : 2}
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticleCard;

