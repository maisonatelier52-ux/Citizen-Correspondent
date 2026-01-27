// components/BigAddBanner.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BigAddBanner: React.FC = () => {
  return (
    <section>
    <div className="max-w-260 mx-auto py-2 md:py-5 px-12 lg:px-6">
      <div className="flex justify-center">
        <Link href="https://www.mirrorstandard.com/" target="_blank" className="block w-full">
          <Image
            src="/images/mirrorstandard-ad.webp"
            alt="ad - mirrorstandard news site"
            width={1050}
            height={100}
            priority
            className="w-full h-auto max-h-32 object-contain sm:object-cover hover:opacity-90 transition-opacity duration-300"
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 1050px"
          />
        </Link>
      </div>
    </div>
  </section>
  );
};

export default BigAddBanner;

