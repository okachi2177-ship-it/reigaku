"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "TOP" },
  { href: "/service", label: "サービス詳細" },
  { href: "/reikai", label: "零会" },
  { href: "/about", label: "プロフィール" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1A1A40]/90 backdrop-blur-md shadow-lg"
          : "bg-white/70 backdrop-blur-sm border-b border-[#B8960C]/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo + SNS */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex flex-col leading-tight group">
              <span
                className="text-2xl sm:text-3xl font-bold text-[#B8960C] font-serif transition-opacity group-hover:opacity-80"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                零学
              </span>
              <span className="text-xs text-[#C9A84C] tracking-widest">
                REIGAKU
              </span>
            </Link>
            <div className="flex items-center gap-1.5">
              <a
                href="https://lin.ee/TZTOM2h"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="公式LINE"
                className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                  isScrolled
                    ? "border-white/20 text-white/60 hover:text-[#00C300] hover:border-[#00C300]"
                    : "border-[#B8960C]/30 text-[#B8960C]/60 hover:text-[#00C300] hover:border-[#00C300]"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.13.031-.196.031-.211 0-.41-.09-.543-.265l-2.774-3.769v3.438c0 .349-.282.629-.631.629-.345 0-.627-.28-.627-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .4.082.535.26l2.777 3.754V8.108c0-.345.282-.63.631-.63.346 0 .628.285.628.63v4.771zm-5.741 0c0 .349-.282.629-.631.629-.345 0-.627-.28-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
              <a
                href="https://x.com/reigaku_okachi?s=11"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                  isScrolled
                    ? "border-white/20 text-white/60 hover:text-white hover:border-white/60"
                    : "border-[#B8960C]/30 text-[#B8960C]/60 hover:text-[#2D2D2D] hover:border-[#2D2D2D]/60"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="メインナビゲーション">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 relative group ${
                  isScrolled
                    ? "text-white/90 hover:text-[#C9A84C]"
                    : "text-[#2D2D2D]/70 hover:text-[#B8960C]"
                }`}
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B8960C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[#B8960C] transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#B8960C] transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#B8960C] transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="bg-[#1A1A40]/95 backdrop-blur-md px-4 py-4 flex flex-col gap-4"
          aria-label="モバイルナビゲーション"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-[#C9A84C] text-base py-2 border-b border-white/10 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
