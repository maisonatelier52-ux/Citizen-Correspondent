// components/HeroLead.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import React from "react";

interface HeroLeadProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug?: string;
  href?: string;
  bookmarked?: boolean;
  onBookmarkToggle?: () => void;
  categoryColorClass?: string; // e.g. "text-orange-600"
}

const HeroLead: React.FC<HeroLeadProps> = ({
  category,
  title,
  excerpt,
  date,
  image,
  slug,
  href,
  bookmarked = false,
  onBookmarkToggle,
  categoryColorClass = "text-orange-600",
}) => {
  const linkHref = href || (slug ? `/article/${slug}` : undefined);
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    linkHref ? (
      <Link href={linkHref} title={title} className="block">
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  return (
    <section className="bg-white">
      <div className="max-w-360 mx-auto pr-3 py-2">
        <div className="flex flex-col lg:flex-row gap-3 items-start">
          {/* Text column */}
          <div className="flex-2 space-y-4 mt-0">
            {/* Category pill */}
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="w-3 h-3 rounded-full bg-orange-600" />
              <span className={categoryColorClass}>{category}</span>
            </div>

            {/* Title */}
            <Wrapper>
              <h1 className="text-4xl sm:text-4xl font-bold leading-tight text-gray-900 hover:text-orange-600 transition-colors">
                {title}
              </h1>
            </Wrapper>

            {/* Excerpt */}
            <p className="text-sm text-gray-700 leading-7">{excerpt}</p>

            {/* Meta row */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{date}</span>
              <button
                type="button"
                onClick={onBookmarkToggle}
                aria-label={bookmarked ? "Remove bookmark" : "Save bookmark"}
                className="text-gray-500 hover:text-orange-600 transition-colors"
              >
                <Bookmark
                  className="w-4 h-4"
                  fill={bookmarked ? "currentColor" : "none"}
                  strokeWidth={bookmarked ? 0 : 2}
                />
              </button>
            </div>
          </div>

          {/* Image column */}
          <div className="flex-3 w-full">
            <Wrapper>
              <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[410px] overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  fetchPriority="high"
                  decoding="async"
                  quality={85}
                />
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLead;

