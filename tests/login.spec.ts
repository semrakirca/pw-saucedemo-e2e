import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("SauceDemo - Login", () => {
  test("user can login successfully @smoke", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.expectOnInventoryPage();
    await inventoryPage.expectTitle();
  });

  test("user cannot login with wrong password @smoke", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login("standard_user", "wrong_password");
    await loginPage.expectErrorVisible();
  });
});
