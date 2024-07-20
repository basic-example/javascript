import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("http://localhost:3000");
  expect(await page.getByText("something header").count()).toBe(1);
});
