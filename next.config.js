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
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://m.stripe.network https://blessed-peacock-38.clerk.accounts.dev https://statistics.hashbite.net;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data:;
              connect-src 'self' https://api.stripe.com https://blessed-peacock-38.clerk.accounts.dev https://statistics.hashbite.net;
              frame-src https://js.stripe.com;
              worker-src 'self' blob:;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
            `
              .replace(/\n/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};
