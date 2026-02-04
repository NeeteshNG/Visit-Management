/** @type {import('next').NextConfig} */

const apiHost = process.env.NEXT_PUBLIC_API_HOST || 'localhost';

const nextConfig = {
  swcMinify: true,
  images: {
    domains: [apiHost],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: apiHost,
        port: ''
      }
    ],
  },
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_VAPID_KEY: process.env.FIREBASE_VAPID_KEY 

  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

module.exports = nextConfig
