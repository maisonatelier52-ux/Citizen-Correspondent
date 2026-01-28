// components/MainNav.tsx
"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

// Lazy load SearchModal - only load when search is opened
const SearchModal = dynamic(() => import("./SearchModal"), {
    ssr: false,
});


const MainNav: React.FC = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    // const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
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
        { name: "Global Affairs", href: "/global-affairs", title: "Global Affairs News" },
        { name: "Featured", href: "/featured", title: "Featured News" },
        // { name: "Climate Change", href: "/climate-change", title: "Climate Change News" },
        { name: "Hot", href: "/hot", title: "Hot News" },
        { name: "Research", href: "/research", title: "Research News" },



        // { name: "Pages", href: "#", title: "Pages", hasDropdown: true },
    ];

    // const pagesDropdownItems = [
    //     { name: "About Us", href: "/about-us", title: "About Us" },
    //     { name: "Our Team", href: "/our-team", title: "Our Team" },
    //     { name: "Privacy Policy", href: "/privacy-policy", title: "Privacy Policy" },
    //     { name: "Terms & Conditions", href: "/terms-and-conditions", title: "Terms & Conditions" },
    // ];

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (dropdownTimeout) {
                clearTimeout(dropdownTimeout);
            }
        };
    }, [dropdownTimeout]);

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
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center justify-between gap-6">
                            {/* Left: Logo */}
                            <Link href="/" title="CitizenCorrespondent Home" className="flex items-center">
                                <Image
                                    src="/images/cc-logo.svg"
                                    alt="CitizenCorrespondent"
                                    width={200}
                                    height={30}
                                    priority
                                />
                            </Link>

                            {/* Center: Navigation Menu */}
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
                                                className={`relative text-sm font-semibold transition-colors duration-200 ${isActive
                                                        ? "text-orange-500"
                                                        : "text-black hover:text-orange-500"
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        </div>
                                    );
                                })}

                            </div>
                        </div>

                        {/* Right: Icons */}
                        <div className="flex items-center space-x-4">
                      
                            <button
                                onClick={() => setSearchOpen(true)}
                                 className="text-gray-700 hover:text-orange-500 transition-colors duration-200 hidden lg:block"
    title="Search"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors duration-200"
                            title="Menu"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
          {mobileMenuOpen && (
  <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white">
   <div className="px-6 py-4 space-y-3">
                            {menuItems.map((item) => {
                                const isActive =
                                    item.href === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(item.href);

                              
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        title={item.title}
                                        className={`block py-2 text-xs font-semibold transition-colors duration-200 ${isActive
                                                ? "text-orange-500"
                                                : "text-black hover:text-orange-500"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </nav>

            {/* Search Modal */}
            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </>
    );
};

export default MainNav;

