import { expect, test } from "@playwright/test";

const getColor = (el) => {
  return window.getComputedStyle(el).getPropertyValue("color");
};

test("example", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const color = await page.locator("h1").evaluate(getColor);

  expect(color).toBe("rgb(59, 130, 246)"); // blue
});
