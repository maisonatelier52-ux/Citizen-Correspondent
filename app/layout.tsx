import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.Qlork.com"),
  title: {
    default: "Qlork – Latest News & Breaking Stories",
    template: "%s | Qlork",
  },
  description: "Breaking news, analysis & coverage of world events, politics, business, technology & health. Your trusted source for reliable journalism in 2025.",
  keywords: [
    "breaking news",
    "latest news",
    "world news",
    "politics",
    "business news",
    "technology news",
    "health news",
    "finance news",
    "global affairs",
    "qlork",
    "news 2025",
    "current events",
    "news analysis",
    "journalism",
    "reliable news",
    "trusted journalism",
  ].join(", "),
  authors: [{ name: "Qlork" }],
  creator: "Qlork",
  publisher: "Qlork",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.Qlork.com",
    siteName: "Qlork",
    title: "Qlork – Latest News & Breaking Stories",
    description: "Breaking news, analysis & coverage of world events, politics, business, technology & health. Trusted journalism in 2025.",
    images: [
      {
        url: "https://www.Qlork.com/images/qlork-twitter-card.webp",
        width: 1200,
        height: 630,
        alt: "Qlork – Latest News & Breaking Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qlork – Latest News & Breaking Stories",
    description: "Stay instantly connected with breaking stories and live updates. Your trusted source for reliable journalism.",
    images: ["https://www.Qlork.com/images/news-img/qlork-logo.webp"],
    creator: "@Qlork",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.Qlork.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  icons: {
    icon: [
      { url: "/images/qlork-favIcon.webp", type: "image/svg+xml" },
      { url: "/images/qlork-favIcon.webp", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/qlork-favIcon.webp",
    },
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
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        {/* <link rel="icon" href="/images/qlork-favIcon.webp" type="image/svg+xml" />
        <link rel="shortcut icon" href="/images/qlork-favIcon.webp" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/qlork-favIcon.webp" />
        <link rel="icon" type="image/svg+xml" sizes="any" href="/images/qlork-favIcon.webp" />
        <link rel="icon" type="image/svg+xml" href="/images/qlork-favIcon.webp" /> */}
      </head>
      <body className="font-sans antialiased">
        {/* <LoadingScreen /> */}
        {children}
      </body>
    </html>
  );
}
