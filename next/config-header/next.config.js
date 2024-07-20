/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "all-wildward",
            value: "exist1",
          },
        ],
      },
      {
        source: "/([a-z\/]{0,})",
        headers: [
          {
            key: "all-regex",
            value: "exist2",
          },
        ],
      },
      {
        source: "/settings",
        headers: [
          {
            key: "strict-settings",
            value: "exist3",
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
