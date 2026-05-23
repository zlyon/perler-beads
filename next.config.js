const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
});

const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  compress: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withPWA(nextConfig);
