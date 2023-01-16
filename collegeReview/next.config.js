/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "i.ytimg.com","education.sakshi.com"],
  },
};

module.exports = nextConfig;
