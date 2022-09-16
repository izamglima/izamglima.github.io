/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  //reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
      },
      assetPrefix: isProd ? '/izamglima.github.io/' : '',
      images: {
        unoptimized: true,
      },
    });
    return config;
  }
}

module.exports = nextConfig
