// components/FeatureHomePart.tsx
"use client";
import React from "react";
import HeroLead from "./HeroLead";
import Sidebar, { SidebarItem } from "./Sidebar";
import HorizontalSidebar, { HorizontalSidebarItem } from "./HorizontalSidebar";

export interface HeroArticle {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug?: string;
  bookmarked?: boolean;
}

interface FeatureHomePartProps {
  hero: HeroArticle;
  sidebarItems: SidebarItem[];
  horizontalItems: HorizontalSidebarItem[];
  onHeroBookmarkToggle?: () => void;
  onSidebarBookmarkToggle?: (index: number) => void;
  onHorizontalBookmarkToggle?: (index: number) => void;
}

const FeatureHomePart: React.FC<FeatureHomePartProps> = ({
  hero,
  sidebarItems,
  horizontalItems,
  onHeroBookmarkToggle,
  onSidebarBookmarkToggle,
  onHorizontalBookmarkToggle,
}) => {
  return (
    <section className="bg-white">
      <div className="max-w-360 mx-auto px-6">
        <div className="flex flex-col xl:flex-row gap-6 py-4">
          <div className="flex-1 min-w-0">
            <HeroLead
              category={hero.category}
              title={hero.title}
              excerpt={hero.excerpt}
              date={hero.date}
              image={hero.image}
              slug={hero.slug}
              bookmarked={hero.bookmarked}
              onBookmarkToggle={onHeroBookmarkToggle}
            />
          </div>
          <div className="w-full xl:w-105 shrink-0">
            <Sidebar items={sidebarItems} onBookmarkToggle={onSidebarBookmarkToggle} />
          </div>
        </div>

        <div className="pb-6">
          <HorizontalSidebar
            items={horizontalItems}
            onBookmarkToggle={onHorizontalBookmarkToggle}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureHomePart;

