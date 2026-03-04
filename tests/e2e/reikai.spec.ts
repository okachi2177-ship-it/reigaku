import { test, expect } from "@playwright/test";

test.describe("零会ページ (/reikai)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/reikai");
  });

  test("ページタイトルが正しい", async ({ page }) => {
    await expect(page).toHaveTitle(/零会/);
  });

  test("ページヒーロー: 見出しが表示される", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "零会" }).first()
    ).toBeVisible();
    await expect(page.getByText("Zoomで集まって荷をおろす会")).toBeVisible();
  });

  test("零会とはセクションが表示される", async ({ page }) => {
    await expect(page.getByText("零会とは").first()).toBeVisible();
    await expect(page.getByText("荷をおろす会")).toBeVisible();
  });

  test("荷をのせている度チェックセクションが表示される", async ({ page }) => {
    await expect(page.getByText("荷をのせている度チェック")).toBeVisible();
    await expect(page.getByText("あなたはいくつ当てはまりますか？")).toBeVisible();
  });

  test("チェック項目が表示される", async ({ page }) => {
    await expect(
      page.getByText("話している途中で何を言おうとしていたか忘れることがある")
    ).toBeVisible();
    await expect(page.getByText("ちょっとしたことでイライラする、または不安を感じる")).toBeVisible();
  });

  test("日替わりメニューセクションが表示される", async ({ page }) => {
    await expect(page.getByText("日替わりメニュー")).toBeVisible();
    await expect(page.getByText("幸せの呼吸")).toBeVisible();
    await expect(page.getByText("魔法の呟き")).toBeVisible();
    await expect(page.getByText("I love me（自愛）")).toBeVisible();
    await expect(page.getByText("ニヤニヤメソッド")).toBeVisible();
  });

  test("荷おろし例文セクションが表示される", async ({ page }) => {
    await expect(page.getByText("荷おろし 例文")).toBeVisible();
    await expect(page.getByText("お金の問題")).toBeVisible();
    await expect(page.getByText("家族")).toBeVisible();
    await expect(page.getByText("恋愛")).toBeVisible();
  });

  test("零会詳細: 料金が表示される", async ({ page }) => {
    await expect(page.getByText("零会詳細")).toBeVisible();
    await expect(page.getByText("¥13,200").first()).toBeVisible();
    await expect(page.getByText("無料").first()).toBeVisible();
    await expect(page.getByText("¥3,300").first()).toBeVisible();
  });

  test("マンツーマントレーニング受講者への特典が表示される", async ({ page }) => {
    await expect(page.getByText("零学マンツーマントレーニング受講者への特典").first()).toBeVisible();
    await expect(page.getByText("79,200円相当の特典")).toBeVisible();
  });

  test("「零学マンツーマントレーニングを見る」リンクがサービスページに遷移する", async ({
    page,
  }) => {
    await page
      .getByRole("link", { name: /零学マンツーマントレーニングを見る/ })
      .click();
    await expect(page).toHaveURL(/\/service/);
  });
});
