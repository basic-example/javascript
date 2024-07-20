/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/home",
      destination: "/main",
      permanent: true,
    },
  ],
}

module.exports = nextConfig
