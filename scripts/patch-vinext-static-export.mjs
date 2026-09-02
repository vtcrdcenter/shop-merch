import { readFile, writeFile } from "node:fs/promises";

const target = new URL(
  "../node_modules/vinext/dist/build/prerender.js",
  import.meta.url,
);

const requestPath =
  '${config.basePath ?? ""}${urlPath}${config.trailingSlash && urlPath !== "/" ? "/" : ""}';

const replacements = [
  [
    "new Request(`http://localhost${urlPath}`, { headers: htmlHeaders });",
    `new Request(\`http://localhost${requestPath}\`, { headers: htmlHeaders });`,
  ],
  [
    "new Request(`http://localhost${urlPath}`, { headers: rscHeaders });",
    `new Request(\`http://localhost${requestPath}\`, { headers: rscHeaders });`,
  ],
];

let source = await readFile(target, "utf8");

/* Vinext beta.9+ natively includes basePath when prerendering. */
if (
  source.includes("const requestPath = config.basePath") &&
  source.includes("new Request(`http://localhost${requestPath}`")
) {
  console.log("Vinext already handles static-export basePath.");
} else {
  let changed = false;

  for (const [original, patched] of replacements) {
    if (source.includes(patched)) {
      continue;
    }

    if (!source.includes(original)) {
      throw new Error(
        "Unsupported vinext prerender implementation; refusing to apply an unsafe patch.",
      );
    }

    source = source.replace(original, patched);
    changed = true;
  }

  if (changed) {
    await writeFile(target, source);
    console.log("Applied vinext static-export basePath patch.");
  }
}
