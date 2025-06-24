import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Skip type errors during production build
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint errors during production build
  },
  images: {
    domains: ['res.cloudinary.com'], // Allow external image loading
  },
};

export default nextConfig;
