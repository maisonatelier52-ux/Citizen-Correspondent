import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import TrendingNews from "@/src/components/TrendingNews";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlork.com"),
  title: "Terms & Conditions | Qlork",
  description:
    "Read Qlork's Terms & Conditions to understand the rules and guidelines for using our website and services.",
  keywords: [
    "terms and conditions",
    "terms of service",
    "user agreement",
    "website terms",
    "qlork terms",
    "legal terms",
    "service agreement",
  ].join(", "),
  openGraph: {
    title: "Terms & Conditions | Qlork",
    description:
      "Read Qlork's Terms & Conditions to understand the rules and guidelines for using our website and services.",
    url: "https://www.qlork.com/terms-and-conditions",
    siteName: "Qlork",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions | Qlork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Qlork",
    description:
      "Read Qlork's Terms & Conditions to understand the rules for using our website.",
    images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.qlork.com/terms-and-conditions",
  },
  icons: {
    icon: "/images/qlork-favIcon.webp",
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />
     <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800 space-y-12">

  {/* Header */}
  <div className="text-center mb-20">
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
      Terms & <span className="text-gray-900">Conditions</span>
    </h1>
    <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
     Access to this news website indicates acceptance of our terms  </p>
  </div>

  {/* Main Content */}
  <div className="space-y-10">

    {/* Introduction */}
    <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
      <p className="text-base md:text-lg leading-relaxed text-gray-700">
        Accessing or using this website constitutes agreement to the Terms & Conditions outlined here. If any part of these terms is not accepted, the website should not be used.
      </p>
    </div>

    {/* 1. Acceptance of Terms */}
    <div className="pb-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
        
        1. Acceptance of Terms
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Using this website means agreeing to all terms and conditions presented here, applicable to all visitors and users.
      </p>
    </div>

    {/* 2. Content Usage and Copyright */}
    <div className="pb-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
        
        2. Content Usage and Copyright
      </h2>

      <h3 className="text-xl font-semibold mt-4 mb-3 text-gray-900">
        Content Rights
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        All articles, images, videos, and other materials on the site are protected under copyright laws. Unauthorized reproduction, distribution, or modification is prohibited.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">
        Personal Use License
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Access and reading are permitted for personal, non-commercial purposes:
      </p>
      <ul className="list-disc pl-8 space-y-2 text-gray-700">
        <li>View articles on personal devices</li>
        <li>Share using designated sharing tools</li>
        <li>Print for personal reference</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mt-4">
        Restricted actions include reproduction, commercial use, removal of copyright notices, creating derivative works, or scraping content.
      </p>
    </div>

    {/* 3. User Registration */}
    <div className="pb-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
        
        3. User Registration and Accounts
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some features require registration. Account holders must provide accurate information, secure their credentials, and report unauthorized access immediately.
      </p>
      <ul className="list-disc pl-8 space-y-2 text-gray-700">
        <li>Provide accurate and up-to-date information</li>
        <li>Maintain account security</li>
        <li>Be responsible for activities under the account</li>
        <li>Update information as needed</li>
      </ul>
    </div>

    {/* 4. User Comments and Submissions */}
    <div className="pb-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
        
        4. User Comments and Submissions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Posting comments implies that submissions do not contain illegal, offensive, or misleading content and that permission is granted to use, modify, and display the comments.
      </p>
      <ul className="list-disc pl-8 space-y-2 text-gray-700">
        <li>No hate speech, harassment, or discriminatory content</li>
        <li>No impersonation or misrepresentation</li>
        <li>No spam, advertising, or promotional content</li>
        <li>Respect intellectual property and privacy rights</li>
      </ul>
    </div>

    {/* 5. Journalistic Standards */}
    <div className="pb-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
        
        5. Journalistic Standards and Accuracy
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        News content aims to be accurate, fair, and balanced. Updates or corrections may occur as new information becomes available.
      </p>
      <ul className="list-disc pl-8 space-y-2 text-gray-700">
        <li>Content may be updated or corrected</li>
        <li>Opinions reflect authors only</li>
        <li>Reasonable verification is performed, but absolute accuracy is not guaranteed</li>
        <li>Breaking news may be preliminary</li>
      </ul>
    </div>

    {/* 6. Third-Party Links */}
    <div className="pb-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
        {/*  */}
        6. Third-Party Content and Links
      </h2>
      <p className="text-gray-700 leading-relaxed">
        External links or advertisements are not endorsed. Responsibility for third-party content, accuracy, or privacy practices lies with the respective sources.
      </p>
    </div>

    {/* 7. Advertising & Notifications */}
    <div className="pb-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
        
        7. Advertising & Notifications
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Advertisements are displayed without influencing editorial content. Notifications or alerts are sent responsibly and can be managed or disabled by users.
      </p>
    </div>

    {/* 8. Liability & Governing Law */}
    <div className="pb-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
        
        8. Liability & Governing Law
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The website is provided "as is" without warranties. Responsibility for damages, losses, or third-party content is limited. Terms are governed by applicable laws of the registration jurisdiction.
      </p>
    </div>

    {/* 9. Changes & Termination */}
    <div className="pb-12 ">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
        
        9. Changes & Termination
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Terms, content, and website features may change. Access may be terminated if terms are violated. Continuing use after updates constitutes acceptance.
      </p>
    </div>

  </div>
</section>


        <Footer />
      </div>
    </>
  );
}
