# Page interactions

In this section, we will learn how to interact with a page using Puppeteer. Puppeteer provides a high-level API to interact with a page, which includes navigating to a page, clicking on elements, typing text, and more. All the functions are asynchronous and return promises, which makes it easy to work with Puppeteer in an asynchronous manner. There are many methods available to interact with a page, and we will cover some of the most common ones, but you can find the full list in the [official documentation](https://pptr.dev/).

## Navigating to a Page

To navigate to a page, you can use the `page.goto()` method. This method takes a URL as an argument and loads the page at the specified URL.

```javascript
import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.example.com");

  await browser.close();
})();
```

In the example above, we launch a browser instance, create a new page, and navigate to `https://www.example.com`. Once the page is loaded, we close the browser.

## Taking Screenshots

You can take a screenshot of a page using the `page.screenshot()` method. This method captures a screenshot of the current page and saves it to a file, to the specified path.

```javascript
import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.example.com");
  await page.screenshot({ path: "example.png", fullPage: true });

  await browser.close();
})();
```

## Generating PDFs

You can generate a PDF of a page using the `page.pdf()` method. This method generates a PDF of the current page and saves it to a file, to the specified path.

```javascript
import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.example.com");
  await page.pdf({ path: "example.pdf", format: "A4" });

  await browser.close();
})();
```

#### The magic of Puppeteer lies in its ability to evaluate JavaScript on a page. Based on DOM manipulation, you can interact with elements, click buttons, and more. The core concepts is based on the selectors and the actions you want to perform. There are different methods to evaluate the content of a page:

## Evaluating JavaScript

1. `page.$(selector)`: This method returns the first element that matches the specified selector. If no element matches the selector, the method returns `null`.
2. `page.$$(selector)`: This method returns an array of elements that match the specified selector. If no elements match the selector, the method returns an empty array.
3. `page.$eval(selector, pageFunction, ...args)`: This method evaluates the specified function in the context of the first element that matches the selector. The function can access the DOM of the element and return a value. The arguments passed to the function are serialized and can be accessed as function parameters.
4. `page.evaluate(pageFunction, ...args)`: This method evaluates the specified function in the context of the page. The function can access the DOM of the page and return a value. The arguments passed to the function are serialized and can be accessed as function parameters.

When evaluating JavaScript on a page, you can interact with elements, get their attributes, and perform various actions. This allows you to automate tasks, scrape data, and test web applications.

```javascript
import puppeteer from "puppeteer";

const selector = ".selector";
const textSelector = ".text-selector";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.example.com");

    const element = await page.$(selector); // Get the first element that matches the selector
    const elements = await page.$$(selector); // Get all elements that match the selector

    let value = await page.$eval(selector, (element) => {
        return element..innerText;
    });

    value = await page.evaluate((selector) => {
        return document.querySelector(selector).textContent;
    }, selector);

    const text = await element.evaluate((el) => el.textContent); // Get the text content of the element
})();
```

## Waiting for Elements

When interacting with a page, it's important to wait for elements to be available before performing actions on them. Puppeteer provides the `page.waitForSelector()` method to wait for an element to be present in the DOM. By default, this method waits for 30 seconds before timing out, but you can specify a custom timeout using the `timeout` option.

```javascript
import puppeteer from "puppeteer";

const selector = ".selector";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.example.com");

  await page.waitForSelector(selector, { timeout: 5000 });

  await browser.close();
})();
```

Also, it's advisable to insert some delay before performing actions on the page. This can be done creating a delay function and using it before performing actions.

```javascript
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.example.com");

  await delay(2000); // Wait for 2 seconds

  await browser.close();
})();
```

## Clicking on Elements

To click on an element on a page, you can use the `element.click()` method. This method simulates a mouse click on the element. While this method seems pretty straightforward, in some cases, the element might not be completely visible or clickable, that's why it's more recommended to use the evaluation methods mentioned above.

```javascript
import puppeteer from "puppeteer";

const selector = ".selector";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.example.com");

  await page.waitForSelector(selector);

  const element = await page.$(selector);

  await element.click();

  // safer approach
  await element.evaluate((el) => el.click());

  await browser.close();
})();
```

## Typing Text

For input fields, you can use the `element.type()` method to type text into the field. This method simulates typing text on the keyboard and is useful for automating form submissions, login processes, and more.

```javascript
import puppeteer from "puppeteer";

const selector = ".selector";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.example.com");

  await page.waitForSelector(selector);

  const element = await page.$(selector);

  await element.type("Hello, World!");

  await browser.close();
})();
```
