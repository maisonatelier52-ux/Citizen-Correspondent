"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import MobileMenu from "./MobileMenu";



const MainNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/", title: "Home" },
    { name: "World", href: "/world", title: "World News" },
    { name: "Business", href: "/business", title: "Business News" },
    { name: "Finance", href: "/finance", title: "Finance News" },
    { name: "Politics", href: "/politics", title: "Politics News" },
    { name: "Opinion", href: "/opinion", title: "Opinion News" },
    { name: "Health", href: "/health", title: "Health News" },
    { name: "Education", href: "/education", title: "Education News" },
    {
      name: "Global Affairs",
      href: "/global-affairs",
      title: "Global Affairs News",
    },
    { name: "Featured", href: "/featured", title: "Featured News" },
    { name: "Hot", href: "/hot", title: "Hot News" },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-360 mx-auto px-3 md:px-16">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center justify-between gap-6">
              {/* Logo */}
              <Link href="/" title="Qlork Home" className="flex items-center">
                <Image
                  src="/images/news-img/qlork-logo.webp"
                  alt="Qlork"
                  width={140}
                  height={20}
                  priority
                />
              </Link>

              {/* Navigation Menu */}
              <div className="hidden lg:flex items-center space-x-4">
                {menuItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <div key={item.name} className="relative">
                      <Link
                        href={item.href}
                        title={item.title}
                        className={`relative text-sm font-semibold transition-colors duration-200
                                                    ${
                                                      isActive
                                                        ? "bg-gray-200 text-black p-2"
                                                        : "text-black "
                                                    }`}
                      >
                        {item.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors duration-200"
              title="Menu"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <MobileMenu
            menuItems={menuItems}
            onClose={() => setMobileMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default MainNav;
