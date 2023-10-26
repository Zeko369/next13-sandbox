/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    taint: true,
  },
};

module.exports = nextConfig;
