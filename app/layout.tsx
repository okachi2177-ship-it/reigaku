import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "零学マネジメント | 偏った思考を零ポイントに戻す学問",
    template: "%s | 零学マネジメント",
  },
  description:
    "零学マネジメントは、偏った思考を零ポイントに戻し、中立な位置にする学問です。マインドワンダリングを静め、すべての体験を充足に転換させます。",
  keywords: ["零学", "零学マネジメント", "マインドワンダリング", "思考", "コンサルタント"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "零学マネジメント",
    title: "零学マネジメント | 偏った思考を零ポイントに戻す学問",
    description:
      "零学マネジメントは、偏った思考を零ポイントに戻し、中立な位置にする学問です。マインドワンダリングを静め、すべての体験を充足に転換させます。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSerifJP.variable} ${notoSansJP.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
