import React from "react";
import Link from "next/link";
import { Bookmark, Dot, TrendingUp } from "lucide-react";

interface Sub {
  title:string;
  descr:string;
}
export interface HorizontalSidebarItem {
  category: string;
  title: string;
  date: string;
  live?: boolean;
  slug?: string;
  href?: string;
  image:string;
  sub:Sub[];
  topic:string;
  shortdescription:string;
}

interface HorizontalSidebarProps {
  items: HorizontalSidebarItem[];
  className?: string;
}

const HorizontalSidebar: React.FC<HorizontalSidebarProps> = ({
  items,
  className = "",
}) => {
  return (
    <section className={`bg-white ${className}`}>
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex-1 space-y-1">
            <div className="flex items-start gap-1">
              <TrendingUp className="w-3 h-3 text-gray-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-0.5">
                <div className="text-xs text-gray-600 flex items-center gap-1">
                  <span className="font-semibold text-gray-700 capitalize">{item.category}</span>
                  {item.live && (
                    <span className="flex items-center gap-0.5 text-red-600 font-semibold">
                      <Dot className="w-3 h-3 fill-red-600 text-red-600" />
                      Live
                    </span>
                  )}
                </div>
                <Link
                  href={item.href || (item.slug ? `/${item.category.toLocaleLowerCase()}/${item.slug}` : "#")} 
                  title={item.title}
                  className="block"
                >
                  <h2 className="text-sm font-semibold text-gray-900 leading-tight  transition-colors">
                    {item.title}
                  </h2>
                </Link>
              </div>
            </div>
    
            <div className="flex items-center gap-2 text-[11px] text-gray-600 pl-4">
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalSidebar;

