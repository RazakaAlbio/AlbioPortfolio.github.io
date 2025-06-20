/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/AlbioPortfolio.github.io',
  assetPrefix: '/AlbioPortfolio.github.io/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
