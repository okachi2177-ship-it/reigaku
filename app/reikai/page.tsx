import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import ContactCTA from "@/components/ContactCTA";
import FreeTrialCTA from "@/components/FreeTrialCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "零会 | Zoomで集まって荷をおろす会",
  description:
    "零会はZoomで集まって荷をおろす会です。平日毎晩22:05〜、荷おろし・不足を疑う・日替わりメソッドで振動数を上げます。月額13,200円（税込）。零学マンツーマントレーニング受講者は6ヶ月間無料。",
};

const timeSchedule = [
  { time: "22:05〜22:25", activity: "荷おろし", description: "日々の思いや感情を紙に書き出す" },
  { time: "22:25〜22:30", activity: "不足を疑う", description: "書き出したことの不足を中立な視点で疑う" },
  { time: "22:30〜22:40", activity: "日替わりメニュー", description: "零学の実践メソッドを実施" },
  { time: "22:40〜", activity: "情報・気づきの交換", description: "話したい人だけ参加OK" },
];

const dailyMenus = [
  {
    title: "幸せの呼吸",
    description:
      "「幸せ幸せ幸せ」と思いながら息を吸い、「幸せだなあ～」と思いながら息を吐く。手に入れたいものやなりたい自分をイメージしながら繰り返す。余裕があればニヤニヤしながら。好きな写真を眺めたり、エッセンシャルオイルを嗅ぎながら行うのもおすすめ。",
  },
  {
    title: "魔法の呟き",
    description:
      "「なんかわかんないけど〇〇なんだよなあ」と思うこと。例：「なんかわかんないけど、毎日お金が入ってくるんだよなあ」。あるいは解決した未来から「なんでこんなにお金が入ってきたんだっけ？ええっと…」と投げかけっぱなしにする。",
  },
  {
    title: "I love me（自愛）",
    description:
      "自分にハグをしながら、自分の名前＋「いつも本当にありがとう」と心の中で思うだけ。「いつも頑張ってるねえ、偉いねえ」などを付け加えてもOK。自分が心地良くなればそれが絶対的な正解。",
  },
  {
    title: "もしもし感謝",
    description:
      "「もしも〇〇がなかったらどうなっていたんだろう？」と想像する。例：「もしも妻と出会っていなかったら…」と考えると感謝が自然と湧いてくる。",
  },
  {
    title: "もしもし、かもかも",
    description:
      "「もしかしたら、既に〇〇って叶っているのかもしれない」と考える。例：「もしかしたら、既にお金をたくさんもっているのかもしれない」「もしかしたら、既に上手くいってるのかもしれない」。",
  },
  {
    title: "ニヤニヤメソッド",
    description: "少し上を向いてニヤニヤするだけのシンプルなメソッド。",
  },
];

const checkItems = [
  "話している途中で何を言おうとしていたか忘れることがある",
  "読んでいる文章の意味が頭に入ってこない",
  "誰かに話しかけられると、している作業の内容が飛んでしまう",
  "作業中に「次に何をすべきか」が思い出せないことがある",
  "簡単な計算ミスや入力ミスが多い",
  "ちょっとしたことでイライラする、または不安を感じる",
  "物事の優先順位がつけられない",
  "やる気はあるのに手が動かない",
  "つい、ぼーっとして時間が過ぎる",
  "人との約束や予定を忘れる（カレンダーに書いたかどうかも忘れる）",
  "買い物リストを見ないと、何を買うか思い出せない",
  "会議や研修で聞いたことをすぐに忘れてしまう",
  "「あれ？さっきこれやったっけ？」ということが増えた",
  "一つのことに集中できず、気がつくと複数の作業を同時にやっている",
  "簡単な作業でも異様に時間がかかる",
  "同じミスを何度も繰り返す",
  "細かい指示や手順が頭に残らない",
  "他人の言動に過敏に反応しがちになる",
  "噂話や悪口に惹かれやすくなる",
  "人の話を最後まで聞かずに判断してしまう",
  "相手の立場を想像する余裕がない",
  "ネガティブな面（欠点や失敗）ばかりが気になる",
  "「どうせ」「あの人はいつも」といった決めつけが増える",
  "SNSで他人の投稿にイライラしたり批判的になる",
  "些細な一言を必要以上に気にしてしまう",
];

const checkScores = [
  { range: "0", label: "神", color: "text-[#B8960C]" },
  { range: "1〜5", label: "達人", color: "text-[#C9A84C]" },
  { range: "6〜10", label: "軽度", color: "text-white/80" },
  { range: "11〜15", label: "中度", color: "text-white/60" },
  { range: "16〜20", label: "重度", color: "text-white/50" },
  { range: "21〜25", label: "今すぐ零学マネジメントへ連絡", color: "text-red-300" },
];

