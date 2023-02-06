<h2 align="center">
  Yu-Gi-Oh!
</h2>

<h3 align="center">
  Discover the cards available in your deck
</h3>

<p align="center">
  <img alt="Web Application Demo" src="https://github.com/isabelamoraes/yugioh-e2e/blob/main/demo/web.gif?raw=true" width="70%">
  <img alt="Mobile Application Demo" src="https://github.com/isabelamoraes/yugioh-e2e/blob/main/demo/mobile.gif?raw=true" width="23%">
</p>

## 📁 Project

This project was developed to explore the implementation of E2E automated tests in web and mobile applications through the Cypress and Detox libraries, respectively. 

## 🔗 Yu-Gi-Oh! API

The data used in this application to generate the pack's cards are obtained through the [Yu-Gi-Oh! API](https://ygoprodeck.com/api-guide/).

## 📃 Getting Started

To clone and run this application, place from your command line:

```bash
# Clone this repository
$ git clone https://github.com/isabelamoraes/yugioh-e2e.git

# Install dependencies
$ yarn

# Run the web application
$ yarn run:web

# Start the mobile application
yarn run:mobile

# Run the mobile application (Android)
yarn run:android

```

## 💻 Cypress

The [Cypress](https://www.cypress.io/) was used to create E2E tests for web application as shown in the following image:

<img alt="Run e2e tests with Cypress" src="https://github.com/isabelamoraes/yugioh-e2e/blob/main/demo/cypress.gif?raw=true" width="100%">

To run the tests, **first run the web application** and next place from your command line:

```bash
# Go into the e2e repository
$ cd e2e

# Install dependencies
$ npm install

# Open Cypress interface and run the tests
$ npm run test:open

# Run the tests (headless mode)
$ npm run test:run

# Run the tests and generate a custom report with Mochawesome
$ npm run test:mochawesome

```

## 📱 Detox

@TODO