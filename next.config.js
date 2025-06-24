/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'AlbioPortfolio.github.io';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}` : '',
  trailingSlash: true,
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
};

module.exports = nextConfig;
