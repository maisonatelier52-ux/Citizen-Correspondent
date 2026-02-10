import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import CategoryNav from "@/src/components/CategoryNav";
import Footer from "@/src/components/Footer";
import AuthorCard from "@/src/components/AuthorCard";
import authorsData from "@/public/data/authors.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.Qlork.com"),
  title: "Authors | Qlork",
  description: "Meet the talented team of journalists and writers at Qlork. Our award-winning authors bring you in-depth reporting, analysis, and breaking news from around the world.",
  keywords: [
    "authors",
    "journalists",
    "writers",
    "qlork authors",
    "news reporters",
    "journalism team",
    "news writers",
  ].join(", "),
  openGraph: {
    title: "Authors | Qlork",
    description: "Meet the talented team of journalists and writers at Qlork.",
    url: "https://www.Qlork.com/our-team",
    siteName: "Qlork",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.Qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Authors | Qlork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authors | Qlork",
    description: "Meet the talented team of journalists and writers at Qlork.",
    images: ["https://www.Qlork.com/images/news-img/qlork-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.Qlork.com/our-team",
  },
  icons: {
    icon: "/images/qlork-favIcon.webp",
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
  },
};

export default function AuthorsPage() {
  const authors = authorsData as Array<{
    name: string;
    email: string;
    bio: string;
    photo: string;
  }>;

  return (
    <>
      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <CategoryNav />

        <section className="py-12 px-3 md:px-16 space-y-10 bg-gray-50">
          {authors.map((author, index) => (
            <AuthorCard key={author.name} author={author} reverse={index % 2 === 1} />
          ))}
        </section>

        <Footer />
      </div>
    </>
  );
}

