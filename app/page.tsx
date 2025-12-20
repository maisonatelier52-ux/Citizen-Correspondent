// app/page.tsx
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { FeaturedArticleCardProps } from "@/src/components/FeaturedArticleCard";
import { ArticleCardSmallProps } from "@/src/components/ArticleCardSmall";
import { AdBannerProps } from "@/src/components/AdBanner";
import { OverlayArticleGridItem } from "@/src/components/OverlayArticleGrid";
import { HorizontalArticleCardProps } from "@/src/components/HorizontalArticleCard";
import { HeroArticle } from "@/src/components/FeatureHomePart";
import { SidebarItem } from "@/src/components/Sidebar";
import { HorizontalSidebarItem } from "@/src/components/HorizontalSidebar";
import { MainGridItem } from "@/src/components/MainGrid";
import homeData from "@/public/data/homePage/home-featureHomepart.json";
import mainGridData from "@/public/data/homePage/home-mainGrid.json";

// Critical above-the-fold components - import directly (no dynamic import for faster load)
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import CategoryNav from "@/src/components/CategoryNav";
import FeatureHomePart from "@/src/components/FeatureHomePart";

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
  metadataBase: new URL("https://www.citizencorrespondent.com"),
  title: "CitizenCorrespondent – Latest News & Breaking Stories 2025",
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
    "citizen correspondent",
    "news 2025",
    "current events",
    "news analysis",
    "journalism",
  ].join(", "),
  openGraph: {
    title: "CitizenCorrespondent – Latest News & Breaking Stories 2025",
    description: "Breaking news, analysis & coverage of world events, politics, business, technology & health. Trusted journalism in 2025.",
    url: "https://www.citizencorrespondent.com",
    siteName: "CitizenCorrespondent",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CitizenCorrespondent – Latest News & Breaking Stories 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/cc-favIcon.svg",
    shortcut: "/images/cc-favIcon.svg",
    apple: "/images/cc-favIcon.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "CitizenCorrespondent – Latest News & Breaking Stories 2025",
    description: "Breaking news, in-depth analysis & comprehensive coverage of world events, politics, business, technology & health. Trusted journalism in 2025.",
    images: ["/og-image.jpg"],
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
    canonical: "https://www.citizencorrespondent.com",
  },
};

export default async function HomePage() {
  const heroArticle = homeData.hero as HeroArticle;
  const sidebarItems = homeData.sidebar as SidebarItem[];
  const horizontalItems = homeData.horizontal as HorizontalSidebarItem[];
  const mainGridItems = mainGridData.mainGrid as MainGridItem[];

  // Preload critical hero image for LCP
  const heroImage = heroArticle.image;

  // Lazy load below-the-fold data
  const [
    mainGridTechnologyData,
    mainGridEnvironmentData,
    mainGridMoreNewsData,
    overlayGridPoliticsData,
    featureCategoryData,
    horizontalArticleData,
  ] = await Promise.all([
    import("@/public/data/homePage/home-mainGrid-technology.json"),
    import("@/public/data/homePage/home-mainGrid-environment.json"),
    import("@/public/data/homePage/home-mainGrid-moreNews.json"),
    import("@/public/data/homePage/home-overlayGrid-politics.json"),
    import("@/public/data/homePage/home-featureCategoryPart.json"),
    import("@/public/data/homePage/home-horizontalArticle.json"),
  ]);

  const mainGridTechnologyItems = mainGridTechnologyData.default.mainGrid as MainGridItem[];
  const mainGridEnvironmentItems = mainGridEnvironmentData.default.mainGrid as MainGridItem[];
  const mainGridMoreNewsItems = mainGridMoreNewsData.default.mainGrid as MainGridItem[];
  const overlayGridPoliticsItems = overlayGridPoliticsData.default.overlayGrid as OverlayArticleGridItem[];
  const featuredArticle = featureCategoryData.default.featuredArticle as FeaturedArticleCardProps;
  const rightArticles = featureCategoryData.default.rightArticles as ArticleCardSmallProps[];
  const adBanner = featureCategoryData.default.adBanner as AdBannerProps;
  const horizontalArticle = horizontalArticleData.default.article as HorizontalArticleCardProps;

  return (
    <>
      {/* Preload critical hero image for LCP */}
      <link rel="preload" as="image" href={heroImage} fetchPriority="high" />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CitizenCorrespondent",
            url: "https://www.citizencorrespondent.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.citizencorrespondent.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav currentPage="home" />
        <CategoryNav />


        <FeatureHomePart
          hero={heroArticle}
          sidebarItems={sidebarItems}
          horizontalItems={horizontalItems}
        />

        <div className="max-w-7xl mx-auto px-6 pb-12 border-t border-gray-200">
          <MainGrid items={mainGridItems} heading="World" />
        </div>

        {/* Visible heading with title keywords for SEO */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="text-1xl md:text-1xl font-bold text-gray-900 mb-2">
            Latest News & Breaking Stories 2025
          </div>
          <p className="text-base text-gray-700">
            Stay informed with the latest breaking news and stories from around the world. Get real-time updates on politics, business, technology, health, and more.
          </p>
        </div>

        <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100" />}>
          <div className="w-full py-2">
            <BigAddBanner />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
          <FeatureCategoryPart
            featuredArticle={featuredArticle}
            rightArticles={rightArticles}
            adBanner={adBanner}
            heading="Business News"
          />
        </Suspense>

        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <div className="max-w-7xl mx-auto px-6 py-2">
            <HorizontalArticleCard
              slug={horizontalArticle.slug}
              category={horizontalArticle.category}
              title={horizontalArticle.title}
              excerpt={horizontalArticle.excerpt}
              date={horizontalArticle.date}
              image={horizontalArticle.image}
              bookmarked={horizontalArticle.bookmarked}
              heading="Technology"
            />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <div className="max-w-7xl mx-auto pt-4 px-6 pb-12">
            <MainGridLazy items={mainGridTechnologyItems} />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100" />}>
          <div className="w-full py-2">
            <BigAddBanner />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <div className="max-w-7xl mx-auto px-6 pb-12">
            <MainGridLazy items={mainGridEnvironmentItems} heading="Environment" />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
          <div className="max-w-7xl mx-auto px-6 pb-12 border-t border-gray-200">
            <OverlayArticleGrid items={overlayGridPoliticsItems} heading="Politics" />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <div className="max-w-7xl mx-auto px-6 pb-12 border-t border-gray-200">
            <MainGridLazy items={mainGridMoreNewsItems} heading="More News" initialRows={2} />
        </div>
        </Suspense>

        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <Footer />
        </Suspense>
    </div>
    </>
  );
}
