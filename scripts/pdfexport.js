const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle2",
  });
  await page.emulateMediaType("screen");

  const pdfTarget = await page.$("#pdf-target");
  await page.evaluate((el) => {
    el = el.cloneNode(true);

    document.body.innerHTML = `
    <div>
      ${el.outerHTML}
    </div>
  `;
  }, pdfTarget);

  await page.pdf({
    path: "page_export.pdf",
    format: "a4",
    printBackground: true,
  });

  await browser.close();
})();
