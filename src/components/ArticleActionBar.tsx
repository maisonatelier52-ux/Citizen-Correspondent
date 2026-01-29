// components/ArticleActionBar.tsx

import { MoreHorizontal } from 'lucide-react';
import { Share2 } from "lucide-react";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaMedium, FaReddit, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa6';
interface ArticleActionBarProps {
  readingTime?: number; // in minutes
  onShare?: (platform: string) => void;
  onBookmarkToggle?: () => void;
  onMoreOptions?: () => void;
}

export default function ArticleActionBar({
  readingTime = 8,
  onShare,
  onBookmarkToggle,
  onMoreOptions
}: ArticleActionBarProps) {

  const [openShare, setOpenShare] = useState(false);

  const url =
    typeof window !== "undefined" ? window.location.href : "";
  const title =
    typeof document !== "undefined" ? document.title : "";

  const handleShare = (platform: string) => {
    if (onShare) {
      onShare(platform);
    } else {
      // Default share behavior
      const url = typeof window !== "undefined" ? window.location.href : "";
      const text = document.title;

      switch (platform) {
        case "twitter":
          window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, "_blank");
          break;
        case "email":
          window.location.href = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`;
          break;
        case "link":
          if (navigator.clipboard) {
            navigator.clipboard.writeText(url);
          }
          break;
      }
    }
  };
  const shareLinks = [
    {
      name: "Facebook",
      href: `#`,
      icon: (
        <FaFacebook className="w-5 h-5 text-current" />
      ),
    },

    {
      name: "Medium",
      href: `#`,
      icon: (
        <FaMedium className="w-5 h-5 text-current" />
      ),
    },

    {
      name: "Twitter",
      href: `#`,
      icon: (
        <FaTwitter className="w-5 h-5 text-current" />
      ),
    },

    {
      name: "Reddit",
      href: `https://www.reddit.com/submit?url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
      icon: (

        <FaReddit className="w-5 h-5 text-current" />

      ),
    },
  ];


  return (
    <div className="relative inline-flex items-center">
      {/* Share Icon */}
      <button
        aria-label="Share article"
        className="hover:text-black transition-colors"
      >
        <Share2 className="w-5 h-5" />
      </button>

      {/* Social Icons */}
      <div className="flex items-center gap-3  px-4 py-2">
        {shareLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="text-gray-900 transition-colors"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-1 text-sm leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-600 flex-shrink-0"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>

        <span className="text-[11px] leading-none">
          {readingTime} Min Read
        </span>
      </div>

    </div>


  );
}