import type { Metadata } from "next";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";
import ContactCTA from "@/components/ContactCTA";
import FreeTrialCTA from "@/components/FreeTrialCTA";

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
                  岡地俊明
                </h3>
                <p
                  className="text-[#B8960C] text-sm tracking-widest text-center"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  代表コンサルタント
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
                    幼い頃から集団生活になじめずに苦しい思いをしてきました。小学生5年生では起立性調節障害になり、長いこと学校を休みました。毎日、布団の中で泣きながら、何故、生まれてきたのか？死ぬとどうなるのか？と考えていました。
                  </p>
                  <p>
                    自分とは何者なのか？生きる意味とは？実社会で上手くいく人とそうではない人。鬱病になってしまう人と心を病まない人との違い。このような疑問を解決したくて、30年以上探索してきました。その間に本を2,000冊以上読み、宗教やオカルトを研究したり、セミナーに参加しては様々なセッションを受けてみたり、出来ることなら何でも実践してきました。その結果、人生は上向き、色々なことが見えてきました。
                  </p>
                  <p>
                    ところが、いつも何かが足りないのです。その中である日、気が付いたことがありました。それは、納得のいく答え、幸せが目的だったのが、学ぶことが目的にすり替わっていたのです。そこからは、学びを止め、静かに自分と向き合い、直感が研ぎ澄ましていきました。そんなある日、全部わかったと悟ったような感覚がありました。
                  </p>
                  <p>
                    その時に思いました。自分はこういった話を今後は誰にも話さない。自分の好きなことだけをして目の前のことをとことん楽しむ、そうして生きていくと。ところが、ある日たまたま出会った女性にお話会を開いてほしいとお願いされました。一度ならいいと承諾をしたものの、そこから何度もお話会が続きました。聞いてくださっている人の喜ぶ顔を見ていると、こちらも役に立てていると嬉しくなったからです。
                  </p>
                  <p>
                    そして、ある時に気が付きました。どちらかというと右脳優位な人は抽象的な話を府に落とせるのに左脳優位な人は府に落とせない。その時に思い付いたのが、左脳優位な人にも府に落とせるように図を描きながらロジカルに丁寧に時間をかけて伝えてみようということでした。その結果できたのが「零学」になります。
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
              <div
                className="text-white/80 text-sm sm:text-base leading-loose space-y-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                <p>
                  零学は生き方を仕組化することです。生き方とは悩み、不安がない生き方です。マンツーマントレーニングで理論をインストール、実践することで揺るぎない判断軸を作っていきます。
                </p>
                <p>
                  零学は特定な考え方に偏らないバランス学になります。
                </p>
              </div>
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
                    代表コンサルタント
                  </p>
                  <p
                    className="text-[#2D2D2D] text-xl font-bold mt-1"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    岡地俊明
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A1A40]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                COMPANY
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                事業概要
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="border border-[#B8960C]/30 p-10 sm:p-16">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 border-b border-[#B8960C]/20 pb-6">
                  <span
                    className="text-white/50 text-sm w-44 shrink-0"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    事業者名
                  </span>
                  <span
                    className="text-white font-bold"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    零学マネジメント
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 border-b border-[#B8960C]/20 pb-6">
                  <span
                    className="text-white/50 text-sm w-44 shrink-0"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    代表コンサルタント
                  </span>
                  <span
                    className="text-white font-bold"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    岡地俊明
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 border-b border-[#B8960C]/20 pb-6">
                  <span
                    className="text-white/50 text-sm w-44 shrink-0"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    事業内容
                  </span>
                  <div
                    className="text-white/80 text-sm leading-loose space-y-1"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    <p>零学マンツーマントレーニング</p>
                    <p>零会</p>
                    <p>事業アドバイス（業務改善、効率化・仕組化・組織作り・新規事業・環境整備）</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 border-b border-[#B8960C]/20 pb-6">
                  <span
                    className="text-white/50 text-sm w-44 shrink-0"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    コンサルタント
                  </span>
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    男性コンサルタント 4 名・女性コンサルタント 4 名
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 border-b border-[#B8960C]/20 pb-6">
                  <span
                    className="text-white/50 text-sm w-44 shrink-0"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    所在地
                  </span>
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    〒221-0005 神奈川県横浜市神奈川区松見町 1-7-3
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <span
                    className="text-white/50 text-sm w-44 shrink-0"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    連絡先
                  </span>
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    reigaku.info@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <FreeTrialCTA />
      <ContactCTA />
    </>
  );
}
