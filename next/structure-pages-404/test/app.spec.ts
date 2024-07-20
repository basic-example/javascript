import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  const response = await page.goto("http://localhost:3000/not-exist-page-url");
  expect(response?.status()).toBe(404);
  expect(response?.statusText()).toBe("Not Found");
  expect(await page.getByText("404 page is rendered").count()).toBe(1);
});
