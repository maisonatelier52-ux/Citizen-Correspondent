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
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex-1 min-w-[240px] space-y-2">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-4 h-4 text-gray-600 mt-1" />
              <div className="space-y-1">
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="font-semibold text-gray-700">{item.category}</span>
                  {item.live && (
                    <span className="flex items-center gap-1 text-red-600 font-semibold">
                      <Dot className="w-5 h-5 fill-red-600 text-red-600" />
                      Live
                    </span>
                  )}
                </div>
                <Link
                  href={item.href || (item.slug ? `/article/${item.slug}` : "#")}
                  title={item.title}
                  className="block"
                >
                  <h2 className="text-sm font-semibold text-gray-900 leading-snug hover:text-orange-600 transition-colors">
                    {item.title}
                  </h2>
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-600 pl-6">
              <span>{item.date}</span>
              <button
                type="button"
                aria-label={item.bookmarked ? "Remove bookmark" : "Save bookmark"}
                onClick={() => onBookmarkToggle?.(index)}
                className="text-gray-400 hover:text-orange-600 transition-colors"
              >
                <Bookmark
                  className="w-4 h-4"
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

