"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaRedditAlien,
  FaLink,
} from "react-icons/fa";
import { useEffect, useState } from "react";

interface ShareArticleProps {
  title: string;
}

export default function ShareArticle({ title }: ShareArticleProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="w-full border-t border-b border-dashed border-gray-200 py-4">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2 text-gray-900 font-semibold">
          <FaLink className="text-lg" />
         <span className="hidden sm:inline">Share This Article</span>
        </div>

        <div className="flex items-center gap-2">
          <ShareIcon
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          >
            <FaFacebookF />
          </ShareIcon>

          <ShareIcon
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          >
            <FaTwitter />
          </ShareIcon>

          <ShareIcon
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          >
            <FaLinkedinIn />
          </ShareIcon>

          <ShareIcon
            href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          >
            <FaWhatsapp />
          </ShareIcon>

          <ShareIcon
            href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
          >
            <FaRedditAlien />
          </ShareIcon>

         
        </div>
      </div>
    </div>
  );
}


function ShareIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
    >
      {children}
    </a>
  );
}
