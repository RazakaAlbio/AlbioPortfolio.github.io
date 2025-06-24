/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '', // Kosongkan untuk repository GitHub Pages utama
  assetPrefix: '', // Kosongkan untuk repository GitHub Pages utama
  trailingSlash: true,
  // Tambahkan ini untuk memastikan asset ter-copy
 // experimental: {
   // outputFileTracingRoot: process.cwd(),
 // },
};

module.exports = nextConfig;