const exampleCategories = [
  {
    title: "お金の問題",
    items: [
      "貯金が毎月減ってもいい",
      "貯金ができなくてもいい",
      "無駄遣いしてもいい",
      "収入が減ってもいい",
      "損してもいい",
      "お金がもらえなくてもいい",
      "家賃が払えなくてもいい",
      "家計が苦しくてもいい",
      "好きな物が買えなくてもいい",
      "投資が失敗してもいい",
      "臨時収入がなくてもいい",
    ],
  },
  {
    title: "家族",
    items: [
      "仲が悪くてもいい",
      "大切にされなくてもいい",
      "離婚してもいい",
      "（妻・夫・子ども）が不機嫌でもいい",
      "不機嫌にしていてもいい",
      "八つ当たりしてもいい",
      "家族サービスしなくてもいい",
      "家事をしなくてもいい",
      "子どもが学校に行かなくてもいい",
      "いい親でいなくてもいい",
    ],
  },
  {
    title: "経営者",
    items: [
      "役員に反発されてもいい",
      "自己破産してもいい",
      "従業員が言うことを聞かなくてもいい",
      "売上が伸びなくてもいい",
      "利益が出なくてもいい",
      "悪い口コミ書かれてもいい",
      "赤字でもいい",
      "経営の才能がなくてもいい",
      "倒産してもいい",
      "逃げてもいい",
    ],
  },
  {
    title: "会社員",
    items: [
      "給料が上がらなくてもいい",
      "クビになってもいい",
      "上司と上手くいかなくてもいい",
      "正当に評価されなくてもいい",
      "理不尽なことで怒られてもいい",
      "遅刻してもいい",
      "契約が取れなくてもいい",
      "仕事がつまらなくてもいい",
      "辞めてもいい",
    ],
  },
  {
    title: "健康・身体",
    items: [
      "体調が悪くてもいい",
      "コンプレックスがあってもいい",
      "病気が治らなくてもいい",
      "健康じゃなくてもいい",
      "太っていてもいい",
      "肌が汚くてもいい",
      "髪の毛が薄くてもいい",
      "不細工でもいい",
      "睡眠が浅くてもいい",
    ],
  },
  {
    title: "恋愛",
    items: [
      "粗末に扱われてもいい",
      "連絡がこなくてもいい",
      "浮気されてもいい",
      "プロポーズされなくてもいい",
      "恋愛運悪くてもいい",
      "結婚できなくてもいい",
      "フラれてもいい",
      "共感してもらえなくてもいい",
    ],
  },
  {
    title: "対人関係",
    items: [
      "わがままを言ってもいい",
      "陰口叩かれてもいい",
      "バカにされてもいい",
      "批判されてもいい",
      "自分を出せなくてもいい",
      "いい人をやめてもいい",
      "認めてもらえなくてもいい",
      "誘いを断ってもいい",
      "笑顔じゃなくてもいい",
      "コミュニケーション下手でもいい",
    ],
  },
  {
    title: "全般・その他",
    items: [
      "騙されてもいい",
      "上手くいかなくてもいい",
      "失敗してもいい",
      "苦しくてもいい",
      "辛くてもいい",
      "イライラしてもいい",
      "普通の人でもいい",
      "特別じゃなくてもいい",
      "不安になってもいい",
      "行動を起こさなくてもいい",
      "逃げてもいい",
      "ダラダラしてもいい",
      "がんばらなくてもいい",
      "サボってもいい",
      "努力しなくてもいい",
      "できなくてもいい",
      "凡人で人生終わってもいい",
      "成長しなくてもいい",
    ],
  },
];

