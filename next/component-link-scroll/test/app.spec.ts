import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.evaluate(() => window.scrollTo(0, 100));
  await page.getByText("scroll default").click();
  await page.waitForURL("**/dashboard");
  await expect(await page.evaluate("window.scrollY")).toBe(0);

  await page.goto("http://localhost:3000");
  await page.getByText("scroll false").click();
  await page.evaluate(() => window.scrollTo(0, 100));
  await page.waitForURL("**/dashboard");
  await expect(await page.evaluate("window.scrollY")).toBe(100 - 13);

  await page.goto("http://localhost:3000");
  await page.getByText("scroll false").click();
  await page.evaluate(() => window.scrollTo(0, 200));
  await page.waitForURL("**/dashboard");
  await expect(await page.evaluate("window.scrollY")).toBe(200 - 13);
});
