import { test, expect, request } from "@playwright/test";

test.describe("API tests - JSONPlaceholder", () => {
  test("GET /posts/1 returns 200 and correct payload @smoke", async () => {
    const context = await request.newContext({
      baseURL: "https://jsonplaceholder.typicode.com",
    });

    const res = await context.get("/posts/1");
    expect(res.status()).toBe(200);

    const body = await res.json();
    expect(body.id).toBe(1);
    expect(body.userId).toBeTruthy();
    expect(body.title).toBeTruthy();
  });

  test("GET /posts/0 returns 404 (negative) @smoke", async () => {
    const context = await request.newContext({
      baseURL: "https://jsonplaceholder.typicode.com",
    });

    const res = await context.get("/posts/0");
    expect(res.status()).toBe(404);
  });
});
