import type { NextConfig } from 'next'
import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},
}

export default withPlaiceholder(nextConfig)
