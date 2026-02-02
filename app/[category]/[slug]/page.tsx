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
import TrendingNews from "@/src/components/TrendingNews";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
    category:string;
  }>;
}

interface ArticleData {
  slug: string;
  category: string;
  title: string;
  introText: string;
  shortdescription?: string;
  summary:string;
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


const normalizeCategory = (category: string): string =>
  category.toLowerCase().trim().replace(/\s+/g, "-");

export async function generateMetadata(
  { params }: ArticlePageProps
): Promise<Metadata> {
  const { slug, category } = await params;
  let articleData: ArticleData;

  try {
    articleData = (
      await import(`@/public/data/articleDetail/${slug}.json`)
    ).default as ArticleData;
  } catch {
    return {
      title: "Article Not Found | CitizenCorrespondent",
      robots: { index: false, follow: false },
    };
  }

  const normalizeCategory = (value: string) =>
    value.toLowerCase().trim().replace(/\s+/g, "-");

  const categorySlug = normalizeCategory(articleData.category);

  const url = `https://www.citizencorrespondent.com/${categorySlug}/${slug}`;

  // --- Description ---
  const rawDescription =
    articleData.shortdescription ||
    articleData.introText ||
    articleData.title;

  const optimizedDescription =
    rawDescription.length > 155
      ? rawDescription.substring(0, 152).trim() + "..."
      : rawDescription;

  // --- Image ---
  const getImageUrl = (): string => {
    if (articleData.heroImage) {
      return articleData.heroImage.startsWith("/")
        ? `https://www.citizencorrespondent.com${articleData.heroImage}`
        : articleData.heroImage;
    }

    const firstImageBlock = articleData.content?.find(
      (block) => block.type === "image"
    );

    if (firstImageBlock) {
      const imageValue =
        firstImageBlock.imageUrl || firstImageBlock.content;
      if (imageValue) {
        return imageValue.startsWith("/")
          ? `https://www.citizencorrespondent.com${imageValue}`
          : imageValue;
      }
    }

    return "https://www.citizencorrespondent.com/images/citizen-correspondent-logo.webp";
  };

  const imageUrl = getImageUrl();

  // --- Title ---
  const baseTitle =
    articleData.title.length > 50
      ? articleData.title.substring(0, 47).trim() + "..."
      : articleData.title;

  return {
    metadataBase: new URL("https://www.citizencorrespondent.com"),
    title: `${baseTitle} | CitizenCorrespondent`,
    description: optimizedDescription,

    alternates: {
      canonical: url,
    },

    keywords: [
      articleData.category.toLowerCase(),
      `${articleData.category.toLowerCase()} news`,
      "news",
      "latest news",
      "breaking news",
      "citizen correspondent",
      articleData.author.name,
      articleData.title
        .split(" ")
        .slice(0, 5)
        .join(" ")
        .toLowerCase(),
      articleData.shortdescription
        ?.split(" ")
        .slice(0, 5)
        .join(" ")
        .toLowerCase(),
    ]
      .filter(Boolean)
      .join(", "),

    openGraph: {
      title: baseTitle,
      description: optimizedDescription,
      url,
      siteName: "CitizenCorrespondent",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: articleData.title,
        },
      ],
      publishedTime: articleData.date || articleData.lastUpdated,
      modifiedTime: articleData.lastUpdated,
      authors: [articleData.author.name],
      section: articleData.category,
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: optimizedDescription,
      images: [imageUrl],
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

    icons: {
      icon: "/images/cc-favIcon.svg",
      shortcut: "/images/cc-favIcon.svg",
      apple: "/images/cc-favIcon.svg",
    },
  };
}

// Generate static params for all articles at build time
// export async function generateStaticParams() {
//   const fs = require("fs");
//   const path = require("path");
//   const dir = path.join(process.cwd(), "public/data/articleDetail");

//   if (!fs.existsSync(dir)) return [];

//   return fs
//     .readdirSync(dir)
//     .filter((f: string) => f.endsWith(".json") && f !== "article-example.json" && f !== "article-sidebar.json")
//     .map((f: string) => ({ slug: f.replace(".json", "") }));
// }

