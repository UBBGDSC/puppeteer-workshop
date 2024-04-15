import puppeteer from "puppeteer";

const JOURNEY = {
  DEPARTURE: "Cluj-Napoca",
  ARRIVAL: "Bucuresti-Nord",
  DEPARTURE_DATE: "20.04.2024",
  DEPARTURE_TIME: 480,
  ORDERING_TYPE: 2,
};

const USER_DETAILS = {
  USERNAME: "",
  PASSWORD: "",
  CARD_NUMBER: "4242424242424242",
  CARD_PERSON: "John Doe",
  CARD_EXPIRATION_MONTH: "12",
  CARD_EXPIRATION_YEAR: "2024",
  CARD_CVV: "123",
};

const URL = `https://bilete.cfrcalatori.ro/ro-RO/Rute-trenuri/${JOURNEY.DEPARTURE}/${JOURNEY.ARRIVAL}?DepartureDate=${JOURNEY.DEPARTURE_DATE}&MinutesInDay=${JOURNEY.DEPARTURE_TIME}&OrderingTypeId=${JOURNEY.ORDERING_TYPE}`;

const SELECTORS = {
  TRAIN_PANEL: ".div-itinerary-station",
  BUY_BUTTON: "#button-itinerary-0-buy",
  TICKET_TYPE_NEXT_BUTTON: "#button-next-step-2",
  TICKET_NUMBER_PLUS_BUTTON: "#button-ticket-fare-4-more",
  TICKET_NUMBER_POPUP_BUTTON: "#div-warning-students-general button",
  TICKET_NUMBER_NEXT_BUTTON: "#button-next-step-3",
  PRICE_NEXT_BUTTON: "#button-next-step-4",
  USERNAME_FIELD: "#UserName",
  PASSWORD_FIELD: "#Password",
  LOGIN_BUTTON: "#button-login",
  YOUR_ACCOUNT_NEXT_BUTTON: "#button-next-step-5",
  CONFIRM_BUTTON: "#button-confirm-selection",
  CONFIRM_NEXT_BUTTON: "#button-next-step-6",
  TRAVEL_DATA_PREFERENCES: "#button-load-preferences-0",
  SELECT_PASSENGER_PREFERENCES: "#button-select-passenger-preference-0",
  TRAVEL_DATA_NEXT_BUTTON: "#button-next-step-7",
  SELECT_CARD_PAYMENT: "#ep-cc",
  SELECT_PAY_ONLINE: ".btn-pay",
  CARD_NUMBER: "#card",
  CARD_NAME: "#name_on_card",
  CARD_EXPIRING_MONTH: "#exp_month",
  CARD_EXPIRING_YEAR: "#exp_year",
  CARD_CVV: "#cvv2",
  CARD_CONSENT: "#consent",
  CARD_PAY_ONLINE: "#button_status",
};

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

async function selectTrain(page) {
  await page.waitForSelector(SELECTORS.TRAIN_PANEL);

  const train = await page.$(SELECTORS.TRAIN_PANEL);

  await train.waitForSelector(SELECTORS.BUY_BUTTON);
  await delay(2000);

  const buyButton = await train.$(SELECTORS.BUY_BUTTON);
  await buyButton.evaluate((button) => button.click());
}

async function selectTicketType(page) {
  await page.waitForSelector(SELECTORS.TICKET_TYPE_NEXT_BUTTON);

  await delay(2000);
  const nextButton = await page.$(SELECTORS.TICKET_TYPE_NEXT_BUTTON);
  await nextButton.evaluate((button) => button.click());
}

async function selectTicketNumber(page) {
  await page.waitForSelector(SELECTORS.TICKET_NUMBER_PLUS_BUTTON);

  await delay(2000);
  const plusButton = await page.$(SELECTORS.TICKET_NUMBER_PLUS_BUTTON);
  await plusButton.evaluate((button) => button.click());

  await page.waitForSelector(SELECTORS.TICKET_NUMBER_POPUP_BUTTON, {
    visible: true,
  });
  const popupButton = await page.$(SELECTORS.TICKET_NUMBER_POPUP_BUTTON);
  await popupButton.evaluate((button) => button.click());

  await page.waitForSelector(SELECTORS.TICKET_NUMBER_NEXT_BUTTON);
  await delay(2000);
  const nextButton = await page.$(SELECTORS.TICKET_NUMBER_NEXT_BUTTON);
  await nextButton.evaluate((button) => button.click());
}

async function confirmPrice(page) {
  await page.waitForSelector(SELECTORS.PRICE_NEXT_BUTTON);

  await delay(2000);
  const nextButton = await page.$(SELECTORS.PRICE_NEXT_BUTTON);
  await nextButton.evaluate((button) => button.click());
}

