import { Page, expect } from "@playwright/test";

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async startCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async fillInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.locator('[data-test="continue"]').click();
  }

  async expectOnOverview() {
    await expect(this.page.locator(".title")).toHaveText("Checkout: Overview");
  }

  async expectErrorVisible() {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible();
  }
}
