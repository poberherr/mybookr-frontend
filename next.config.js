export default {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "78.141.207.217",
        port: "",
        pathname: "/media/listing_images/**",
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
