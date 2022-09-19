/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  swcMinify: true,
  webpack: (config, options) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
      }
    });
    return config;
  }
}

module.exports = nextConfig
