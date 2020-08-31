module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self' font-src 'self' https://use.typekit.net",
          },
        ],
      },
    ];
  },
};
