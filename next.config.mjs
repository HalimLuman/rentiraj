/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'utfs.io', // Replace with your domain or local IP
            port: '', // Optional, usually empty
            pathname: '**', // Path to the images
          },
        ],
      },
};

export default nextConfig;
