// scripts/fix-github-pages-output.mjs

import {
  access,
  mkdir,
  readdir,
  rename,
  rm,
} from "node:fs/promises";

import {
  constants,
} from "node:fs";

import {
  fileURLToPath,
} from "node:url";

import path from "node:path";

/* =========================================================
   PATHS
   ========================================================= */

const projectRoot =
  path.resolve(
    path.dirname(
      fileURLToPath(
        import.meta.url,
      ),
    ),
    "..",
  );

const clientDir =
  path.join(
    projectRoot,
    "dist",
    "client",
  );

const nestedBaseDir =
  path.join(
    clientDir,
    "shop-merch",
  );

const nestedNextDir =
  path.join(
    nestedBaseDir,
    "_next",
  );

const rootNextDir =
  path.join(
    clientDir,
    "_next",
  );

/* =========================================================
   HELPERS
   ========================================================= */

async function exists(
  target,
) {
  try {
    await access(
      target,
      constants.F_OK,
    );

    return true;
  } catch {
    return false;
  }
}

/* =========================================================
   VALIDATE BUILD
   ========================================================= */

if (
  !(await exists(
    clientDir,
  ))
) {
  throw new Error(
    "dist/client was not found. Run this script only after vinext build.",
  );
}

const hasNestedNext =
  await exists(
    nestedNextDir,
  );

const hasRootNext =
  await exists(
    rootNextDir,
  );

const hasNestedIndex =
  await exists(
    path.join(
      nestedBaseDir,
      "index.html",
    ),
  );

/* =========================================================
   SAFETY
   ========================================================= */

if (
  !hasNestedIndex &&
  hasNestedNext &&
  hasRootNext
) {
  throw new Error(
    "Both dist/client/_next and dist/client/shop-merch/_next exist. Refusing to merge automatically.",
  );
}

/* =========================================================
   FIX VINEXT OUTPUT
   ========================================================= */

if (hasNestedIndex) {
  /*
   * Vinext beta.9 emits the complete static site below basePath. GitHub
   * Pages serves dist/client as the repository root, so flatten that folder.
   */
  if (hasRootNext) {
    await rm(rootNextDir, { recursive: true, force: true });
  }

  for (const entry of await readdir(nestedBaseDir)) {
    await rename(
      path.join(nestedBaseDir, entry),
      path.join(clientDir, entry),
    );
  }

  await rm(nestedBaseDir, { recursive: true, force: true });

  console.log(
    "Flattened Vinext basePath output for GitHub Pages.",
  );
} else if (
  hasNestedNext
) {
  await mkdir(
    clientDir,
    {
      recursive:
        true,
    },
  );

  await rename(
    nestedNextDir,
    rootNextDir,
  );

  if (
    await exists(
      nestedBaseDir,
    )
  ) {
    await rm(
      nestedBaseDir,
      {
        recursive:
          true,

        force:
          true,
      },
    );
  }

  console.log(
    "Moved Vinext static assets from dist/client/shop-merch/_next to dist/client/_next for GitHub Pages.",
  );
} else if (
  hasRootNext
) {
  console.log(
    "Vinext static assets are already in dist/client/_next; no relocation needed.",
  );
} else {
  throw new Error(
    "No Vinext _next static asset directory was found after build.",
  );
}
