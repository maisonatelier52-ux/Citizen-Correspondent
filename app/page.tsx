import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import horizontalLandingPartData from "@/public/data/homePage/home-horizondallandingpart.json";

// Critical above-the-fold components - import directly (no dynamic import for faster load)
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import FeatureHomePart from "@/src/components/FeatureHomePart";
import HomeLandingPart from "@/src/components/HomeLandingPart";
import HorizontalLandingPart from "@/src/components/HorizontalLandingPart";
import ArticlePageNav from "@/src/components/ArticlePageNav";
import TrendingNews from "@/src/components/TrendingNews";
import SecondBanner from "@/src/components/SecondBanner";

import businessData from '../public/data/business.json';
import educationData from '../public/data/education.json';
import featuredData from '../public/data/featured.json';
import financeData from '../public/data/finance.json';
import healthData from '../public/data/health.json';
import hotData from '../public/data/hot.json';
import opinionData from '../public/data/opinion.json';
import politicsData from '../public/data/politics.json';
import worldData from '../public/data/world.json';
import globalaffairsData from '../public/data/global-affairs.json';


// Lazy load below-the-fold components for code splitting
const MainGrid = dynamic(() => import("@/src/components/MainGrid"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
});

const MainGridLazy = dynamic(() => import("@/src/components/MainGrid"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
});

const FeatureCategoryPart = dynamic(() => import("@/src/components/FeatureCategoryPart"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const BigAddBanner = dynamic(() => import("@/src/components/BigAddBanner"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100" />,
});

const HorizontalArticleCard = dynamic(() => import("@/src/components/HorizontalArticleCard"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
});

const OverlayArticleGrid = dynamic(() => import("@/src/components/OverlayArticleGrid"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const Footer = dynamic(() => import("@/src/components/Footer"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.Qlork.com"),
  title: "Qlork – Latest News & Breaking Stories",
  description: "Breaking news, analysis & coverage of world events, politics, business, technology & health. Your trusted source for reliable journalism in 2025.",
  keywords: [
    "breaking news",
    "latest news",
    "world news",
    "politics",
    "business news",
    "technology news",
    "health news",
    "finance news",
    "global affairs",
    "qlork",
    "news 2025",
    "current events",
    "news analysis",
    "journalism",
  ].join(", "),
  openGraph: {
    title: "Qlork – Latest News & Breaking Stories",
    description: "Breaking news, analysis & coverage of world events, politics, business, technology & health. Trusted journalism in 2025.",
    url: "https://www.Qlork.com",
    siteName: "Qlork",
    images: [
      {
        url: "https://www.Qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Qlork – Latest News & Breaking Stories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/qlork-favIcon.webp",
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qlork – Latest News & Breaking Stories",
    description: "Breaking news, in-depth analysis & comprehensive coverage of world events, politics, business, technology & health. Trusted journalism in 2025.",
    images: ["https://www.Qlork.com/images/news-img/qlork-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.Qlork.com",
  },
};

export default async function HomePage() {
  
  
  const horizontalLandingIntro = (horizontalLandingPartData as any).intro;
  return (
    <>
      {/* Preload critical hero image for LCP */}
      {/* <link rel="preload" as="image" href={heroImage} fetchPriority="high" /> */}

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Qlork",
            url: "https://www.Qlork.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.Qlork.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        {/* <CategoryNav /> */}
        <TrendingNews />

        <FeatureHomePart
          hero={politicsData[7]}
          sidebarItems={[businessData[0],businessData[1],businessData[2],businessData[3]]}
          horizontalItems={[worldData[8],opinionData[6],educationData[4],financeData[0]]}
        />

        <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
          <MainGrid items={[worldData[0],worldData[1],worldData[2],worldData[3],worldData[4]]} heading="World" />
        </div>

        {/* Visible heading with title keywords for SEO */}
        <div className="max-w-360 mx-auto px-3 md:px-16 py-4">
          <div className="text-1xl md:text-1xl font-bold text-gray-900 mb-2">
            Latest News & Breaking Stories
          </div>
          <p className="text-base text-gray-700 leading-tight">
            Stay informed with the latest breaking news and stories from around the world. Get real-time updates on politics, business, technology, health, and more.
          </p>
        </div>

        <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100" />}>
          <div className="w-full py-2">
            <BigAddBanner />
          </div>
        </Suspense>

        {/* Business landing layout (data from home-homelandingpart.json) */}
        <HomeLandingPart
          mainFeature={featuredData[1]}
          sidebarItems={[globalaffairsData[0],featuredData[0],hotData[0],opinionData[0],worldData[5]]}
        />

        {/* Technology horizontal landing section */}
        <div className="max-w-360 mx-auto px-3 md:px-16 pt-5 md:pt-0">
          <HorizontalLandingPart
            intro={horizontalLandingIntro}
            article={globalaffairsData[1]}
            mainGridItems={[politicsData[2],businessData[4],hotData[1],worldData[6]]}
            heading="Technology"
          />
        </div>

        <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100" />}>
          <div className="w-full py-2">
            <SecondBanner />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <div className="max-w-360 mx-auto px-3 md:px-16 pb-12">
            <MainGridLazy items={[opinionData[1],opinionData[2],opinionData[3],opinionData[4]]} heading="Opinion" />
          </div>
        </Suspense>
        <ArticlePageNav />

        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
          <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
            <OverlayArticleGrid items={[politicsData[3],hotData[2],worldData[7],politicsData[6]]} heading="Latest News" />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
            <MainGridLazy items={[financeData[2],worldData[9],opinionData[5],politicsData[5],globalaffairsData[2],healthData[0],healthData[1],educationData[2],financeData[6],businessData[7],healthData[3],educationData[3]]} heading="More News" initialRows={2} />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
