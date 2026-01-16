import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test.describe("Checkout flow", () => {
  test("user can checkout successfully @smoke", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    await productsPage.addProductToCart("Sauce Labs Backpack");
    await productsPage.openCart();
    await cartPage.expectProductInCart("Sauce Labs Backpack");

    await checkoutPage.startCheckout();
    await checkoutPage.fillInformation("Semra", "Tester", "34000");
    await checkoutPage.expectOnOverview();
  });

  test("user cannot continue checkout with empty info @smoke", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    await productsPage.addProductToCart("Sauce Labs Backpack");
    await productsPage.openCart();
    await cartPage.expectProductInCart("Sauce Labs Backpack");

    await checkoutPage.startCheckout();
    await checkoutPage.fillInformation("", "", "");
    await checkoutPage.expectErrorVisible();
  });
});
