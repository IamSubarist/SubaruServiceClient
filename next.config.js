/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "localhost",
      "subaru-service-161.ru",
      "subaru-service-161.ru:5000",
      "subaru-service-161:5000",
    ],
  },
};

module.exports = nextConfig;
