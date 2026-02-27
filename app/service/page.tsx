import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "サービス詳細 | 零学マンツーマントレーニング・零会",
  description:
    "零学マンツーマントレーニング（753,500円・税込）と零会（月額13,200円）の詳細。1対1での6ヶ月伴走サポートで永久的な変化をもたらします。",
};

const installmentPlans = [
  {
    title: "3回払い",
    total: "791,175円",
    monthly: "263,725円",
    fee: "手数料5%込",
    months: 3,
  },
  {
    title: "6回払い",
    total: "791,175円",
    monthly: "131,862円",
    fee: "手数料5%込",
    months: 6,
  },
  {
    title: "12回払い",
    total: "828,850円",
    monthly: "69,070円",
    fee: "手数料10%込",
    months: 12,
  },
];

const flowSteps = [
  {
    number: "01",
    title: "契約",
    description: "トレーニング内容・条件をご確認の上、契約を締結します。",
  },
  {
    number: "02",
    title: "日程調整",
    description: "5〜10日あたりのトレーニング日を決めます（後日変更可能）。",
  },
  {
    number: "03",
    title: "お支払い",
    description: "銀行振込でお支払いいただきます（研修代として経費計上可能）。",
  },
  {
    number: "04",
    title: "トレーニング開始",
    description: "学んだことを日常生活で実践しながらトレーニングを進めます。",
  },
  {
    number: "05",
    title: "Zoomで復習",
    description: "Zoomレコーディング動画でいつでも何度でも復習できます。",
  },
];

const reikaTimeline = [
  { time: "22:05〜22:25", activity: "荷下ろし", description: "日々の思考・感情を書き出す" },
  { time: "22:25〜22:30", activity: "書き出した事を疑う", description: "中立な視点で見直す" },
  { time: "22:30〜22:40", activity: "日替りメソッド", description: "零学の実践メソッドを学ぶ" },
  { time: "22:40〜22:45", activity: "雑談", description: "参加者同士の交流" },
];

