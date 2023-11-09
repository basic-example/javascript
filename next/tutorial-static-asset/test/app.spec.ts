import { expect, test } from "@playwright/test";

test.beforeAll(async ({ browser }) => {
  require("node:child_process").spawn("npm", ["run", "dev"], {
    stdio: ["ignore", "inherit", "inherit"],
    shell: true,
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  await page.close();
});

test.afterAll(async () => {
  const find = require("find-process");
  const pid = (await find("port", "3000"))[0].pid;
  process.kill(pid, 9);
});

test("static-asset", async ({ page }) => {
  await page.goto("http://localhost:3000/dashboard");
  await page.waitForURL("**/dashboard");
  await page.waitForLoadState("networkidle");

  const naturalWidths = await page.locator("img").evaluateAll((elements) => {
    return elements.map((element: any) => element.naturalWidth);
  });

  naturalWidths.forEach((naturalWidth) => {
    expect(naturalWidth).not.toBe(0);
  });
});
