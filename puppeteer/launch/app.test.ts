import puppeteer from 'puppeteer';

describe('browser launch `http://google.com`', () => {
  test('it contain `google` text', async () => {
    const browser = await puppeteer.launch({
      // headless: false,
    });
    const page = await browser.newPage();
    await page.goto('http://google.com');

    expect(await page.content()).toContain('google');

    await page.close();
    await browser.close();
  });
});
