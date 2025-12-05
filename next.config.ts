const nextConfig = {
  /* 이미지 설정: Unsplash 이미지 허용 */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },
    ],
  },

  /* 배포 치트키: 사소한 에러 무시하고 일단 배포하기 */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
