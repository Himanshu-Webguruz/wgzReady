/* @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "webguruz.in",
          },
          {
            protocol: "https",
            hostname: "secure.gravatar.com",
          },
          {
            protocol:"https",
            hostname:"api.webguruz.in"
          }
        ],
      },
};

export default nextConfig;
