import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | 零学マネジメント",
  description:
    "零学マネジメントへのお問い合わせはこちら。マンツーマントレーニングや零会に関するご質問、ご相談をお気軽にどうぞ。",
};

export default function ContactPage() {
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
              CONTACT
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
            >
              お問い合わせ
            </h1>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#FAFAF5]">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <p
                className="text-[#2D2D2D]/60 text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
              >
                零学マネジメントへのお問い合わせ、
                マンツーマントレーニングや零会に関するご質問・ご相談はこちらから。
                <br />
                3営業日以内にご連絡いたします。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <ContactForm />
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
