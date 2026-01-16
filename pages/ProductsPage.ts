import { Page, expect } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectOnProductsPage() {
    await expect(this.page.locator(".title")).toHaveText("Products");
  }

  async addProductToCart(productName: string) {
    await this.page
      .locator(".inventory_item", { hasText: productName })
      .locator("button")
      .click();
  }

  async openCart() {
    await this.page.locator(".shopping_cart_link").click();
  }

  async expectCartBadgeCount(count: number) {
    await expect(this.page.locator(".shopping_cart_badge")).toHaveText(
      count.toString()
    );
  }
}
