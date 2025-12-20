// components/FeatureCategoryPart.tsx
"use client";
import React from "react";
import FeaturedArticleCard, {
  FeaturedArticleCardProps,
} from "./FeaturedArticleCard";
import ArticleCardSmall, { ArticleCardSmallProps } from "./ArticleCardSmall";
import AdBanner, { AdBannerProps } from "./AdBanner";

interface FeatureCategoryPartProps {
  featuredArticle: FeaturedArticleCardProps;
  rightArticles: ArticleCardSmallProps[];
  adBanner?: AdBannerProps;
  heading?: string;
  onFeaturedBookmarkToggle?: () => void;
  onArticleBookmarkToggle?: (index: number) => void;
  className?: string;
}

const FeatureCategoryPart: React.FC<FeatureCategoryPartProps> = ({
  featuredArticle,
  rightArticles,
  adBanner,
  heading,
  onFeaturedBookmarkToggle,
  onArticleBookmarkToggle,
  className = "",
}) => {
  return (
    <section className={`bg-white py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 ">
        {heading && (
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>
            <span className="text-gray-500 text-lg">›</span>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: Featured Article */}
          <div className="lg:col-span-2">
            <FeaturedArticleCard
              {...featuredArticle}
              onBookmarkToggle={onFeaturedBookmarkToggle}
            />
          </div>

          {/* Right: Articles + Ad */}
          <div className="flex flex-col space-y-6">
            {/* Right Articles */}
            {rightArticles.map((article, index) => (
              <ArticleCardSmall
                key={`${article.slug}-${index}`}
                {...article}
                onBookmarkToggle={() => onArticleBookmarkToggle?.(index)}
              />
            ))}

            {/* Ad Banner */}
            {adBanner && (
              <div className="shrink-0 mt-auto">
                <AdBanner {...adBanner} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCategoryPart;

