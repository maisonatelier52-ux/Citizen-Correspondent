// components/ArticlePageNav.tsx
"use client";
import React from "react";
import Link from "next/link";

interface NavCategory {
  name: string;
  slug: string;
}

const ArticlePageNav: React.FC = () => {
  const categories: NavCategory[] = [
    { name: "Opinion", slug: "opinion" },
    { name: "Education", slug: "education" },
    { name: "Global Affairs", slug: "global-affairs" },
    { name: "Featured", slug: "featured" },
    { name: "Renewable Energy", slug: "renewable-energy" },
    // { name: "Climate Change", slug: "climate-change" },
    { name: "Hot", slug: "hot" },
    { name: "Politics", slug: "politics" },
    { name: "Research", slug: "research" },
    { name: "Health", slug: "health" },
    { name: "Markets", slug: "finance" },
    // { name: "Policy Analysis", slug: "policy-analysis" },
  ];

  return (
    <div className="bg-white py-6">
      <div className="max-w-360 mx-auto px-3 md:px-16">
        <div className="flex flex-wrap items-center gap-3">
          {/* More News Label */}
          <span className="text-orange-500 font-bold text-lg mr-2">
            More News:
          </span>

          {/* Category Links */}
          {categories.map((category, index) => (
            <Link
              key={`${category.slug}-${index}`}
              href={`/${category.slug}`}
              className="px-3 md:px-5 py-1 md:py-2 border border-gray-900 text-gray-900 font-semibold text-[11px] md:text-sm hover:bg-gray-900 hover:text-white transition-colors duration-200 rounded-full whitespace-nowrap"
              title={`View ${category.name} articles`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePageNav;
