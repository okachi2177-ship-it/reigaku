import { test, expect } from "@playwright/test";

test.describe("ナビゲーション", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("ヘッダーロゴが表示される", async ({ page }) => {
    const logo = page.getByRole("link", { name: /零学/ }).first();
    await expect(logo).toBeVisible();
  });

  test("デスクトップナビ: 全リンクが表示される", async ({ page }) => {
    const nav = page.getByRole("navigation", { name: "メインナビゲーション" });
    await expect(nav.getByRole("link", { name: "TOP" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "サービス詳細" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "零会" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "プロフィール" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "お問い合わせ" })).toBeVisible();
  });

  test("サービス詳細ページへ遷移できる", async ({ page }) => {
    await page
      .getByRole("navigation", { name: "メインナビゲーション" })
      .getByRole("link", { name: "サービス詳細" })
      .click();
    await expect(page).toHaveURL(/\/service/);
    await expect(page.getByRole("heading", { name: "サービス詳細" })).toBeVisible();
  });

  test("零会ページへ遷移できる", async ({ page }) => {
    await page
      .getByRole("navigation", { name: "メインナビゲーション" })
      .getByRole("link", { name: "零会" })
      .click();
    await expect(page).toHaveURL(/\/reikai/);
    await expect(page.getByRole("heading", { name: "零会" }).first()).toBeVisible();
  });

  test("プロフィールページへ遷移できる", async ({ page }) => {
    await page
      .getByRole("navigation", { name: "メインナビゲーション" })
      .getByRole("link", { name: "プロフィール" })
      .click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole("heading", { name: "プロフィール・思い" })).toBeVisible();
  });

  test("お問い合わせページへ遷移できる", async ({ page }) => {
    await page
      .getByRole("navigation", { name: "メインナビゲーション" })
      .getByRole("link", { name: "お問い合わせ" })
      .click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.getByRole("heading", { name: "お問い合わせ" })).toBeVisible();
  });

  test("ロゴクリックでホームに戻る", async ({ page }) => {
    await page.goto("/about");
    await page.getByRole("link", { name: /零学/ }).first().click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe("モバイルナビゲーション", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("ハンバーガーメニューボタンが表示される", async ({ page }) => {
    await expect(page.getByRole("button", { name: "メニューを開く" })).toBeVisible();
  });

  test("ハンバーガーメニューをクリックするとナビゲーションが開く", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "メニューを開く" }).click();
    const mobileNav = page.getByRole("navigation", { name: "モバイルナビゲーション" });
    await expect(mobileNav).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "サービス詳細" })).toBeVisible();
  });

  test("モバイルメニューのリンクからページに遷移できる", async ({ page }) => {
    await page.getByRole("button", { name: "メニューを開く" }).click();
    await page
      .getByRole("navigation", { name: "モバイルナビゲーション" })
      .getByRole("link", { name: "サービス詳細" })
      .click();
    await expect(page).toHaveURL(/\/service/);
  });
});
