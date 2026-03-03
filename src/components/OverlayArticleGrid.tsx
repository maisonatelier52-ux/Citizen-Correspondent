import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface OverlayArticleGridItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  topic: string;
  excerpt?: string;
  bookmarked?: boolean;
}

interface OverlayArticleGridProps {
  items: OverlayArticleGridItem[];
  heading?: string;
  className?: string;
}

const OverlayArticleGrid: React.FC<OverlayArticleGridProps> = ({
  items,
  heading,
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
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {items.slice(0, 4).map((item, index) => (
          <article
            key={`${item.slug}-${index}`}
            className={`relative group ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
          >
            <Link
              href={`/${item.category.toLocaleLowerCase()}/${item.slug}`}
              title={item.title}
              className="block"
            >
              <div className="relative w-full aspect-[4/2] sm:aspect-[3/4] md:aspect-auto md:h-[433px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index < 2 ? "high" : "low"}
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white">
                  <div className="text-[11px] font-semibold uppercase tracking-wide mb-1 sm:mb-2">
                    {item.topic}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-[23px] font-bold leading-[1.1] mb-1 sm:mb-2  transition-colors">
                    {item.title}
                  </h3>
                  {item.excerpt && (
                    <p className="text-[10px] sm:text-xs text-gray-200 line-clamp-2 mb-1 sm:mb-2">
                      {item.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
                    <span>{item.date}</span>
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
