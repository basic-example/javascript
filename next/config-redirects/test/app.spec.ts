import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const linkBtn = await page.getByText("/home").click();
  await page.waitForURL("**/main");
  expect(page.url()).toBe("http://localhost:3000/main");
});
