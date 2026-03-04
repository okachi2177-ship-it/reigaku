"use client";

import { useState } from "react";

type TopicType = "normal" | "work" | "okugi";

interface Topic {
  text: string;
  type: TopicType;
}

interface DayData {
  day: number;
  summary: string;
  topics: Topic[];
  isSpecial?: boolean;
}

interface PhaseGroup {
  label: string;
  subtitle: string;
  days: DayData[];
}

function classifyTopic(text: string): TopicType {
  if (text.includes("（奥義）") || text.includes("最終奥義")) return "okugi";
  if (text.endsWith("work") || text.includes(" work")) return "work";
  return "normal";
}

function t(text: string): Topic {
  return { text, type: classifyTopic(text) };
}

const phases: PhaseGroup[] = [
  {
    label: "基礎編",
    subtitle: "思考と現実の構造を理解する",
    days: [
      {
        day: 1,
        summary: "２つの思考パターンと抽象・具体の世界",
        topics: [
          t("２つの思考パターン　２つの世界"),
          t("抽象と具体 2"),
          t("抽象と具体 3"),
          t("抽象と具体 4"),
          t("抽象と具体 5"),
          t("抽象と具体 6"),
          t("嫌い→好き　work"),
        ],
      },
      {
        day: 2,
        summary: "願望・振動数・時間軸・パラレルワールド",
        topics: [
          t("願望を叶えるには？"),
          t("振動数"),
          t("振動数 2"),
          t("時間軸"),
          t("時間軸 2"),
          t("パラレルワールド"),
          t("既にある"),
          t("既にある 2"),
        ],
      },
      {
        day: 3,
        summary: "人間の悩みとエゴの本質",
        topics: [
          t("人間の悩み"),
          t("エゴ"),
          t("エゴ 2"),
          t("エゴ 3"),
          t("エゴ 4"),
          t("エゴ 5"),
          t("必要な思考　不必要なエゴ"),
        ],
      },
      {
        day: 4,
        summary: "荷（バックグラウンド）の構造と解放",
        topics: [
          t("荷"),
          t("荷をおろす"),
          t("荷の因数分解"),
          t("荷の溶解度"),
          t("外攻撃　内攻撃"),
          t("憧れを下す"),
          t("荷おろし　work"),
          t("荷というバックグラウンド"),
        ],
      },
    ],
  },
  {
    label: "実践編",
    subtitle: "許し・充足・人間関係を解放する",
    days: [
      {
        day: 5,
        summary: "許し・覚悟・不足と充足の法則",
        topics: [
          t("許し"),
          t("覚悟"),
          t("現象　法則"),
          t("最大の恐怖"),
          t("不足　充足"),
          t("不足を疑う"),
          t("改善という不足"),
        ],
      },
      {
        day: 6,
        summary: "属性・向き・手放しと叶えているを知る",
        topics: [
          t("属性を与え直す"),
          t("属性を与え直す 2"),
          t("向き"),
          t("向き 2"),
          t("荷という圧力"),
          t("荷という圧力 2"),
          t("手放し"),
          t("叶えているを知る"),
        ],
      },
      {
        day: 7,
        summary: "社会・お金・人間という虚像と実像",
        topics: [
          t("属している"),
          t("お金"),
          t("虚像　実像"),
          t("社会"),
          t("性善説"),
          t("人間"),
          t("常識は変化する"),
        ],
      },
      {
        day: 8,
        summary: "繋がり・自己評価・尊厳と存在意義",
        topics: [
          t("繋がり"),
          t("繋がり　男女"),
          t("自己評価"),
          t("成長変化"),
          t("尊厳"),
          t("存在意義、価値"),
          t("知識と経験"),
          t("自責　他責"),
          t("現実的対処"),
        ],
      },
    ],
  },
  {
    label: "応用編",
    subtitle: "感情・知覚・非物理次元を統合する",
    days: [
      {
        day: 9,
        summary: "感情の段階・エネルギー・幸せの分解",
        topics: [
          t("罠"),
          t("感情の段階"),
          t("エネルギー"),
          t("幸せの分解"),
          t("楽しい　愉しい"),
          t("マインドマップ　work"),
        ],
      },
      {
        day: 10,
        summary: "知覚・イメージング・奥義へのアクセス",
        topics: [
          t("香り"),
          t("ヴィジョンボード"),
          t("イメージング"),
          t("知覚"),
          t("知覚発見フロー"),
          t("知覚フロー飛ばし"),
          t("エントロピー増大の法則"),
          t("■■■■■■（奥義）"),
          t("I love me"),
          t("■■■■■■（奥義）"),
        ],
      },
      {
        day: 11,
        summary: "概念・二元論・物理次元と非物理次元",
        topics: [
          t("概念"),
          t("二元論"),
          t("物理次元　非物理次元"),
          t("神"),
          t("■■の領域にアクセスする"),
          t("新たなパラレル"),
          t("■■■■■■（奥義）"),
        ],
      },
      {
        day: 12,
        summary: "最上の振動数・神の振動数・本当の私",
        topics: [
          t("■■■■■■（奥義）"),
          t("■■■■■■（奥義）"),
          t("開運　パワースポット"),
          t("古代からの生存テクノロジー"),
          t("■■■■■■（奥義）"),
          t("本当の私"),
          t("■■の領域にへリクエストする"),
          t("最上の振動数　神の振動数"),
          t("最後に"),
        ],
      },
    ],
  },
  {
    label: "完成編",
    subtitle: "総復習と最終奥義の伝授",
    days: [
      {
        day: 13,
        summary: "14日間の学びを完全に統合する",
        topics: [t("総復習")],
      },
      {
        day: 14,
        summary: "零会50日参加後に最終奥義を伝授",
        topics: [t("最終奥義を伝授（零会50日参加後）")],
        isSpecial: true,
      },
    ],
  },
];

