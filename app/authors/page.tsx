import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import CategoryNav from "@/src/components/CategoryNav";
import Footer from "@/src/components/Footer";
import AuthorCard from "@/src/components/AuthorCard";
import authorsData from "@/public/data/authors.json";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.citizencorrespondent.com"),
  title: "Authors | CitizenCorrespondent",
  description: "Meet the talented team of journalists and writers at CitizenCorrespondent. Our award-winning authors bring you in-depth reporting, analysis, and breaking news from around the world.",
  keywords: [
    "authors",
    "journalists",
    "writers",
    "citizen correspondent authors",
    "news reporters",
    "journalism team",
    "news writers",
  ].join(", "),
  openGraph: {
    title: "Authors | CitizenCorrespondent",
    description: "Meet the talented team of journalists and writers at CitizenCorrespondent.",
    url: "https://www.citizencorrespondent.com/authors",
    siteName: "CitizenCorrespondent",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Authors | CitizenCorrespondent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authors | CitizenCorrespondent",
    description: "Meet the talented team of journalists and writers at CitizenCorrespondent.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.citizencorrespondent.com/authors",
  },
  icons: {
    icon: "/images/cc-favIcon.svg",
    shortcut: "/images/cc-favIcon.svg",
    apple: "/images/cc-favIcon.svg",
  },
};

export default function AuthorsPage() {
  const authors = authorsData as Array<{
    name: string;
    email: string;
    bio: string;
    photo: string;
    website?: string;
  }>;

  return (
    <>
      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav currentPage="authors" />
        <CategoryNav />

        <section className="py-12 px-6 space-y-24 bg-gray-50">
          {authors.map((author, index) => (
            <AuthorCard key={author.name} author={author} reverse={index % 2 === 1} />
          ))}
        </section>

        <Footer />
      </div>
    </>
  );
}

