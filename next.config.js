/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.holod-vdom.ru",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "strapi.holod-vdom.ru",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
