// lib/site-path.ts

export const SITE_BASE_PATH = "/shop-merch";

export function siteAssetPath(
  path: string | null | undefined,
): string {
  if (!path) {
    return "";
  }

  // Không xử lý URL ngoài
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  const normalizedPath =
    path.startsWith("/")
      ? path
      : `/${path}`;

  if (!SITE_BASE_PATH) {
    return normalizedPath;
  }

  const normalizedBase =
    SITE_BASE_PATH.endsWith("/")
      ? SITE_BASE_PATH.slice(0, -1)
      : SITE_BASE_PATH;

  // Tránh prefix 2 lần
  if (
    normalizedPath === normalizedBase ||
    normalizedPath.startsWith(
      `${normalizedBase}/`,
    )
  ) {
    return normalizedPath;
  }

  return `${normalizedBase}${normalizedPath}`;
}
