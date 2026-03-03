import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import CategoryIntro from "@/src/components/CategoryIntro";
import CategoryLandingPart, {
  CategoryLandingPromo,
} from "@/src/components/CategoryLandingPart";
import MainGrid from "@/src/components/MainGrid";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import TrendingNews from "@/src/components/TrendingNews";
import businessData from "../../public/data/business.json";
import educationData from "../../public/data/education.json";
import featuredData from "../../public/data/featured.json";
import financeData from "../../public/data/finance.json";
import healthData from "../../public/data/health.json";
import hotData from "../../public/data/hot.json";
import opinionData from "../../public/data/opinion.json";
import politicsData from "../../public/data/politics.json";
import worldData from "../../public/data/world.json";
import globalaffairsData from "../../public/data/global-affairs.json";

interface Sub {
  title: string;
  descr: string;
}

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  date: string;
  topic: string;
  sub: Sub[];
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
  "global-affairs": globalaffairsData,
};

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));
}

const categoryDescriptions: Record<string, string> = {
  world:
    "Latest global news, international affairs, and world events. Breaking news, analysis, and expert perspectives on issues shaping our world in 2025.",
  business:
    "Latest business news, market updates, and industry insights. Coverage of startups, Fortune 500 companies, and stories for entrepreneurs and investors.",
  finance:
    "Financial news, market trends, and investment insights. Stock markets, cryptocurrencies, personal finance, and economic analysis for informed decisions.",
  politics:
    "Political coverage including elections, policy changes, and government affairs. Unbiased reporting on local, national, and international politics 2025.",
  opinion:
    "Insightful perspectives and thought-provoking opinions from columnists. Analysis on politics, policy, culture, and society's pressing issues.",
  education:
    "Latest education developments from K-12 to higher education. Policy changes, innovative teaching methods, student achievements, and learning's future.",
  "global-affairs":
    "In-depth coverage of international relations, diplomacy, and global events. How nations interact, cooperate, and address shared challenges.",
  featured:
    "Handpicked top stories, exclusive interviews, and must-read articles. The best of our journalism and the most important stories of 2025.",
  "climate-change":
    "Climate science, environmental policy, and sustainability coverage. Latest research, climate action, and solutions to address global warming.",
  hot: "Breaking news and trending stories everyone's talking about. Latest updates on viral topics, social media trends, and stories capturing global attention.",
  research:
    "Groundbreaking research, scientific discoveries, and academic studies. Latest findings in medicine, technology, and science shaping our world 2025.",
  health:
    "Health news, medical breakthroughs, wellness tips, and healthcare policy. Public health updates, medical research, and healthy lifestyle guidance.",
};

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const { category } = await params;
  const siteUrl = "https://www.qlork.com";
  const categoryUrl = `${siteUrl}/${category}`;

  const seoCategoryData: Record<
    string,
    { title: string; description: string }
  > = {
    business: {
      title:
        "Business News Today – Market Trends, Stock Updates & Expert Analysis",
      description:
        "Get the latest business news today, market trends, stock market updates, financial insights, and expert analysis on companies, startups, and the global economy.",
    },
    world: {
      title:
        "World News Today – Breaking Stories, Global Events & International Updates",
      description:
        "Stay updated with world news today, breaking stories, international events, global politics, and in-depth analysis on major developments from around the world.",
    },
    education: {
      title:
        "Education News Today – School Updates, Academic Trends & Policy Insights",
      description:
        "Get the latest education news today, school and university updates, academic trends, education policies, and expert insights on global learning and learning innovations.",
    },
    finance: {
      title:
        "Finance News Today – Stock Market Updates, Economy Insights & Investment Trends",
      description:
        "Stay updated with finance news today, real-time stock market updates, economic insights, investment trends, and expert analysis on global financial markets and business developments.",
    },
    featured: {
      title:
        "Featured Stories Today – Top News, Trending Topics & Breaking Updates",
      description:
        "Discover featured stories today, top news headlines, trending topics, breaking updates, and in-depth analysis across business, politics, technology, entertainment, and global events.",
    },
    health: {
      title:
        "Health News Today – Medical Updates, Wellness Tips & Global Health Trends",
      description:
        "Get the latest health news today, medical discoveries, wellness tips, public health updates, and insights on global health trends, fitness, and well-being.",
    },
    hot: {
      title:
        "Hot News Today – Trending Stories, Breaking Updates & Viral Headlines",
      description:
        "Stay updated with hot news today, trending stories, breaking updates, viral content, and top headlines from around the world across business, politics, technology, and entertainment.",
    },
    opinion: {
      title:
        "Opinion Today – Editorials, Expert Analysis & Commentary on Current Events",
      description:
        "Read opinion news today, expert editorials, in-depth analysis, and commentary on current events, politics, business, finance, and global affairs to stay informed and gain insights.",
    },
    politics: {
      title:
        "Politics News Today – Government Updates, Policy Changes & Election Coverage",
      description:
        "Get the latest politics news today, government updates, policy changes, election coverage, political analysis, and expert commentary on national and international political developments.",
    },
    "global-affairs": {
      title:
        "Global Affairs Today – International News, Diplomacy & World Politics",
      description:
        "Stay updated with global affairs news today, international relations updates, diplomatic developments, and expert analysis on world politics, global events, and international policy.",
    },
  };

  const seoData = seoCategoryData[category];

  if (!seoData) {
    return {
      title: "Category Not Found – Qlork",
      description: "The requested news category does not exist.",
      robots: { index: false, follow: false },
    };
  }

  const dataMap: Record<string, any> = {
    business: businessData,
    world: worldData,
    education: educationData,
    finance: financeData,
    featured: featuredData,
    health: healthData,
    hot: hotData,
    opinion: opinionData,
    politics: politicsData,
    "global-affairs": globalaffairsData,
  };

  const data = dataMap[category];
  const firstArticle = data && data.length > 0 ? data[0] : null;

  const image =
    firstArticle && firstArticle.image
      ? firstArticle.image.startsWith("http")
        ? firstArticle.image
        : `${siteUrl}${firstArticle.image}`
      : `${siteUrl}/images/news-img/qlork-logo.webp`;

  return {
    title: seoData.title,
    description: seoData.description,
    alternates: {
      canonical: categoryUrl,
    },
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: categoryUrl,
      siteName: "Qlork",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: firstArticle?.title || "Qlork News",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      images: [image],
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
    buttonHref: "/",
  };

  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="hidden">
          {data[0].category} News – Latest Stories 2025
        </div>
        <DateBar />
        <MainNav />
        <TrendingNews />
        <CategoryIntro
          categoryName={data[0].category}
          relatedTopics={relatedCategories}
        />

        <CategoryLandingPart
          mainFeature={data[0]}
          articles={[data[1], data[2]]}
          promo={promo}
        />

        <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-400">
          <MainGrid
            items={[data[3], data[4], data[5], data[6], data[7], data[8]]}
            heading="More Headlines"
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
