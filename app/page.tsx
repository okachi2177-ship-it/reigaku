import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import ContactCTA from "@/components/ContactCTA";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "零学マネジメント | 偏った思考を零ポイントに戻す学問",
  description:
    "零学マネジメントは、偏った思考を零ポイントに戻し、中立な位置にする学問です。マインドワンダリングを静め、すべての体験を充足に転換させます。",
};

const processSteps = [
  {
    number: "01",
    title: "零学理論インストール",
    description:
      "4つの領域（思考・技術・社会・非物理次元）を学ぶ。深い理解を通じて、新たな視点を手に入れる。",
  },
  {
    number: "02",
    title: "日常生活・零会参加で癖づけ",
    description:
      "学んだ理論を日々の生活で実践。零会への定期参加を通じて、理論を身体に定着させる。",
  },
  {
    number: "03",
    title: "マインドワンダリングが静まる",
    description:
      "頭の中のおしゃべりが落ち着き、余計な思考に振り回されなくなる。静かな内側の状態へ。",
  },
  {
    number: "04",
    title: "すべての体験が充足に",
    description:
      "日常のあらゆる体験が満たされたものに変わる。困難な状況も、中立な視点で受け取れるようになる。",
  },
];

const domains = [
  {
    title: "思考",
    subtitle: "MIND",
    description: "感情、エゴ、願望。自分の思考パターンを理解し、中立な視点を獲得する。",
    icon: "◎",
  },
  {
    title: "技術",
    subtitle: "TECHNIQUE",
    description: "メソッド、対処法。日常で使える実践的なツールと技術を習得する。",
    icon: "◇",
  },
  {
    title: "社会",
    subtitle: "SOCIETY",
    description: "人間関係。他者との関わりの中で、零学の理論を活かす方法を学ぶ。",
    icon: "△",
  },
  {
    title: "非物理次元",
    subtitle: "METAPHYSICAL",
    description: "見えない世界、奥義。より深い次元での学びと、存在の本質への洞察。",
    icon: "✦",
  },
];

