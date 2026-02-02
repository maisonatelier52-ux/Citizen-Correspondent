import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import CategoryNav from "@/src/components/CategoryNav";
import OverlayArticleGrid from "@/src/components/OverlayArticleGrid";
import BigAddBanner from "@/src/components/BigAddBanner";
import MainGrid from "@/src/components/MainGrid";
import Footer from "@/src/components/Footer";
import { Metadata } from "next";

import overlayData from "@/public/data/blogPage/blog-overlayGrid.json";
import mainGridData from "@/public/data/blogPage/blog-mainGrid.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.citizencorrespondent.com"),
  title: "Blog | CitizenCorrespondent – Curated Articles & In-Depth Analysis",
  description: "Explore our blog for curated articles, in-depth analysis, and featured stories across politics, business, technology, health, climate change, and more. Stay informed with expert insights and comprehensive coverage.",
  keywords: [
    "blog",
    "news blog",
    "articles",
    "in-depth analysis",
    "featured stories",
    "opinion pieces",
    "editorials",
    "citizen correspondent blog",
    "news analysis",
    "journalism",
  ].join(", "),
  openGraph: {
    title: "Blog | CitizenCorrespondent – Curated Articles & In-Depth Analysis",
    description: "Explore our blog for curated articles, in-depth analysis, and featured stories across politics, business, technology, health, and more.",
    url: "https://www.citizencorrespondent.com/blog",
    siteName: "CitizenCorrespondent",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.citizencorrespondent.com/images/citizen-correspondent-logo.webp",
        width: 1200,
        height: 630,
        alt: "Blog | CitizenCorrespondent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | CitizenCorrespondent",
    description: "Explore our blog for curated articles, in-depth analysis, and featured stories.",
    images: ["https://www.citizencorrespondent.com/images/citizen-correspondent-logo.webp"],
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
    canonical: "https://www.citizencorrespondent.com/blog",
  },
  icons: {
    icon: "/images/cc-favIcon.svg",
    shortcut: "/images/cc-favIcon.svg",
    apple: "/images/cc-favIcon.svg",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Blog – CitizenCorrespondent",
            description: "Explore our blog for curated articles, in-depth analysis, and featured stories across politics, business, technology, health, and more.",
            url: "https://www.citizencorrespondent.com/blog",
            publisher: {
              "@type": "Organization",
              name: "CitizenCorrespondent",
              logo: {
                "@type": "ImageObject",
                url: "https://www.citizencorrespondent.com/images/citizen-correspondent-logo.webp",
              },
            },
          }),
        }}
      />

      <main className="min-h-screen bg-white">
        <div className="hidden">Blog | CitizenCorrespondent – Curated Articles & In-Depth Analysis</div>
        <DateBar />
        <MainNav />
        <CategoryNav />

      {/* Overlay Article Grid */}
      <section className="max-w-360 mx-auto px-16 py-6">
        <h1 className="text-3xl font-bold hidden text-gray-900 mb-6">Blog</h1>
        <OverlayArticleGrid items={overlayData.overlayArticles.map(item => ({
          ...item,
          category: item.category || item.categories || 'Uncategorized'
        }))} />
      </section>

      {/* Ad Banner */}
      <div className="w-full py-2">
        <BigAddBanner />
      </div>

      {/* Main Grid */}
      <section className="max-w-360 mx-auto px-16 py-8">
        <MainGrid
          items={mainGridData.mainGrid}
          heading="Latest Articles"
          initialRows={3}
        />
      </section>

      <Footer />
      </main>
    </>
  );
}

