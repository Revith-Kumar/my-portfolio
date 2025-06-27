/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true, // Optional: only if you're using Server Actions
  },
};

module.exports = nextConfig;
