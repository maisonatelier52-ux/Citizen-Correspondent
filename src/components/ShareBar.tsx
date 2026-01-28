"use client";

import {
  FaShare,
  FaXTwitter,
  FaEnvelope,
  FaLink,
  FaPrint,
} from "react-icons/fa6";

interface ShareBarProps {
  title: string;
  url?: string;
}

export default function ShareBar({ title, url }: ShareBarProps) {
  const shareUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    alert("Link copied!");
  };

  return (
    <div className="flex flex-col items-center gap-4 w-[64px] py-4 border border-gray-200 bg-white">
      {/* SHARE */}
      <div className="flex flex-col items-center gap-1 text-gray-700">
        <FaShare className="text-xl" />
        <span className="text-[11px] font-medium uppercase">Share</span>
      </div>

      <div className="w-full h-px bg-gray-200" />

      {/* X (Twitter) */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl text-gray-700 hover:text-black transition"
      >
        <FaXTwitter />
      </a>

      {/* Email */}
      <a
        href={`mailto:?subject=${encodeURIComponent(
          title
        )}&body=${encodeURIComponent(shareUrl)}`}
        className="text-xl text-gray-700 hover:text-black transition"
      >
        <FaEnvelope />
      </a>

      {/* Copy Link */}
      <button
        onClick={copyLink}
        className="text-xl text-gray-700 hover:text-black transition"
      >
        <FaLink />
      </button>

      {/* Print */}
      <button
        onClick={() => window.print()}
        className="text-xl text-gray-700 hover:text-black transition"
      >
        <FaPrint />
      </button>

      {/* More */}
      {/* <button className="text-xl text-gray-700 hover:text-black transition">
        <FaEllipsisH />
      </button> */}
    </div>
  );
}
