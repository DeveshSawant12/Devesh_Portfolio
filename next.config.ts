import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",

  experimental: {
    viewTransition: true,
  },

  allowedDevOrigins: ["localhost:3000"],

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig