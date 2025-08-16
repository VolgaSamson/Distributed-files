/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "noble-minnow-83.clerk.accounts.dev",
      },
    ],
  },
};

export default nextConfig;
