import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  buildExcludes: [
    /middleware-manifest\.json$/,
    // 👇 直接排除那个超大的 cache 文件夹！
    /cache\/.*$/
  ],
  maximumFileSizeToCacheInBytes: 1, // 彻底禁用大文件缓存
});

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  compress: true,
  output: "export",  // 👈 最关键：纯静态导出，不生成多余大文件
};

export default withPWA(nextConfig);
