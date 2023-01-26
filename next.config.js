/** @type {import('next').NextConfig} */
const { parsed: localEnv } = require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
//      new webpack.EnvironmentPlugin(localEnv)
module.exports = nextConfig;
