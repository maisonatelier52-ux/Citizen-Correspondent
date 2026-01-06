// components/ArticleActionBar.tsx

import { MoreHorizontal } from 'lucide-react';

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

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/citizencorrespondent",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Substack",
      href: "https://citizencorrespondent.substack.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@citizencorrespondent",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-4 sm:gap-6 py-4 text-black ">
      {/* Social Links */}
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="hover:text-gray-600 transition-colors"
        >
          {social.icon}
        </a>
      ))}

      {/* More options */}
      <button
        onClick={onMoreOptions}
        aria-label="More options"
        className="hover:text-black transition-colors"
      >
        <MoreHorizontal size={20} strokeWidth={1.5} />
      </button>

      {/* Reading time */}
      <div className="flex items-center gap-1 text-sm">
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
          className="text-gray-600"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>{readingTime} Min Read</span>
      </div>
    </div>
  );
}