/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    BASE_URL:   'http://localhost:4000',
  },
 // output: 'export',
  reactStrictMode: true,
  
  images: {
    unoptimized: true,
    domains: ['ehp-hasnaoui.com'],
  },
  experimental: {
    serverActions: true
  }
  }
   
export default nextConfig