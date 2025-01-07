import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    // This to disable typescript errors during building
    // But we should not do this (best practice)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    ppr: 'incremental',
  },
}

export default nextConfig