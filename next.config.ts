import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",         
  trailingSlash: true,   
      
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
      formats: ["image/avif", "image/webp"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
    experimental: {
    scrollRestoration: true, 
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
