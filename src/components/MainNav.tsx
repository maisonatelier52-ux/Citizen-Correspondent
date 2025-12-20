// components/MainNav.tsx
"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

// Lazy load SearchModal - only load when search is opened
const SearchModal = dynamic(() => import("./SearchModal"), {
  ssr: false,
});

interface MainNavProps {
    currentPage?: string;
}

const MainNav: React.FC<MainNavProps> = ({ currentPage = "home" }) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
    const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

    const menuItems = [
        { name: "Home", href: "/", title: "Home" },
        { name: "World", href: "/category/world", title: "World News" },
        { name: "Business", href: "/category/business", title: "Business News" },
        { name: "Finance", href: "/category/finance", title: "Finance News" },
        { name: "Politics", href: "/category/politics", title: "Politics News" },
        { name: "Pages", href: "#", title: "Pages", hasDropdown: true },
        { name: "Blog", href: "/blog", title: "Blog" },
    ];

    const pagesDropdownItems = [
        { name: "About Us", href: "/about-us", title: "About Us" },
        { name: "Authors", href: "/authors", title: "Authors" },
        { name: "Privacy Policy", href: "/privacy-policy", title: "Privacy Policy" },
        { name: "Terms & Conditions", href: "/terms-conditions", title: "Terms & Conditions" },
    ];

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (dropdownTimeout) {
                clearTimeout(dropdownTimeout);
            }
        };
    }, [dropdownTimeout]);

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
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
                        <div className="hidden lg:flex items-center space-x-6">
                            {menuItems.map((item) => {
                                // Check if current page matches the href
                                const isActive = 
                                    (currentPage === "home" && item.href === "/") ||
                                    (item.href.startsWith("/category/") && currentPage?.includes(item.href.replace("/category/", ""))) ||
                                    (!item.href.startsWith("/category/") && currentPage === item.href.slice(1));
                                
                                if (item.hasDropdown) {
                                    const handleMouseEnter = () => {
                                        if (dropdownTimeout) {
                                            clearTimeout(dropdownTimeout);
                                            setDropdownTimeout(null);
                                        }
                                        setPagesDropdownOpen(true);
                                    };

                                    const handleMouseLeave = () => {
                                        const timeout = setTimeout(() => {
                                            setPagesDropdownOpen(false);
                                        }, 200); // 200ms delay before closing
                                        setDropdownTimeout(timeout);
                                    };

                                    return (
                                        <div
                                            key={item.name}
                                            className="relative"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <button
                                                className={`relative text-sm font-medium transition-colors duration-200 ${
                                                    isActive
                                                        ? "text-orange-500"
                                                        : "text-gray-700 hover:text-orange-500"
                                                }`}
                                            >
                                                {item.name}
                                                <span className="ml-1 text-xs">{pagesDropdownOpen ? "▲" : "▼"}</span>
                                            </button>
                                            
                                            {/* Dropdown Menu */}
                                            {pagesDropdownOpen && (
                                                <div 
                                                    className="absolute top-full left-0 pt-1 w-48 z-50"
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                >
                                                    <div className="bg-white border border-gray-200 rounded shadow-lg">
                                                        <div className="py-1">
                                                            {pagesDropdownItems.map((dropdownItem) => (
                                                                <Link
                                                                    key={dropdownItem.name}
                                                                    href={dropdownItem.href}
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors duration-200"
                                                                    title={dropdownItem.title}
                                                                >
                                                                    {dropdownItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                
                                return (
                                    <div key={item.name} className="relative">
                                        <Link
                                            href={item.href}
                                            title={item.title}
                                            className={`relative text-sm font-medium transition-colors duration-200 ${isActive
                                                ? "text-orange-500"
                                                : "text-gray-700 hover:text-orange-500"
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
                            {/* Search Icon */}
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                                title="Search"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-gray-700 hover:text-orange-500 transition-colors duration-200"
                            title="Menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Search Modal */}
            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </>
    );
};

export default MainNav;

