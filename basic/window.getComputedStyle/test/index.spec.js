import { expect, test } from "@playwright/test";

const getTextAlign = (el) => {
  return window.getComputedStyle(el).getPropertyValue("text-align");
};

test("example", async ({ page }) => {
  await page.goto("http://localhost:8080");

  const textAlign = await page.locator("h1").evaluate(getTextAlign);

  expect(textAlign).toBe("start");
});
