export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mybookr-assets.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
