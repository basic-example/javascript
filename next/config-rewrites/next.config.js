/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/home",
      destination: "/main",
    },
  ],
}

module.exports = nextConfig
