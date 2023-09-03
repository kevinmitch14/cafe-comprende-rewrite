/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["maps.googleapis.com", "h3.googleusercontent.com"],
  }
};

module.exports = nextConfig;
