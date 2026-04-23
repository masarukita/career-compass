/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/uchinoko-navi',
        destination: 'https://uchinoko-navi-obxczimqi.vercel.app',
      },
      {
        source: '/uchinoko-navi/:path*',
        destination: 'https://uchinoko-navi-obxczimqi.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig