// components/MainGrid.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";

export interface MainGridItem {
  slug: string;
  title: string;
  image: string;
  categories: string[];
  date: string;
  bookmarked?: boolean;
}

interface MainGridProps {
  items: MainGridItem[];
  heading?: string;
  initialRows?: number; // Number of rows to show initially (default: 1)
  onBookmarkToggle?: (index: number) => void;
  onShowMore?: () => void;
  onShowLess?: () => void;
  showMoreLabel?: string;
  showLessLabel?: string;
  className?: string;
}

const MainGrid: React.FC<MainGridProps> = ({
  items,
  heading,
  initialRows = 1, // Default to 1 row (4 items)
  onBookmarkToggle,
  onShowMore,
  onShowLess,
  showMoreLabel = "Show More →",
  showLessLabel = "Show Less ←",
  className = "",
}) => {
  const initialCount = initialRows * 4; // 4 items per row
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const itemsToShow = items.slice(0, visibleCount);
  const hasMore = items.length > visibleCount;
  const hasLess = visibleCount > initialCount;

  const handleShowMore = () => {
    if (onShowMore) {
      onShowMore();
    } else {
      setVisibleCount((prev) => Math.min(prev + 4, items.length));
    }
  };

  const handleShowLess = () => {
    if (onShowLess) {
      onShowLess();
    } else {
      setVisibleCount(initialCount);
    }
  };

  return (
    <section className={className}>
      {heading && (
        <div className="flex items-center gap-2 mt-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>
          <span className="text-gray-500 text-lg">›</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {itemsToShow.map((item, index) => (
          <article key={`${item.slug}-${index}`} className="space-y-3">
            <Link
              href={`/article/${item.slug}`}
              title={item.title}
              className="block overflow-hidden"
            >
              <div className="relative w-full aspect-5/3 bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            </Link>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium text-gray-700">
                {item.categories[0] || item.categories.join(" / ")}
              </span>
            </div>

            <Link
              href={`/article/${item.slug}`}
              title={item.title}
              className="block"
            >
              <h2 className="text-md font-semibold text-gray-900 leading-snug hover:text-orange-600 transition-colors">
                {item.title}
              </h2>
            </Link>

            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span>{item.date}</span>
              <button
                type="button"
                aria-label={item.bookmarked ? "Remove bookmark" : "Save bookmark"}
                onClick={() => onBookmarkToggle?.(index)}
                className="text-gray-400 hover:text-orange-600 transition-colors"
              >
                <Bookmark
                  className="w-4 h-4"
                  fill={item.bookmarked ? "currentColor" : "none"}
                  strokeWidth={item.bookmarked ? 0 : 2}
                />
              </button>
            </div>
          </article>
        ))}
      </div>

      {(hasMore || hasLess) && (
        <div className="flex justify-center gap-4 mt-6">
          {hasMore && (
            <button
              type="button"
              onClick={handleShowMore}
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              {showMoreLabel}
            </button>
          )}
          {hasLess && (
            <button
              type="button"
              onClick={handleShowLess}
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              {showLessLabel}
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default MainGrid;

