import { expect, test } from "@playwright/test";

test("example1", async ({ page }) => {
  const response = await page.goto("http://localhost:3000");
  expect(await response?.headerValue("all-wildward")).toBe("exist1");
  expect(await response?.headerValue("all-regex")).toBe("exist2");
  expect(await response?.headerValue("strict-settings")).toBe(null);
});

test("example2", async ({ page }) => {
  const response = await page.goto("http://localhost:3000/settings");
  expect(await response?.headerValue("all-wildward")).toBe("exist1");
  expect(await response?.headerValue("all-regex")).toBe("exist2");
  expect(await response?.headerValue("strict-settings")).toBe("exist3");
});

test("example3", async ({ page }) => {
  const response = await page.goto("http://localhost:3000/settings/account");
  expect(await response?.headerValue("all-wildward")).toBe("exist1");
  expect(await response?.headerValue("all-regex")).toBe("exist2");
  expect(await response?.headerValue("strict-settings")).toBe(null);
});
