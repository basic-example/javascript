import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  await page.goto("http://localhost:3000");
  const colorDefineDefault = "rgb(0, 0, 0)"; // black
  const colorDefineAtParentDepth2Paragraph = "rgb(0, 0, 255)"; // blue
  const colorDefineAtParentDepth2CustomClass = "rgb(0, 255, 0)"; // lime
  const colorDefineAtChildDepth1Paragraph = "rgb(255, 0, 0)"; // red

  const parentDepth1ParagraphColor = await page
    .getByText("parent depth 1 paragraph")
    .evaluate((el) => el.computedStyleMap().get("color")?.toString());
  const parentDepth2ParagraphColor = await page
    .getByText("parent depth 2 paragraph")
    .evaluate((el) => el.computedStyleMap().get("color")?.toString());
  const parentDepth3ParagraphWithCustomClassColor = await page
    .getByText("parent depth 3 paragraph with custom class")
    .evaluate((el) => el.computedStyleMap().get("color")?.toString());
  const childDepth1ParagraphWithCustomClassColor = await page
    .getByText("child depth 1 paragraph with custom class")
    .evaluate((el) => el.computedStyleMap().get("color")?.toString());

  expect(parentDepth1ParagraphColor).toBe(
    colorDefineDefault, //
  );
  expect(parentDepth2ParagraphColor).toBe(
    colorDefineAtParentDepth2Paragraph, //
  );
  expect(parentDepth3ParagraphWithCustomClassColor).toBe(
    colorDefineAtParentDepth2CustomClass, //
  );
  expect(childDepth1ParagraphWithCustomClassColor).toBe(
    colorDefineAtChildDepth1Paragraph, //
  );
});
