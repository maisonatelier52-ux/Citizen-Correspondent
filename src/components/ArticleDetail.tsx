import React from "react";
import Image from "next/image";
import Link from "next/link";
import LeaveAComment from "./LeaveAComment";
import ShareArticle from "./ShareArticle";

export interface ArticleContentBlock {
  type: "heading" | "paragraph" | "image";
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  level?: number;
}

interface Sub {
  title: string;
  descr: string;
}
interface Author {
  name: string;
  image: string;
  role: string;
}
export interface ArticleDetailProps {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  date: string;
  image: string;
  sub: Sub[];
  author: Author;
  topic: string;
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
  return (
    <article className={`bg-white ${className}`}>
      <div className="w-full py-0">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          <p className="text-sm font-medium text-red-600  transition-colors">
            {topic}
          </p>
        </div>
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-3 leading-[1.1]">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-black leading-tight mb-1">
          {shortdescription}
        </p>

        <div className="flex items-center gap-2 md:gap-4 mb-4 pt-2">
          <div className="relative w-9 h-9 sm:w-12 sm:h-12 shrink-0">
            <Link
              href="/our-team"
              className="flex items-center gap-4"
              title="our team"
            >
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="rounded-full object-cover"
                sizes="48px sm:64px"
              />
            </Link>
          </div>

          {/* Author Details */}
          <div className="flex-1">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <Link
                href="/our-team"
                className="flex items-center gap-4"
                title="our team"
              >
                <div className="flex flex-col justify-center">
                  <p className="text-[10px] sm:text-[12px] font-medium text-gray-900">
                    By {author.name} – {author.role}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] text-gray-600">
                    <span>Last Updated: {date}</span>
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
          </div>

          {sub?.map((item, index) => (
            <div key={index}>
              {item.title && item.title.trim() !== "" && (
                <h2 className="text-xl sm:text-2xl md:text-[27px] font-bold text-black md:mt-5 mt-2 mb-4 md:mb-3 first:mt-0 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-1/4">
                  {item.title}
                </h2>
              )}
              {item.descr && (
                <p className="text-sm sm:text-[16px] text-black leading-[1.4] mb-2">
                  {item.descr}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 md:mt-10 pt-3">
          <ShareArticle title={title} />
        </div>
        <div className="mt-5 md:mt-10">
          <LeaveAComment />
        </div>
      </div>
    </article>
  );
};

export default ArticleDetail;
