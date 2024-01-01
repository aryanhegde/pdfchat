/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, defaultLoaders, dev, webpack, isServer }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

module.exports = nextConfig;
