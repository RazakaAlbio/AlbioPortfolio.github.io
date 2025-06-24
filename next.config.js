/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '', // Kosongkan untuk repository GitHub Pages utama
  assetPrefix: '', // Kosongkan untuk repository GitHub Pages utama
  trailingSlash: true,
};

module.exports = nextConfig;
