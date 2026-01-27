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
  WorldData.featuredArticle.title,
  BusinessData.featuredArticle.title,
  PoliticsData.featuredArticle.title,
  OpinionData.featuredArticle.title,
  FinanceData.featuredArticle.title,
  HealthData.featuredArticle.title,
  EducationData.featuredArticle.title,
  GlobalAffairsData.featuredArticle.title,
];

const tickerItems = [...newsItems, ...newsItems];

export default function TrendingNews() {
  return (
    <div className="w-full overflow-hidden bg-black text-white">
      <div className="ticker-track flex whitespace-nowrap py-2">
        {tickerItems.map((item, index) => (
          <span
            key={index}
            className="mx-32 text-sm font-medium"
          >
            Trending News:{item}
          </span>
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
      `}</style>
    </div>
  );
}
