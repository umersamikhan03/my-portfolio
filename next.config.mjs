/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Vercel deployment
  output: 'standalone',
  
  // Image optimization
  images: {
    domains: ['i.scdn.co'], // Spotify album images
    formats: ['image/webp', 'image/avif'],
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
