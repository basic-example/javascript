import { expect, test } from "@playwright/test";

test("example/api/files", async ({ page }) => {
  const res = await page.goto("http://localhost:3000/api/files");
  expect(res?.status()).toBe(404);
});

test("example/api/files/aaa", async ({ page }) => {
  const res = await page.goto("http://localhost:3000/api/files/aaa");
  expect(await res?.json()).toStrictEqual({
    segment: "[...path]",
    value: { path: ["aaa"] },
  });
});

test("example/api/posts", async ({ page }) => {
  const res = await page.goto("http://localhost:3000/api/posts");
  expect(await res?.json()).toStrictEqual({
    segment: "[[...slug]]",
    value: {},
  });
});

test("example/api/posts/aaa/bbb", async ({ page }) => {
  const res = await page.goto("http://localhost:3000/api/posts/aaa/bbb");
  expect(await res?.json()).toStrictEqual({
    segment: "[[...slug]]",
    value: { slug: ["aaa", "bbb"] },
  });
});

test("example/api/users/abcd", async ({ page }) => {
  const res = await page.goto("http://localhost:3000/api/users/abcd");
  expect(await res?.json()).toStrictEqual({
    segment: "[id]",
    value: { id: "abcd" },
  });
});
