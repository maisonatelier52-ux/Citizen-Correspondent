// components/AdBanner.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface AdBannerProps {
  image: string;
  link?: string;
  alt?: string;
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({
  image,
  link,
  alt = "Advertisement",
  className = "",
}) => {
  const content = (
    <div className={`relative w-full h-52.5 bg-gray-100 overflow-hidden ${className}`}>
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
    </div>
  );

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" title={alt || "Advertisement"} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default AdBanner;

