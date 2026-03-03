import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar, { SidebarItem } from "./Sidebar";

export interface LandingFeature {
  category: string;
  title: string;
  shortdescription: string;
  date: string;
  image: string;
  slug?: string;
  href?: string;
  live?: boolean;
  topic: string;
  bookmarked?: boolean;
}

interface HomeLandingPartProps {
  mainFeature: LandingFeature;
  sidebarItems: SidebarItem[];
  onMainBookmarkToggle?: () => void;
  onSecondaryBookmarkToggle?: () => void;
  onSidebarBookmarkToggle?: (index: number) => void;
}

const buildLink = (feature: LandingFeature) =>
  feature.href ??
  (feature.slug
    ? `/${feature.category.toLocaleLowerCase()}/${feature.slug}`
    : "#");

const HomeLandingPart: React.FC<HomeLandingPartProps> = ({
  mainFeature,
  sidebarItems,
  onSidebarBookmarkToggle,
}) => {
  return (
    <section className="bg-white">
      <div className="max-w-360 mx-auto px-3   md:px-16 py-6 border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-13 gap-8 items-start">
          {/* Left: Main feature */}
          <article className="lg:col-span-8 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[13px] font-semibold text-gray-700">
              <span className="w-3 h-3 rounded-full bg-red-600" />
              <span>{mainFeature.topic}</span>
            </div>
            <Link href={buildLink(mainFeature)} title={mainFeature.title}>
              <div className="text-[32px] sm:text-4xl font-bold leading-tight text-gray-900  transition-colors">
                {mainFeature.title}
              </div>
            </Link>
            <Link href={buildLink(mainFeature)} title={mainFeature.title}>
              <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[340px] overflow-hidden">
                <Image
                  src={mainFeature.image}
                  alt={mainFeature.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  fetchPriority="high"
                  decoding="async"
                  quality={85}
                />
              </div>
            </Link>
            <p className="text-sm text-gray-700 leading-[1.3]">
              {mainFeature.shortdescription}
            </p>
          </article>
          {/* Right: Sidebar */}
          <div className="lg:col-span-5 w-full">
            <Sidebar
              items={sidebarItems}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLandingPart;
