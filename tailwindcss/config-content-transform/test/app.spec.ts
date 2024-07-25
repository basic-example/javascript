import { expect, test } from "@playwright/test";

const getHeight = (el) => {
  return window.getComputedStyle(el).getPropertyValue("height");
};

test("example", async ({ page }) => {
  await page.goto("http://localhost:5173");
  const beforeHeight = await page.locator("h1").evaluate(getHeight);
  expect(beforeHeight).toBe("40px");

  await page.locator("h1").hover();

  const afterHeight = await page.locator("h1").evaluate(getHeight);
  expect(afterHeight).toBe("144px");
});
