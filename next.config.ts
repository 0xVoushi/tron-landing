import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/tutorial',
        destination: '/guide',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
