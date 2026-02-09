// components/SubscribeNewsletter.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

const SubscribeNewsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const socialLinks = [
    // {
    //   name: "Facebook",
    //   href: "https://www.facebook.com/Qlork",
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    //     </svg>
    //   ),
    // },
    {
      name: "Substack",
      href: "https://substack.com/@qlork1",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
      ),
    },
    // {
    //   name: "YouTube",
    //   href: "https://www.youtube.com/@Qlork",
    //   icon: (
    //     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    //     </svg>
    //   ),
    // },
  ];

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!agreed) return;

  setIsSubmitting(true);

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitSuccess(true);
    setEmail("");
    setAgreed(false);

    setTimeout(() => setSubmitSuccess(false), 5000);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="bg-orange-50 p-6 rounded-lg mb-6">
      {/* Logo Icon */}
      <div className="mb-4">
        <Image
          src="/images/news/qlork-logo.webp"
          alt="Qlork"
          width={100}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        Subscribe Newsletter
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
        Subscribe to our newsletter to get our newest articles instantly!
      </p>

      {/* Success Message */}
      {submitSuccess && (
        <div className="mb-2 p-3 bg-green-50 border border-green-200 text-green-800 rounded text-sm">
          Successfully subscribed to our newsletter!
        </div>
      )}

      {/* Email Form */}
      <form onSubmit={handleSubmit} className="mb-5">
       <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Your email address"
  required
  className="w-full px-4 py-3 mb-4 bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
/>

        <label className="flex items-start gap-2 mb-2 text-xs text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <span>I have read and agree to the terms & conditions</span>
        </label>
        <button
          type="submit"
          disabled={isSubmitting || !agreed}
          className={`w-full px-6 py-3 bg-black cursor-pointer text-white font-semibold hover:bg-gray-800 transition-colors duration-200 ${
            isSubmitting || !agreed ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Signing Up..." : "Sign Up Now"}
        </button>

      </form>

      {/* Social Media Links */}
      <div className="border-t border-gray-200 pt-5">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 text-gray-700 hover:text-orange-500 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-900 group-hover:text-orange-500 transition-colors">
                {social.icon}
              </span>
              <span className="font-medium text-sm">{social.name}</span>
            </div>
            <span className="text-xs text-gray-500 group-hover:text-orange-500 transition-colors">
              Follow
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
