const express = require("express");
const cors = require('cors')
const puppeteer = require("puppeteer");
const app = express();

const port = process.env.PORT_API || 5000;
const phoneDisplay = process.env.PHONE_DISPLAY;
const phoneNumber = process.env.PHONE_NUMBER;
const pdfExportUrl = process.env.NODE_ENV == "production" ? "https://eduardopvm.com/#pdf" : "http://localhost:3000/#pdf";
const acceptedLangs = ['pt', 'en'];

app.listen(port, () => {
  console.log("API server started on port " + port);
});

app.get("/pdf", cors(), async (req, res) => {
  const langParam = req.query.lang;
  const lang = acceptedLangs.includes(langParam) ? langParam : "pt";
  const targetUrl = `${pdfExportUrl}?lang=${lang}`;
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

app.get("/phone", cors(), async (req, res) => {
  if (typeof phoneDisplay === 'undefined' || typeof phoneNumber === 'undefined') {
    console.error("Phone number envinronment variable not set.");
    return res.json({ error: "phone number variable not set." });
  }
  return res.json({ "phoneDisplay": phoneDisplay, "phoneNumber": phoneNumber });
})