export default function ReikaiPage() {
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
              COMMUNITY
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              零会
            </h1>
            <p
              className="text-white/60 text-lg max-w-2xl"
              style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
            >
              Zoomで集まって荷をおろす会
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 零会とは */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                ABOUT
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                零会とは
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="bg-white border border-[#B8960C]/20 p-10 sm:p-14 mb-8">
              <div
                className="text-[#2D2D2D]/70 text-sm sm:text-base leading-loose space-y-5"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                <p>
                  零会とは、Zoomで集まって<strong className="text-[#2D2D2D]">荷をおろす会</strong>です。
                </p>
                <p>
                  それでは荷とは何のか？人間は生きていると様々な思いや感情を抱いています。例えば、「悲しいこと、怒り、裏切り、退屈、期待、過去に経験した喜び、幸せ、仕事のこと、お金のこと」などなど。これらを荷として知らぬうちに自分にたくさんのせています。
                </p>
                <p>
                  その荷をおろしてフラットになる、<strong className="text-[#B8960C]">0になる</strong>、そして、振動数を上げる。
                </p>
                <p>
                  ここで、勘の鋭いあなたなら思ったかもしれません。「過去にあった喜びも荷なの？」と。実は過去の喜びなどポジティブなことも荷になります。なぜなら、それらを起点として出来事に〇とか△とか×を付けてしまっているからです。
                </p>
                <p>
                  それらをなくせば、自分の想像を超えた喜び、そして無防備なところからも喜びがやってくるようになります。初めての方は、ネガティブなことから荷をおろしていき、慣れてきたら過去の喜びなどをおろしていきましょう。
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* 荷おろしの方法 */}
          <FadeInSection delay={200}>
            <div className="bg-[#1A1A40] p-10 sm:p-14">
              <h3
                className="text-[#B8960C] text-sm tracking-widest mb-8"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                HOW TO — 荷をおろす方法
              </h3>
              <div
                className="text-white/70 text-sm leading-loose space-y-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                <p>
                  荷をおろす方法は、<strong className="text-white">紙にペンでおろしたいことを書くだけ</strong>です。
                </p>
                <p>
                  例えば、大概の人は大人になるといい人戦略をとります。なぜなら、その方が人との摩擦が起きなくなるからです。でも、それと同時に「いい人でいなきゃ」「笑顔でいなきゃ」と自分に荷をのせてしまいます。
                </p>
                <div className="border-l-2 border-[#B8960C] pl-6 my-6 space-y-2">
                  <p className="text-[#C9A84C]">「いい人じゃなくてもいい」</p>
                  <p className="text-[#C9A84C]">「笑顔じゃなくてもいい」</p>
                  <p className="text-[#C9A84C]">「人と摩擦があってもいい」</p>
                </div>
                <p>
                  零会のメンバーになると、荷おろしの例文を送らせていただきますので、まずはそれを見ながら書いてみてください。疑問点などがある方はいつでもミュートを外して質問することも可能です。
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 荷をのせている度チェック */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A1A40]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                SELF CHECK
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                荷をのせている度チェック
              </h2>
              <p
                className="text-white/60 mt-4 text-sm"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                あなたはいくつ当てはまりますか？
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="border border-[#B8960C]/30 p-8 sm:p-12 mb-10">
              <div className="grid grid-cols-1 gap-3">
                {checkItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <span
                      className="text-[#B8960C] shrink-0 mt-0.5"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      □
                    </span>
                    <span
                      className="text-white/70 text-sm"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* スコア表 */}
          <FadeInSection delay={200}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {checkScores.map((score, index) => (
                <div
                  key={index}
                  className="border border-[#B8960C]/20 p-4 text-center"
                >
                  <p
                    className="text-[#B8960C] text-xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    {score.range}
                  </p>
                  <p
                    className={`text-xs ${score.color}`}
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    {score.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 不足を疑う */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                PRACTICE
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                書いたことの不足を疑う
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="bg-white border border-[#B8960C]/20 p-10 sm:p-14">
              <div
                className="text-[#2D2D2D]/70 text-sm sm:text-base leading-loose space-y-5"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                <p>
                  本当はこの世界には不足など存在していません。それを認識しているのはエゴのシステムによるものです。そのシステムが本当は存在していない不足を認識させています。
                </p>
                <p>
                  本当の世界に生きるため、充足を味わうために荷をおろし、不足を疑いましょう。不足はシンプルに疑ってください。
                </p>
              </div>
              <div className="border-l-2 border-[#B8960C] pl-6 mt-8 space-y-2">
                <p
                  className="text-[#B8960C] text-sm sm:text-base"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  「いい人じゃなくちゃいけないって本当かな？」
                </p>
                <p
                  className="text-[#B8960C] text-sm sm:text-base"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  「笑顔じゃなくちゃいけないって本当かな？」
                </p>
                <p
                  className="text-[#B8960C] text-sm sm:text-base"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  「お金がないって本当かな？」
                </p>
              </div>
              <p
                className="text-[#2D2D2D]/50 text-xs mt-6"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                ※「なぜなら…」と頭で考えないでください。疑ったら、それでお終いにしてください。
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 日替わりメニュー */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A1A40]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                DAILY MENU
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                日替わりメニュー
              </h2>
              <p
                className="text-white/60 mt-4 text-sm"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                ※その他のワークも多数あります。新しいワークをする際は説明いたします。
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dailyMenus.map((menu, index) => (
              <FadeInSection key={index} delay={index * 80}>
                <div className="border border-[#B8960C]/30 hover:border-[#B8960C] p-8 transition-colors duration-300 h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-[#B8960C] text-lg shrink-0">✦</span>
                    <h3
                      className="text-white font-bold text-lg"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      {menu.title}
                    </h3>
                  </div>
                  <p
                    className="text-white/60 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    {menu.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 荷おろし例文 */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                EXAMPLES
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                荷おろし 例文
              </h2>
              <p
                className="text-[#2D2D2D]/60 mt-4 text-sm"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                零会のメンバーには詳細な例文集をお送りします。まずは参考にしてみてください。
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {exampleCategories.map((category, index) => (
              <FadeInSection key={index} delay={index * 60}>
                <div className="bg-white border border-[#B8960C]/20 p-8 h-full">
                  <h3
                    className="text-[#B8960C] text-sm tracking-widest mb-6 pb-4 border-b border-[#B8960C]/20"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-[#2D2D2D]/70 text-sm flex items-start gap-2"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        <span className="text-[#B8960C] shrink-0 text-xs mt-1">◦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 零会詳細・タイムスケジュール・料金 */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#1A1A40]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                DETAILS
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                零会詳細
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* タイムスケジュール */}
            <FadeInSection delay={100}>
              <div>
                <h3
                  className="text-[#B8960C] text-sm tracking-widest mb-8"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  TIME SCHEDULE — 平日 22:05〜
                </h3>
                <div className="space-y-4">
                  {timeSchedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 border-l-2 border-[#B8960C]/30 pl-4 hover:border-[#B8960C] transition-colors duration-300"
                    >
                      <div className="shrink-0 w-32">
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

                {/* 参加スタイル */}
                <div className="mt-10 bg-white/5 border border-[#B8960C]/20 p-8">
                  <h4
                    className="text-[#B8960C] text-sm tracking-widest mb-6"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    STYLE
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["zoom参加", "画面オフOK", "途中参加・抜けOK", "質問いつでもOK"].map(
                      (style, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-white/70 text-sm"
                          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                        >
                          <span className="text-[#B8960C]">✓</span>
                          {style}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* 料金 */}
            <FadeInSection delay={200}>
              <div>
                <h3
                  className="text-[#B8960C] text-sm tracking-widest mb-8"
                  style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                >
                  PRICE
                </h3>
                <div className="space-y-6">
                  {/* 一般 */}
                  <div className="bg-white/5 border border-[#B8960C]/20 p-8">
                    <p
                      className="text-white/50 text-xs mb-2"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      一般
                    </p>
                    <p
                      className="text-[#B8960C] text-4xl font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      ¥13,200
                      <span
                        className="text-white/50 text-sm ml-2 font-normal"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        / 月（税込）
                      </span>
                    </p>
                  </div>

                  {/* 学生 */}
                  <div className="bg-white/5 border border-[#B8960C]/20 p-8">
                    <p
                      className="text-white/50 text-xs mb-2"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      小学生・中学生・高校生
                    </p>
                    <p
                      className="text-[#B8960C] text-4xl font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      無料
                    </p>
                  </div>

                  {/* 専門・大学 */}
                  <div className="bg-white/5 border border-[#B8960C]/20 p-8">
                    <p
                      className="text-white/50 text-xs mb-2"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      専門学生・大学生
                    </p>
                    <p
                      className="text-[#B8960C] text-4xl font-bold"
                      style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                    >
                      ¥3,300
                      <span
                        className="text-white/50 text-sm ml-2 font-normal"
                        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                      >
                        / 月（税込）
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* マンツーマントレーニング特典 */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#B8960C] text-sm tracking-widest mb-4"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                SPECIAL BENEFIT
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
              >
                零学マンツーマントレーニング
                <br className="sm:hidden" />
                受講者への特典
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="bg-[#1A1A40] p-10 sm:p-14">
              <div className="flex items-start gap-6">
                <div className="text-[#B8960C] text-3xl shrink-0">✦</div>
                <div>
                  <h3
                    className="text-white font-bold text-xl mb-4"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    零会 無料チケット特典
                  </h3>
                  <p
                    className="text-white/70 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                  >
                    零学マンツーマントレーニング受講者には、受講開始から
                    <strong className="text-[#C9A84C]">6ヶ月間</strong>、
                    零会への参加チケットを無料でプレゼント。
                  </p>
                  <p
                    className="text-[#C9A84C] text-lg font-bold"
                    style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                  >
                    79,200円相当の特典
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/service"
                      className="inline-block bg-[#B8960C] hover:bg-[#C9A84C] text-white text-sm px-8 py-3 transition-colors duration-200"
                      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
                    >
                      零学マンツーマントレーニングを見る →
                    </Link>
                  </div>
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
