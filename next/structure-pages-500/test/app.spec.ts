import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("http://localhost:3000/throw-server-error");
  expect(await page.getByText("500 page is rendered").count()).toBe(1);
});
