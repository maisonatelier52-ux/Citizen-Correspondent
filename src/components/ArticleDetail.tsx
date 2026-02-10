// components/ArticleDetail.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, Share2, Mail, Link as LinkIcon, Printer, MoreHorizontal, Clock } from "lucide-react";
import LeaveAComment from "./LeaveAComment";
import ArticleActionBar from "./ArticleActionBar";
import ShareArticle from "./ShareArticle";

export interface ArticleContentBlock {
  type: "heading" | "paragraph" | "image";
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  level?: number; // For heading levels (1-6)
}

interface Sub {
  title:string;
  descr:string;
}
interface Author{
  name:string;
  image:string;
  role:string;
}
export interface ArticleDetailProps {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  date: string;
  image:string;
  sub: Sub[];
  author:Author;
  topic:string;
  onShare?: (platform: string) => void;
  className?: string;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({
  slug,
  category,
  title,
  image,
  shortdescription,
  date,
  sub,
  author,
  topic,
  className = "",
}) => {

console.log(author,'author')

  return (
    <article className={`bg-white ${className}`}>
      <div className="w-full py-0">
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
          <p
            className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
          >
            {topic}
          </p>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 leading-[1.1]">
          {title}
        </h1>

        {/* Introductory Text */}
        <p className="text-sm sm:text-base text-gray-700 leading-tight mb-1">
          {shortdescription}
        </p>


        {/* Article Action Bar */}
        {/* <ArticleActionBar
          readingTime={parseInt(readingTime.replace(/[^0-9]/g, ""))}
          onShare={onShare}
          onBookmarkToggle={onBookmarkToggle}
          onMoreOptions={() => { }}
        /> */}

        {/* Author Section */}
        <div className="flex items-center gap-2 md:gap-4 mb-4 pt-2">
          {/* Author Image */}

          <div className="relative w-9 h-9 sm:w-12 sm:h-12 shrink-0">
            <Link href="/our-team" className="flex items-center gap-4">
          
            </Link>
            <Image
                src={author.image}
                alt={author.name}
                fill
                className="rounded-full object-cover"
                sizes="48px sm:64px"
              />
          </div>

          {/* Author Details */}
          <div className="flex-1">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <Link href="/our-team" className="flex items-center gap-4">
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] sm:text-[12px] font-medium text-gray-900">
                    By {author.name} – {author.role}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] text-gray-600">
                    <span>Last Updated: {date}</span>

                    {/* dot */}
                    {/* <span className="text-gray-400">•</span> */}

                    {/* Bookmark */}
                    {/* <button
                      onClick={onBookmarkToggle}
                      className="flex items-center hover:text-orange-500 transition-colors"
                      aria-label={bookmarked ? "Remove bookmark" : "Save bookmark"}
                    >
                      <Bookmark
                        className="  w-3 h-3 cursor-pointer"
                        fill={bookmarked ? "currentColor" : "none"}
                        strokeWidth={bookmarked ? 0 : 2}
                      />
                      <span className="ml-1">save it</span>
                    </button> */}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>



        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
        
                <div key={slug} className="my-2 sm:my-2">
                  <div className="relative w-full aspect-video bg-gray-100">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                    />
                  </div>
                 
                    {/* <p className="text-xs sm:text-[12px] text-gray-600 mt-2 italic">{sub[0].descr}</p> */}
               
                </div>
             
             {sub?.map((item, index) => (
  <div key={index}>
    {/* Show heading only if title exists */}
    {item.title && item.title.trim() !== "" && (
      <h2
        className="text-xl sm:text-2xl md:text-[27px] font-bold text-gray-900 md:mt-4 mt-2 mb-4 md:mb-5 first:mt-0 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-1/4 after:h-0.5 after:bg-red-600 font-serif"
      >
        {item.title}
      </h2>
    )}

    {/* Description always shown if exists */}
    {item.descr && (
      <p className="text-sm sm:text-[15px] text-gray-700 leading-tight mb-2">
        {item.descr}
      </p>
    )}
  </div>
))}
        </div>
        <div className="mt-5 md:mt-10 pt-3">

          <ShareArticle title={title} />
        </div>
        {/* Leave a Comment Section */}
        <div className="mt-5 md:mt-10">
          <LeaveAComment />
        </div>
      </div>
    </article>
  );
};

export default ArticleDetail;

