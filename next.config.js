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
  /* NOTE: @todo THIS IS INSECURE! WE HAVE TO PROPERLY DO IT AT SOME POINT. 
    See: https://docs.stripe.com/js/issuing/create_ephemeral_key_nonce
    See: https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
  */
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
          },
        ],
      },
    ];
  },
};
