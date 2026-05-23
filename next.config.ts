import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: [/middleware-manifest\.json$/],
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "offlineCache",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
  ],
  // 👇 新增：限制缓存文件大小，解决 25MB 限制
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
});

const nextConfig: NextConfig = {
  /* config options here */
  // 👇 新增：关闭超大源码映射 + 开启压缩
  productionBrowserSourceMaps: false,
  compress: true,
};

export default withPWA(nextConfig);
