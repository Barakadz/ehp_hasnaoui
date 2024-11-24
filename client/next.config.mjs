/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  apps: [
    {
      name: 'frontend',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 3001,
      },
    },
  ],
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