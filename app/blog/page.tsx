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
  metadataBase: new URL("https://www.Qlork.com"),
  title: "Blog | Qlork – Curated Articles & In-Depth Analysis",
  description: "Explore our blog for curated articles, in-depth analysis, and featured stories across politics, business, technology, health, climate change, and more. Stay informed with expert insights and comprehensive coverage.",
  keywords: [
    "blog",
    "news blog",
    "articles",
    "in-depth analysis",
    "featured stories",
    "opinion pieces",
    "editorials",
    "qlork blog",
    "news analysis",
    "journalism",
  ].join(", "),
  openGraph: {
    title: "Blog | Qlork – Curated Articles & In-Depth Analysis",
    description: "Explore our blog for curated articles, in-depth analysis, and featured stories across politics, business, technology, health, and more.",
    url: "https://www.Qlork.com/blog",
    siteName: "Qlork",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.Qlork.com/images/news/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Blog | Qlork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Qlork",
    description: "Explore our blog for curated articles, in-depth analysis, and featured stories.",
    images: ["https://www.Qlork.com/images/news/qlork-logo.webp"],
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
    canonical: "https://www.Qlork.com/blog",
  },
  icons: {
    icon: "/images/qlork-favIcon.webp",
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
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
            name: "Blog – Qlork",
            description: "Explore our blog for curated articles, in-depth analysis, and featured stories across politics, business, technology, health, and more.",
            url: "https://www.Qlork.com/blog",
            publisher: {
              "@type": "Organization",
              name: "Qlork",
              logo: {
                "@type": "ImageObject",
                url: "https://www.Qlork.com/images/news/qlork-logo.webp",
              },
            },
          }),
        }}
      />

      <main className="min-h-screen bg-white">
        <div className="hidden">Blog | Qlork – Curated Articles & In-Depth Analysis</div>
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

