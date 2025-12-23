"use client";

import React from "react";
import Link from "next/link";
import HorizontalArticleCard, {
  HorizontalArticleCardProps,
} from "./HorizontalArticleCard";
import { MainGridItem } from "./MainGrid";
import MainGrid from "./MainGrid";

export interface HorizontalLandingIntro {
  title: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
}

interface HorizontalLandingPartProps {
  intro: HorizontalLandingIntro;
  article: HorizontalArticleCardProps;
  mainGridItems: MainGridItem[];
  heading?: string;
}

const HorizontalLandingPart: React.FC<HorizontalLandingPartProps> = ({
  intro,
  article,
  mainGridItems,
  heading,
}) => {
  return (
    <section className="bg-white">
      <div className="max-w-360 mx-auto px=6 py-4">
      {heading && (
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>
          <span className="text-gray-500 text-lg">›</span>
        </div>
      )}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Left promo card */}
          <div className="lg:col-span-1">
            <div className="bg-orange-50 border lg:h-[600px] border-orange-100 rounded-lg p-8 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-orange-700 uppercase tracking-wide">
                  Technology
                </p>
                <h2 className="text-3xl font-black leading-tight text-red-900 whitespace-pre-line">
                  {intro.title}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {intro.body}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href={intro.buttonHref}
                  className="inline-flex items-center justify-center border border-gray-900 px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                >
                  {intro.buttonLabel}
                </Link>
              </div>
            </div>
          </div>

          {/* Right: horizontal article + grid */}
          <div className="lg:col-span-3 space-y-6">
            <HorizontalArticleCard {...article} />
            <MainGrid items={mainGridItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalLandingPart;


