import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";

test.describe("Cart flow", () => {
  test("user can add product to cart @smoke", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    await productsPage.expectOnProductsPage();
    await productsPage.addProductToCart("Sauce Labs Backpack");
    await productsPage.expectCartBadgeCount(1);

    await productsPage.openCart();
    await cartPage.expectProductInCart("Sauce Labs Backpack");
  });
});
