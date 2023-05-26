/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'camo.envatousercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  },
};

const withMDX = require('@next/mdx')({
  options: {
    providerImportSource: '@mdx-js/react',
  },
});
module.exports = withMDX(nextConfig);
