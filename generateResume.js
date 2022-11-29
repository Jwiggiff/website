import express from "express";
import puppeteer from "puppeteer";

const app = express();
app.use(express.static("dist"));
let server = app.listen(3000);

(async () => {
  console.log("Generating Resume...");

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/resume.html", {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "./dist/assets/JoshFriedman_resume.pdf",
    format: "letter",
  });

  await browser.close();
  server.close();
  console.log("Done!");
})();