export async function generateStaticParams() {
  const fs = require("fs");
  const path = require("path");
  const dir = path.join(process.cwd(), "public/data/articleDetail");

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter(
      (f: string) =>
        f.endsWith(".json") &&
        f !== "article-example.json" &&
        f !== "article-sidebar.json"
    )
    .map((f: string) => {
      const data = JSON.parse(
        fs.readFileSync(path.join(dir, f), "utf-8")
      ) as ArticleData;

      return {
        slug: data.slug,
        category: normalizeCategory(data.category),
      };
    });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
 const { slug, category } = await params;

  let articleData: ArticleData;

  try {
    articleData = (await import(`@/public/data/articleDetail/${slug}.json`)).default as ArticleData;
  } catch {
    notFound();
  }
    const categorySlug = normalizeCategory(articleData.category);

     if (category !== categorySlug) {
    notFound();
  }

  // Load sidebar data for article pages
  const sidebarData = await import("@/public/data/articleDetail/article-sidebar.json").then((m) => m.default);
  const sidebarItems = sidebarData.sidebar as SidebarItem[];

  // Load "You May Also Like" data
  const youMayAlsoLikeData = await import("@/public/data/homePage/home-mainGrid-moreNews.json").then((m) => m.default);
  const youMayAlsoLikeItems = youMayAlsoLikeData.mainGrid.slice(0, 8) as MainGridItem[];

  // Get image for JSON-LD schema - use heroImage if available, otherwise extract first image from content
  const getSchemaImageUrl = (): string => {
    if (articleData.heroImage) {
      // Convert relative URLs to absolute URLs
      return articleData.heroImage.startsWith('/') ? `https://www.citizencorrespondent.com${articleData.heroImage}` : articleData.heroImage;
    }

    // Look for the first image in content array
    if (articleData.content && Array.isArray(articleData.content)) {
      const firstImageBlock = articleData.content.find(block => block.type === 'image');
      if (firstImageBlock) {
        // Check for imageUrl first (higher priority), then fallback to content field
        const imageValue = firstImageBlock.imageUrl || firstImageBlock.content;
        if (imageValue) {
          // Convert relative URLs to absolute URLs
          return imageValue.startsWith('/') ? `https://www.citizencorrespondent.com${imageValue}` : imageValue;
        }
      }
    }


    // Fallback to a default image if no image is found
    return "https://www.citizencorrespondent.com/images/citizen-correspondent-logo.webp";
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
        url: "https://www.citizencorrespondent.com/images/citizen-correspondent-logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.citizencorrespondent.com/${categorySlug}/${slug}`,
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
  if (schemaImageUrl && schemaImageUrl !== "https://www.citizencorrespondent.com/images/citizen-correspondent-logo.webp") {
    schemaData.image = {
      "@type": "ImageObject",
      url: schemaImageUrl,
      width: 1200,
      height: 630,
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <div className="bg-white min-h-screen">
        <div className="hidden">{articleData.title} | CitizenCorrespondent</div>
        <DateBar />
        <MainNav />
        {/* <CategoryNav /> */}
        <TrendingNews />
        <div className="">
          <ArticleWithSidebar
            article={{
              slug: articleData.slug,
              category: articleData.category,
              title: articleData.title,
              introText: articleData.introText,
              readingTime: articleData.readingTime,
              author: articleData.author,
              lastUpdated: articleData.lastUpdated,
              summary:articleData.summary,
              content: articleData.content as ArticleContentBlock[],
              bookmarked: articleData.bookmarked,
            }}
            sidebarItems={sidebarItems}
            sidebarHeading="Latest News"
          />

          {/* You May Also Like Section */}
          <div className="max-w-360 mx-auto px-2 md:px-16 pb-12 border-t border-gray-200">
            <MainGrid items={youMayAlsoLikeItems} heading="You May Also Like" />
          </div>

          {/* Article Page Navigation */}
          <div className="mb-5">
          <ArticlePageNav />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
