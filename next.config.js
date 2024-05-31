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
        hostname:'d502jbuhuh9wk.cloudfront.net',
        port:'',
        pathname:'/**'
      },
      {
        protocol:'https',
        hostname:'i0.wp.com',
        port:'',
        pathname:'/**'
      },
      {
        protocol:'https',
        hostname:'files.midhafin.com',
        port:'',
        pathname:'/**'
      },
      {
        protocol:'https',
        hostname:'midha-images.s3.ap-south-1.amazonaws.com',
        port:'',
        pathname:'/**'
      }
    ]
  }
}
module.exports = nextConfig
