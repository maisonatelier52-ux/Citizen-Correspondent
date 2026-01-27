// components/CategoryNav.tsx
"use client";
import React from "react";
import Link from "next/link";

interface CategoryNavProps {
  categories?: string[];
}

const CategoryNav: React.FC<CategoryNavProps> = ({
  categories = [
    "Opinion",
    "Education",
    "Global Affairs",
    "Featured",
    "Renewable Energy",
    "Climate Change",
    "Hot",
    "Research",
    "Health",
  ],
}) => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-360 mx-auto px-2 md:px-16">
        <div className="flex items-center space-x-10 overflow-x-auto py-1.5 scrollbar-hide">
          {categories.map((category) => {
            const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link
                key={category}
                href={`/category/${categorySlug}`}
                title={`${category} News`}
                className="text-xs font-medium text-gray-700 hover:text-orange-500 whitespace-nowrap transition-colors duration-200"
              >
                {category}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;

