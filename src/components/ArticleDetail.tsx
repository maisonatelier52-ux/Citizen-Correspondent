// components/ArticleDetail.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, Share2, Mail, Link as LinkIcon, Printer, MoreHorizontal, Clock } from "lucide-react";

export interface ArticleContentBlock {
  type: "heading" | "paragraph" | "image";
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  level?: number; // For heading levels (1-6)
}

export interface ArticleDetailProps {
  slug: string;
  category: string;
  title: string;
  introText: string;
  readingTime?: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  lastUpdated: string;
  content: ArticleContentBlock[];
  bookmarked?: boolean;
  onBookmarkToggle?: () => void;
  onShare?: (platform: string) => void;
  className?: string;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({
  slug,
  category,
  title,
  introText,
  readingTime = "8 Min Read",
  author,
  lastUpdated,
  content,
  bookmarked = false,
  onBookmarkToggle,
  onShare,
  className = "",
}) => {
  const handleShare = (platform: string) => {
    if (onShare) {
      onShare(platform);
    } else {
      // Default share behavior
      const url = typeof window !== "undefined" ? window.location.href : "";
      const text = title;
      
      switch (platform) {
        case "twitter":
          window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, "_blank");
          break;
        case "email":
          window.location.href = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`;
          break;
        case "link":
          if (navigator.clipboard) {
            navigator.clipboard.writeText(url);
          }
          break;
        case "print":
          window.print();
          break;
      }
    }
  };

  return (
    <article className={`bg-white ${className}`}>
      <div className="w-full pr-6 py-8">
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
          <Link
            href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
          >
            {category}
          </Link>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h1>

        {/* Introductory Text */}
        <p className="text-lg text-gray-700 leading-relaxed mb-2">
          {introText}
        </p>


        {/* Author Section */}
        <div className="flex items-start gap-4 mb-4 pb-2 pt-2 border-b border-t border-gray-200">
          <div className="relative w-16 h-16 shrink-0">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="rounded-full object-cover"
              sizes="64px"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-base font-medium text-gray-900">
                  By {author.name} - {author.role}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Last Updated: {lastUpdated}
                </p>
              </div>
              <button
                onClick={onBookmarkToggle}
                className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
                aria-label={bookmarked ? "Remove bookmark" : "Save bookmark"}
              >
                <Bookmark
                  className="w-5 h-5"
                  fill={bookmarked ? "currentColor" : "none"}
                  strokeWidth={bookmarked ? 0 : 2}
                />
                <span className="text-sm font-medium">Save It</span>
              </button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {content.map((block, index) => {
            if (block.type === "heading") {
              const level = block.level || 2;
              const HeadingTag = `h${level}` as React.ElementType;
              return (
                <HeadingTag
                  key={index}
                  className="text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0"
                >
                  {block.content}
                </HeadingTag>
              );
            } else if (block.type === "image") {
              return (
                <div key={index} className="my-6">
                  <div className="relative w-full aspect-video bg-gray-100">
                    <Image
                      src={block.imageUrl || ""}
                      alt={block.imageAlt || block.content}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                    />
                  </div>
                  {block.content && (
                    <p className="text-sm text-gray-600 mt-2 italic">{block.content}</p>
                  )}
                </div>
              );
            } else if (block.type === "paragraph") {
              return (
                <p key={index} className="text-base text-gray-700 leading-relaxed mb-4">
                  {block.content}
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>
    </article>
  );
};

export default ArticleDetail;

