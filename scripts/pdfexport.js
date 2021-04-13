const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle2',
  });
  await page.emulateMediaType('screen');
  await page.$("#pdf-target");
  await page.pdf({ path: 'page_export.pdf', format: 'a4', printBackground: true });

  await browser.close();
})();