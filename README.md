# Playwright E2E Test Automation – SauceDemo

[![CI](https://github.com/semrakirca/pw-saucedemo-e2e/actions/workflows/tests.yml/badge.svg)](https://github.com/semrakirca/pw-saucedemo-e2e/actions/workflows/tests.yml)

This is a sample **End-to-End UI Automation Framework** built using **Playwright + TypeScript**, focused on real world testing skills valued by QA Automation roles.

It validates key user flows on https://www.saucedemo.com including login scenarios and error handling.

---

## 🔧 Tech Stack

- **Playwright Test Runner**
- **TypeScript**
- **Page Object Model (POM)** architecture
- **Smoke test grouping using tags**
- **HTML report / trace / screenshots on fail**
- **GitHub Actions CI** (automated checks on push)

---

## 🧪 Test Coverage

### Smoke Tests

- Login with valid credentials
- Login failure with invalid credentials

### API Tests (Playwright request)

- GET endpoint validation (status + payload)
- Negative API scenario (404)

---

## ▶️ How to Run

> ℹ️ Tests run headless in CI (GitHub Actions) and can run headed locally for debugging.

### 1) Install dependencies

```bash
npm install
npx playwright install
```

### 2) Run all tests

```bash
npx playwright test
```

### 3) Run only smoke tests

```bash
npx playwright test -g "@smoke"
```

### 4) View HTML report

```bash
npx playwright show-report
```

---

## ☑️ Features

- End-to-End UI automation with Playwright (TypeScript)
- Page Object Model (POM) for maintainable tests
- Smoke test tagging for quick verification
- Negative scenarios for error handling
- API testing using Playwright request
- UI + API combined (data-driven) test example
- HTML report, trace, screenshot & video on failure
- CI pipeline with GitHub Actions (headless)

---

## 📌 Notes

This framework tests core user flows on a demo e-commerce app (SauceDemo).
The practice reflects skills required in real QA Automation positions.

---

## 👩‍💻 Author

Semra K. — Junior QA Automation Engineer
Profile: https://www.github.com/semrakirca
