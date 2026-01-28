// components/ArticleCardSmall.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, Dot } from "lucide-react";

export interface ArticleCardSmallProps {
  slug: string;
  title: string;
  date: string;
  image: string;
  live?: boolean;
  bookmarked?: boolean;
  category:string;
  onBookmarkToggle?: () => void;
}

const ArticleCardSmall: React.FC<ArticleCardSmallProps> = ({
  slug,
  title,
  date,
  image,
  live = false,
  bookmarked = false,
  onBookmarkToggle,
}) => {
  return (
    <article className="flex gap-4 pb-6 border-b border-gray-200 last:border-0 last:pb-0">
      <Link href={`/${slug}`} title={title} className="block shrink-0">
        <div className="relative w-32 h-24 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="128px"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </div>
      </Link>

      <div className="flex-1 space-y-2">
        {live && (
          <div className="flex items-center gap-1 text-red-600 font-semibold text-sm">
            <Dot className="w-5 h-5 fill-red-600 text-red-600" />
            <span>Live:</span>
          </div>
        )}
        <Link href={`/${slug}`} title={title}>
          <h2 className="text-base font-semibold text-gray-900 leading-snug hover:text-orange-600 transition-colors">
            {title}
          </h2>
        </Link>
        <div className="flex items-center gap-3 text-[11px] text-gray-600">
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
              className="w-3 h-3"
              fill={bookmarked ? "currentColor" : "none"}
              strokeWidth={bookmarked ? 0 : 2}
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCardSmall;

