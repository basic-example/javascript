import { expect, test } from "@playwright/test";

test("example1", async ({ page }) => {
  await page.goto("http://localhost:8080");

  const result = await page.evaluate(async (el) => {
    return await window.domObserver(
      '#main1',
      '#main1',
      { attributes: ['class'] },
    );
  });

  expect(result).toBe(true);
});

test("example2", async ({ page }) => {
  await page.goto("http://localhost:8080");

  const result = await page.evaluate(async (el) => {
    return await window.domObserver(
      '#main1',
      '#main11',
      { attributes: ['class'] },
    );
  });

  expect(result).toBe(false);
});

test("example3", async ({ page }) => {
  await page.goto("http://localhost:8080");

  const result = await page.evaluate(async (el) => {
    return await window.domObserver(
      '#main1',
      '#main11',
      { childList: true, attributes: ['class'] },
    );
  });

  expect(result).toBe(false); // bug?
});

test("example4", async ({ page }) => {
  await page.goto("http://localhost:8080");

  const result = await page.evaluate(async (el) => {
    return await window.domObserver(
      '#main1',
      '#sub1',
      { childList: true, attributes: ['class'] },
    );
  });

  expect(result).toBe(false);
});

test("example5", async ({ page }) => {
  await page.goto("http://localhost:8080");

  const result = await page.evaluate(async (el) => {
    return await window.domObserver(
      '#main1',
      '#sub1',
      { subtree: true, attributes: ['class'] },
    );
  });

  expect(result).toBe(true);
});

test("example6", async ({ page }) => {
  await page.goto("http://localhost:8080");

  const result = await page.evaluate(async (el) => {
    return await window.domObserver(
      '#main1',
      () => {
        const el = document.createElement('p');
        el.innerHTML = 'test1234';
        el.setAttribute('id', 'new1');
        document.querySelector('#main11').appendChild(el);
        return '#new1';
      },
      { subtree: true, childList: true, attributes: ['class'] },
    );
  });

  expect(result).toBe(true);
});

test("example7", async ({ page }) => {
  await page.goto("http://localhost:8080");

  const result = await page.evaluate(async (el) => {
    return await window.domObserver(
      '#main1',
      () => {
        const el = document.createElement('p');
        el.innerHTML = 'test1234';
        el.setAttribute('id', 'new1');
        document.querySelector('#main11').appendChild(el);
        return '#new1';
      },
      { subtree: true, childList: false, attributes: ['class'] },
    );
  });

  expect(result).toBe(true); // bug?
});
