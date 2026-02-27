/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/shresth-ornaments",
  assetPrefix: "/shresth-ornaments/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;