const puppeteer = require('puppeteer');
const { expect } = require('chai');

const { width, height, host, headless } = require('./settings');

let browser;
let page;
const errors = [];

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless,
    args: [`--window-size=${width},${height}`, '--no-sandbox'],
  });
  page = await browser.newPage();
  page.on('pageerror', (error) => {
    errors.push(error);
  });

  await page.goto(host);
  await page.setViewport({ height, width });
});

afterEach(() => {
  browser.close();
});

test('gremlins', async () => {
  await page.waitFor(10000);
  expect(errors).to.deep.equal([]);
}, 20000);