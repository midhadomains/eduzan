/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.abhinavr.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol:'https',
        hostname:'learn.midhajee.com',
        port:'',
        pathname:'/**'
      },
      {
        protocol:'https',
        hostname:'secure.gravatar.com',
        port:'',
        pathname:'/**'
      },
      {
        protocol:'https',
        hostname:'api.eduzan.com',
        port:'',
        pathname:'/**'
      },
      {
        protocol:'https',
        hostname:'home.midhafin.com',
        port:'',
        pathname:'/**'
      },
      {
        protocol:'https',
        hostname:'media.licdn.com',
        port:'',
        pathname:'/**'
      }
    ]
  }
}

module.exports = nextConfig
