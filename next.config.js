/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      protocol: 'https',
      hostname: 'storage.googleapis.com',
      pathname: '/proglabs-bucket/course-thumbnail/**',
    ],
  },
}

module.exports = nextConfig
