"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Sub {
  title: string;
  descr: string;
}
export interface MainGridItem {
  category: string;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  date: string;
  sub: Sub[];
  topic: string;
}

interface MainGridProps {
  items: MainGridItem[];
  heading?: string;
  initialRows?: number;
  onShowMore?: () => void;
  onShowLess?: () => void;
  showMoreLabel?: string;
  showLessLabel?: string;
  className?: string;
}

const MainGridLast: React.FC<MainGridProps> = ({
  items,
  heading,
  initialRows = 1,
  onShowMore,
  onShowLess,
  showMoreLabel = "Show More →",
  showLessLabel = "Show Less ←",
  className = "",
}) => {
  const initialCount = initialRows * 9;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const itemsToShow = items.slice(0, visibleCount);
  const hasMore = items.length > visibleCount;
  const hasLess = visibleCount > initialCount;

  const handleShowMore = () => {
    if (onShowMore) {
      onShowMore();
    } else {
      setVisibleCount((prev) => Math.min(prev + 5, items.length));
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {itemsToShow.map((item, index) => (
          <article
            key={`${item.slug}-${index}`}
            className="space-y-3 md:space-y-3"
          >
            <div className="flex flex-row-reverse gap-3 md:flex-col">
              <div className="w-2/5 md:w-full">
                <Link
                  href={`/${item.category}/${item.slug}`}
                  title={item.title}
                  className="block overflow-hidden"
                >
                  <div className="relative w-full h-20 md:h-auto md:aspect-5/3 bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 25vw"
                      priority={index < 2}
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-3/5 md:w-full">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center gap-2 text-[12px] text-gray-600">
                    <span className="font-medium text-gray-700">
                      {item.topic}
                    </span>
                  </div>
                  <Link
                    href={`/${item.category}/${item.slug}`}
                    title={item.title}
                    className="block"
                  >
                    <h3 className="text-sm md:text-md font-semibold text-gray-900 leading-snug  transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-3 text-[11px] text-gray-600">
                    <span className="text-[11px]">{item.date}</span>
                  </div>
                </div>
              </div>
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
              className="text-sm font-medium text-gray-700  transition-colors"
            >
              {showMoreLabel}
            </button>
          )}
          {hasLess && (
            <button
              type="button"
              onClick={handleShowLess}
              className="text-sm font-medium cursor-pointer text-gray-700  transition-colors"
            >
              {showLessLabel}
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default MainGridLast;
