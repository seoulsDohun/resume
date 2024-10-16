const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/resume/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
