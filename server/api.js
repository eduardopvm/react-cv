const express = require("express");
const puppeteer = require("puppeteer");
const app = express();

const port = 5000;

app.listen(5000, () => {
  console.log("Server started on port " + port);
});

app.get("/pdf", async (req, res) => {
  console.log('Generating PDF');
  // const url = req.query.target;

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

  const pdfBuffer = await page.pdf({
    printBackground: true,
    width: "1280px",
  });

  await browser.close();

  res.contentType("application/pdf");
  res.send(pdfBuffer);
});
