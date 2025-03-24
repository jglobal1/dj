/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'i.scdn.co'], // Add any external image domains here
    unoptimized: process.env.NODE_ENV === 'development',
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig; 