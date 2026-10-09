import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed pages: pricing details and beta-era testimonials were outdated/unverified.
  async redirects() {
    return [
      { source: "/customers", destination: "/", permanent: false },
      { source: "/pricing", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
