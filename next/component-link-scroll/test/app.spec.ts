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

test("Link component scroll prop default", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.evaluate(() => window.scrollTo(0, 100));
  await page.getByText("scroll default").click();
  await page.waitForURL("**/dashboard");
  await expect(await page.evaluate("window.scrollY")).toBe(0);

  await page.goBack();
  await page.evaluate(() => window.scrollTo(0, 100));
  await page.getByText("scroll false").click();
  await page.waitForURL("**/dashboard");
  await expect(await page.evaluate("window.scrollY")).not.toBe(0);
});
