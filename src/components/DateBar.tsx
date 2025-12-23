// components/DateBar.tsx
"use client";
import React, { useState, useEffect } from "react";

interface DateBarProps {
  message?: string;
  buttonText?: string;
}

const DateBar: React.FC<DateBarProps> = ({
  message = "Exclusive insights, data, and analysis for financial market experts.",
  buttonText = "Explore Now",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Format current date
    const formatDate = () => {
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      };
      return today.toLocaleDateString('en-US', options);
    };
    
    setCurrentDate(formatDate());
  }, []);

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
        <div className="text-xs font-medium">{currentDate}</div>

        {/* Center: Message */}
        <div className="text-xs text-end flex-1 hidden md:block">{message}</div>

        {/* Right: Explore Now Button */}
        <button className="bg-red-900 hover:bg-orange-600 text-white px-4 py-1.5 text-xs transition-colors duration-200">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default DateBar;

