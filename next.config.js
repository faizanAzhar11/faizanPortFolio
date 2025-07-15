/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // For static export (GitHub Pages, Netlify)
  output: 'export',
  trailingSlash: true,
  // Uncomment below for GitHub Pages deployment
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
}

module.exports = nextConfig
