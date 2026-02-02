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

  const linkHref = href || (slug ? `/${category.toLocaleLowerCase()}/${slug}` : undefined);
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
      <div className="max-w-360 mx-auto py-0 lg:py-2">
        <div className="flex flex-col-reverse lg:flex-row gap-3 items-start">
          {/* Text column */}
          <div className="flex-2 space-y-3 mt-0">
            {/* Category pill */}
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="w-3 h-3 rounded-full bg-orange-600" />
              <span className={categoryColorClass}>{category}</span>
            </div>

            {/* Title */}
            <Wrapper>
              <h1 className="text-[30px] sm:text-4xl lg:text-[35px] font-bold leading-none md:leading-[1.1] text-gray-900 hover:text-orange-600 transition-colors">
                {title}</h1>
            </Wrapper>

            {/* Excerpt */}
            <p className="text-sm text-gray-700 leading-tight mb-1">{excerpt}</p>

              <span className="text-[11px] text-gray-600">{date}</span>
          
          </div>

          {/* Image column */}
          <div className="flex-3 w-full">
            <Wrapper>
              <div className="relative w-full h-72 sm:h-74 lg:h-100 overflow-hidden">
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

