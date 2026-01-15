/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'dOOs',
    description: 'The official store for dOOs supported Kasm workspaces.',
    icon: 'https://gregoryrochevirt.github.io/dOOs-kasm-registry/1.1/logo.png',
    listUrl: 'https://gregoryrochevirt.github.io/dOOs-kasm-registry/',
    contactUrl: 'https://github.com/gregoryrochevirt/dOOs-kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/dOOs-kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
