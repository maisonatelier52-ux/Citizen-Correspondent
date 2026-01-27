// components/HorizontalSidebar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Bookmark, Dot, TrendingUp } from "lucide-react";

export interface HorizontalSidebarItem {
  category: string;
  title: string;
  date: string;
  live?: boolean;
  bookmarked?: boolean;
  slug?: string;
  href?: string;
}

interface HorizontalSidebarProps {
  items: HorizontalSidebarItem[];
  onBookmarkToggle?: (index: number) => void;
  className?: string;
}

const HorizontalSidebar: React.FC<HorizontalSidebarProps> = ({
  items,
  onBookmarkToggle,
  className = "",
}) => {
  return (
    <section className={`bg-white ${className}`}>
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex-1 min-w-[200px] max-w-[300px] space-y-1">
            <div className="flex items-start gap-1">
              <TrendingUp className="w-3 h-3 text-gray-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-0.5">
                <div className="text-xs text-gray-600 flex items-center gap-1">
                  <span className="font-semibold text-gray-700">{item.category}</span>
                  {item.live && (
                    <span className="flex items-center gap-0.5 text-red-600 font-semibold">
                      <Dot className="w-3 h-3 fill-red-600 text-red-600" />
                      Live
                    </span>
                  )}
                </div>
                <Link
                  href={item.href || (item.slug ? `/article/${item.slug}` : "#")} 
                  title={item.title}
                  className="block"
                >
                  <h2 className="text-sm font-semibold text-gray-900 leading-tight hover:text-orange-600 transition-colors">
                    {item.title}
                  </h2>
                </Link>
              </div>
            </div>
    
            <div className="flex items-center gap-2 text-[11px] text-gray-600 pl-4">
              <span>{item.date}</span>
              <button
                type="button"
                aria-label={item.bookmarked ? "Remove bookmark" : "Save bookmark"}
                onClick={() => onBookmarkToggle?.(index)}
                className="text-gray-400 hover:text-orange-600 transition-colors"
              >
                <Bookmark
                  className="w-3 h-3"
                  fill={item.bookmarked ? "currentColor" : "none"}
                  strokeWidth={item.bookmarked ? 0 : 2}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalSidebar;

