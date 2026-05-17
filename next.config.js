/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
  env: {
    APP_NAME: "Spine MRI Second-Reader"
  }
};

module.exports = nextConfig;
