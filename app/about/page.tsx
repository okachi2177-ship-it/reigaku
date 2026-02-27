import type { Metadata } from "next";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "プロフィール・思い | 零学コンサルタント",
  description:
    "零学コンサルタントのプロフィールと理念。零学を通じてマインドワンダリングを静め、すべての体験を充足に転換させることが私たちの使命です。",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#1A1A40] pt-32 pb-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <p
              className="text-[#B8960C] text-sm tracking-widest mb-4"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              ABOUT
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              プロフィール・思い
            </h1>
          </FadeInSection>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                CONSULTANT
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                コンサルタントプロフィール
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Photo */}
            <FadeInSection delay={100}>
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#B8960C]/30 mb-6">
                  <Image
                    src="https://placehold.co/400x400/1A1A40/B8960C?text=Photo"
                    alt="コンサルタントのプロフィール写真"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3
                  className="text-[#2D2D2D] text-2xl font-bold text-center mb-2"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  （お名前）
                </h3>
                <p
                  className="text-[#B8960C] text-sm tracking-widest text-center"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  零学コンサルタント
                </p>
              </div>
            </FadeInSection>

            {/* Profile Content */}
            <FadeInSection delay={200} className="lg:col-span-2">
              <div>
                <h3
                  className="text-[#B8960C] text-sm tracking-widest mb-6"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  BIOGRAPHY
                </h3>
                <div
                  className="text-[#2D2D2D]/70 text-sm sm:text-base leading-loose space-y-4"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  <p>
                    ここには、コンサルタントの経歴・自己紹介文が入ります。
                    零学との出会い、これまでの歩み、専門分野などについてお書きください。
                  </p>
                  <p>
                    例：「幼い頃から頭の中のおしゃべりが止まらず、何をしていても
                    『これで良いのだろうか』という思考が続いていました。
                    そんな中、零学と出会い、思考の偏りを中立に戻す方法を学びました。」
                  </p>
                  <p>
                    例：「現在は零学コンサルタントとして、マンツーマントレーニングと
                    零会を通じて、多くの方の思考の変容をサポートしています。
                    一人一人の変化が、社会全体の変化につながると信じています。」
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A1A40]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                PHILOSOPHY
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                零学マネジメント理念
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="border border-[#B8960C]/30 p-10 sm:p-16 text-center mb-12">
              <div className="text-[#B8960C] text-4xl mb-8">零</div>
              <p
                className="text-white text-lg sm:text-2xl font-bold leading-relaxed"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                零学を通じて、マインドワンダリング
                <br />
                （頭の中のおしゃべり）を静めさせて
                <br />
                すべての体験を充足に転換させること。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div
              className="text-white/60 text-sm sm:text-base leading-loose text-center space-y-4"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              <p>
                ここには、この理念に至った背景・思いについて記述が入ります。
              </p>
              <p>
                例：「私たちが零学マネジメントを設立したのは、
                思考の偏りによる苦しみを解消したいという強い思いからでした。
                多くの人が頭の中のおしゃべりに振り回され、
                本来の充足感を感じられずにいます。」
              </p>
              <p>
                例：「零学の理論は、特定の思想や宗教に偏ることなく、
                誰もが中立な視点を持てるよう設計されています。
                知的で実践的なアプローチで、永久的な変化をもたらすことが私たちの使命です。」
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                MESSAGE
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                受講者の皆さまへ
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="bg-white border border-[#B8960C]/20 p-10 sm:p-16 relative">
              {/* Decorative quote mark */}
              <div
                className="text-[#B8960C]/20 text-8xl font-serif absolute top-6 left-8 leading-none"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                aria-hidden="true"
              >
                "
              </div>

              <div className="relative z-10">
                <p
                  className="text-[#2D2D2D] text-lg sm:text-xl font-bold text-center leading-relaxed mb-10"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  受講者の皆さまの喜びが、
                  <br />
                  私たちコンサルタントの喜びです
                </p>

                <div
                  className="text-[#2D2D2D]/70 text-sm sm:text-base leading-loose space-y-4"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  <p>
                    ここには、個人的な思いや零学と出会ったきっかけなどが入ります。
                  </p>
                  <p>
                    例：「零学と出会う前の私は、常に頭の中が騒がしく、
                    何をしていても本当の意味で満足できませんでした。
                    零学を学んでから、その騒ぎが静まり、
                    日常の何気ない瞬間に充足感を感じられるようになりました。」
                  </p>
                  <p>
                    例：「この変化を一人でも多くの方にお届けしたい。
                    それが私が零学コンサルタントとして活動する原動力です。
                    あなたの変化が、きっと周囲の方々にも良い影響を与えていきます。
                    一緒に歩んでいきましょう。」
                  </p>
                </div>

                <div className="mt-10 text-right">
                  <p
                    className="text-[#B8960C] font-bold"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    零学コンサルタント
                  </p>
                  <p
                    className="text-[#2D2D2D] text-xl font-bold mt-1"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    （お名前）
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
