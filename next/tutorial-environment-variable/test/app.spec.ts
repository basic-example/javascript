import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("http://localhost:3000");
  expect(await page.getByText("DB_USER: park").count()).toBe(1);
  expect(await page.getByText("DB_PASS: 1234567").count()).toBe(1);
  expect(await page.getByText("DB_HOST: localhost").count()).toBe(1);
  expect(await page.getByText("DB_PORT: 3333").count()).toBe(1);
});
