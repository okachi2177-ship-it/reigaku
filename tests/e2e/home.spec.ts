import { test, expect } from "@playwright/test";

test.describe("ホームページ", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("ページタイトルが正しい", async ({ page }) => {
    await expect(page).toHaveTitle(/零学マネジメント/);
  });

  test("ヒーローセクション: 「零学」が表示される", async ({ page }) => {
    await expect(page.locator("h1").first()).toContainText("零学");
  });

  test("ヒーローセクション: タグラインが表示される", async ({ page }) => {
    await expect(page.getByText("偏った思考を零ポイントに戻し、")).toBeVisible();
  });

  test("ヒーローセクション: CTAボタン「無料小冊子をダウンロード」が表示される", async ({
    page,
  }) => {
    await expect(
      page.getByRole("link", { name: "無料小冊子をダウンロード" }).first()
    ).toBeVisible();
  });

  test("ヒーローセクション: CTAボタン「お問い合わせ」が表示される", async ({
    page,
  }) => {
    await expect(
      page.getByRole("link", { name: "お問い合わせ" }).first()
    ).toBeVisible();
  });

  test("「零学とは」セクションが表示される", async ({ page }) => {
    await expect(page.getByText("零学とは")).first().toBeVisible();
  });

  test("プロセスセクション: 4ステップが表示される", async ({ page }) => {
    await expect(page.getByText("零学理論の流れ")).toBeVisible();
    await expect(page.getByText("零学理論インストール")).toBeVisible();
  });

  test("4つの領域セクションが表示される", async ({ page }) => {
    await expect(page.getByText("4つの学びの領域")).toBeVisible();
    await expect(page.getByText("思考")).first().toBeVisible();
    await expect(page.getByText("技術")).toBeVisible();
    await expect(page.getByText("社会")).first().toBeVisible();
    await expect(page.getByText("非物理次元")).toBeVisible();
  });

  test("比較テーブルセクションが表示される", async ({ page }) => {
    await expect(page.getByText("他社との違い")).toBeVisible();
    await expect(page.getByText("零学コンサルタント")).first().toBeVisible();
  });

  test("「お問い合わせ」リンクがコンタクトページに遷移する", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "お問い合わせ" }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });
});
