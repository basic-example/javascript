import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.getByText("dashboard").click();
  await page.waitForURL("**/dashboard");
  await expect(await page.content()).toEqual(
    expect.stringContaining("/dashboard"),
  );

  await page.goto("http://localhost:3000");
  await page.getByText("account").click();
  await page.waitForURL("**/account");
  await expect(await page.content()).toEqual(
    expect.stringContaining("/account"),
  );
});
