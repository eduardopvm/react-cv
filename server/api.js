const express = require("express");
const cors = require('cors')
const puppeteer = require("puppeteer");
const app = express();

const port = 5000;
const pageUrl = "http://localhost:3000/pdf"; // TODO: make this dynamic
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
  await page.goto(targetUrl, { waitUntil: "networkidle2" });
  await page.emulateMediaType("screen");

  console.log("Generating CV PDF on " + new Date());

  const pdfBuffer = await page.pdf({
    printBackground: true,
    displayHeaderFooter: false,
    width: "1280px",
  });

  await browser.close();

  res.contentType("application/pdf");
  res.set({ "Content-Length": pdfBuffer.length });
  res.send(pdfBuffer);
});
