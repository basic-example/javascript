import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  for (const goToPage of ["", "dashboard"]) {
    await page.goto("http://localhost:3000/" + goToPage);
    await page.waitForURL("**/" + goToPage);
    await page.waitForLoadState("networkidle");

    const naturalWidths = await page.locator("img").evaluateAll((elements) => {
      return elements.map((element: any) => element.naturalWidth);
    });

    expect(naturalWidths.length).toBe(3);

    naturalWidths.forEach((naturalWidth) => {
      expect(naturalWidth).not.toBe(0);
    });
  }
});
