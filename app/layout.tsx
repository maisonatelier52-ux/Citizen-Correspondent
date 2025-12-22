import type { Metadata } from "next";
import "./globals.css";
// import LoadingScreen from "@/src/components/LoadingScreen";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.citizencorrespondent.com"),
  title: {
    default: "CitizenCorrespondent – Latest News & Breaking Stories 2025",
    template: "%s | CitizenCorrespondent",
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
    "citizen correspondent",
    "news 2025",
    "current events",
    "news analysis",
    "journalism",
    "reliable news",
    "trusted journalism",
  ].join(", "),
  authors: [{ name: "CitizenCorrespondent" }],
  creator: "CitizenCorrespondent",
  publisher: "CitizenCorrespondent",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.citizencorrespondent.com",
    siteName: "CitizenCorrespondent",
    title: "CitizenCorrespondent – Latest News & Breaking Stories 2025",
    description: "Breaking news, analysis & coverage of world events, politics, business, technology & health. Trusted journalism in 2025.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CitizenCorrespondent – Latest News & Breaking Stories 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CitizenCorrespondent – Latest News & Breaking Stories 2025",
    description: "Stay instantly connected with breaking stories and live updates. Your trusted source for reliable journalism.",
    images: ["/og-image.jpg"],
    creator: "@CitizenCorrespondent",
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
    canonical: "https://www.citizencorrespondent.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  icons: {
    icon: [
      { url: "/images/cc-favIcon.svg", type: "image/svg+xml" },
      { url: "/images/cc-favIcon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/images/cc-favIcon.svg",
    apple: "/images/cc-favIcon.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/cc-favIcon.svg",
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
        <link rel="icon" href="/images/cc-favIcon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/images/cc-favIcon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/cc-favIcon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="any" href="/images/cc-favIcon.svg" />
        <link rel="icon" type="image/svg+xml" href="/images/cc-favIcon.svg" />
      </head>
      <body className="font-sans antialiased">
        {/* <LoadingScreen /> */}
        {children}
      </body>
    </html>
  );
}
