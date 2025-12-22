"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bookmark, Dot } from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";

export interface LandingFeature {
    category: string;
    title: string;
    excerpt?: string;
    date: string;
    image: string;
    slug?: string;
    href?: string;
    live?: boolean;
    bookmarked?: boolean;
}

interface HomeLandingPartProps {
    mainFeature: LandingFeature;
    secondaryFeature: LandingFeature;
    sidebarItems: SidebarItem[];
    onMainBookmarkToggle?: () => void;
    onSecondaryBookmarkToggle?: () => void;
    onSidebarBookmarkToggle?: (index: number) => void;
}

const buildLink = (feature: LandingFeature) =>
    feature.href ?? (feature.slug ? `/article/${feature.slug}` : "#");

const HomeLandingPart: React.FC<HomeLandingPartProps> = ({
    mainFeature,
    secondaryFeature,
    sidebarItems,
    onMainBookmarkToggle,
    onSecondaryBookmarkToggle,
    onSidebarBookmarkToggle,
}) => {
    return (
        <section className="bg-white">
            <div className="max-w-360 mx-auto px-6 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left: Main feature */}
                    <article className="lg:col-span-6 flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <span className="w-3 h-3 rounded-full bg-orange-600" />
                            <span>{mainFeature.category}</span>
                        </div>

                        <Link href={buildLink(mainFeature)}>
                            <h1 className="text-4xl sm:text-4xl font-bold leading-tight text-gray-900 hover:text-orange-600 transition-colors">
                                {mainFeature.title}
                            </h1>
                        </Link>

                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                            <span className="text-gray-600">{mainFeature.date}</span>
                            <button
                                type="button"
                                onClick={onMainBookmarkToggle}
                                aria-label={mainFeature.bookmarked ? "Remove bookmark" : "Save bookmark"}
                                className="ml-auto text-gray-500 hover:text-orange-600 transition-colors"
                            >
                                <Bookmark
                                    className="w-4 h-4"
                                    fill={mainFeature.bookmarked ? "currentColor" : "none"}
                                    strokeWidth={mainFeature.bookmarked ? 0 : 2}
                                />
                            </button>
                        </div>

                       

                        <Link href={buildLink(mainFeature)}>
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

                        {mainFeature.excerpt && (
                            <p className="text-sm text-gray-700 leading-7">{mainFeature.excerpt}</p>
                        )}
                    </article>

                    {/* Middle: Secondary feature */}
                    <article className="lg:col-span-2 flex flex-col gap-3">
                        <Link href={buildLink(secondaryFeature)}>
                            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[350px] overflow-hidden">
                                <Image
                                    src={secondaryFeature.image}
                                    alt={secondaryFeature.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    fetchPriority="high"
                                    decoding="async"
                                    quality={85}
                                />
                            </div>
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="font-semibold text-gray-700">{secondaryFeature.category}</span>
                            <span className="text-gray-500">·</span>
                        </div>
                        <Link href={buildLink(secondaryFeature)}>
                            <h2 className="text-2xl sm:text-md font-bold leading-tight text-gray-900 hover:text-orange-600 transition-colors">
                                <span className="inline-flex items-center gap-1">
                                    {secondaryFeature.live && <Dot className="w-5 h-5 text-red-600" />}
                                    {secondaryFeature.title}
                                </span>
                            </h2>
                        </Link>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>{secondaryFeature.date}</span>
                            <button
                                type="button"
                                onClick={onSecondaryBookmarkToggle}
                                aria-label={secondaryFeature.bookmarked ? "Remove bookmark" : "Save bookmark"}
                                className="ml-auto text-gray-500 hover:text-orange-600 transition-colors"
                            >
                                <Bookmark
                                    className="w-4 h-4"
                                    fill={secondaryFeature.bookmarked ? "currentColor" : "none"}
                                    strokeWidth={secondaryFeature.bookmarked ? 0 : 2}
                                />
                            </button>
                        </div>
                    </article>

                    {/* Right: Sidebar */}
                    <div className="lg:col-span-4 w-full">
                        <Sidebar items={sidebarItems} onBookmarkToggle={onSidebarBookmarkToggle} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeLandingPart;

