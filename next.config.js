/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Disable static export for now to support server components
  output: undefined,
}

module.exports = nextConfig
