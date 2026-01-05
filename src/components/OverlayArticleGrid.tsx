// components/OverlayArticleGrid.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";

export interface OverlayArticleGridItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt?: string;
  bookmarked?: boolean;
}

interface OverlayArticleGridProps {
  items: OverlayArticleGridItem[];
  heading?: string;
  onBookmarkToggle?: (index: number) => void;
  className?: string;
}

const OverlayArticleGrid: React.FC<OverlayArticleGridProps> = ({
  items,
  heading,
  onBookmarkToggle,
  className = "",
}) => {
  return (
    <section className={`bg-white ${className}`}>
      {heading && (
        <div className="flex items-center gap-2 mb-4 mt-4">
          <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>
          <span className="text-gray-500 text-lg">›</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {items.slice(0, 4).map((item, index) => (
          <article 
            key={`${item.slug}-${index}`} 
            className={`relative group ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
          >
            <Link href={`/article/${item.slug}`} title={item.title} className="block">
              <div className="relative w-full h-[433px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index < 2 ? "high" : "low"}
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <div className="text-xs font-semibold uppercase tracking-wide mb-2">
                    {item.category}
                  </div>
                  <h2 className="text-2xl font-bold leading-tight mb-2 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h2>
                  {item.excerpt && (
                    <p className="text-xs text-gray-200 line-clamp-2 mb-2">
                      {item.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-xs">
                    <span>{item.date}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onBookmarkToggle?.(index);
                      }}
                      aria-label={item.bookmarked ? "Remove bookmark" : "Save bookmark"}
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      <Bookmark
                        className="w-4 h-4"
                        fill={item.bookmarked ? "currentColor" : "none"}
                        strokeWidth={item.bookmarked ? 0 : 2}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OverlayArticleGrid;

