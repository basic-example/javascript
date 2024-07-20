import { expect, test } from "@playwright/test";

test("example1", async ({ page }) => {
  const response = await page.goto("http://localhost:3000");
  await page.waitForURL("**/");
  expect(response?.status()).toBe(404);
  expect(response?.statusText()).toBe("Not Found");
});

test("example2", async ({ page }) => {
  const response = await page.goto("http://localhost:3000/abcd");
  await page.waitForURL("**/abcd");
  expect(response?.status()).toBe(200);
  expect(response?.statusText()).toBe("OK");

  await page.getByText("/hello button").click();
  await page.waitForURL("**/abcd/hello");
  expect(response?.status()).toBe(200);
  expect(response?.statusText()).toBe("OK");
});