async function login(page) {
  await page.waitForSelector(SELECTORS.USERNAME_FIELD);
  await page.type(SELECTORS.USERNAME_FIELD, USER_DETAILS.USERNAME, {
    delay: 100,
  });

  await page.waitForSelector(SELECTORS.PASSWORD_FIELD);
  await page.type(SELECTORS.PASSWORD_FIELD, USER_DETAILS.PASSWORD, {
    delay: 100,
  });

  await page.waitForSelector(SELECTORS.LOGIN_BUTTON);
  const loginButton = await page.$(SELECTORS.LOGIN_BUTTON);
  await loginButton.evaluate((button) => button.click());

  await page.waitForSelector(SELECTORS.YOUR_ACCOUNT_NEXT_BUTTON);
  await delay(2000);
  const nextButton = await page.$(SELECTORS.YOUR_ACCOUNT_NEXT_BUTTON);
  await nextButton.evaluate((button) => button.click());
}

async function confirmBooking(page) {
  try {
    await page.waitForSelector(SELECTORS.CONFIRM_BUTTON, {
      visible: true,
      timeout: 5000,
    });
    const confirmButton = await page.$(SELECTORS.CONFIRM_BUTTON);
    await confirmButton.evaluate((el) => el.click());
  } catch (error) {
    console.log("No confirm button");
  }

  console.log("Selection confirmed");
  await page.waitForFunction(
    (selector) => {
      const button = document.querySelector(selector);
      return button && !button.disabled;
    },
    { polling: "mutation" },
    SELECTORS.CONFIRM_NEXT_BUTTON,
  );

  await page.waitForSelector(SELECTORS.CONFIRM_NEXT_BUTTON);
  await delay(2000);
  const nextButton = await page.$(SELECTORS.CONFIRM_NEXT_BUTTON);
  await nextButton.evaluate((button) => button.click());
}

async function handlePayment(page) {
  await page.waitForSelector(SELECTORS.SELECT_CARD_PAYMENT);
  const selectCards = await page.$(SELECTORS.SELECT_CARD_PAYMENT);
  await selectCards.evaluate((el) => el.click());

  await page.waitForSelector(SELECTORS.SELECT_PAY_ONLINE);
  const selectPayOnline = await page.$(SELECTORS.SELECT_PAY_ONLINE);
  await selectPayOnline.evaluate((el) => el.click());

  await page.waitForSelector(SELECTORS.CARD_NUMBER);
  await page.type(SELECTORS.CARD_NUMBER, USER_DETAILS.CARD_NUMBER, {
    delay: 100,
  });
  await page.type(SELECTORS.CARD_NAME, USER_DETAILS.CARD_PERSON, {
    delay: 100,
  });
  await page.type(
    SELECTORS.CARD_EXPIRING_MONTH,
    USER_DETAILS.CARD_EXPIRATION_MONTH,
    { delay: 100 },
  );
  await page.type(
    SELECTORS.CARD_EXPIRING_YEAR,
    USER_DETAILS.CARD_EXPIRATION_YEAR,
    { delay: 100 },
  );
  await page.type(SELECTORS.CARD_CVV, USER_DETAILS.CARD_CVV, { delay: 100 });

  await page.waitForSelector(SELECTORS.CARD_CONSENT);
  const consent = await page.$(SELECTORS.CARD_CONSENT);
  await consent.evaluate((el) => el.click());

  await page.waitForSelector(SELECTORS.CARD_PAY_ONLINE);
  const payOnline = await page.$(SELECTORS.CARD_PAY_ONLINE);
  await payOnline.evaluate((el) => el.click());
}

async function selectStudentCard(page) {
  await page.waitForSelector(SELECTORS.TRAVEL_DATA_PREFERENCES);
  const travelDataPreferences = await page.$(SELECTORS.TRAVEL_DATA_PREFERENCES);
  await travelDataPreferences.evaluate((button) => button.click());

  await delay(2000);

  await page.waitForSelector(SELECTORS.SELECT_PASSENGER_PREFERENCES);
  const selectPassengerPreferences = await page.$(
    SELECTORS.SELECT_PASSENGER_PREFERENCES,
  );
  await selectPassengerPreferences.evaluate((button) => button.click());

  await delay(2000);

  await page.waitForSelector(SELECTORS.TRAVEL_DATA_NEXT_BUTTON);
  const travelDataNextButton = await page.$(SELECTORS.TRAVEL_DATA_NEXT_BUTTON);
  await travelDataNextButton.evaluate((button) => button.click());
}

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();

  await page.goto(URL);

  await selectTrain(page);
  await selectTicketType(page);
  await selectTicketNumber(page);
  await confirmPrice(page);
  await login(page);
  await confirmBooking(page);
  await selectStudentCard(page);
  await handlePayment(page);
}

run();
