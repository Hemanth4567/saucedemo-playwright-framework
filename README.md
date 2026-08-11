# SauceDemo Playwright Framework

A Playwright automation framework for testing the SauceDemo application.

## Tech Stack

- Playwright
- TypeScript
- Page Object Model (POM)
- Custom fixtures
- GitHub Actions CI

## Framework Features

- Reusable Page Object classes
- Separated test data
- Reusable fixtures
- HTML test reports
- Screenshots and videos on failure
- Trace collection on retry
- Cross-browser execution
- GitHub Actions CI workflow

## Project Structure

```text
├── .github/
│   └── workflows/
│       └── playwright.yml
├── fixtures/
│   └── pages.ts
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── test-data/
│   └── users.ts
├── tests/
│   ├── login.spec.ts
│   ├── products.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

## Test Coverage

- Valid login
- Invalid login validation
- Add product to cart
- Remove product from cart
- Cart product validation
- Checkout flow
- Order-success confirmation

## Prerequisites

Install the following before running the project:

- Node.js
- npm
- Git

## Installation

Clone the repository:

```bash
git clone https://github.com/Hemanth4567/saucedemo-playwright-framework.git
```

Open the project folder:

```bash
cd saucedemo-playwright-framework
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run Tests

Run the complete test suite:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

Run a single test file:

```bash
npx playwright test tests/products.spec.ts
```

Run tests in UI mode:

```bash
npx playwright test --ui
```

## Test Reports

Open the Playwright HTML report:

```bash
npx playwright show-report
```

## CI/CD

GitHub Actions automatically runs the Playwright test suite on pushes and pull requests to the `main` branch.

## Author

Hemanth Kumar
