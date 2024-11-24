/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  env: {
    BASE_URL:   'http://localhost:3001',
  },
  images: {
    unoptimized: true,
  }
  }
   
export default nextConfig