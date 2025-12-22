// components/DateBar.tsx
"use client";
import React, { useState, useEffect } from "react";

interface DateBarProps {
  date?: string;
  message?: string;
  buttonText?: string;
}

const DateBar: React.FC<DateBarProps> = ({
  date = "Wednesday, 3 Dec 2025",
  message = "Exclusive insights, data, and analysis for financial market experts.",
  buttonText = "Explore Now",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth >= 768); // md breakpoint is 768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white">
      <div className="max-w-360 mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
        {/* Left: Date */}
        <div className="text-sm font-medium">{date}</div>

        {/* Center: Message */}
        <div className="text-sm text-end flex-1 hidden md:block">{message}</div>

        {/* Right: Explore Now Button */}
        <button className="bg-red-900 hover:bg-orange-600 text-white px-4 py-1.5 text-sm  transition-colors duration-200">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default DateBar;

