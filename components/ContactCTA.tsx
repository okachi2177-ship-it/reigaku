import Link from "next/link";
import FadeInSection from "./FadeInSection";

export default function ContactCTA() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInSection>
          <div className="border border-[#B8960C]/30 p-12">
            <p
              className="text-[#B8960C] text-sm tracking-widest mb-4"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              CONTACT
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-6"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              お気軽にご相談ください
            </h2>
            <p
              className="text-[#2D2D2D]/70 mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              零学マネジメントについてのご質問、
              <br />
              マンツーマントレーニングのご相談はこちらから。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[#B8960C] hover:bg-[#C9A84C] text-white px-10 py-4 text-sm tracking-widest transition-colors duration-200"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                お問い合わせはこちら
              </Link>
              <a
                href="/downloads/reigaku-booklet.pdf"
                download
                className="inline-block border border-[#B8960C] text-[#B8960C] hover:bg-[#B8960C] hover:text-white px-10 py-4 text-sm tracking-widest transition-colors duration-200"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                無料小冊子をダウンロード
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
