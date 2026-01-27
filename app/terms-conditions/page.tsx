import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import CategoryNav from "@/src/components/CategoryNav";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.citizencorrespondent.com"),
  title: "Terms & Conditions | CitizenCorrespondent",
  description: "Read CitizenCorrespondent's Terms & Conditions to understand the rules and guidelines for using our website and services.",
  keywords: [
    "terms and conditions",
    "terms of service",
    "user agreement",
    "website terms",
    "citizen correspondent terms",
    "legal terms",
    "service agreement",
  ].join(", "),
  openGraph: {
    title: "Terms & Conditions | CitizenCorrespondent",
    description: "Read CitizenCorrespondent's Terms & Conditions to understand the rules and guidelines for using our website and services.",
    url: "https://www.citizencorrespondent.com/terms-conditions",
    siteName: "CitizenCorrespondent",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.citizencorrespondent.com/images/cc-logo.svg",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions | CitizenCorrespondent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | CitizenCorrespondent",
    description: "Read CitizenCorrespondent's Terms & Conditions to understand the rules for using our website.",
    images: ["https://www.citizencorrespondent.com/images/cc-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.citizencorrespondent.com/terms-conditions",
  },
  icons: {
    icon: "/images/cc-favIcon.svg",
    shortcut: "/images/cc-favIcon.svg",
    apple: "/images/cc-favIcon.svg",
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <CategoryNav />

        <section className="py-12 px-6">
          <div className="max-w-360 mx-auto space-y-12 border border-gray-200 rounded-lg p-8">
            {/* Introduction */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Your use of this website and services is subject to these Terms & Conditions. By accessing or using CitizenCorrespondent, you agree to be bound by these terms.
                If you do not agree with any part of these terms, you must not use our website or services.
              </p>
            </div>

            {/* 1. Acceptance of Terms */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                By accessing and using this news website, you accept and agree to be bound by these terms and conditions.
                These terms apply to all visitors, readers, and others who access or use our news service.
              </p>
            </div>

            {/* 2. Content Usage and Copyright */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">2. Content Usage and Copyright</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Our Content Rights</h3>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                All news articles, photographs, videos, graphics, and other content published on this news website are
                protected by copyright laws and are owned by us or our content contributors. Unauthorized reproduction,
                distribution, or modification of our content is strictly prohibited.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Personal Use License</h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                You may access and read our news content for personal, non-commercial purposes. This limited license allows you to:
              </p>
              <ul className="list-disc pl-8 mt-4 space-y-2 text-base md:text-lg text-gray-700">
                <li>Read and view articles on your personal devices</li>
                <li>Share articles using our designated sharing tools</li>
                <li>Print articles for personal reference</li>
              </ul>
              <p className="text-base md:text-lg leading-relaxed mt-6 text-gray-700">
                You may NOT:
              </p>
              <ul className="list-disc pl-8 mt-4 space-y-2 text-base md:text-lg text-gray-700">
                <li>Reproduce, republish, or redistribute our content without permission</li>
                <li>Use our content for commercial purposes</li>
                <li>Remove copyright notices or watermarks</li>
                <li>Create derivative works from our content</li>
                <li>Use automated tools to scrape or download content</li>
              </ul>
            </div>

            {/* 3. User Registration and Accounts */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">3. User Registration and Accounts</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                Some features of our news website may require registration. When creating an account, you agree to:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p className="text-base md:text-lg leading-relaxed mt-6 text-gray-700">
                We reserve the right to suspend or terminate accounts that violate these terms or engage in prohibited activities.
              </p>
            </div>

            {/* 4. User Comments and Submissions */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">4. User Comments and Submissions</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Comment Policy</h3>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                We welcome reader comments and discussions. By posting comments, you agree that:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                <li>Your comments do not contain illegal, defamatory, or offensive content</li>
                <li>You will not impersonate others or misrepresent your affiliation</li>
                <li>You grant us a non-exclusive license to use, modify, and display your comments</li>
                <li>You are responsible for the content of your submissions</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Prohibited Content</h3>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                Comments and submissions must not contain:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                <li>Hate speech, harassment, or discriminatory content</li>
                <li>False or misleading information</li>
                <li>Spam, advertising, or promotional content</li>
                <li>Personal attacks or abusive language</li>
                <li>Violations of privacy or confidentiality</li>
                <li>Content that infringes intellectual property rights</li>
              </ul>
              <p className="text-base md:text-lg leading-relaxed mt-6 text-gray-700">
                We reserve the right to remove any comments that violate this policy without notice.
              </p>
            </div>

            {/* 5. Journalistic Standards and Accuracy */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">5. Journalistic Standards and Accuracy</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                We strive to provide accurate, fair, and balanced news coverage. However:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                <li>News content may be updated or corrected as new information becomes available</li>
                <li>Opinions expressed in opinion pieces are those of the authors, not necessarily CitizenCorrespondent</li>
                <li>We make reasonable efforts to verify information but cannot guarantee absolute accuracy</li>
                <li>Breaking news may contain preliminary information subject to change</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 p-6 mt-8 rounded-lg">
                <p className="text-base md:text-lg font-semibold text-gray-900">
                  Corrections Policy: If you believe we have published inaccurate information, please contact our editorial team.
                  We take accuracy seriously and will investigate and correct errors promptly.
                </p>
              </div>
            </div>

            {/* 6. Third-Party Content and Links */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">6. Third-Party Content and Links</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                Our website may contain links to third-party websites, advertisements, or embedded content. We are not responsible for:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                <li>The content, accuracy, or opinions expressed in third-party materials</li>
                <li>The privacy practices of external websites</li>
                <li>Products or services advertised by third parties</li>
              </ul>
              <p className="text-base md:text-lg leading-relaxed mt-6 text-gray-700">
                Links to external sites do not constitute endorsement of those sites or their content.
              </p>
            </div>

            {/* 7. Advertising and Sponsored Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">7. Advertising and Sponsored Content</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Our website may display advertisements and sponsored content. We maintain editorial independence, and advertising does not influence our news coverage. Sponsored content will be clearly labeled as such.
                We are not responsible for the claims made in advertisements or the quality of advertised products and services.
              </p>
            </div>

            {/* 8. Newsletter and Email Communications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">8. Newsletter and Email Communications</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                If you subscribe to our newsletter or email alerts:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                <li>You consent to receive email communications from us</li>
                <li>You can unsubscribe at any time using the link in our emails</li>
                <li>We will not share your email address with third parties without consent</li>
                <li>We may send service-related announcements when necessary</li>
              </ul>
            </div>

            {/* 9. Intellectual Property Rights */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">9. Intellectual Property Rights</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Our website name, logo, design, and branding are our trademarks. You may not use our trademarks without prior written permission.
                All intellectual property rights in our content remain with us or our licensors.
              </p>
            </div>

            {/* 10. News Alerts and Notifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">10. News Alerts and Notifications</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                We may offer breaking news alerts and push notifications. By enabling these features:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                <li>You consent to receive time-sensitive news notifications</li>
                <li>You can disable notifications in your device or browser settings</li>
                <li>We will use notifications responsibly and avoid spam</li>
              </ul>
            </div>

            {/* 11. Prohibited Activities */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">11. Prohibited Activities</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                You agree not to:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                <li>Interfere with or disrupt the website's operation</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated tools or bots without permission</li>
                <li>Collect user information without consent</li>
                <li>Engage in any activity that violates applicable laws</li>
                <li>Upload viruses or malicious code</li>
                <li>Impersonate our staff or other users</li>
              </ul>
            </div>

            {/* 12. Disclaimer of Warranties */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">12. Disclaimer of Warranties</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                Our news website and content are provided "as is" without warranties of any kind. We do not warrant that:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                <li>The website will be uninterrupted or error-free</li>
                <li>All content is completely accurate or current</li>
                <li>The website is free from viruses or harmful components</li>
                <li>Defects will be corrected immediately</li>
              </ul>
            </div>

            {/* 13. Limitation of Liability */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">13. Limitation of Liability</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                To the fullest extent permitted by law, we shall not be liable for any damages arising from:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                <li>Use of or inability to use our website</li>
                <li>Reliance on any content published on our website</li>
                <li>Errors, omissions, or inaccuracies in our content</li>
                <li>Unauthorized access to your account or data</li>
                <li>Third-party content or advertisements</li>
              </ul>
            </div>

            {/* 14. Indemnification */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">14. Indemnification</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700 mt-4">
                <li>Your violation of these Terms and Conditions</li>
                <li>Your comments or submissions on our website</li>
                <li>Your violation of any third-party rights</li>
                <li>Your use of our website in violation of applicable laws</li>
              </ul>
            </div>

            {/* 15. Age Restrictions */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">15. Age Restrictions</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Our website is intended for general audiences. Some content may not be suitable for children. Parents and guardians are responsible for monitoring their children's internet usage. We do not knowingly collect information from children under 13.
              </p>
            </div>

            {/* 16. Governing Law and Jurisdiction */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">16. Governing Law and Jurisdiction</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                These Terms and Conditions are governed by the laws of the jurisdiction where our news organization is registered.
                Any disputes shall be resolved in the courts of that jurisdiction.
              </p>
            </div>

            {/* 17. Changes to Content and Services */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">17. Changes to Content and Services</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                <li>Modify, suspend, or discontinue any aspect of our website</li>
                <li>Update, correct, or remove content at any time</li>
                <li>Change our website design, features, or functionality</li>
                <li>Introduce new services or features</li>
              </ul>
            </div>

            {/* 18. Termination */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">18. Termination</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                We may terminate or suspend your access to our website immediately, without prior notice, if you breach these terms.
                Upon termination, your right to use the website will cease immediately.
              </p>
            </div>

            {/* 19. Severability */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">19. Severability</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* 20. Changes to Terms */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">20. Changes to Terms</h2>
                <span className="text-gray-500 text-lg">›</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated "Last Updated" date.
                Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

