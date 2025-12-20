import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import CategoryNav from "@/src/components/CategoryNav";
import CategoryIntro from "@/src/components/CategoryIntro";
import FeatureCategoryPart from "@/src/components/FeatureCategoryPart";
import { FeaturedArticleCardProps } from "@/src/components/FeaturedArticleCard";
import { ArticleCardSmallProps } from "@/src/components/ArticleCardSmall";
import { AdBannerProps } from "@/src/components/AdBanner";
import MainGrid, { MainGridItem } from "@/src/components/MainGrid";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Map slug to category name
const slugToCategory: Record<string, string> = {
  world: "World",
  business: "Business",
  finance: "Finance",
  politics: "Politics",
  opinion: "Opinion",
  education: "Education",
  "global-affairs": "Global Affairs",
  featured: "Featured",
  "renewable-energy": "Renewable Energy",
  "climate-change": "Climate Change",
  hot: "Hot",
  research: "Research",
  health: "Health",
};

// Category descriptions
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

// All available categories for related topics
const allCategories = [
  "Business",
  "Finance",
  "Politics",
  "World",
  "Health",
  "Education",
  "Research",
  "Opinion",
  "Global Affairs",
  "Featured",
  "Hot",
  "Renewable Energy",
  "Climate Change",
];

// Function to get related topics, excluding the current category
const getRelatedTopics = (currentCategory: string) => {
  const filteredCategories = allCategories.filter(
    (cat) => cat.toLowerCase().replace(/\s+/g, "-") !== currentCategory.toLowerCase().replace(/\s+/g, "-")
  );
  // Shuffle and take the first 6
  return filteredCategories.sort(() => 0.5 - Math.random()).slice(0, 6);
};

// Generate static params for all categories
export function generateStaticParams() {
  return Object.keys(slugToCategory).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = slugToCategory[slug] || slug;
  const description = categoryDescriptions[slug] || categoryDescriptions.opinion;

  if (!slugToCategory[slug]) {
    return {
      title: "Category Not Found | CitizenCorrespondent",
      robots: { index: false, follow: false },
    };
  }

  const url = `https://www.citizencorrespondent.com/category/${slug}`;

  // Optimize description: truncate to 155 characters for optimal snippet display
  const optimizedDescription = description.length > 155 
    ? description.substring(0, 152).trim() + "..."
    : description;

  return {
    metadataBase: new URL("https://www.citizencorrespondent.com"),
    title: `${categoryName} News | CitizenCorrespondent`,
    description: optimizedDescription,
    keywords: [
      `${categoryName.toLowerCase()} news`,
      `${categoryName.toLowerCase()} 2025`,
      "latest news",
      "breaking news",
      "citizen correspondent",
      `${categoryName.toLowerCase()} articles`,
      `${categoryName.toLowerCase()} updates`,
    ].join(", "),
    alternates: { canonical: url },
    openGraph: {
      title: `${categoryName} News – Latest Stories 2025 | CitizenCorrespondent`,
      description: optimizedDescription,
      url,
      siteName: "CitizenCorrespondent",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${categoryName} News – CitizenCorrespondent`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} News 2025 | CitizenCorrespondent`,
      description: optimizedDescription,
      images: ["/og-image.jpg"],
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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = slugToCategory[slug] || slug;
  const categoryDescription = categoryDescriptions[slug] || categoryDescriptions.opinion;
  const relatedTopics = getRelatedTopics(slug);

  if (!slugToCategory[slug]) {
    notFound();
  }

  // Dynamic imports for category data
  let featureData: any;
  let mainGridData: any;

  try {
    const folderName = `${slug}Page`;
    [featureData, mainGridData] = await Promise.all([
      import(`@/public/data/${folderName}/${slug}-featureCategoryPart.json`).then((m) => m.default),
      import(`@/public/data/${folderName}/${slug}-mainGrid.json`).then((m) => m.default),
    ]);
  } catch (error) {
    notFound();
  }

  const featuredArticle = featureData.featuredArticle as FeaturedArticleCardProps;
  // Check if this is a Julio article and set the correct href
  const julioSlugs = ["bridging-nations-through-finance", "global-financial-leadership", "philanthropic-impact", "economic-diplomacy", "innovation-banking", "sustainable-growth"];
  if (julioSlugs.includes(featuredArticle.slug)) {
    featuredArticle.href = `/julio-herrera-velutini/${featuredArticle.slug}`;
  }
  const rightArticles = featureData.rightArticles as ArticleCardSmallProps[];
  const adBanner = featureData.adBanner as AdBannerProps;
  const mainGridItems = mainGridData.mainGrid as MainGridItem[];

  return (
    <>
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${categoryName} – CitizenCorrespondent`,
            description: categoryDescription,
            url: `https://www.citizencorrespondent.com/category/${slug}`,
            publisher: {
              "@type": "Organization",
              name: "CitizenCorrespondent",
              logo: {
                "@type": "ImageObject",
                url: "https://www.citizencorrespondent.com/logo.png",
              },
            },
          }),
        }}
      />

      <div className="bg-white min-h-screen">
        <div className="hidden">{categoryName} News – Latest Stories 2025</div>
        <DateBar />
        <MainNav currentPage={`category/${slug}`} />
        <CategoryNav />

        <CategoryIntro
          categoryName={categoryName}
          description={categoryDescription}
          relatedTopics={relatedTopics}
        />

        <FeatureCategoryPart
          featuredArticle={featuredArticle}
          rightArticles={rightArticles}
          adBanner={adBanner}
          heading={`${categoryName} News`}
        />

        <div className="max-w-7xl mx-auto px-6 pb-12 border-t border-gray-400">
          <MainGrid items={mainGridItems} heading={categoryName} />
        </div>

        <Footer />
      </div>
    </>
  );
}
