import { test, expect } from "@playwright/test";

test.describe("プロフィールページ (/about)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
  });

  test("ページタイトルが正しい", async ({ page }) => {
    await expect(page).toHaveTitle(/プロフィール/);
  });

  test("ページヒーロー: 見出しが表示される", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "プロフィール・思い" })
    ).toBeVisible();
  });

  test("コンサルタントプロフィールセクションが表示される", async ({ page }) => {
    await expect(page.getByText("コンサルタントプロフィール")).toBeVisible();
  });

  test("代表コンサルタント「岡地俊明」が表示される", async ({ page }) => {
    await expect(page.getByText("岡地俊明").first()).toBeVisible();
    await expect(page.getByText("代表コンサルタント").first()).toBeVisible();
  });

  test("零学マネジメント理念セクションが表示される", async ({ page }) => {
    await expect(page.getByText("零学マネジメント理念")).toBeVisible();
  });

  test("受講者へのメッセージセクションが表示される", async ({ page }) => {
    await expect(page.getByText("受講者の皆さまへ")).toBeVisible();
    await expect(page.getByText("受講者の皆さまの喜びが、")).toBeVisible();
  });

  test("事業概要セクションが表示される", async ({ page }) => {
    await expect(page.getByText("事業概要")).toBeVisible();
    await expect(page.getByText("零学マネジメント").first()).toBeVisible();
    await expect(page.getByText("〒221-0005")).toBeVisible();
  });

  test("お問い合わせCTAが表示される", async ({ page }) => {
    await expect(page.getByText("お問い合わせ").last()).toBeVisible();
  });
});
