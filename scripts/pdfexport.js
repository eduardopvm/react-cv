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
    <!DOCTYPE html>
    <html>
    <body>
      ${el.outerHTML}
    </body>
    </html>
  `;
  }, pdfTarget);

  console.log("Saving pdf as 'CV - Eduardo P V de Moraes.pdf'");

  await page.pdf({
    path: "../CV - Eduardo P V de Moraes.pdf",
    printBackground: true,
    width: "1280px"
  });

  await browser.close();
})();
