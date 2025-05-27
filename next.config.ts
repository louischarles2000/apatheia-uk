import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shop.apatheia.org.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "shop.apatheia.org.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "apatheia.org.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "apatheia.org.uk",
        port: "",
        pathname: "/**",
      },
    ]
  }
};

export default nextConfig;
