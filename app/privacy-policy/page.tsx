import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import TrendingNews from "@/src/components/TrendingNews";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlork.com"),
  title: "Privacy Policy | Qlork",
  description:
    "Read Qlork's Privacy Policy to understand how we collect, use, disclose, and safeguard your information when you visit our website.",
  keywords: [
    "privacy policy",
    "data protection",
    "cookie policy",
    "personal information",
    "qlork privacy",
    "data security",
    "user rights",
  ].join(", "),
  openGraph: {
    title: "Privacy Policy | Qlork",
    description:
      "Read Qlork's Privacy Policy to understand how we collect, use, disclose, and safeguard your information.",
    url: "https://www.qlork.com/privacy-policy",
    siteName: "Qlork",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | Qlork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Qlork",
    description:
      "Read Qlork's Privacy Policy to understand how we protect your information.",
    images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.qlork.com/privacy-policy",
  },
  icons: {
    icon: "/images/qlork-favIcon.webp",
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />
        <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800 space-y-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Privacy <span className="text-gray-900">Policy</span>
          </h1>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
   Your privacy matters. This policy explains how information is collected, used, and protected.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-10">
          {/* Intro */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when
              you visit our website or use our services. Please read carefully.
              If you do not agree with these terms, please do not use the site.
            </p>
          </div>

          {/* Sections */}
          {[
            {
              title: "1. Information We Collect",
              content: (
                <>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may collect personally identifiable information that you
                    voluntarily provide when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Register on the website</li>
                    <li>Subscribe to newsletters</li>
                    <li>Fill out a contact form</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    This may include your name, email, phone number, postal
                    address, and other details you choose
                    to provide.
                  </p>
                </>
              ),
            },
            {
              title: "2. Automatically Collected Information",
              content: (
                <>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>IP address and browser type</li>
                    <li>Operating system and device information</li>
                    <li>Pages viewed and time spent on pages</li>
                    <li>Referring website and exit pages</li>
                    <li>Date and time of visit</li>
                    <li>Clickstream data and cookies</li>
                  </ul>
                </>
              ),
            },
            {
              title: "3. How We Use Your Information",
              content: (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand content</li>
                  <li>Understand and analyze user behavior</li>
                  <li>Develop new products and features</li>
                  <li>Communicate for service, updates, and marketing</li>
                  <li>Process transactions securely</li>
                  <li>Prevent fraud and protect against criminal activity</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              ),
            },
            {
              title: "4. Disclosure of Your Information",
              content: (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors
                    performing services on our behalf
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> Mergers, acquisitions,
                    or asset sales
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> Required by law or to
                    protect our rights
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you permit sharing
                  </li>
                </ul>
              ),
            },
            {
              title: "5. Cookies and Tracking",
              content: (
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar technologies to track activity on
                  our website and store information. You can configure your
                  browser to refuse cookies, but some site features may not
                  function properly.
                </p>
              ),
            },
            {
              title: "6. Data Security",
              content: (
                <p className="text-gray-700 leading-relaxed">
                  We implement technical and organizational measures to protect
                  your data, but no method of online transmission or storage is
                  100% secure. Absolute security cannot be guaranteed.
                </p>
              ),
            },
            {
              title: "7. Your Privacy Rights",
              content: (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Access:</strong> Request your personal data
                  </li>
                  <li>
                    <strong>Correction:</strong> Request data corrections
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request data removal
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> Marketing communications
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Receive data in portable
                    format
                  </li>
                </ul>
              ),
            },
            {
              title: "8. Third-Party Links",
              content: (
                <p className="text-gray-700 leading-relaxed">
                  Our site may link to external websites. We are not responsible
                  for their privacy practices. Review their policies before
                  sharing personal information.
                </p>
              ),
            },
            {
              title: "9. Children's Privacy",
              content: (
                <p className="text-gray-700 leading-relaxed">
                  Our services are not directed at children under 13. We do not
                  knowingly collect data from children. Contact us if you
                  believe a child has provided personal information.
                </p>
              ),
            },
            {
              title: "10. Changes to This Policy",
              content: (
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy periodically. Updates will
                  be posted here with the "Last Updated" date. Please review
                  regularly.
                </p>
              ),
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-2xl p-8 space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gray-900 rounded" />
                {section.title}
              </h2>
              <div className="text-gray-700 text-base md:text-lg leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
}
