import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,
  allowedDevOrigins: ['192.168.0.111'],
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
  
};

export default nextConfig;
