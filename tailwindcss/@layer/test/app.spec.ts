import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("http://localhost:5173");
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
