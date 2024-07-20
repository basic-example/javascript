import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.getByText("router.push button").click();
  await page.waitForURL("**/dashboard");
  await expect(await page.content()).toEqual(
    expect.stringContaining("dashboard page"),
  );
});
