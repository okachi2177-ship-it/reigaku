"use client";

import { useState, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  category: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "正しいメールアドレスの形式で入力してください";
    }

    if (!formData.category) {
      newErrors.category = "お問い合わせ種別を選択してください";
    }

    if (!formData.message.trim()) {
      newErrors.message = "お問い合わせ内容を入力してください";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-[#B8960C]/20 p-12 text-center">
        <div className="text-[#B8960C] text-5xl mb-6">✦</div>
        <h2
          className="text-2xl font-bold text-[#2D2D2D] mb-4"
          style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
        >
          お問い合わせありがとうございます
        </h2>
        <p
          className="text-[#2D2D2D]/60 text-sm sm:text-base leading-relaxed"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        >
          お問い合わせを受け付けました。
          <br />
          3営業日以内にご連絡いたします。
          <br />
          しばらくお待ちください。
        </p>
      </div>
    );
  }

  const inputClass = (fieldName: keyof FormData) =>
    `w-full px-4 py-3 border text-[#2D2D2D] text-sm focus:outline-none focus:border-[#B8960C] transition-colors duration-200 bg-white ${
      errors[fieldName] ? "border-red-400" : "border-[#2D2D2D]/20"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-[#B8960C]/20 p-8 sm:p-12"
    >
      {/* Name */}
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-[#2D2D2D] text-sm mb-2"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        >
          お名前
          <span className="text-[#B8960C] ml-1 text-xs">必須</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="山田 太郎"
          required
          aria-required="true"
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass("name")}
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        />
        {errors.name && (
          <p
            id="name-error"
            className="text-red-500 text-xs mt-1"
            role="alert"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-[#2D2D2D] text-sm mb-2"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        >
          メールアドレス
          <span className="text-[#B8960C] ml-1 text-xs">必須</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@mail.com"
          required
          aria-required="true"
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass("email")}
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        />
        {errors.email && (
          <p
            id="email-error"
            className="text-red-500 text-xs mt-1"
            role="alert"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="mb-6">
        <label
          htmlFor="phone"
          className="block text-[#2D2D2D] text-sm mb-2"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        >
          電話番号
          <span className="text-[#2D2D2D]/40 ml-1 text-xs">任意</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="090-0000-0000"
          className={inputClass("phone")}
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        />
      </div>

      {/* Category */}
      <div className="mb-6">
        <label
          htmlFor="category"
          className="block text-[#2D2D2D] text-sm mb-2"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        >
          お問い合わせ種別
          <span className="text-[#B8960C] ml-1 text-xs">必須</span>
        </label>
        <div className="relative">
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            aria-required="true"
            aria-describedby={errors.category ? "category-error" : undefined}
            className={`${inputClass("category")} appearance-none cursor-pointer`}
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            <option value="" disabled>
              選択してください
            </option>
            <option value="training">マンツーマントレーニングについて</option>
            <option value="reikai">零会について</option>
            <option value="other">その他</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#B8960C]">
            ▾
          </div>
        </div>
        {errors.category && (
          <p
            id="category-error"
            className="text-red-500 text-xs mt-1"
            role="alert"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            {errors.category}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="mb-8">
        <label
          htmlFor="message"
          className="block text-[#2D2D2D] text-sm mb-2"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        >
          お問い合わせ内容
          <span className="text-[#B8960C] ml-1 text-xs">必須</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          placeholder="お問い合わせ内容をご記入ください"
          required
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass("message")} resize-vertical`}
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        />
        {errors.message && (
          <p
            id="message-error"
            className="text-red-500 text-xs mt-1"
            role="alert"
            style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#B8960C] hover:bg-[#C9A84C] disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 text-sm tracking-widest transition-colors duration-200"
        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
      >
        {isSubmitting ? "送信中..." : "送信する"}
      </button>

      <p
        className="text-[#2D2D2D]/40 text-xs text-center mt-4"
        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
      >
        ご入力いただいた情報はお問い合わせの対応のみに使用いたします
      </p>
    </form>
  );
}
