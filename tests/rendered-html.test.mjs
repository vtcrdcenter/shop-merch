import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const output = new URL("../dist/client/", import.meta.url);
const routes = ["index.html", "products/index.html", "products/dau-an-thuong-trieu-nguyen/index.html", "cart/index.html", "checkout/index.html", "order-success/index.html", "search/index.html", "policies/shipping/index.html", "policies/returns/index.html", "policies/privacy/index.html"];

test("static export contains every commerce route", async () => {
  await Promise.all(routes.map((route) => access(new URL(route, output))));
  await access(new URL("_next/", output));
  await access(new URL(".nojekyll", output));
});

test("product data has sellable demo values and stock", async () => {
  const products = await readFile(new URL("data/products.ts", root), "utf8");
  assert.doesNotMatch(products, /amount:\s*null/);
  assert.doesNotMatch(products, /availability:\s*"coming-soon"/);
  assert.equal((products.match(/\n\s+stock:\s*\d+,/g) ?? []).length, 7);
});

test("commerce copy clearly identifies simulated behavior", async () => {
  const [addToCart, checkout, success] = await Promise.all([
    readFile(new URL("app/components/AddToCart.tsx", root), "utf8"),
    readFile(new URL("app/checkout/CheckoutClient.tsx", root), "utf8"),
    readFile(new URL("app/order-success/page.tsx", root), "utf8"),
  ]);
  assert.match(addToCart, /dữ liệu giả định/);
  assert.match(checkout, /Không có giao dịch thật/);
  assert.match(success, /chỉ là mô phỏng/);
});

test("GitHub Pages base path is retained", async () => {
  const config = await readFile(new URL("lib/site-path.ts", root), "utf8");
  assert.match(config, /SITE_BASE_PATH\s*=\s*"\/shop-merch"/);
});
