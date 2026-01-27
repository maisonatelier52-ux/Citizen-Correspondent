// components/ArticleWithSidebar.tsx
"use client";

import React, { useEffect, useState } from "react";
import ArticleDetail, { ArticleDetailProps, ArticleContentBlock } from "./ArticleDetail";
import Sidebar, { SidebarItem } from "./Sidebar";
import SubscribeNewsletter from "./SubscribeNewsletter";

interface ArticleWithSidebarProps {
  article: {
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
  };
  sidebarItems: SidebarItem[];
  sidebarHeading?: string;
  onBookmarkToggle?: () => void;
  onShare?: (platform: string) => void;
  onSidebarBookmarkToggle?: (index: number) => void;
  className?: string;
}

const ArticleWithSidebar: React.FC<ArticleWithSidebarProps> = ({
  article,
  sidebarItems,
  sidebarHeading,
  onBookmarkToggle,
  onShare,
  onSidebarBookmarkToggle,
  className = "",
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar-sticky");
    const articleEnd = document.querySelector(".article-end");

    if (!sidebar || !articleEnd) return;

    const handleScroll = () => {
      const sidebarRect = sidebar.getBoundingClientRect();
      const articleRect = articleEnd.getBoundingClientRect();

      setIsSticky(sidebarRect.top <= 20 && articleRect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`max-w-360 mx-auto px-16 grid grid-cols-1 lg:grid-cols-4 gap-12 py-4 bg-white ${className}`}>
      {/* Left: Article Detail + End Marker */}
      <div className="lg:col-span-3">
        <ArticleDetail
          slug={article.slug}
          category={article.category}
          title={article.title}
          introText={article.introText}
          readingTime={article.readingTime}
          author={article.author}
          lastUpdated={article.lastUpdated}
          content={article.content}
          bookmarked={article.bookmarked}
          onBookmarkToggle={onBookmarkToggle}
          onShare={onShare}
        />
        <div className="article-end h-1"></div> {/* Invisible marker */}
      </div>

      {/* Right: Sticky Sidebar */}
      <aside className="lg:col-span-1">
        {/* Subscribe Newsletter - Not Sticky */}
        <SubscribeNewsletter />
        
        {/* Latest News Sidebar - Sticky */}
        <div className={`sidebar-sticky ${isSticky ? "sticky top-5 z-10" : ""}`}>
          <Sidebar
            items={sidebarItems}
            heading={sidebarHeading}
            onBookmarkToggle={onSidebarBookmarkToggle}
          />
        </div>
      </aside>
    </div>
  );
};

export default ArticleWithSidebar;

