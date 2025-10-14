import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',        // next export ko enable karta hai
  images: { unoptimized: true }, // export mode me needed if you use <Image/>
  trailingSlash: true   
};

export default nextConfig;
