'use client';

import React from 'react';
import WorldData from '../../public/data/world.json';
import BusinessData from '../../public/data/business.json';
import PoliticsData from '../../public/data/politics.json';
import OpinionData from '../../public/data/opinion.json';
import FinanceData from '../../public/data/finance.json';
import HealthData from '../../public/data/health.json';
import EducationData from '../../public/data/education.json';
import GlobalAffairsData from '../../public/data/global-affairs.json';
import Link from 'next/link';

const newsItems = [
  { label: 'WORLD', title: WorldData[0].title, slug:  WorldData[0].slug},
  { label: 'BUSINESS', title: BusinessData[0].title, slug: BusinessData[0].slug },
  { label: 'POLITICS', title: PoliticsData[0].title, slug:PoliticsData[0].slug },
  { label: 'OPINION', title: OpinionData[0].title, slug:OpinionData[0].slug },
  { label: 'FINANCE', title: FinanceData[0].title, slug:FinanceData[0].slug},
  { label: 'HEALTH', title: HealthData[0].title, slug:HealthData[0].slug },
  { label: 'EDUCATION', title: EducationData[0].title, slug:EducationData[0].slug },
  { label: 'GLOBAL', title: GlobalAffairsData[0].title, slug:GlobalAffairsData[0].slug },
];


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