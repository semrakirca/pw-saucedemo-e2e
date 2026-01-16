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

---

## ▶️ How to Run

### 1) Install dependencies

```bash
npm install
npx playwright install
