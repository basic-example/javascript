import { expect, test } from "@playwright/test";

test("example/", async ({ page }) => {
  await page.goto("http://localhost:3000");
  expect(await page.getByText("root layout is rendered").count()).toBe(1);
  expect(await page.getByText("root page is rendered").count()).toBe(1);
  expect(await page.getByText("home layout is rendered").count()).toBe(0);
  expect(await page.getByText("home page is rendered").count()).toBe(0);
});

test("example/home", async ({ page }) => {
  await page.goto("http://localhost:3000/home");
  expect(await page.getByText("root layout is rendered").count()).toBe(1);
  expect(await page.getByText("root page is rendered").count()).toBe(0);
  expect(await page.getByText("home layout is rendered").count()).toBe(1);
  expect(await page.getByText("home page is rendered").count()).toBe(1);
});

test("example/hello", async ({ page }) => {
  await page.goto("http://localhost:3000/hello");
  expect(await page.getByText("root layout is rendered").count()).toBe(0);
  expect(await page.getByText("root page is rendered").count()).toBe(0);
  expect(await page.getByText("hello page is rendered").count()).toBe(1);
});
