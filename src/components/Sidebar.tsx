// components/Sidebar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Bookmark, Dot } from "lucide-react";

export interface SidebarItem {
  category: string;
  title: string;
  date: string;
  image: string;
  slug: string;
  href?: string;
}

interface SidebarProps {
  items: SidebarItem[];
  heading?: string;
  onBookmarkToggle?: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, heading, onBookmarkToggle }) => {
  return (
    <aside className="bg-white">
      {heading && (
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>
          <span className="text-gray-500 text-lg">›</span>
        </div>
      )}
      <div className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 md:py-4 py-2">
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{item.category}</span>

              </div>
              <Link
                href={item.href || (item.slug ? `/${item.category}/${item.slug}` : "#")}
                className="block"
                title={item.title}
              >
                <h2 className="text-sm font-semibold text-gray-900 leading-snug hover:text-orange-600 transition-colors">
                  {item.title}
                </h2>
              </Link>
              <div className="flex items-center gap-3 text-[11px] text-gray-600">
                <span>{item.date}</span>
               
              </div>
            </div>

            <Link
              href={item.href || (item.slug ? `/${item.category}/${item.slug}` : "#")}
              className="w-30 h-25 shrink-0 overflow-hidden border border-gray-200 block"
              title={item.title}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

