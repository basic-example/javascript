import { expect, test } from "@playwright/test";

test("example", async ({ page }) => {
  /*
    <Image> element converted webp image extension
    <Image> element should be added width, height property
  */
  await page.goto("http://localhost:3000");
  const imgBase64 = await page.evaluate(async () => {
    const src = document.querySelectorAll("img")[0].getAttribute("src");
    const blob = await fetch("http://localhost:3000" + src, {
      headers: {
        Accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8", // chrome
      },
    }).then((r) => r.blob());
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    await new Promise((r) => setTimeout(r, 1000));
    return reader.result;
  });

  expect(imgBase64).toContain("data:image/webp;base64");
});
