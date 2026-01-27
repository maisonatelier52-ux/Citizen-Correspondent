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

const newsItems = [
  { label: 'WORLD', title: WorldData.featuredArticle.title },
  { label: 'BUSINESS', title: BusinessData.featuredArticle.title },
  { label: 'POLITICS', title: PoliticsData.featuredArticle.title },
  { label: 'OPINION', title: OpinionData.featuredArticle.title },
  { label: 'FINANCE', title: FinanceData.featuredArticle.title },
  { label: 'HEALTH', title: HealthData.featuredArticle.title },
  { label: 'EDUCATION', title: EducationData.featuredArticle.title },
  { label: 'GLOBAL', title: GlobalAffairsData.featuredArticle.title },
];


// duplicate for seamless loop
const tickerItems = [...newsItems, ...newsItems];

export default function TrendingNews() {
  return (
    <div className="w-full overflow-hidden bg-black text-white border-y border-gray-800">
      <div className="ticker-track flex whitespace-nowrap py-1.5">
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-8 gap-3 text-sm"
          >
            {/* Styled prefix badge */}
         <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
  {item.label}
</span>
            {/* Headline */}
            <span className="text-gray-100 font-medium">
              {item.title}
            </span>

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