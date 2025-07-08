// /** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production'

// const nextConfig = {
//   // reactStrictMode: true,
//   swcMinify: true,
//   assetPrefix: isProd ? '/love-island-visualizations/' : ''

// }

// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  assetPrefix: '', // remove or leave as empty string
};

export default nextConfig;
