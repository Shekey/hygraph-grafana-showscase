import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.hygraph.com",
      },
      {
        protocol: "https",
        hostname: "**.hygraph.dev",
      },
      {
        protocol: "https",
        hostname: "eu-central-1-staging.cdn.hygraph.com",
      },
      {
        protocol: "https",
        hostname: "**.graphassets.com",
      },
      {
        protocol: "https",
        hostname: "**.graphassets.dev",
      },
    ],
  },
  // Enable static exports for better performance
  output: "standalone",
  serverExternalPackages: ["snappy"],
};

export default nextConfig;