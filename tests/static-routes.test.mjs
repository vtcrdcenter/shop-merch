import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const outputRoot = path.resolve("dist/client");
const basePath = "/shop-merch";

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(target) : entry.name === "index.html" ? [target] : [];
  }));
  return nested.flat();
}

test("all exported internal links include the GitHub Pages base path and resolve", async () => {
  const files = await htmlFiles(outputRoot);
  assert.ok(files.length > 0, "build must export HTML pages");

  for (const file of files) {
    const html = await readFile(file, "utf8");
    const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);

    for (const href of hrefs) {
      if (href.startsWith("#") || /^(?:https?:|mailto:|tel:)/.test(href)) continue;
      assert.ok(href.startsWith(`${basePath}/`), `${file}: ${href} is missing ${basePath}`);

      const url = new URL(href, "https://vtcrdcenter.github.io");
      const route = decodeURIComponent(url.pathname.slice(basePath.length)).replace(/^\//, "");
      if (route.startsWith("_next/") || path.extname(route)) continue;

      await access(path.join(outputRoot, route, "index.html"));
    }
  }
});
