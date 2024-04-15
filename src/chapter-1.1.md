# Getting Started

## Installation

To use Puppeteer in your project, run:

```bash
npm install puppeteer
# or
yarn add puppeteer
# or
pnpm add puppeteer
```

When you install Puppeteer, it automatically downloads a recent version of Chrome for Testing (~170MB macOS, ~282MB Linux, ~280MB Windows) and a `chrome-headless-shell binary` that is guaranteed to work with Puppeteer. The browser is downloaded to the $HOME/.cache/puppeteer folder by default

Inside the project folder, you will find a `node_modules` directory containing the Puppeteer package and a `package-lock.json` file that lists the dependencies and versions used in the installation. In `package.json`, add `"type": "module"` to enable ES modules in your project.

## Running the code

Assuming the file is named `index.js`, you can run the code using the following command:

```bash
node index.js
```
