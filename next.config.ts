import type { NextConfig } from "vinext";
import { SITE_BASE_PATH } from "./lib/site-path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: SITE_BASE_PATH,
  trailingSlash: true,
};

export default nextConfig;
