/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "192.168.1.42",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cpdptzkkiklzeynemmcw.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "xibxlzpsulkuidgzkukm.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;