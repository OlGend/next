/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['bananocasino.com'],

  },
  swcMinify: true,
}

module.exports = nextConfig;

