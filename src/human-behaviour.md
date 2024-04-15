# Confirm you are not a robot

Automations are great, but sometimes they can be too good, and be used for not-so-great purposes. Most of the browsers have mechanisms to detect if the user is a human or a robot. There are some libraries that can help you to bypass these mechanisms, but they are not recommended to be used in production environments.

## [Ghost Cursor](https://github.com/Xetera/ghost-cursor)

Remember the click action we saw in the previous chapter? While it's a great way to interact with the page, it's not the most human-like way to do it. The cursor literally teleports to the position and clicks. This is not how a human would interact with the page. Ghost Cursor is a library that simulates human-like cursor movements. It's a great way to make your automations more human-like.

## How does it work

Bezier curves do almost all the work here. They let us create an infinite amount of curves between any 2 points we want
and they look quite human-like.

![](https://mamamoo.xetera.dev/😽🤵👲🧦👵.png)

The magic comes from being able to set multiple points for the curve to go through. This is done by picking
2 coordinates randomly in a limited area above and under the curve.

<img src="https://mamamoo.xetera.dev/🧣👎😠🧟✍.png" width="400">

However, we don't want wonky looking cubic curves when using this method because nobody really moves their mouse
that way, so only one side of the line is picked when generating random points.

<img src="http://simonwallner.at/ext/fitts/shannon.png" width="250" align="right">
When calculating how fast the mouse should be moving we use <a href="https://en.wikipedia.org/wiki/Fitts%27s_law">Fitts's Law</a>
to determine the amount of points we should be returning relative to the width of the element being clicked on and the distance
between the mouse and the object.

## Setting up

To install Ghost Cursor, run the following command:

```bash
npm install ghost-cursor
```

## Usage

We'll set up ghost cursor for our previous example. We'll use the same code as before, but we'll replace the `page.click` with `cursor.click`.

By default, the cursor is not visible. For making it visible, we can use the function `cursor.installMouseHelper()`. This is super useful for debugging purposes.

```javascript
async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const cursor = ghostCursor.createCursor(
    page,
    await ghostCursor.getRandomPagePoint(page), // start in a random position
    true, // do random movements while moving
  );
  await ghostCursor.installMouseHelper(page);
}
```

To use it, we'll need to send it as a parameter to the functions, together with the page object. For example, the function for selecting the train station would look like this:

```javascript
async function selectTrain(page, cursor) {
  await page.waitForSelector(SELECTORS.TRAIN_PANEL);

  const train = await page.$(SELECTORS.TRAIN_PANEL);

  await train.waitForSelector(SELECTORS.BUY_BUTTON);
  await delay(2000);

  const buyButton = await train.$(SELECTORS.BUY_BUTTON);
  await cursor.click(buyButton);
}
```
