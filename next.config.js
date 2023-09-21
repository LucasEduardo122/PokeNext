/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["nexus.traction.one", "pokeapi.co", 'cdn.traction.one']
  },
  ignoreBuildErrors: true,
}

module.exports = nextConfig
