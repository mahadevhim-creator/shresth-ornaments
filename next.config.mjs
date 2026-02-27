const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/shresth-ornaments" : "",
  assetPrefix: isProd ? "/shresth-ornaments" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;