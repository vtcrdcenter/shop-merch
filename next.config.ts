import type { NextConfig } from "vinext";

const isGitHubPages =
  process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  basePath: isGitHubPages
    ? "/shop-merch"
    : "",
};

export default nextConfig;
