"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface HorizontalArticleCardProps {
  slug: string;
  category: string;
  title: string;
  date: string;
  image: string;
  shortdescription:string;
  heading?: string;
}

const HorizontalArticleCard: React.FC<HorizontalArticleCardProps> = ({
  slug,
  category,
  title,
  date,
  image,
  heading,
  shortdescription
}) => {
  return (
    <div className="bg-white">
      {heading && (
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>
          <span className="text-gray-500 text-lg">›</span>
        </div>
      )}
      <article className="flex flex-col md:flex-row gap-6">
      {/* Image Section */}
      <Link href={`/${category.toLocaleLowerCase()}/${slug}`} title={title} className="block shrink-0 w-full md:w-96">
        <div className="relative w-full h-54 md:h-60 overflow-hidden">
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
      <div className="flex-1 flex flex-col  space-y-2 py-0">
        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          {category}
        </div>
        <Link href={`/${category.toLocaleLowerCase()}/${slug}`} title={title}>
          <h2 className="text-[28px] md:text-4xl font-bold text-gray-900 leading-[1.1] hover:text-orange-600 transition-colors">
            {title}
          </h2>
        </Link>
        <p className="text-base text-gray-700 leading-[1.3] line-clamp-3">
          {shortdescription}
        </p>
        <div className="flex items-center gap-4 text-[12px] text-gray-600">
          <span>{date}</span>
        
        </div>
      </div>
    </article>
    </div>
  );
};

export default HorizontalArticleCard;

