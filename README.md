# cypress-cucumber-starter

This project is a starter template for running Cypress tests with Cucumber in JavaScript.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js (v18 or later)
- npm
- Git

## Clone the project

Run the following commands in your terminal:

```bash
git clone https://github.com/Emuohwo/cypress-cucumber-starter.git
cd cypress-cucumber-starter
```

## Install dependencies

From the project root, install the required packages:

```bash
npm install
```

## Set up environment variables

This project uses Cypress environment variables for the login flow. Create a `.env` file in the project root and add your test credentials:

```env
CYPRESS_USERNAME=your_username
CYPRESS_PASSWORD=your_password
```

> The login tests read these values from the `.env` file at runtime.

## Run the tests

Open the Cypress Test Runner:

```bash
npx cypress open
```

Run tests in headless mode:

```bash
npm run test:smoke
npm run test:regression
npm run test:not-smoke
```

## Project structure

- `cypress/e2e/pages/` contains the Cucumber feature files and step definitions
- `cypress/e2e/pageObjects/` contains page object classes used by the tests
- `cypress.config.js` contains the Cypress and Cucumber configuration

## Notes

- The default base URL points to the OrangeHRM demo site.
- If you want to use different credentials, update the values in your `.env` file.

