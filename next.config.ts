import type { NextConfig } from "next";

const isGitHubPages =
  process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  basePath: isGitHubPages
    ? "/shop-merch"
    : "",

  assetPrefix: isGitHubPages
    ? "/shop-merch/"
    : "",
};

export default nextConfig;
