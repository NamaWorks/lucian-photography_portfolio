import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // the next config is for avoiding the optimization of the images done in Vercel
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
