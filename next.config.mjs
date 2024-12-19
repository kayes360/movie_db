/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "image.tmdb.org",
          port: "", 
        },
        {
          protocol: "http",
          hostname: "facebook.com",
          port: "",
        },
        {
          protocol: "http",
          hostname: "x.com",
          port: "",
        },
        {
          protocol: "http",
          hostname: "linkedin.com",
          port: "",
        },
      ],
    },
  };
  
  export default nextConfig;
  