import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import CategoryNav from "@/src/components/CategoryNav";
import CategoryIntro from "@/src/components/CategoryIntro";
import CategoryLandingPart, {
    CategoryLandingMainFeature,
    CategoryLandingArticle,
    CategoryLandingPromo,
} from "@/src/components/CategoryLandingPart";
import { FeaturedArticleCardProps } from "@/src/components/FeaturedArticleCard";
import { ArticleCardSmallProps } from "@/src/components/ArticleCardSmall";
import { AdBannerProps } from "@/src/components/AdBanner";
import MainGrid, { MainGridItem } from "@/src/components/MainGrid";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import TrendingNews from "@/src/components/TrendingNews";

import businessData from '../../public/data/business.json';
import educationData from '../../public/data/education.json';
import featuredData from '../../public/data/featured.json';
import financeData from '../../public/data/finance.json';
import healthData from '../../public/data/health.json';
import hotData from '../../public/data/hot.json';
import opinionData from '../../public/data/opinion.json';
import politicsData from '../../public/data/politics.json';
import worldData from '../../public/data/world.json';
import globalaffairsData from '../../public/data/global-affairs.json';

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

interface Sub {
    title:string;
    descr:string;
}
interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  date: string;
  sub:Sub[];
}


const allData: Record<string, NewsItem[]> = {
  business: businessData,
  world: worldData,
  education: educationData,
  finance: financeData,
  featured: featuredData,
  health: healthData,
  hot: hotData,
  opinion: opinionData,
  politics: politicsData,
  "global-affairs": globalaffairsData
};

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));

}


const categoryDescriptions: Record<string, string> = {
    world: "Latest global news, international affairs, and world events. Breaking news, analysis, and expert perspectives on issues shaping our world in 2025.",
    business: "Latest business news, market updates, and industry insights. Coverage of startups, Fortune 500 companies, and stories for entrepreneurs and investors.",
    finance: "Financial news, market trends, and investment insights. Stock markets, cryptocurrencies, personal finance, and economic analysis for informed decisions.",
    politics: "Political coverage including elections, policy changes, and government affairs. Unbiased reporting on local, national, and international politics 2025.",
    opinion: "Insightful perspectives and thought-provoking opinions from columnists. Analysis on politics, policy, culture, and society's pressing issues.",
    education: "Latest education developments from K-12 to higher education. Policy changes, innovative teaching methods, student achievements, and learning's future.",
    "global-affairs": "In-depth coverage of international relations, diplomacy, and global events. How nations interact, cooperate, and address shared challenges.",
    featured: "Handpicked top stories, exclusive interviews, and must-read articles. The best of our journalism and the most important stories of 2025.",
    "renewable-energy": "Latest renewable energy developments, sustainable technology, and green initiatives. Solar, wind, hydroelectric, and clean energy solutions 2025.",
    "climate-change": "Climate science, environmental policy, and sustainability coverage. Latest research, climate action, and solutions to address global warming.",
    hot: "Breaking news and trending stories everyone's talking about. Latest updates on viral topics, social media trends, and stories capturing global attention.",
    research: "Groundbreaking research, scientific discoveries, and academic studies. Latest findings in medicine, technology, and science shaping our world 2025.",
    health: "Health news, medical breakthroughs, wellness tips, and healthcare policy. Public health updates, medical research, and healthy lifestyle guidance.",
};

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {

  const { category } = params;
  const siteUrl = "https://www.prpromotionhub.com";
  const categoryUrl = `${siteUrl}/${category}`;

  const data = allData[category];

  if (!data || data.length === 0) {
    return {
      title: "Category Not Found – PR Promotion Hub",
      robots: { index: false, follow: false },
    };
  }

  const firstArticle = data[0];

  const image =
    firstArticle.image.startsWith("http")
      ? firstArticle.image
      : `${siteUrl}${firstArticle.image}`;

  return {
    title: `${firstArticle.category} News – PR Promotion Hub`,
    description: `Latest ${firstArticle.category} news, updates, and analysis.`,
    alternates: {
      canonical: categoryUrl,
    },
    openGraph: {
      title: `${firstArticle.category} News – PR Promotion Hub`,
      description: `Latest ${firstArticle.category} news and updates.`,
      url: categoryUrl,
      siteName: "PR Promotion Hub",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}


export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {

    const { category } = await params;
    
    const relatedCategories = Object.keys(allData)
    .filter((cat) => cat !== category) 
    .slice(0, 4);
    
    const data = allData[category];
 
  if (!data) {
  notFound();
}

    const promo: CategoryLandingPromo = {
        title: `Impressive ${data[0].category} News Coverage`,
        body: `Stay informed with the latest ${data[0].category} news, insights, and analysis. Get comprehensive coverage of breaking stories, key trends, and major developments shaping the ${data[0].category} landscape. Our reporting brings context, clarity, and updates to help readers understand the issues that matter most. From policy decisions to real-world impacts, our journalism aims to inform and engage a broad audience worldwide across diverse global perspectives. Coverage is guided by accuracy, independence, and a commitment to responsible reporting with depth and balance.`,
        buttonLabel: "Explore More",
        buttonHref: `/${category}`,
    };

    return (
        <>
           

            <div className="bg-white min-h-screen">
                <div className="hidden">{data[0].category} News – Latest Stories 2025</div>
                <DateBar />
                <MainNav />
                {/* <CategoryNav /> */}
                <TrendingNews />
                <CategoryIntro
                    categoryName={data[0].category}
                  
                    relatedTopics={relatedCategories}
                />

                <CategoryLandingPart
                    mainFeature={data[0]}
                    articles={[data[1],data[2]]}
                    promo={promo}
                />

                <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-400">
                    <MainGrid items={[data[3],data[4],data[5],data[6],data[7],data[8]]} heading={data[0].category} />
                </div>

                <Footer />
            </div>
        </>
    );
}


