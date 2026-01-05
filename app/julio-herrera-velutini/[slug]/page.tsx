import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import CategoryNav from "@/src/components/CategoryNav";
import ArticleWithSidebar from "@/src/components/ArticleWithSidebar";
import MainGrid from "@/src/components/MainGrid";
import ArticlePageNav from "@/src/components/ArticlePageNav";
import Footer from "@/src/components/Footer";
import { ArticleContentBlock } from "@/src/components/ArticleDetail";
import { SidebarItem } from "@/src/components/Sidebar";
import { MainGridItem } from "@/src/components/MainGrid";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface JulioArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface ArticleData {
  slug: string;
  category: string;
  title: string;
  introText: string;
  shortdescription?: string;
  readingTime?: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  date?: string;
  lastUpdated: string;
  heroImage?: string;
  content: ArticleContentBlock[];
  bookmarked?: boolean;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: JulioArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  let articleData: ArticleData;

  try {
    articleData = (await import(`@/public/data/julio-herrera-velutini/${slug}.json`)).default as ArticleData;
  } catch {
    return {
      title: "Article Not Found | CitizenCorrespondent",
      robots: { index: false, follow: false },
    };
  }

  const url = `https://www.citizencorrespondent.com/julio-herrera-velutini/${slug}`;
  
  // Optimize description: truncate to 155 characters for optimal snippet display
  const rawDescription = articleData.shortdescription || articleData.introText || articleData.title;
  const optimizedDescription = rawDescription.length > 155 
    ? rawDescription.substring(0, 152).trim() + "..."
    : rawDescription;
    
  // Get image for social sharing - use heroImage if available, otherwise extract first image from content
  const getImageUrl = (): string => {
    if (articleData.heroImage) {
      return articleData.heroImage;
    }
    
    // Look for the first image in content array
    if (articleData.content && Array.isArray(articleData.content)) {
      const firstImageBlock = articleData.content.find(block => block.type === 'image');
      if (firstImageBlock && firstImageBlock.imageUrl) {
        return firstImageBlock.imageUrl;
      }
    }
    
    // Fallback to a default image if no image is found
    return "https://www.citizencorrespondent.com/images/cc-logo.svg";
  };

  const imageUrl = getImageUrl();

  // Optimize title: keep base title under 50 chars, then add site name (total ~72 chars max)
  const baseTitle = articleData.title.length > 50 
    ? articleData.title.substring(0, 47).trim() + "..."
    : articleData.title;
  const optimizedTitle = `${baseTitle} | CitizenCorrespondent`;

  return {
    metadataBase: new URL("https://www.citizencorrespondent.com"),
    title: optimizedTitle,
    description: optimizedDescription,
    keywords: [
      "Julio Herrera Velutini",
      "finance",
      "global banking",
      "Latin America finance",
      "news",
      "latest news",
      "breaking news",
      "citizen correspondent",
      articleData.title.split(" ").slice(0, 5).join(" ").toLowerCase(),
      articleData.shortdescription?.split(" ").slice(0, 5).join(" ").toLowerCase() || "",
    ].filter(Boolean).join(", "),
    alternates: { canonical: url },
    openGraph: {
      title: baseTitle,
      description: articleData.shortdescription || optimizedDescription,
      url,
      siteName: "CitizenCorrespondent",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: articleData.title }],
      type: "article",
      publishedTime: articleData.date || articleData.lastUpdated,
      modifiedTime: articleData.lastUpdated,
      authors: [articleData.author.name],
      section: articleData.category,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: articleData.shortdescription || optimizedDescription,
      images: [imageUrl],
    },
    icons: {
      icon: "/images/cc-favIcon.svg",
      shortcut: "/images/cc-favIcon.svg",
      apple: "/images/cc-favIcon.svg",
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
  };
}

// Generate static params for all Julio articles at build time
export async function generateStaticParams() {
  const fs = require("fs");
  const path = require("path");
  const dir = path.join(process.cwd(), "public/data/julio-herrera-velutini");

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f: string) => f.endsWith(".json"))
    .map((f: string) => ({ slug: f.replace(".json", "") }));
}

