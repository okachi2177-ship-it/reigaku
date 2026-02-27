"use client";

import { useState, useEffect, useCallback } from "react";
import FadeInSection from "./FadeInSection";

const testimonials = [
  {
    id: 1,
    name: "A.T.様",
    age: "40代・経営者",
    text: "受講前は常に頭の中がうるさく、仕事中も家にいても落ち着けませんでした。零学を学んでから、その騒ぎが嘘のように静まり、今では目の前のことに集中できるようになりました。仕事の質も人間関係も、驚くほど変わりました。",
    highlight: "頭の中の騒ぎが静まり、仕事の質が変わった",
  },
  {
    id: 2,
    name: "M.K.様",
    age: "30代・会社員",
    text: "スピリチュアル系のセミナーや自己啓発本を何年も試してきましたが、変化はその場限りでした。零学は違いました。1対1でじっくり向き合っていただき、6ヶ月でじわじわと、でも確実に変化を感じています。永久的な変化とはこういうことかと実感しています。",
    highlight: "その場限りではない、確実な変化を実感",
  },
  {
    id: 3,
    name: "K.S.様",
    age: "50代・主婦",
    text: "人間関係のストレスで悩んでいましたが、零学の「中立な視点」を学んでから、相手への見方がまったく変わりました。批判したり否定したりするのではなく、違いを理解できるようになった。家族との関係がこんなに楽になるとは思いませんでした。",
    highlight: "中立な視点で、家族との関係が劇的に改善",
  },
  {
    id: 4,
    name: "R.N.様",
    age: "20代・フリーランス",
    text: "零会に参加しはじめてから、毎日の「荷下ろし」が習慣になりました。22時過ぎにZoomで集まって、その日の思考を書き出して疑う——たった40分ですが、これが本当に効果的。夜すっきりして眠れるようになり、翌朝の頭の軽さが全然違います。",
    highlight: "毎日の零会で、頭が軽くなり眠れるように",
  },
  {
    id: 5,
    name: "H.O.様",
    age: "40代・管理職",
    text: "最初は「753,500円は高い」と思いました。でも受講してみると、これまで何百万もかけてきたセミナーや研修より、圧倒的に価値があった。1対1で制限なく質問できる環境、6ヶ月の伴走サポート、録画での復習——全部が本物の変化につながりました。",
    highlight: "投資対効果に驚き。本物の変化を手に入れた",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <p
              className="text-[#B8960C] text-sm tracking-widest mb-4"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              TESTIMONIALS
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              お客様の声
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Card */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.id} className="w-full shrink-0 px-2">
                    <div className="bg-white border border-[#B8960C]/20 p-8 sm:p-12 relative">
                      {/* Quote mark */}
                      <div
                        className="text-[#B8960C]/15 text-8xl font-serif absolute top-4 left-6 leading-none select-none"
                        aria-hidden="true"
                        style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                      >
                        "
                      </div>

                      {/* Highlight */}
                      <p
                        className="text-[#B8960C] text-sm font-bold mb-6 relative z-10"
                        style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                      >
                        「{t.highlight}」
                      </p>

                      {/* Body */}
                      <p
                        className="text-[#2D2D2D]/75 text-sm sm:text-base leading-loose relative z-10"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        {t.text}
                      </p>

                      {/* Author */}
                      <div className="mt-8 flex items-center gap-4 border-t border-[#B8960C]/10 pt-6">
                        <div className="w-10 h-10 bg-[#1A1A40] flex items-center justify-center shrink-0">
                          <span
                            className="text-[#B8960C] text-sm font-bold"
                            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                          >
                            {t.id}
                          </span>
                        </div>
                        <div>
                          <p
                            className="text-[#2D2D2D] font-bold text-sm"
                            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                          >
                            {t.name}
                          </p>
                          <p
                            className="text-[#2D2D2D]/50 text-xs mt-0.5"
                            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                          >
                            {t.age}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next buttons */}
            <button
              onClick={prev}
              aria-label="前の声を見る"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-10 h-10 bg-white border border-[#B8960C]/30 hover:border-[#B8960C] hover:bg-[#B8960C] text-[#B8960C] hover:text-white transition-all duration-200 flex items-center justify-center shadow-sm"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="次の声を見る"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-10 h-10 bg-white border border-[#B8960C]/30 hover:border-[#B8960C] hover:bg-[#B8960C] text-[#B8960C] hover:text-white transition-all duration-200 flex items-center justify-center shadow-sm"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8" role="tablist" aria-label="お客様の声ページ">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`${i + 1}番目の声`}
                className={`h-1.5 transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-[#B8960C]"
                    : "w-4 bg-[#B8960C]/25 hover:bg-[#B8960C]/50"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <p
            className="text-center text-[#2D2D2D]/30 text-xs mt-4 tracking-widest"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            {current + 1} / {testimonials.length}
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
