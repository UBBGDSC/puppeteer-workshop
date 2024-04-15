import puppeteer from "puppeteer";
import fs from "fs";

const URL = "https://gdsc.community.dev/events/#/list";

const SELECTORS = {
  EVENTS: ".panel",
  TITLE: "h4",
  DATE: ".EventRectangle-styles-dateText-rZUoS",
  LOCATION: ".chapter-link",
  DESCRIPTION: ".EventRectangle-styles-description-sDn7J",
  IMAGE: ".EventRectangle-styles-picture-SPjDJ",
  TAGS: ".MuiChip-label",
  LOAD_MORE: ".loadMoreContainer a",
};

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(URL);

  await page.waitForSelector(SELECTORS.EVENTS);

  const data = [];

  while (true) {
    const loadMore = await page.$(SELECTORS.LOAD_MORE);
    if (!loadMore) break;

    await loadMore.click();
    console.log("Loading more events");
  }

  const events = await page.$$(SELECTORS.EVENTS);

  for (let event of events) {
    const title = await event.$eval(SELECTORS.TITLE, (el) => el.innerText);

    const date = await event.$eval(SELECTORS.DATE, (el) => el.innerText);

    const location = await event.$eval(
      SELECTORS.LOCATION,
      (el) => el.innerText
    );

    const description = await event.$eval(
      SELECTORS.DESCRIPTION,
      (el) => el.innerText
    );

    const image = await event.$eval(SELECTORS.IMAGE, (el) => el.src);

    const tags = await event.$$eval(SELECTORS.TAGS, (tags) =>
      tags.map((tag) => tag.innerText)
    );

    data.push({
      title: title,
      date: date,
      location: location,
      description: description,
      image: image,
      tags: tags,
    });
  }

  fs.writeFile("gdsc_events.json", JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log("File saved");
  });

  await browser.close();
}

run();
