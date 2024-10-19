import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Correct domain format
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|avi|mov|wmv)$/,
      use: {
        loader: "file-loader",
        options: {
          outputPath: "static/videos/",
          publicPath: "/_next/static/videos/",
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
};

export default nextConfig;
