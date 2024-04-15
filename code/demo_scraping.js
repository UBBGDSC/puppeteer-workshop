import puppeteer from "puppeteer";

const URL =
  "https://www.olx.ro/imobiliare/apartamente-garsoniere-de-inchiriat/cluj-napoca/?currency=EUR";

// the values of the selectors are just placeholders, we will update them live during the workshop
const SELECTORS = {
  ANNOUNCEMENT: ".css-qfzx1y",
  TITLE: "h6",
  SURFACE: ".css-643j0o",
  PRICE: ".css-tyui9s",
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
    console.log("Scraping page " + page.url());

    await page.waitForSelector(SELECTORS.ANNOUNCEMENT);
    const announcements = await page.$$(SELECTORS.ANNOUNCEMENT);

    for (const announcement of announcements) {
      let surface = "N/A";

      const title = await announcement.$eval(
        SELECTORS.TITLE,
        (el) => el.textContent,
      );
      const price = await announcement.$eval(
        SELECTORS.PRICE,
        (el) => el.textContent,
      );
      try {
        surface = await announcement.$eval(
          SELECTORS.SURFACE,
          (el) => el.textContent,
        );
      } catch (e) {
        // do nothing
      }

      data.push({
        title: title,
        price: price,
        surface: surface,
      });
    }
    try {
      const nextPageURL = await page.$eval(
        SELECTORS.NEXT_PAGE,
        (el) => el.href,
      );
      await page.goto(nextPageURL);
    } catch (e) {
      console.log(e);
      break;
    }
  }

  console.log("closing browser");

  await browser.close();
}

run();
