import { expect, test } from "@playwright/test";

test.beforeAll(async ({ browser }) => {
  require("node:child_process").spawn("npm", ["run", "dev"], {
    stdio: ["ignore", "inherit", "inherit"],
    shell: true,
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:8080");
  await page.close();
});

test.afterAll(async () => {
  const find = require("find-process");
  const psList = await find("name", "node_modules");
  const paths = ['http-server"', "tailwindcss/lib/cli.js"];
  psList.forEach((ps) => {
    paths.forEach((path) => {
      const cmd = ps.cmd.replaceAll("\\", "/").replaceAll("//", "/");
      if (new RegExp(path).test(cmd)) {
        process.kill(ps.pid, 9);
      }
    });
  });
});

test("@layer", async ({ page }) => {
  await page.goto("http://localhost:8080");

  const useLayerBtn = page.locator(".use-layer button.btn-primary");
  const notUseLayerBtn = page.locator(".not-use-layer button.btn-primary");
  const useLayerBtnBg = await useLayerBtn.evaluate((e) => {
    return window.getComputedStyle(e).getPropertyValue("background-color");
  });
  const notUseLayerBtnBg = await notUseLayerBtn.evaluate((e) => {
    return window.getComputedStyle(e).getPropertyValue("background-color");
  });

  expect(useLayerBtnBg).toBe("rgb(59, 130, 246)"); // blue
  expect(notUseLayerBtnBg).toBe("rgb(107, 114, 128)"); // gray
});
