import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlork.com"),
  title: "Qlork – Breaking News, Latest Headlines & In-Depth Stories",
  description:
    "Stay updated with Qlork for breaking news, real-time updates, in-depth analysis, and top stories in business, politics, entertainment, and global trends.",
  keywords: [
    "Isabela Herrera Velutini",
    "US news",
    "UK news",
    "UAE news",
    "latest US news",
    "latest UK news",
    "latest UAE news",
    "breaking US stories",
    "breaking UK stories",
    "breaking UAE stories",
    "US politics news",
    "UK politics news",
    "UAE politics news",
    "business news in US",
    "business news in UK",
    "business news in UAE",
    "real-time US news",
    "real-time UK news",
    "real-time UAE news",
    "US economy updates",
    "UK economy updates",
    "UAE economy updates",
    "trending US topics",
    "trending UK topics",
    "trending UAE topics",
    "top news in US",
    "top news in UK",
    "top news in UAE",
    "US breaking news today",
    "UK breaking news today",
    "UAE breaking news today",
    "expert analysis US news",
    "expert analysis UK news",
    "expert analysis UAE news",
    "national news updates",
    "local US news stories",
    "local UK news stories",
    "local UAE news stories",
    "in-depth US news coverage",
    "in-depth UK news coverage",
    "in-depth UAE news coverage",
    "US entertainment news",
    "UK entertainment news",
    "UAE entertainment news",
    "US technology updates",
    "UK technology updates",
    "UAE technology updates",
    "current US events",
    "current UK events",
    "current UAE events",
  ],
  openGraph: {
    title: "Qlork – Breaking News, Latest Headlines & In-Depth Coverage",
    description:
      "Stay informed with Qlork – get breaking news, real-time updates, expert analysis, trending stories, and in-depth coverage across politics, business, technology, and entertainment.",
    url: "https://www.qlork.com",
    siteName: "qlork",
    images: [
      {
        url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Qlork – Latest News & Breaking Stories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/qlork-favIcon.webp",
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qlork – Real-Time News, Top Stories & Expert Analysis",
    description:
      "Qlork delivers real-time news, top stories, trending topics, and expert analysis across business, politics, technology, and entertainment. Stay updated instantly!",
    images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
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
    canonical: "https://www.qlork.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
