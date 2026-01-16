import { Page, expect } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectTitle() {
    await expect(this.page.locator(".title")).toHaveText("Products");
  }
}
