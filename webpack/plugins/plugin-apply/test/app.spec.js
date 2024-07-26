import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("http://localhost:8080");
  expect(await page.getByText("Hello World").count()).toBe(1);
});