const comparisonData = [
  { item: "形式", others: "1対大勢", reigaku: "1対1" },
  { item: "内容", others: "学習型", reigaku: "学習＋明確なアクション" },
  { item: "質問", others: "できない or しにくい", reigaku: "気軽に制限なくできる" },
  { item: "期間", others: "その日限り", reigaku: "6ヶ月伴走" },
  { item: "変化", others: "その場限りの変化", reigaku: "永久的な変化" },
  { item: "学習方法", others: "インプットメイン", reigaku: "インプット＋アウトプット" },
  { item: "他への姿勢", others: "他の考えを批判・否定しがち", reigaku: "他の違いを理解・中立" },
  { item: "雰囲気", others: "緊張感・華やか", reigaku: "安心感・着実" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#B8960C 1px, transparent 1px), linear-gradient(90deg, #B8960C 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Large 零学 */}
          <h1
            className="text-[7rem] sm:text-[11rem] lg:text-[14rem] font-bold leading-none text-[#B8960C]"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            零学
          </h1>

          {/* REIGAKU */}
          <p
            className="tracking-[0.6em] sm:tracking-[0.9em] text-sm sm:text-base text-[#B8960C] mt-1 sm:mt-2"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            REIGAKU
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-[#B8960C]/30 my-8 sm:my-10" />

          {/* Tagline */}
          <p
            className="text-[#2D2D2D] text-base sm:text-xl leading-relaxed mb-3 max-w-xl"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            偏った思考を零ポイントに戻し、
            <br />
            中立な位置にする学問
          </p>
          <p
            className="text-[#2D2D2D]/50 text-xs sm:text-sm leading-relaxed mb-12"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            マインドワンダリング（頭の中のおしゃべり）を静め、
            <br className="hidden sm:block" />
            すべての体験を充足に転換させる
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/downloads/reigaku-booklet.pdf"
              download
              className="inline-block bg-[#B8960C] hover:bg-[#C9A84C] text-white px-8 py-4 text-sm tracking-widest transition-all duration-200 hover:shadow-lg hover:shadow-[#B8960C]/20"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              無料小冊子をダウンロード
            </a>
            <Link
              href="/contact"
              className="inline-block border border-[#B8960C] text-[#B8960C] hover:bg-[#B8960C] hover:text-white px-8 py-4 text-sm tracking-widest transition-all duration-200"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* Bottom-right brand mark */}
        <div className="absolute bottom-8 right-8 sm:bottom-10 sm:right-12 text-right">
          <p
            className="text-[#B8960C]/60 text-xs sm:text-sm tracking-widest"
            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
          >
            零学マネジメント.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span
            className="text-[#2D2D2D]/30 text-xs tracking-widest"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            SCROLL
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#B8960C]/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* 零学とは Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                ABOUT REIGAKU
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                零学とは
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection delay={100}>
              <div>
                <p
                  className="text-[#2D2D2D] text-base sm:text-lg leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  零学とは、偏った思考を零ポイントに戻し、中立な位置にする学問です。
                </p>
                <p
                  className="text-[#2D2D2D]/70 text-sm sm:text-base leading-loose"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  私たちの思考は、日常の中でさまざまな方向に偏ります。
                  抽象と具体、水平思考と垂直思考——。
                  零学はこれらの偏りを認識し、中立な「零ポイント」へと戻す道筋を示します。
                </p>
                <p
                  className="text-[#2D2D2D]/70 text-sm sm:text-base leading-loose mt-4"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  ゼロベース思考に立ち返ることで、頭の中のおしゃべりが静まり、
                  日常のすべての体験が充足したものへと変わっていきます。
                </p>
              </div>
            </FadeInSection>

            {/* Concept diagram */}
            <FadeInSection delay={200}>
              <div className="bg-white border border-[#B8960C]/20 p-8 sm:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-center">
                    <div
                      className="text-[#2D2D2D]/60 text-xs tracking-widest mb-1"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      ABSTRACT
                    </div>
                    <div
                      className="text-[#2D2D2D] font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      抽象的
                    </div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#2D2D2D]/20 via-[#B8960C] to-[#2D2D2D]/20 mx-4 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#B8960C] rotate-45" />
                  </div>
                  <div className="text-center">
                    <div
                      className="text-[#2D2D2D]/60 text-xs tracking-widest mb-1"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      CONCRETE
                    </div>
                    <div
                      className="text-[#2D2D2D] font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      具体的
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-8">
                  <div className="text-center">
                    <div
                      className="text-[#2D2D2D]/60 text-xs tracking-widest mb-1"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      LATERAL
                    </div>
                    <div
                      className="text-[#2D2D2D] font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      水平思考
                    </div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#2D2D2D]/20 via-[#B8960C] to-[#2D2D2D]/20 mx-4 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#B8960C] rotate-45" />
                  </div>
                  <div className="text-center">
                    <div
                      className="text-[#2D2D2D]/60 text-xs tracking-widest mb-1"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      VERTICAL
                    </div>
                    <div
                      className="text-[#2D2D2D] font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      垂直思考
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-px h-8 bg-[#B8960C]/40" />
                  <div className="w-16 h-16 border-2 border-[#B8960C] rotate-45 flex items-center justify-center my-2">
                    <div className="text-[#B8960C] font-bold text-lg -rotate-45"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}>
                      零
                    </div>
                  </div>
                  <div className="w-px h-8 bg-[#B8960C]/40" />
                  <div className="mt-4 text-center">
                    <div
                      className="text-[#B8960C] text-xs tracking-widest mb-1"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      ZERO POINT
                    </div>
                    <div
                      className="text-[#2D2D2D] font-bold text-sm"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      ゼロベース思考
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A1A40]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                PROCESS
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                零学理論の流れ
              </h2>
            </div>
          </FadeInSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-[#B8960C]/20 hidden sm:block" />

            <div className="flex flex-col gap-8">
              {processSteps.map((step, index) => (
                <FadeInSection key={index} delay={index * 150}>
                  <div
                    className={`flex items-start gap-6 sm:gap-0 ${
                      index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 sm:max-w-[calc(50%-3rem)] ${
                        index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                      }`}
                    >
                      <div
                        className="text-[#B8960C]/50 text-xs tracking-widest mb-2"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        STEP {step.number}
                      </div>
                      <h3
                        className="text-white text-lg sm:text-xl font-bold mb-3"
                        style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-white/60 text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Center dot */}
                    <div className="hidden sm:flex flex-col items-center justify-center w-24 shrink-0">
                      <div className="w-10 h-10 border border-[#B8960C] flex items-center justify-center">
                        <span
                          className="text-[#B8960C] text-xs font-bold"
                          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                        >
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden sm:block flex-1 sm:max-w-[calc(50%-3rem)]" />
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* 4 Domains Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A1A40]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                DOMAINS
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                4つの学びの領域
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="border border-[#B8960C]/30 p-8 hover:border-[#B8960C] transition-colors duration-300 group">
                  <div className="text-[#B8960C] text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {domain.icon}
                  </div>
                  <p
                    className="text-[#C9A84C] text-xs tracking-widest mb-2"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    {domain.subtitle}
                  </p>
                  <h3
                    className="text-white text-xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    {domain.title}
                  </h3>
                  <p
                    className="text-white/60 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    {domain.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                COMPARISON
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                他社との違い
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th
                      className="text-left p-4 border-b border-[#2D2D2D]/10 text-[#2D2D2D]/50 text-sm font-normal"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      項目
                    </th>
                    <th
                      className="text-center p-4 border-b border-[#2D2D2D]/10 text-[#2D2D2D]/70 text-sm font-normal"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      他社セミナー・
                      <br />
                      スピリチュアルリーダー
                    </th>
                    <th
                      className="text-center p-4 border-b-2 border-[#B8960C] text-[#B8960C] text-sm font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      零学コンサルタント
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-[#FAFAF5]"
                      } hover:bg-[#B8960C]/5 transition-colors duration-150`}
                    >
                      <td
                        className="p-4 text-[#2D2D2D]/60 text-sm border-b border-[#2D2D2D]/5"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        {row.item}
                      </td>
                      <td
                        className="p-4 text-center text-[#2D2D2D]/70 text-sm border-b border-[#2D2D2D]/5"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        {row.others}
                      </td>
                      <td
                        className="p-4 text-center text-[#2D2D2D] text-sm font-bold border-b border-[#B8960C]/10 bg-[#B8960C]/5"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        {row.reigaku}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <p
                className="text-[#2D2D2D] text-base sm:text-lg font-bold leading-relaxed"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                零学コンサルタントは、
                <br />
                千人に少しの影響を与えるよりも
                <br />
                目の前の一人に大きな影響を与える
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A1A40] relative overflow-hidden">
        {/* Gold decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#B8960C]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8960C]/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeInSection>
            <p
              className="text-[#B8960C] text-sm tracking-widest mb-4"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              FREE DOWNLOAD
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              零学の全体像がわかる
              <br />
              小冊子を無料でお届けします
            </h2>
            <p
              className="text-white/60 text-sm sm:text-base leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              零学の基礎理論から実践まで、
              わかりやすくまとめた入門小冊子です。
              まずはここから零学を体験してください。
            </p>
            <a
              href="/downloads/reigaku-booklet.pdf"
              download
              className="inline-block bg-[#B8960C] hover:bg-[#C9A84C] text-white px-12 py-5 text-sm tracking-widest transition-all duration-200 hover:shadow-xl hover:shadow-[#B8960C]/30"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              無料小冊子をダウンロード
            </a>
          </FadeInSection>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
