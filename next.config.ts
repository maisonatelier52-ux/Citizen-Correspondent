import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // ← THIS CREATES THE out/ FOLDER
  trailingSlash: true,        // ← Makes URLs like /entertainment/ (good for cPanel)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Optimize for faster TTI and performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize production builds
  productionBrowserSourceMaps: false,
};

export default nextConfig;
