import { expect, test } from "@playwright/test";

test.use({ locale: "ko-KR" });

test("example", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const linkBtn = await page.getByText("/hello");
  const linkUrl = await linkBtn.evaluate((el) => el.getAttribute("href"));

  expect(page.url()).toBe("http://localhost:3000/ko-KR");
  expect(linkUrl).toBe("/ko-KR/hello");

  await linkBtn.click();
  await page.waitForURL("**/hello");

  expect(page.url()).toBe("http://localhost:3000/ko-KR/hello");
});
