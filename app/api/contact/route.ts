import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "reigaku.info@gmail.com";
const FROM_EMAIL = "零学マネジメント <noreply@reigaku.online>";

export async function POST(request: Request) {
  try {
    const { name, email, phone, category, message } = await request.json();

    // Basic validation
    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: "必須項目が不足しています" },
        { status: 400 }
      );
    }

    const categoryLabel: Record<string, string> = {
      training: "マンツーマントレーニングについて",
      reikai: "零会について",
      other: "その他",
    };

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `【零学マネジメント】お問い合わせ：${categoryLabel[category] ?? category}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A1A40; border-bottom: 2px solid #B8960C; padding-bottom: 8px;">
            新しいお問い合わせ
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px; background: #f5f5f0; font-weight: bold; width: 30%; border: 1px solid #e0e0d0;">お名前</td>
              <td style="padding: 10px; border: 1px solid #e0e0d0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f0; font-weight: bold; border: 1px solid #e0e0d0;">メールアドレス</td>
              <td style="padding: 10px; border: 1px solid #e0e0d0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f0; font-weight: bold; border: 1px solid #e0e0d0;">電話番号</td>
              <td style="padding: 10px; border: 1px solid #e0e0d0;">${phone || "未入力"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f0; font-weight: bold; border: 1px solid #e0e0d0;">お問い合わせ種別</td>
              <td style="padding: 10px; border: 1px solid #e0e0d0;">${categoryLabel[category] ?? category}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f0; font-weight: bold; border: 1px solid #e0e0d0;">お問い合わせ内容</td>
              <td style="padding: 10px; border: 1px solid #e0e0d0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "メールの送信に失敗しました" },
      { status: 500 }
    );
  }
}
