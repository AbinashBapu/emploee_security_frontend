import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy /api requests
        destination: "http://localhost:8080/:path*", // Backend URL on port 8080
      },
      {
        source: "/auth/api/:path*", // Proxy /api requests
        destination: "http://localhost:8080/:path*", // Backend URL on port 8080
      },
    ];
  },
};

export default nextConfig;
