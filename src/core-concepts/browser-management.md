# Browser management

Usually, you start working with Puppeteer by launching a browser instance. This browser instance is controlled by Puppeteer and can be used to open new tabs, navigate to different URLs, interact with web pages, and perform various tasks.

## Launching a Browser

```javascript
import puppeteer from "puppeteer";

const browser = await puppeteer.launch();

const page = await browser.newPage();
```

When launching a browser, you can specify various options to customize its behavior. These options include:

- `headless`: A boolean value that determines whether the browser should run in headless mode (without a visible UI). By default, this option is set to `true`.
- `slowMo`: A number that introduces a delay (in milliseconds) between Puppeteer actions. This can be useful for debugging or observing the automation process.
- `defaultViewport`: An object that defines the initial browser window size and scale factor. This can be useful for ensuring consistent rendering across different devices.
- `args`: An array of strings that specify additional command-line arguments to pass to the browser instance. These arguments can modify the browser's behavior or enable specific features.
- and more...

```javascript
const browser = await puppeteer.launch({
  headless: false,
  slowMo: 250,
  defaultViewport: null,
  args: ["--start-maximized"],
});
```

## Closing the Browser

Once you're done working with the browser, you should close it to free up system resources. You can close the browser instance using the `browser.close()` method.

```javascript
import puppeteer from "puppeteer";

const browser = await puppeteer.launch();

const page = await browser.newPage();

await browser.close();
```
