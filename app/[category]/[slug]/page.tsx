import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import ArticleWithSidebar from "@/src/components/ArticleWithSidebar";
import MainGrid from "@/src/components/MainGrid";
import ArticlePageNav from "@/src/components/ArticlePageNav";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import TrendingNews from "@/src/components/TrendingNews";
import businessData from '../../../public/data/business.json';
import educationData from '../../../public/data/education.json';
import featuredData from '../../../public/data/featured.json';
import financeData from '../../../public/data/finance.json';
import healthData from '../../../public/data/health.json';
import hotData from '../../../public/data/hot.json';
import opinionData from '../../../public/data/opinion.json';
import politicsData from '../../../public/data/politics.json';
import worldData from '../../../public/data/world.json';
import globalaffairsData from '../../../public/data/global-affairs.json';

  export async function generateStaticParams() {
    const allData = [
      { category: 'business', articles: businessData },
      { category: 'education', articles: educationData },
      { category: 'featured', articles: featuredData },
      { category: 'world', articles: worldData },
      { category: 'health', articles: healthData },
      { category: 'hot', articles: hotData },
      { category: 'finance', articles: financeData },
      { category: 'opinion', articles: opinionData },
      { category: 'politics', articles: politicsData },
      { category: 'global-affairs', articles: globalaffairsData },


    ];

 
    const params = allData.flatMap(({ category, articles }) =>
      articles.map((article) => ({
        category,
        slug: article.slug,
      }))
    );

    return params;
  }

  interface Sub {
    title:string;
    descr:string;
  }
  interface Author{
    name:string;
    role:string;
    image:string;
  }
    interface NewsItem {
    category: string;
    title: string;
    shortdescription: string;
    image: string;
    slug: string;
    sub: Sub[];
    topic:string;
    date: string;
    author:Author;
  }
  
   interface DetailPageProps {
    params: Promise<{ category: string, slug: string }>;
  }

  const allData: Record<string, NewsItem[]> = {
    business: businessData,
    education: educationData,
    world: worldData,
    featured: featuredData,
    finance: financeData,
    health: healthData,
    politics: politicsData,
    hot:hotData,
    opinion:opinionData,
    "global-affairs":globalaffairsData
  };

export async function generateMetadata(
    { params }: DetailPageProps
  ): Promise<Metadata> {
    const { category, slug } = await params;

    const allDataMap: Record<string, NewsItem[]> = {
      business: businessData,
    education: educationData,
    world: worldData,
    featured: featuredData,
    finance: financeData,
    health: healthData,
    politics: politicsData,
    hot:hotData,
    "global-affairs":globalaffairsData

    };

    const articles = allDataMap[category] || [];
    const article = articles.find((a) => a.slug === slug);

    const siteUrl = "https://www.prpromotionhub.com";
    const currentUrl = `${siteUrl}/${category}/${slug}`;

    const imageUrl =
      article?.image?.startsWith("http")
        ? article.image
        : `${siteUrl}${article?.image || "/images/pr-logo.webp"}`;

    if (!article) {
      return {
        title: "Article Not Found – PR Promotion Hub",
        description: "The requested article could not be found.",
        robots: { index: false, follow: false },
      };
    }

    // const slugOverride = slugMetadataMap[slug] || {};

    return {
      title:  article.title,
      description:
        article.shortdescription,

      keywords: `${article.category}, pr news, marketing news, business news, ${article.title}`,

      // authors: [{ name: article.author.name }],

      alternates: {
        canonical: currentUrl,
      },

      openGraph: {
        title: article.title,
        description: article.shortdescription,
        url: currentUrl,
        siteName: "PR Promotion Hub",
        locale: "en_US",
        type: "article",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.shortdescription,
        images: [imageUrl],
        site: "@prpromotionhub",
        creator: "@prpromotionhub",
      },

      other: {
        "script:ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: article.title,
          description: article.shortdescription,
          datePublished: article.date,
          dateModified: article.date,
          author: {
            "@type": "Person",
            // name: article.author,
          },
          publisher: {
            "@type": "Organization",
            name: "PR Promotion Hub",
            logo: {
              "@type": "ImageObject",
              url: `${siteUrl}/images/pr-logo.webp`,
            },
          },
          image: imageUrl,
          url: currentUrl,
          articleBody: article.shortdescription?.slice(0, 200),
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": currentUrl,
          },
          keywords: `${article.category}, pr news, marketing, business`,
        }),
      },
    };
  }

  export default async function DetailPage({ params }: DetailPageProps) {
    const { category, slug } = await params;
    const data = allData[category?.toLowerCase()];

 if (!data) {
  notFound();
}
    const article = data.find(item => item.slug === slug);
 if (!article) {
  notFound();
}

const relatedArticles = data.filter(item => item.slug !== slug);

const sidebarItems = relatedArticles.slice(0, 3);
const youMayAlsoLikeItems = relatedArticles.slice(3,8);

  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="hidden">{article.title} | Qlork</div>
        <DateBar />
        <MainNav />
        <TrendingNews />
        <div className="">
          <ArticleWithSidebar
            article={{
              slug: article.slug,
              category: article.category,
              title: article.title,
              shortdescription: article.shortdescription,
              author: article.author,
              image:article.image,
              date: article.date,
              sub: article.sub,
              topic:article.topic
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
