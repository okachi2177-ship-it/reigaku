import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

// ゲーム(public/game/)の入口URL。
// `/game/` は Next.js の trailingSlash:false 既定挙動で 308 → `/game` に剥がされるが、
// `/game` は Service Worker のスコープ `/game/` の外側になり SW に制御されない
// （＝ホーム画面追加もオフライン起動もできない）。そのため
// 「末尾スラッシュを持たず、かつ /game/ 配下にある」この URL を正式な入口とする。
const GAME_ENTRY = "/game/play";

const noStore = [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }];
const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: "/(.*)",
      headers: securityHeaders,
    },
    // 内容が変わればファイル名が変わるビルド成果物
    { source: "/game/bundle/:path*", headers: immutable },
    // ファイル名が固定のゲーム画像。差し替えが届くよう必ず再検証させる
    { source: "/game/assets/:path*", headers: noStore },
    { source: "/game/sw.js", headers: noStore },
    { source: "/game/registerSW.js", headers: noStore },
    { source: "/game/manifest.webmanifest", headers: noStore },
    { source: "/game/index.html", headers: noStore },
  ],
  // `/game` で来た人を実URLへ寄せる。permanent:false(307)必須 —
  // 308 はブラウザが恒久キャッシュするため後から切り戻せなくなる
  redirects: async () => [
    { source: "/game", destination: GAME_ENTRY, permanent: false },
  ],
  // public/ はパス完全一致でしか配信されないため、入口URLを index.html へ解決する
  rewrites: async () => ({
    beforeFiles: [{ source: GAME_ENTRY, destination: "/game/index.html" }],
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
