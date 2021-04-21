const express = require("express");
const cors = require('cors')
const puppeteer = require("puppeteer");
const app = express();

const port = 5000;
const pageUrl = "http://localhost:3000"; // TODO: make this dynamic
const acceptedLangs = ['pt', 'en'];

app.listen(5000, () => {
  console.log("API server started on port " + port);
});

app.get("/pdf", cors(), async (req, res) => {
  const langParam = req.query.lang;
  const lang = acceptedLangs.includes(langParam) ? langParam : "pt";
  const targetUrl = `${pageUrl}?lang=${lang}`;
  console.log(`Accessing page ${targetUrl} on headless chrome`);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(targetUrl, {
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

  console.log("Generating CV PDF on " + new Date());

  const pdfBuffer = await page.pdf({
    printBackground: true,
    width: "1280px",
  });

  await browser.close();

  res.contentType("application/pdf");
  res.set({ "Content-Length": pdfBuffer.length });
  res.send(pdfBuffer);
});
