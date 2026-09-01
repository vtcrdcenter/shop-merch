import type { NextConfig } from "next";

const isGitHubPages =
  process.env.GITHUB_ACTIONS === "true";

const basePath = isGitHubPages
  ? "/shop-merch"
  : "";

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  basePath,

  assetPrefix: basePath
    ? `${basePath}/`
    : "",
};

export default nextConfig;
