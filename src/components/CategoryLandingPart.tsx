"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, Dot } from "lucide-react";

export interface CategoryLandingMainFeature {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    tags?: string[];
    live?: boolean;
    bookmarked?: boolean;
    href?: string;
}

export interface CategoryLandingArticle {
    slug: string;
    title: string;
    date: string;
    image: string;
    bookmarked?: boolean;
}

export interface CategoryLandingPromo {
    title: string;
    body: string;
    buttonLabel: string;
    buttonHref: string;
}

interface CategoryLandingPartProps {
    mainFeature: CategoryLandingMainFeature;
    articles: CategoryLandingArticle[];
    promo: CategoryLandingPromo;
    onMainBookmarkToggle?: () => void;
    onArticleBookmarkToggle?: (index: number) => void;
    className?: string;
}

const CategoryLandingPart: React.FC<CategoryLandingPartProps> = ({
    mainFeature,
    articles,
    promo,
    onMainBookmarkToggle,
    onArticleBookmarkToggle,
    className = "",
}) => {
    const mainFeatureHref = mainFeature.href || `/article/${mainFeature.slug}`;

    return (
        <section className={`bg-white py-6 sm:py-8 ${className}`}>
            <div className="max-w-360 mx-auto px-4 sm:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
                    {/* Left Column: Main Feature Article */}
                    <div className="lg:col-span-7">
                        <article className="relative w-full h-[520px] sm:h-[590px] overflow-hidden group">
                            <Link href={mainFeatureHref} title={mainFeature.title} className="block h-full">
                                <Image
                                    src={mainFeature.image}
                                    alt={mainFeature.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                    fetchPriority="high"
                                />
                            </Link>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                                {/* Top: Tags */}
                                {mainFeature.tags && mainFeature.tags.length > 0 && (
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {mainFeature.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-full uppercase tracking-wide"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Bottom: Title, Excerpt, Date, Bookmark */}
                                <div className="space-y-3">
                                    <Link href={mainFeatureHref} title={mainFeature.title}>
                                        <h2 className="text-2xl sm:text-3xl font-bold leading-tight hover:text-orange-400 transition-colors">
                                            {mainFeature.live && (
                                                <span className="text-red-500 mr-2">Live:</span>
                                            )}
                                            {mainFeature.title}
                                        </h2>
                                    </Link>
                                    <p className="text-sm text-gray-200 line-clamp-3">{mainFeature.excerpt}</p>
                                    <div className="flex items-center justify-between text-sm">
                                        <span>{mainFeature.date}</span>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                onMainBookmarkToggle?.();
                                            }}
                                            aria-label={mainFeature.bookmarked ? "Remove bookmark" : "Save bookmark"}
                                            className="text-white hover:text-orange-400 transition-colors"
                                        >
                                            <Bookmark
                                                className="w-4 h-4"
                                                fill={mainFeature.bookmarked ? "currentColor" : "none"}
                                                strokeWidth={mainFeature.bookmarked ? 0 : 2}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Middle Column: Two Articles */}
                    <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-6">
                        {articles.slice(0, 2).map((article, index) => (
                            <article key={`${article.slug}-${index}`} className="space-y-3">
                                <Link href={`/article/${article.slug}`} title={article.title} className="block">
                                    <div className="relative w-full aspect-5/3 bg-gray-100 overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 1024px) 100vw, 25vw"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </Link>
                                <div className="space-y-2">
                                    <Link href={`/article/${article.slug}`} title={article.title}>
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight hover:text-orange-600 transition-colors">
                                            {article.title}
                                        </h3>
                                    </Link>
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <span>{article.date}</span>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                onArticleBookmarkToggle?.(index);
                                            }}
                                            aria-label={article.bookmarked ? "Remove bookmark" : "Save bookmark"}
                                            className="text-gray-400 hover:text-orange-600 transition-colors"
                                        >
                                            <Bookmark
                                                className="w-4 h-4"
                                                fill={article.bookmarked ? "currentColor" : "none"}
                                                strokeWidth={article.bookmarked ? 0 : 2}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Right Column: Promotional Block */}
                    <div className="lg:col-span-2">
                        <div className="bg-orange-50 border border-orange-100 p-6 sm:p-8 lg:h-[580px] flex flex-col justify-between">
                            <div className="space-y-3 sm:space-y-4">
                                <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-red-900">
                                    {promo.title}
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {promo.body}
                                </p>
                            </div>
                            <div className="mt-6">
                                <Link
                                    href={promo.buttonHref}
                                    className="inline-flex items-center justify-center border border-gray-900 px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                                >
                                    {promo.buttonLabel}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryLandingPart;

