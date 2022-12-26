import kill = require('tree-kill');
import find = require('find-process');
import puppeteer = require('puppeteer');
import child_process = require('node:child_process');

const retry = (fn) => {
  return fn().catch(() => {
    return retry(fn);
  });
};

let browser;

describe('addComponent', () => {
  beforeAll(async () => {
    child_process.exec('npm run start');
    browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await retry(() => page.goto('http://localhost:8080'));
    await page.close();
  });

  afterAll(async () => {
    await browser.close();
    find('port', '8080').then((list) => kill(list[0].pid, 'SIGKILL'));
  });

  test('editor iframe content', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');
    const iframe = await (await page.$('iframe')).contentFrame();
    expect(await iframe.content()).not.toContain('new component');
    await page.click('button#add_cmp_btn');
    expect(await iframe.content()).toContain('new component');
    await page.close();
  });

  test('editor component count', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');
    await page.click('button#add_cmp_btn');
    expect(
      await page.evaluate(() => {
        return Promise.resolve(
          parseInt(window.document.getElementById('cmp_count')?.innerText + ''),
        );
      }),
    ).toBe(1);
    await page.close();
  });
});
