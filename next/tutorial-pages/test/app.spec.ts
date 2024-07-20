import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("http://localhost:3000");
  expect(await page.getByText("Root Page").count()).toBe(1);
});

test("example/hello", async ({ page }) => {
  const response = await page.goto("http://localhost:3000/hello");
  expect(await response?.status()).toBe(200);
});

test("example/world", async ({ page }) => {
  const response = await page.goto("http://localhost:3000/world");
  expect(await response?.status()).toBe(200);
});
