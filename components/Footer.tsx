import Link from "next/link";

const navLinks = [
  { href: "/", label: "TOP" },
  { href: "/service", label: "サービス詳細" },
  { href: "/reikai", label: "零会" },
  { href: "/about", label: "プロフィール" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A40] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-start gap-4">
              <Link href="/" className="inline-block group">
                <div
                  className="text-3xl font-bold text-[#B8960C] font-serif"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  零学マネジメント.
                </div>
                <div className="text-xs text-[#C9A84C] tracking-widest mt-1">
                  REIGAKU MANAGEMENT
                </div>
              </Link>
              {/* SNSアイコン */}
              <div className="flex items-center gap-2 mt-1">
                <a
                  href="https://lin.ee/TZTOM2h"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="公式LINE"
                  className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-[#00C300] hover:border-[#00C300] transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.13.031-.196.031-.211 0-.41-.09-.543-.265l-2.774-3.769v3.438c0 .349-.282.629-.631.629-.345 0-.627-.28-.627-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .4.082.535.26l2.777 3.754V8.108c0-.345.282-.63.631-.63.346 0 .628.285.628.63v4.771zm-5.741 0c0 .349-.282.629-.631.629-.345 0-.627-.28-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                </a>
                <a
                  href="https://x.com/reigaku_okachi?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
            <p
              className="mt-4 text-white/60 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              偏った思考を零ポイントに戻し、
              <br />
              中立な位置にする学問
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3
              className="text-[#B8960C] text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              Navigation
            </h3>
            <nav className="flex flex-col gap-3" aria-label="フッターナビゲーション">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* SNS & Contact */}
          <div className="md:col-span-1">
            <h3
              className="text-[#B8960C] text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              Follow Us
            </h3>
            <div className="flex gap-4">
              {/* X (Twitter) */}
              <a
                href="https://x.com/reigaku_okachi?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LINE */}
              <a
                href="https://lin.ee/TZTOM2h"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-[#00C300] hover:border-[#00C300] transition-colors duration-200"
                aria-label="公式LINE"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.13.031-.196.031-.211 0-.41-.09-.543-.265l-2.774-3.769v3.438c0 .349-.282.629-.631.629-.345 0-.627-.28-.627-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .4.082.535.26l2.777 3.754V8.108c0-.345.282-.63.631-.63.346 0 .628.285.628.63v4.771zm-5.741 0c0 .349-.282.629-.631.629-.345 0-.627-.28-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-[#B8960C] hover:bg-[#C9A84C] text-white text-sm px-6 py-2 transition-colors duration-200"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p
            className="text-white/40 text-xs"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            © 2025 零学マネジメント. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
