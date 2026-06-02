/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lirp.cdn-website.com',
      },
    ],
  },
  // SEO migration: 301 redirects from old site anchor patterns
  async redirects() {
    return [
      // Old Duda site used hash anchors — redirect common ones to proper pages
      { source: '/', has: [{ type: 'query', key: 'section', value: 'electrical' }], destination: '/electrical-services', permanent: true },
      { source: '/', has: [{ type: 'query', key: 'section', value: 'gas' }], destination: '/gas-services', permanent: true },
    ]
  },
}

export default nextConfig
