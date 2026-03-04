import Link from "next/link";
import FadeInSection from "./FadeInSection";

export default function FreeTrialCTA() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#1A1A40]">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInSection>
          <div className="border border-[#B8960C]/50 p-10 sm:p-14 relative">
            {/* 期間限定バッジ */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span
                className="bg-[#B8960C] text-white text-xs tracking-widest px-5 py-1.5"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                期間限定
              </span>
            </div>

            {/* タイトル */}
            <h2
              className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-4 leading-relaxed"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              コンサルタントと 1 対 1 で
              <br />
              零会無料体験
            </h2>

            {/* 時間 */}
            <p
              className="text-[#B8960C] text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              60 分間
            </p>

            {/* 説明文 */}
            <p
              className="text-white/70 text-sm sm:text-base leading-loose mb-8"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              無料体験の際に何でもご質問ください。
              また、悩み事をお聞きして ご相談に乗ることも可能です。
              <br />
              日程はメールにて調整させていただきます。
            </p>

            {/* CTA リンク */}
            <Link
              href="/contact"
              className="inline-block bg-[#B8960C] hover:bg-[#C9A84C] text-white px-10 py-4 text-sm tracking-widest transition-colors duration-200"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              零会無料体験のお申込みは →
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
