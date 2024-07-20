import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  let res, resBodyText;

  res = await page.goto("http://localhost:3000/error-400");
  resBodyText = await res?.frame().locator("body").innerText();

  expect(res?.status()).toBe(200);
  expect(resBodyText).toContain("400");
  expect(resBodyText).toContain("Bad Request");

  res = await page.goto("http://localhost:3000/error-500");
  resBodyText = await res?.frame().locator("body").innerText();

  expect(res?.status()).toBe(200);
  expect(resBodyText).toContain("500");
  expect(resBodyText).toContain("Internal Server Error");
});