export default function ServicePage() {
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
              SERVICE
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              サービス詳細
            </h1>
          </FadeInSection>
        </div>
      </section>

      {/* マンツーマントレーニング Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                1 ON 1 TRAINING
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                零学マンツーマントレーニング
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Details */}
            <FadeInSection delay={100}>
              <div className="bg-white border border-[#B8960C]/20 p-8 sm:p-12">
                <h3
                  className="text-[#B8960C] text-sm tracking-widest mb-8 uppercase"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  Details
                </h3>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span
                      className="text-[#2D2D2D]/50 text-sm w-32 shrink-0"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      トレーニング時間
                    </span>
                    <span
                      className="text-[#2D2D2D] font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      60〜90分 × 14日間
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span
                      className="text-[#2D2D2D]/50 text-sm w-32 shrink-0"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      受講方法
                    </span>
                    <span
                      className="text-[#2D2D2D] font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      対面 or Zoom
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span
                      className="text-[#2D2D2D]/50 text-sm w-32 shrink-0"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      支払方法
                    </span>
                    <span
                      className="text-[#2D2D2D] font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      銀行振込
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span
                      className="text-[#2D2D2D]/50 text-sm w-32 shrink-0"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      経費計上
                    </span>
                    <span
                      className="text-[#2D2D2D] font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      研修代として可能
                    </span>
                  </div>

                  <div className="pt-6 border-t border-[#B8960C]/20">
                    <p
                      className="text-[#2D2D2D]/50 text-xs mb-2"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      受講料（税込）
                    </p>
                    <p
                      className="text-[#B8960C] text-4xl font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      ¥753,500
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Special Benefits */}
            <FadeInSection delay={200}>
              <div>
                <h3
                  className="text-[#B8960C] text-sm tracking-widest mb-8 uppercase"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  Special Benefits
                </h3>
                <div className="bg-[#1A1A40] p-8 sm:p-10 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[#B8960C] text-2xl shrink-0">✦</div>
                    <div>
                      <h4
                        className="text-white font-bold text-lg mb-3"
                        style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                      >
                        零会 無料チケット特典
                      </h4>
                      <p
                        className="text-white/70 text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        マンツーマン受講者には、受講開始から<strong className="text-[#C9A84C]">6ヶ月間</strong>、
                        零会への参加チケットを無料でプレゼント。
                      </p>
                      <p className="text-[#C9A84C] text-sm mt-3 font-bold"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
                        （79,200円相当）
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#B8960C]/20 p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-[#B8960C] text-2xl shrink-0">◎</div>
                    <div>
                      <h4
                        className="text-[#2D2D2D] font-bold text-lg mb-3"
                        style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                      >
                        Zoom録画で復習サポート
                      </h4>
                      <p
                        className="text-[#2D2D2D]/70 text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        受講後はZoomレコーディング動画で
                        いつでも何度でも復習が可能。
                        学びを着実に定着させます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Installment Plans Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A1A40]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                INSTALLMENT
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                分割払いも可能です
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {installmentPlans.map((plan, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="border border-[#B8960C]/30 hover:border-[#B8960C] p-8 transition-colors duration-300 group text-center">
                  <h3
                    className="text-[#B8960C] text-lg font-bold mb-6"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    {plan.title}
                  </h3>
                  <div className="mb-4">
                    <p
                      className="text-white/50 text-xs mb-2"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      月々
                    </p>
                    <p
                      className="text-white text-3xl font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      ¥{plan.monthly}
                    </p>
                  </div>
                  <div className="border-t border-[#B8960C]/20 pt-4">
                    <p
                      className="text-white/50 text-xs"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      総額 {plan.total}（{plan.fee}）
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                FLOW
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                トレーニングまでの流れ
              </h2>
            </div>
          </FadeInSection>

          <div className="relative">
            {flowSteps.map((step, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="flex gap-8 mb-8">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-2 border-[#B8960C] flex items-center justify-center shrink-0">
                      <span
                        className="text-[#B8960C] text-sm font-bold"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        {step.number}
                      </span>
                    </div>
                    {index < flowSteps.length - 1 && (
                      <div className="w-px flex-1 bg-[#B8960C]/20 mt-2 min-h-[3rem]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <h3
                      className="text-[#2D2D2D] font-bold text-lg mb-2"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#2D2D2D]/60 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 零会 Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A1A40]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                COMMUNITY
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                零会
                <span
                  className="text-[#C9A84C] text-xl ml-3"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  （通称：荷下ろし会）
                </span>
              </h2>
              <p
                className="text-white/60 mt-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                Zoomで集まる零学実践（0活）
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Overview */}
            <FadeInSection delay={100}>
              <div>
                <div className="bg-white/5 border border-[#B8960C]/20 p-8 mb-6">
                  <h3
                    className="text-[#B8960C] text-sm tracking-widest mb-6"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    OVERVIEW
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p
                        className="text-white/50 text-xs mb-1"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        スケジュール
                      </p>
                      <p
                        className="text-white font-bold"
                        style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                      >
                        平日毎日 22:05〜22:45
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p
                        className="text-white/50 text-xs mb-1"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        料金（税込）
                      </p>
                      <p
                        className="text-[#B8960C] text-3xl font-bold"
                        style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                      >
                        ¥13,200
                        <span
                          className="text-white/50 text-sm ml-2 font-normal"
                          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                        >
                          / 月
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Participation style */}
                <div className="bg-white/5 border border-[#B8960C]/20 p-8">
                  <h3
                    className="text-[#B8960C] text-sm tracking-widest mb-6"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    STYLE
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "画面オフOK",
                      "ミュートOK",
                      "入退室自由",
                      "質問・相談OK",
                    ].map((style, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-white/70 text-sm"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        <span className="text-[#B8960C]">✓</span>
                        {style}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Timeline */}
            <FadeInSection delay={200}>
              <div>
                <h3
                  className="text-[#B8960C] text-sm tracking-widest mb-8"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  TIME SCHEDULE
                </h3>
                <div className="space-y-4">
                  {reikaTimeline.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 border-l-2 border-[#B8960C]/30 pl-4 hover:border-[#B8960C] transition-colors duration-300"
                    >
                      <div className="shrink-0 w-28">
                        <p
                          className="text-[#C9A84C] text-xs"
                          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                        >
                          {item.time}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-white font-bold text-sm mb-1"
                          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                        >
                          {item.activity}
                        </p>
                        <p
                          className="text-white/50 text-xs"
                          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Member benefits */}
                <div className="mt-10 bg-[#B8960C]/10 border border-[#B8960C]/30 p-6">
                  <h4
                    className="text-[#B8960C] text-sm font-bold mb-4"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    会員特典（2ヶ月継続者限定）
                  </h4>
                  <ul className="space-y-2">
                    <li
                      className="text-white/70 text-sm flex items-start gap-2"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      <span className="text-[#B8960C] shrink-0">✦</span>
                      リアル零会 参加費無料
                    </li>
                    <li
                      className="text-white/70 text-sm flex items-start gap-2"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      <span className="text-[#B8960C] shrink-0">✦</span>
                      ノート活用術、ヴィジョンノート作成会 等 無料
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
