/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["en.wikipedia.org"],
  },
}

module.exports = nextConfig
