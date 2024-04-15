import puppeteer from "puppeteer";
import fs from "fs";

const URL =
  "https://www.olx.ro/imobiliare/apartamente-garsoniere-de-inchiriat/cluj-napoca/?currency=EUR";

const SELECTORS = {
  ANNOUNCEMENT: ".css-qfzx1y",
  TITLE: "h6",
  SURFACE: ".css-643j0o",
  PRICE: ".css-tyui9s",
  IMAGE: "img",
  URL: ".css-1apmciz .css-z3gu2d",
  NEXT_PAGE: `a[data-testid="pagination-forward"]`,
};

async function run() {
  console.log("launching browser");
  const browser = await puppeteer.launch();
  console.log("creating new page");
  const page = await browser.newPage();

  await page.goto(URL);

  const data = [];

  while (true) {
    console.log("Scrapping page " + page.url());

    await page.waitForSelector(SELECTORS.ANNOUNCEMENT);
    const announcements = await page.$$(SELECTORS.ANNOUNCEMENT);

    for (const announcement of announcements) {
      let surface = "N/A";

      const title = await announcement.$eval(
        SELECTORS.TITLE,
        (el) => el.textContent
      );
      const price = await announcement.$eval(
        SELECTORS.PRICE,
        (el) => el.textContent
      );
      try {
        surface = await announcement.$eval(
          SELECTORS.SURFACE,
          (el) => el.textContent
        );
      } catch (e) {
        // do nothing
      }
      const imagePath = await announcement.$eval(
        SELECTORS.IMAGE,
        (el) => el.src
      );

      const url = await announcement.$eval(SELECTORS.URL, (el) => el.href);

      data.push({
        title: title,
        price: price,
        surface: surface,
        imagePath: imagePath,
        url: url,
      });
    }
    try {
      const nextPageURL = await page.$eval(
        SELECTORS.NEXT_PAGE,
        (el) => el.href
      );
      await page.goto(nextPageURL);
    } catch (e) {
      console.log("No more pages to scrap");
      break;
    }
  }

  fs.writeFile("data.json", JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log("File Saved");
  });

  console.log("closing browser");

  await browser.close();
}

run();
