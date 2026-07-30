import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: "/(.*)",
      headers: securityHeaders,
    },
  ],
  // public/game/ に置いたゲーム(Vite製の静的SPA)を /game で配信する。
  // public/ はパス完全一致でしか配信されないため、/game を index.html へ解決する。
  rewrites: async () => ({
    beforeFiles: [{ source: "/game", destination: "/game/index.html" }],
    afterFiles: [],
    fallback: [],
  }),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
