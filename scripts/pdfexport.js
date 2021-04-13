const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // await page.setViewport({width: 1200, height: 800, deviceScaleFactor: 2});
  
  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle2",
  });
  await page.emulateMediaType("screen");

  const pdfTarget = await page.$("#pdf-target");
  await page.evaluate((el) => {
    el = el.cloneNode(true);

    document.body.innerHTML = `
    <!DOCTYPE html>
    <html>
    <body>
      ${el.outerHTML}
    </body>
    </html>
  `;
  }, pdfTarget);

  await page.pdf({
    path: "page_export.pdf",
    // format: "a4",
    // printBackground: true,
  });

  await browser.close();
})();
