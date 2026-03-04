import { test, expect } from "@playwright/test";

test.describe("お問い合わせページ (/contact)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("ページタイトルが正しい", async ({ page }) => {
    await expect(page).toHaveTitle(/お問い合わせ/);
  });

  test("ページヒーロー: 見出しが表示される", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "お問い合わせ" }).first()
    ).toBeVisible();
  });

  test("コンタクトフォームが表示される", async ({ page }) => {
    await expect(page.getByLabel("お名前")).toBeVisible();
    await expect(page.getByLabel("メールアドレス")).toBeVisible();
    await expect(page.getByLabel("電話番号")).toBeVisible();
    await expect(page.getByLabel("お問い合わせ種別")).toBeVisible();
    await expect(page.getByLabel("お問い合わせ内容")).toBeVisible();
  });

  test("送信ボタンが表示される", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: "送信する" })
    ).toBeVisible();
  });

  test.describe("フォームバリデーション", () => {
    test("空のフォームを送信するとエラーが表示される", async ({ page }) => {
      await page.getByRole("button", { name: "送信する" }).click();
      await expect(page.getByText("お名前を入力してください")).toBeVisible();
      await expect(
        page.getByText("メールアドレスを入力してください")
      ).toBeVisible();
      await expect(
        page.getByText("お問い合わせ種別を選択してください")
      ).toBeVisible();
      await expect(
        page.getByText("お問い合わせ内容を入力してください")
      ).toBeVisible();
    });

    test("無効なメールアドレスでエラーが表示される", async ({ page }) => {
      await page.getByLabel("お名前").fill("テスト太郎");
      await page.getByLabel("メールアドレス").fill("invalid-email");
      await page.getByRole("button", { name: "送信する" }).click();
      await expect(
        page.getByText("正しいメールアドレスの形式で入力してください")
      ).toBeVisible();
    });

    test("名前を入力するとエラーが消える", async ({ page }) => {
      await page.getByRole("button", { name: "送信する" }).click();
      await expect(page.getByText("お名前を入力してください")).toBeVisible();

      await page.getByLabel("お名前").fill("テスト太郎");
      await expect(
        page.getByText("お名前を入力してください")
      ).not.toBeVisible();
    });

    test("お問い合わせ種別のセレクトボックスにオプションがある", async ({
      page,
    }) => {
      const select = page.getByLabel("お問い合わせ種別");
      await select.selectOption("training");
      await expect(select).toHaveValue("training");

      await select.selectOption("reikai");
      await expect(select).toHaveValue("reikai");

      await select.selectOption("other");
      await expect(select).toHaveValue("other");
    });
  });

  test.describe("フォーム送信 (モック)", () => {
    test("正常なフォーム入力後、送信ボタンが有効", async ({ page }) => {
      await page.getByLabel("お名前").fill("テスト太郎");
      await page.getByLabel("メールアドレス").fill("test@example.com");
      await page.getByLabel("お問い合わせ種別").selectOption("other");
      await page.getByLabel("お問い合わせ内容").fill("テスト用のお問い合わせ内容です。");

      const submitButton = page.getByRole("button", { name: "送信する" });
      await expect(submitButton).toBeEnabled();
    });

    test("APIが成功すれば「お問い合わせありがとうございます」が表示される", async ({
      page,
    }) => {
      // APIレスポンスをモック
      await page.route("/api/contact", async (route) => {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ message: "ok" }),
        });
      });

      await page.getByLabel("お名前").fill("テスト太郎");
      await page.getByLabel("メールアドレス").fill("test@example.com");
      await page.getByLabel("お問い合わせ種別").selectOption("other");
      await page.getByLabel("お問い合わせ内容").fill("テスト用のお問い合わせ内容です。");

      await page.getByRole("button", { name: "送信する" }).click();

      await expect(
        page.getByText("お問い合わせありがとうございます")
      ).toBeVisible({ timeout: 5000 });
      await expect(page.getByText("3営業日以内にご連絡いたします")).toBeVisible();
    });

    test("APIエラー時にエラーメッセージが表示される", async ({ page }) => {
      // APIエラーをモック
      await page.route("/api/contact", async (route) => {
        await route.fulfill({
          status: 500,
          contentType: "application/json",
          body: JSON.stringify({ error: "Internal Server Error" }),
        });
      });

      await page.getByLabel("お名前").fill("テスト太郎");
      await page.getByLabel("メールアドレス").fill("test@example.com");
      await page.getByLabel("お問い合わせ種別").selectOption("other");
      await page.getByLabel("お問い合わせ内容").fill("テスト用のお問い合わせ内容です。");

      await page.getByRole("button", { name: "送信する" }).click();

      await expect(
        page.getByText("送信に失敗しました。しばらく経ってから再度お試しください。")
      ).toBeVisible({ timeout: 5000 });
    });
  });
});
