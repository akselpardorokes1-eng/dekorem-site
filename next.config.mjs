/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/prototype.html',
      },
    ];
  },
};

export default nextConfig;
