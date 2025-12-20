"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

interface Author {
  name: string;
  email: string;
  bio: string;
  photo: string;
  website?: string;
}

interface AuthorCardProps {
  author: Author;
  reverse?: boolean;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author, reverse = false }) => {
  return (
    <div className="max-w-6xl mx-auto bg-red-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
      <div className={`md:flex ${reverse ? "md:flex-row-reverse" : ""}`}>
        {/* Left: Text */}
        <div className="md:w-2/3 p-10 md:p-16">
          <h1 className="text-3xl md:text-4xl text-white font-black tracking-widest mb-6">
            {author.name.toUpperCase()}
          </h1>

          {/* Email */}
          <div className="flex items-center gap-3 mb-8 text-orange-500">
            <Mail size={28} />
            <a
              href={`mailto:${author.email}`}
              className="text-lg font-medium hover:underline transition"
              title={`Email ${author.name}`}
            >
              {author.email}
            </a>
          </div>

          <p className="text-lg leading-relaxed text-white mb-6">
            {author.bio}
          </p>

          {author.website && (
            <p className="text-orange-500 font-medium">
              <Link 
                href={author.website} 
                className="underline hover:no-underline"
                title={`Visit ${author.name}'s website`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {author.website.replace("https://", "").replace("http://", "")}
              </Link>
            </p>
          )}
        </div>

        {/* Right: Photo */}
        <div className="md:w-1/3 relative min-h-96 md:min-h-0">
          <Image
            src={author.photo}
            alt={`${author.name} – CitizenCorrespondent Author`}
            fill
            priority
            className={`object-cover md:rounded-none shadow-2xl ${reverse ? "md:rounded-l-lg" : "md:rounded-r-lg"}`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;

