import type { Metadata } from "next";
import { siteAssetPath } from "../lib/site-path";
import "./globals.css";

const title = "Gian hàng điện tử | Bảo tàng Lịch sử Quốc gia";
const description =
  "Sản phẩm văn hóa sáng tạo từ di sản và hiện vật của Bảo tàng Lịch sử Quốc gia.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vtcrdcenter.github.io/shop-merch/"),
  title,
  description,
  icons: {
    icon: siteAssetPath("/favicon.svg"),
    shortcut: siteAssetPath("/favicon.svg"),
  },
  openGraph: { title, description, images: ["og.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
