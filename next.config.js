/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['midhafin.com', 'edubing.com','secure.gravatar.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.abhinavr.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'edubing.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.midhafin.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'midha-images.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**',
      }, 
      {
        protocol: 'https',
        hostname: 'files.midhafin.com',
        port: '',
        pathname: '/**',
      }, 

    ]
  }
}

module.exports = nextConfig
