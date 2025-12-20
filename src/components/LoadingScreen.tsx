"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only show on initial page load (homepage)
    if (pathname !== '/') {
      setIsLoading(false);
      return;
    }

    // Animation starts at 1 second, fade starts at the same time
    const animationStartTime = 1000; // 1 second - when zoom animation starts
    const animationDuration = 2000; // 2 seconds - zoom animation duration (1s to 3s)
    const totalTime = 3000; // 3 seconds total

    // Start fade out when animation starts (at 1 second)
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, animationStartTime);

    // Hide completely after animation and fade complete
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, totalTime);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadingTimer);
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 bg-white flex items-center justify-center transition-opacity duration-2000 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: isLoading ? "auto" : "none" }}
    >
      <div
        className="opacity-100 logo-zoom-animation"
        style={{
          transformOrigin: "center center",
        }}
      >
        <Image
          src="/images/cc-favIcon.svg"
          alt="CitizenCorrespondent"
          width={200}
          height={50}
          priority
        />
      </div>
    </div>
  );
};

export default LoadingScreen;

