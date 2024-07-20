import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  var fs = require("node:fs");
  await fs.readdir(
    ".next/server/pages/posts",
    function (error: any, files: Array<string>) {
      expect(files).toContain("1.html");
      expect(files).toContain("2.html");
      expect(files).not.toContain("3.html");
    },
  );
  await page.goto("http://localhost:3000/");
  expect(await page.getByText("Root Page").count()).toBe(1);
});

test("example/posts/1", async ({ page }) => {
  const response = await page.goto("http://localhost:3000/posts/1");
  expect(response?.status()).toBe(200);
});

test("example/posts/2", async ({ page }) => {
  const response = await page.goto("http://localhost:3000/posts/2");
  expect(response?.status()).toBe(200);
});

test("example/posts/3", async ({ page }) => {
  const response = await page.goto("http://localhost:3000/posts/3");
  expect(response?.status()).toBe(404);
});
