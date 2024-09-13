/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: { fetches: { fullUrl: true } },
  images: { domains: ["maps.googleapis.com", "images.unsplash.com"] },
};

export default nextConfig;
