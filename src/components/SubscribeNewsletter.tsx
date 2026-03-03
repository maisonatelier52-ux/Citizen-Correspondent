"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/qlork_news/",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4.162 4.162 0 1 1 0-8.324 4.162 4.162 0 0 1 0 8.324zM18.406 4.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
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
          src="/images/news-img/qlork-logo.webp"
          alt="Qlork"
          width={120}
          height={60}
          className="object-contain"
        />
      </div>
      <p className="text-xl font-bold text-gray-900 mb-3">Subscribe</p>
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
        Subscribe to our newsletter to get our newest articles instantly!
      </p>
      {submitSuccess && (
        <div className="mb-2 p-3 bg-green-50 border border-green-200 text-green-800 rounded text-sm">
          Successfully subscribed to our newsletter!
        </div>
      )}
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
      <div className="border-t border-gray-200 pt-5">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0 text-gray-700 hover:text-orange-500 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-900 group-hover:text-orange-500 transition-colors">
                {social.icon}
              </span>
              <span className="font-medium text-sm">{social.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