const phaseColors: Record<string, string> = {
  基礎編: "bg-[#1A1A40] text-white",
  実践編: "bg-[#2A2A60] text-white",
  応用編: "bg-[#B8960C] text-white",
  完成編: "bg-[#8A6F09] text-white",
};

export default function CurriculumAccordion() {
  const [openDay, setOpenDay] = useState<number>(1);

  const toggle = (day: number) => {
    setOpenDay((prev) => (prev === day ? -1 : day));
  };

  return (
    <div className="space-y-12">
      {phases.map((phase) => (
        <div key={phase.label}>
          {/* Phase separator */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-[#B8960C]/30" />
            <div className="flex items-center gap-3 shrink-0">
              <span
                className={`text-xs px-3 py-1 font-bold tracking-wider ${phaseColors[phase.label]}`}
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                {phase.label}
              </span>
              <span
                className="text-[#2D2D2D]/50 text-sm"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                {phase.subtitle}
              </span>
            </div>
            <div className="h-px flex-1 bg-[#B8960C]/30" />
          </div>

          {/* Day cards */}
          <div className="space-y-3">
            {phase.days.map((dayData) => {
              const isOpen = openDay === dayData.day;
              const okugiCount = dayData.topics.filter((t) => t.type === "okugi").length;

              return (
                <div
                  key={dayData.day}
                  className={`border transition-all duration-300 ${
                    dayData.isSpecial
                      ? "border-[#B8960C] shadow-[0_0_20px_rgba(184,150,12,0.15)]"
                      : isOpen
                      ? "border-[#B8960C]"
                      : "border-[#B8960C]/20 hover:border-[#B8960C]/60"
                  } bg-white`}
                >
                  {/* Header (always visible) */}
                  <button
                    onClick={() => toggle(dayData.day)}
                    className="w-full text-left px-6 py-5 flex items-center gap-4 group"
                    aria-expanded={isOpen}
                  >
                    {/* Day number */}
                    <div className="shrink-0 w-16">
                      <span
                        className="text-[#B8960C] font-bold text-xs tracking-widest"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        DAY
                      </span>
                      <p
                        className="text-[#1A1A40] font-bold text-2xl leading-none"
                        style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                      >
                        {String(dayData.day).padStart(2, "0")}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-10 bg-[#B8960C]/20 shrink-0" />

                    {/* Summary */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[#2D2D2D] font-bold text-sm sm:text-base leading-snug"
                        style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                      >
                        {dayData.summary}
                      </p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span
                          className="text-[#2D2D2D]/40 text-xs"
                          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                        >
                          {dayData.topics.length} トピック
                        </span>
                        {okugiCount > 0 && (
                          <span
                            className="text-[10px] px-2 py-0.5 bg-[#1A1A40] text-[#B8960C] font-bold tracking-wider"
                            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                          >
                            奥義 × {okugiCount}
                          </span>
                        )}
                        {dayData.isSpecial && (
                          <span
                            className="text-[10px] px-2 py-0.5 bg-[#B8960C] text-white font-bold tracking-wider"
                            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                          >
                            最終奥義
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`shrink-0 text-[#B8960C] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 6l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-[#B8960C]/20 bg-[#FAFAF5] px-6 py-5">
                      {dayData.isSpecial ? (
                        /* Special DAY14 layout */
                        <div className="text-center py-4">
                          <div className="text-[#B8960C] text-3xl mb-3">✦</div>
                          <p
                            className="text-[#1A1A40] font-bold text-lg mb-2"
                            style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                          >
                            最終奥義を伝授
                          </p>
                          <p
                            className="text-[#2D2D2D]/60 text-sm"
                            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                          >
                            零会に50日間参加された方のみに、
                            <br className="hidden sm:block" />
                            マンツーマンで最終奥義をお伝えします。
                          </p>
                        </div>
                      ) : (
                        /* Normal topic list */
                        <ul className="space-y-2">
                          {dayData.topics.map((topic, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 border-l-2 border-[#B8960C]/30 pl-4 py-1"
                            >
                              {topic.type === "okugi" ? (
                                <>
                                  <span
                                    className="text-[#2D2D2D]/40 text-sm flex-1"
                                    style={{
                                      fontFamily: "var(--font-noto-sans-jp), sans-serif",
                                    }}
                                  >
                                    {topic.text.replace("（奥義）", "")}
                                  </span>
                                  <span
                                    className="shrink-0 text-[10px] px-2 py-0.5 bg-[#1A1A40] text-[#B8960C] font-bold tracking-wider"
                                    style={{
                                      fontFamily: "var(--font-noto-sans-jp), sans-serif",
                                    }}
                                  >
                                    奥義
                                  </span>
                                </>
                              ) : topic.type === "work" ? (
                                <>
                                  <span
                                    className="text-[#2D2D2D] text-sm flex-1"
                                    style={{
                                      fontFamily: "var(--font-noto-sans-jp), sans-serif",
                                    }}
                                  >
                                    {topic.text.replace(/\s*work$/, "")}
                                  </span>
                                  <span
                                    className="shrink-0 text-[10px] px-2 py-0.5 bg-[#B8960C]/10 text-[#B8960C] border border-[#B8960C]/30 font-bold"
                                    style={{
                                      fontFamily: "var(--font-noto-sans-jp), sans-serif",
                                    }}
                                  >
                                    実践
                                  </span>
                                </>
                              ) : (
                                <span
                                  className="text-[#2D2D2D] text-sm"
                                  style={{
                                    fontFamily: "var(--font-noto-sans-jp), sans-serif",
                                  }}
                                >
                                  {topic.text}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
