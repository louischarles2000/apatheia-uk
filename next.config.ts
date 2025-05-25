import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shop.alphaelemental.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "shop.alphaelemental.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "alphaelemental.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "alphaelemental.com",
        port: "",
        pathname: "/**",
      },
    ]
  }
};

export default nextConfig;
