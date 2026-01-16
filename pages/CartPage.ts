import { Page, expect } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectProductInCart(productName: string) {
    await expect(
      this.page.locator(".cart_item", { hasText: productName })
    ).toBeVisible();
  }
}
