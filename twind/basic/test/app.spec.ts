import { expect, test } from "@playwright/test";

const getColor = (el) => {
  return window.getComputedStyle(el).getPropertyValue("color");
};

const getClassName = (el) => {
  return el.className;
};

test("example", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const color = await page.getByText("welcome").evaluate(getColor);
  const className = await page.getByText("welcome").evaluate(getClassName);

  expect(className).toContain("text-blue-500");
  expect(className).toContain("text-center");
  expect(className).toContain("text-9xl");
  expect(className).toContain("hover:text-black");
  expect(color).toBe("rgb(59, 130, 246)"); // blue
});
