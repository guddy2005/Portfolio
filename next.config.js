/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com", // For demo project images
      "avatars.githubusercontent.com", // For GitHub avatar
      "i.imgur.com", // For imgur hosted images
    ],
  },
  compiler: {

    removeConsole: process.env.NODE_ENV === "production",
  },

 
 
  experimental: {

  },
};

module.exports = nextConfig;
