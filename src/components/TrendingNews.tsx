'use client';

import React from 'react';
import WorldData from '../../public/data/worldPage/world-featureCategoryPart.json';
import BusinessData from '../../public/data/businessPage/business-featureCategoryPart.json';
import PoliticsData from '../../public/data/politicsPage/politics-featureCategoryPart.json';
import OpinionData from '../../public/data/opinionPage/opinion-featureCategoryPart.json';
import FinanceData from '../../public/data/financePage/finance-featureCategoryPart.json';
import HealthData from '../../public/data/healthPage/health-featureCategoryPart.json';
import EducationData from '../../public/data/educationPage/education-featureCategoryPart.json';
import GlobalAffairsData from '../../public/data/global-affairsPage/global-affairs-featureCategoryPart.json';
import Link from 'next/link';

const newsItems = [
  { label: 'WORLD', title: WorldData.featuredArticle.title, slug:  WorldData.featuredArticle.slug},
  { label: 'BUSINESS', title: BusinessData.featuredArticle.title, slug: BusinessData.featuredArticle.slug },
  { label: 'POLITICS', title: PoliticsData.featuredArticle.title, slug:PoliticsData.featuredArticle.slug },
  { label: 'OPINION', title: OpinionData.featuredArticle.title, slug:OpinionData.featuredArticle.slug },
  { label: 'FINANCE', title: FinanceData.featuredArticle.title, slug:FinanceData.featuredArticle.slug},
  { label: 'HEALTH', title: HealthData.featuredArticle.title, slug:HealthData.featuredArticle.slug },
  { label: 'EDUCATION', title: EducationData.featuredArticle.title, slug:EducationData.featuredArticle.slug },
  { label: 'GLOBAL', title: GlobalAffairsData.featuredArticle.title, slug:GlobalAffairsData.featuredArticle.slug },
];


// duplicate for seamless loop
const tickerItems = [...newsItems, ...newsItems];

export default function TrendingNews() {

  const normalizeCategory = (value: string) =>
    value.toLowerCase().trim().replace(/\s+/g, "-");

  return (
    <div className="w-full overflow-hidden bg-black text-white border-y border-gray-800">
      <div className="ticker-track flex whitespace-nowrap py-1.5">
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-8 gap-3 text-sm"
          >
            {/* Styled prefix badge */}
            <Link href={`/${normalizeCategory(item.label)}`}>
              <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                {item.label}
              </span>
            </Link>
            {/* Headline */}
            <Link href={`/${normalizeCategory(item.label)}/${item.slug}`}>

            <span className="text-gray-100 font-medium">
              {item.title}
            </span>
</Link>
            {/* Animated separator */}
            <span className="text-gray-600 text-lg">|</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .ticker-track {
          width: max-content;
          animation: marquee 120s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}