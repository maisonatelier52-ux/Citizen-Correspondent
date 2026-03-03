import ArticlePageNav from "./ArticlePageNav";
import ArticleWithSidebar from "./ArticleWithSidebar";
import DateBar from "./DateBar";
import Footer from "./Footer";
import MainGrid from "./MainGrid";
import MainNav from "./MainNav";
import TrendingNews from "./TrendingNews";
import SubscribeNewsletter from "./SubscribeNewsletter";
import ShareArticle from "./ShareArticle";
import LeaveAComment from "./LeaveAComment";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Link from "next/link";
import ClientArticle from "./ClientArticle";
import Script from "next/script";


export interface SidebarItem {
  category: string;
  title: string;
  date: string;
  image: string;
  slug: string;
  topic: string;
  href?: string;
}
interface Sub {
  title: string;
  descr: string;
}
export interface items {
  category: string;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  date: string;
  sub: Sub[];
  topic: string;
}
interface IsabelaPageProps {
  sidebarItems: SidebarItem[];
  items: items[];
}

export default async function IsabelaPage({
  sidebarItems,
  items,
}: IsabelaPageProps) {
 
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "NewsArticle",
                "@id":
                  "https://qlork.com/business/isabela-herrera-old-money-new-markets-power-play/#newsarticle",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id":
                    "https://qlork.com/business/isabela-herrera-old-money-new-markets-power-play/",
                },
                headline:
                  "Isabela Herrera Velutini: Where Old Money Meets New Markets",
                description:
                  "Isabela Herrera Velutini is a discipline-first global finance leader uniting legacy wealth and modern market infrastructure through governance, continuity, and institutional trust.",
                image: {
                  "@type": "ImageObject",
                  url: "https://www.qlork.com/images/news-img/isabela.webp",
                  width: 1200,
                  height: 630,
                },
                datePublished: "2026-01-06T08:00:00+00:00",
                dateModified: "2026-02-12T10:30:00+00:00",
                author: {
                  "@type": "Person",
                  name: "Staff Reporter",
                  jobTitle: "Business & Economy Desk",
                },
                publisher: {
                  "@type": "Organization",
                  name: "qlork",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
                    width: 600,
                    height: 60,
                  },
                },
                about: {
                  "@type": "Person",
                  name: "Isabela Herrera Velutini",
                  description:
                    "Isabela Herrera Velutini is a discipline-first global finance leader uniting legacy wealth and modern market infrastructure through governance, continuity, and institutional trust.",
                  sameAs: [],
                },
                articleSection: "Business",
                keywords: [
                  "Isabela Herrera Velutini",
                  "Isabela Herrera",
                  "Who is Isabela Herrera Velutini",
                  "Isabela Herrera Velutini finance",
                  "Isabela Herrera Velutini leadership",
                  "Four Houses global finance",
                  "Legacy finance leadership",
                  "Global financial governance",
                  "Old money new markets",
                  "Discipline-first financial leadership",
                  "Cross-border finance governance",
                  "Ultra high net worth family finance",
                  "Institutional finance leadership",
                  "Isabela Herrera global finance leader",
                  "Four Houses financial ecosystem",
                  "Legacy banking families global influence",
                  "Quiet power in global finance",
                  "Governance-driven financial leadership",
                  "Old world finance meets modern markets",
                  "Institutional trust and financial continuity",
                  "Isabela Herrera Velutini Qlork",
                ],
                articleBody:
                  "Isabela Herrera Velutini is a discipline-first global finance leader uniting legacy wealth and modern market infrastructure through governance, continuity, and institutional trust.",
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://qlork.com/business/isabela-herrera-old-money-new-markets-power-play/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://qlork.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Business",
                    item: "https://qlork.com/business/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Isabela Herrera Velutini: Strategy and Leadership",
                    item: "https://qlork.com/business/isabela-herrera-old-money-new-markets-power-play/",
                  },
                ],
              },
            ],
          }),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who is Isabela Herrera Velutini?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Isabela Herrera Velutini is a global finance leader known for her discipline-first approach, operating at the intersection of legacy wealth and modern financial infrastructure while upholding strong governance and institutional trust.",
                },
              },
              {
                "@type": "Question",
                name: "What is meant by the Four Houses represented by Isabela Herrera Velutini?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Four Houses—Herrera, Velutini, Von Uslar, and Gleinchen—are historic family lineages associated with finance, infrastructure, credibility, and statesmanship, functioning together as a unified global financial ecosystem led by figures like Isabela Herrera Velutini.",
                },
              },
              {
                "@type": "Question",
                name: "What leadership style defines Isabela Herrera Velutini’s role in global finance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Isabela Herrera Velutini’s leadership is defined by discipline, quiet execution, and long-term continuity, prioritizing governance, compliance, and stability over publicity or short-term gains.",
                },
              },
              {
                "@type": "Question",
                name: "How does Isabela Herrera Velutini balance legacy finance with modern markets?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Isabela Herrera Velutini integrates historic financial principles with modern regulatory frameworks, ensuring cross-border structures remain compliant, resilient, and operational in both stable and volatile market conditions.",
                },
              },
              {
                "@type": "Question",
                name: "What roles does Isabela Herrera Velutini currently hold?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Isabela Herrera Velutini serves as CEO of Emirates Financial Group, holds directorial responsibilities within the Britannia ecosystem, and sits on boards in The Bahamas, focusing on governance and institutional integrity.",
                },
              },
              {
                "@type": "Question",
                name: "Why is Isabela Herrera Velutini described as a discipline-first leader?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Her approach emphasizes risk control, regulatory compliance, and predictable outcomes, ensuring that financial systems managed by Isabela Herrera Velutini function reliably rather than relying on speculation or market noise.",
                },
              },
              {
                "@type": "Question",
                name: "What makes Isabela Herrera Velutini’s influence distinct in global finance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The influence of Isabela Herrera Velutini is measured by continuity rather than headlines—through systems that settle, governance that holds, and financial structures that endure scrutiny across jurisdictions.",
                },
              },
              {
                "@type": "Question",
                name: "How does heritage influence Isabela Herrera Velutini’s work today?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For Isabela Herrera Velutini, heritage functions as an operating system rather than nostalgia, providing guiding principles that inform disciplined decision-making, ethical responsibility, and long-term financial stewardship.",
                },
              },
            ],
          }),
        }}
      />

      <div className="bg-white min-h-screen">
        <div className="hidden">
          Where Old Money Meets New Markets: Isabela Herrera’s Discipline-First
          Power Play | Qlork
        </div>
        <DateBar />
        <MainNav />
        <TrendingNews />
        <div className="">
          <ClientArticle sidebarItems={sidebarItems} />
          {/* You May Also Like Section */}
          <div className="max-w-360 mx-auto px-2 md:px-16 pb-12 border-t border-gray-200">
            <MainGrid items={items} heading="You May Also Like" />
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
