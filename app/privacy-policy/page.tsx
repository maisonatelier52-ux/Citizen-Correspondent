import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import CategoryNav from "@/src/components/CategoryNav";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.citizencorrespondent.com"),
    title: "Privacy Policy | CitizenCorrespondent",
    description: "Read CitizenCorrespondent's Privacy Policy to understand how we collect, use, disclose, and safeguard your information when you visit our website.",
    keywords: [
        "privacy policy",
        "data protection",
        "cookie policy",
        "personal information",
        "citizen correspondent privacy",
        "data security",
        "user rights",
    ].join(", "),
    openGraph: {
        title: "Privacy Policy | CitizenCorrespondent",
        description: "Read CitizenCorrespondent's Privacy Policy to understand how we collect, use, disclose, and safeguard your information.",
        url: "https://www.citizencorrespondent.com/privacy-policy",
        siteName: "CitizenCorrespondent",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Privacy Policy | CitizenCorrespondent",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | CitizenCorrespondent",
        description: "Read CitizenCorrespondent's Privacy Policy to understand how we protect your information.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "https://www.citizencorrespondent.com/privacy-policy",
    },
    icons: {
        icon: "/images/cc-favIcon.svg",
        shortcut: "/images/cc-favIcon.svg",
        apple: "/images/cc-favIcon.svg",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <DateBar />
                <MainNav currentPage="privacy-policy" />
                <CategoryNav />

                <section className="py-12 px-6">
                    <div className="max-w-360 mx-auto space-y-12 border border-gray-200 rounded-lg p-8">
                        {/* Introduction */}
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                            </p>
                        </div>

                        {/* 1. Information We Collect */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">1. Information We Collect</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>

                            <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Personal Data</h3>
                            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                                We may collect personally identifiable information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc pl-8 space-y-3 text-base md:text-lg text-gray-700">
                                <li>Register on the website</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Fill out a contact form</li>
                                <li>Make a purchase or transaction</li>
                                <li>Participate in surveys or promotions</li>
                            </ul>
                            <p className="text-base md:text-lg leading-relaxed mt-6 text-gray-700">
                                This information may include your name, email address, phone number, postal address, payment information, and other details you choose to provide.
                            </p>

                            <h3 className="text-xl font-semibold mt-12 mb-4 text-gray-900">Automatically Collected Information</h3>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                When you visit our website, we may automatically collect certain information about your device, including:
                            </p>
                            <ul className="list-disc pl-8 mt-4 space-y-3 text-base md:text-lg text-gray-700">
                                <li>IP address and browser type</li>
                                <li>Operating system and device information</li>
                                <li>Pages viewed and time spent on pages</li>
                                <li>Referring website and exit pages</li>
                                <li>Date and time of visit</li>
                                <li>Clickstream data and cookies</li>
                            </ul>
                        </div>

                        {/* 2. How We Use Your Information */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">2. How We Use Your Information</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                                We use the information we collect in the following ways:
                            </p>
                            <ul className="list-disc pl-8 space-y-3 text-base md:text-lg text-gray-700">
                                <li>To provide, operate, and maintain our website and services</li>
                                <li>To improve, personalize, and expand our content</li>
                                <li>To understand and analyze how you use our website</li>
                                <li>To develop new products, services, features, and functionality</li>
                                <li>To communicate with you for customer service, updates, and marketing</li>
                                <li>To process transactions and send related information</li>
                                <li>To prevent fraudulent transactions and protect against criminal activity</li>
                                <li>To comply with legal obligations and enforce our terms</li>
                            </ul>
                        </div>

                        {/* 3. Disclosure of Your Information */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">3. Disclosure of Your Information</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                                We may share your information in the following situations:
                            </p>
                            <ul className="list-disc pl-8 space-y-3 text-base md:text-lg text-gray-700">
                                <li><strong className="font-semibold">Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                                <li><strong className="font-semibold">Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
                                <li><strong className="font-semibold">Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong className="font-semibold">With Your Consent:</strong> When you give us explicit permission to share your data</li>
                            </ul>
                        </div>

                        {/* 4. Cookies and Tracking Technologies */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">4. Cookies and Tracking Technologies</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                            </p>
                        </div>

                        {/* 5. Data Security */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">5. Data Security</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
                            </p>
                        </div>

                        {/* 6. Your Privacy Rights */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">6. Your Privacy Rights</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                                Depending on your location, you may have the following rights:
                            </p>
                            <ul className="list-disc pl-8 space-y-3 text-base md:text-lg text-gray-700">
                                <li><strong className="font-semibold">Access:</strong> Request access to your personal data</li>
                                <li><strong className="font-semibold">Correction:</strong> Request correction of inaccurate data</li>
                                <li><strong className="font-semibold">Deletion:</strong> Request deletion of your personal data</li>
                                <li><strong className="font-semibold">Opt-Out:</strong> Opt-out of marketing communications</li>
                                <li><strong className="font-semibold">Data Portability:</strong> Request a copy of your data in a portable format</li>
                            </ul>
                        </div>

                        {/* 7. Third-Party Links */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">7. Third-Party Links</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal information.
                            </p>
                        </div>

                        {/* 8. Children's Privacy */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">8. Children's Privacy</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal data, please contact us immediately.
                            </p>
                        </div>

                        {/* 9. Changes to This Privacy Policy */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">9. Changes to This Privacy Policy</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                            </p>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}

