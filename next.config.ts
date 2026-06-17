import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/umut-grup",
  assetPrefix: "/umut-grup/",
  trailingSlash: true,
};

export default nextConfig;