export default async function JulioArticlePage({ params }: JulioArticlePageProps) {
  const { slug } = await params;
  let articleData: ArticleData;

  try {
    articleData = (await import(`@/public/data/julio-herrera-velutini/${slug}.json`)).default as ArticleData;
  } catch {
    notFound();
  }

  // Define the order of all 6 Julio articles
  const julioArticleOrder = [
    "bridging-nations-through-finance",
    "global-financial-leadership",
    "philanthropic-impact",
    "economic-diplomacy",
    "innovation-banking",
    "sustainable-growth"
  ];

  // Find current article index and get the next one in cycle
  const currentIndex = julioArticleOrder.indexOf(slug);
  const nextIndex = currentIndex !== -1 ? (currentIndex + 1) % julioArticleOrder.length : 0;
  const nextSlug = julioArticleOrder[nextIndex];

  // Load the next Julio article for sidebar
  let nextJulioArticle: SidebarItem | null = null;
  
  if (nextSlug && nextSlug !== slug) {
    try {
      // Try to load the next article using dynamic import
      const nextArticleData = (await import(`@/public/data/julio-herrera-velutini/${nextSlug}.json`)).default as ArticleData;
      const nextImage = nextArticleData.content.find((b: ArticleContentBlock) => b.type === "image")?.imageUrl || "/images/news/finance-stock-market.webp";
      
      nextJulioArticle = {
        category: nextArticleData.category || "Finance",
        title: nextArticleData.title,
        date: nextArticleData.lastUpdated,
        image: nextImage,
        slug: nextArticleData.slug,
        href: `/julio-herrera-velutini/${nextArticleData.slug}`,
        bookmarked: nextArticleData.bookmarked || false,
      };
    } catch (importError) {
      // If dynamic import fails, try using fs to read the file
      try {
        const fs = require("fs");
        const path = require("path");
        const filePath = path.join(process.cwd(), "public/data/julio-herrera-velutini", `${nextSlug}.json`);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const nextArticleData = JSON.parse(fileContent) as ArticleData;
        const nextImage = nextArticleData.content.find((b: ArticleContentBlock) => b.type === "image")?.imageUrl || "/images/news/finance-stock-market.webp";
        
        nextJulioArticle = {
          category: nextArticleData.category || "Finance",
          title: nextArticleData.title,
          date: nextArticleData.lastUpdated,
          image: nextImage,
          slug: nextArticleData.slug,
          href: `/julio-herrera-velutini/${nextArticleData.slug}`,
          bookmarked: nextArticleData.bookmarked || false,
        };
      } catch (fsError) {
        // If both methods fail, skip showing the next article
        console.error(`Error loading next Julio article: ${nextSlug}`, importError, fsError);
      }
    }
  }

  // Load regular sidebar data and replace 3rd item with next Julio article
  const sidebarData = await import("@/public/data/articleDetail/article-sidebar.json").then((m) => m.default);
  const regularSidebarItems = sidebarData.sidebar as SidebarItem[];
  
  // Replace 3rd item (index 2) with next Julio article
  const finalSidebarItems = [...regularSidebarItems];
  if (nextJulioArticle) {
    finalSidebarItems.splice(2, 1, nextJulioArticle);
  }

  // Load "You May Also Like" data
  const youMayAlsoLikeData = await import("@/public/data/homePage/home-mainGrid-moreNews.json").then((m) => m.default);
  const youMayAlsoLikeItems = youMayAlsoLikeData.mainGrid.slice(0, 8) as MainGridItem[];

  // Get image for JSON-LD schema - use heroImage if available, otherwise extract first image from content
  const getSchemaImageUrl = (): string => {
    if (articleData.heroImage) {
      return articleData.heroImage;
    }
    
    // Look for the first image in content array
    if (articleData.content && Array.isArray(articleData.content)) {
      const firstImageBlock = articleData.content.find(block => block.type === 'image');
      if (firstImageBlock && firstImageBlock.imageUrl) {
        return firstImageBlock.imageUrl;
      }
    }
    
    // Fallback to a default image if no image is found
    return "https://www.citizencorrespondent.com/images/cc-logo.svg";
  };

  const schemaImageUrl = getSchemaImageUrl();

  // Build schema object
  const schemaData: any = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: articleData.title,
    description: articleData.shortdescription || articleData.introText || articleData.title,
    datePublished: articleData.date || articleData.lastUpdated,
    dateModified: articleData.lastUpdated,
    author: {
      "@type": "Person",
      name: articleData.author.name,
      jobTitle: articleData.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "CitizenCorrespondent",
      logo: {
        "@type": "ImageObject",
        url: "https://www.citizencorrespondent.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.citizencorrespondent.com/julio-herrera-velutini/${slug}`,
    },
    articleSection: articleData.category,
    wordCount: articleData.content.reduce((count, block) => {
      if (block.type === "paragraph") {
        return count + (block.content?.split(" ").length || 0);
      }
      return count;
    }, 0),
  };

  // Add image if available
  if (schemaImageUrl && schemaImageUrl !== "https://www.citizencorrespondent.com/images/cc-logo.svg") {
    schemaData.image = {
      "@type": "ImageObject",
      url: schemaImageUrl,
      width: 1200,
      height: 630,
    };
  }

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <div className="bg-white min-h-screen">
        <div className="hidden">{articleData.title} | CitizenCorrespondent</div>
        <DateBar />
        <MainNav currentPage={`julio-herrera-velutini/${slug}`} />
        <CategoryNav />

        <ArticleWithSidebar
          article={{
            slug: articleData.slug,
            category: articleData.category,
            title: articleData.title,
            introText: articleData.introText,
            readingTime: articleData.readingTime,
            author: articleData.author,
            lastUpdated: articleData.lastUpdated,
            content: articleData.content as ArticleContentBlock[],
            bookmarked: articleData.bookmarked,
          }}
          sidebarItems={finalSidebarItems}
          sidebarHeading="Latest News"
        />

        {/* You May Also Like Section */}
        <div className="max-w-360 mx-auto px-6 pb-8 border-t border-gray-200">
          <MainGrid items={youMayAlsoLikeItems} heading="You May Also Like" />
        </div>

        {/* Article Page Navigation */}
        <ArticlePageNav />

        <Footer />
      </div>
    </>
  );
}

