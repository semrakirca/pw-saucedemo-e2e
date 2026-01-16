import { test, expect, request } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

test.describe("UI + API combo", () => {
  test("use API data inside UI test @smoke", async ({ page }) => {
    // 1) API: Test datasını dışarıdan alıyoruz
    const api = await request.newContext({
      baseURL: "https://jsonplaceholder.typicode.com",
    });

    const res = await api.get("/posts/1");
    expect(res.status()).toBe(200);

    const body = await res.json();
    const dynamicTag = body.title as string; // API'den gelen data

    // 2) UI: SauceDemo login + products
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await productsPage.expectOnProductsPage();

    // 3) UI doğrulama: API datayı "kanıt" gibi kullanıyoruz
    // Burada UI ile birebir eşleştirme yapamayız çünkü farklı sistemler,
    // ama testin data-driven olduğunu gösterir.
    // Örn: page title'a data loglayıp test çıktısına yazdırıyoruz.
    test.info().annotations.push({ type: "api_data", description: dynamicTag });

    // Basit ve net doğrulama: Title doğru mu?
    await productsPage.expectOnProductsPage();
  });
});
