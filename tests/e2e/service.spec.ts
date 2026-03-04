import { test, expect } from "@playwright/test";

test.describe("サービス詳細ページ (/service)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/service");
  });

  test("ページタイトルが正しい", async ({ page }) => {
    await expect(page).toHaveTitle(/サービス詳細/);
  });

  test("ページヒーロー: 見出しが表示される", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "サービス詳細" })
    ).toBeVisible();
  });

  test("マンツーマントレーニングセクション: 見出しが表示される", async ({
    page,
  }) => {
    await expect(page.getByText("零学マンツーマントレーニング").first()).toBeVisible();
  });

  test("マンツーマントレーニング: 料金¥753,500が表示される", async ({ page }) => {
    await expect(page.getByText("¥753,500")).toBeVisible();
  });

  test("マンツーマントレーニング: 詳細情報が表示される", async ({ page }) => {
    await expect(page.getByText("60〜90分 × 14日間")).toBeVisible();
    await expect(page.getByText("対面 or Zoom")).toBeVisible();
    await expect(page.getByText("銀行振込")).toBeVisible();
  });

  test("零会無料チケット特典が表示される", async ({ page }) => {
    await expect(page.getByText("零会 無料チケット特典").first()).toBeVisible();
    await expect(page.getByText("79,200円相当")).toBeVisible();
  });

  test("カリキュラムセクションが表示される", async ({ page }) => {
    await expect(page.getByText("14日間のカリキュラム")).toBeVisible();
  });

  test("分割払いセクション: 3回払いが表示される", async ({ page }) => {
    await expect(page.getByText("分割払いも可能です")).toBeVisible();
    await expect(page.getByText("3回払い")).toBeVisible();
    await expect(page.getByText("6回払い")).toBeVisible();
    await expect(page.getByText("12回払い")).toBeVisible();
  });

  test("トレーニングまでの流れが表示される", async ({ page }) => {
    await expect(page.getByText("トレーニングまでの流れ")).toBeVisible();
    await expect(page.getByText("契約")).toBeVisible();
    await expect(page.getByText("日程調整")).toBeVisible();
    await expect(page.getByText("お支払い")).toBeVisible();
    await expect(page.getByText("トレーニング開始")).toBeVisible();
  });

  test("零会セクション: 料金¥13,200が表示される", async ({ page }) => {
    await expect(page.getByText("零会").first()).toBeVisible();
    await expect(page.getByText("¥13,200").first()).toBeVisible();
    await expect(page.getByText("平日毎日 22:05〜22:45")).toBeVisible();
  });

  test("事業アドバイスセクションが表示される", async ({ page }) => {
    await expect(page.getByText("事業アドバイス")).toBeVisible();
    await expect(page.getByText("スポット料金")).toBeVisible();
    await expect(page.getByText("3 万円")).toBeVisible();
    await expect(page.getByText("顧問契約")).toBeVisible();
  });
});
