/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['minio.aws.abraham.fun'],
    loader: 'default',
  },
}

module.exports = nextConfig
