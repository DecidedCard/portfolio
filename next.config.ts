import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['./inline-svg-loader.js'],
        as: '*.js',
      },
    },
  },
}

export default nextConfig
