import type { Metadata } from "next";

import ShopHeader from "./components/ShopHeader";
import ShopFooter from "./components/ShopFooter";

import { siteAssetPath } from "../lib/site-path";

import "./globals.css";

const title =
  "Gian hàng điện tử | Bảo tàng Lịch sử Quốc gia";

const description =
  "Khám phá các sản phẩm văn hóa sáng tạo được phát triển từ hiện vật, tư liệu và câu chuyện lịch sử của Bảo tàng Lịch sử Quốc gia.";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://vtcrdcenter.github.io/shop-merch/",
  ),

  title: {
    default: title,
    template:
      "%s | Bảo tàng Lịch sử Quốc gia",
  },

  description,

  icons: {
    icon: siteAssetPath("/favicon.svg"),
    shortcut:
      siteAssetPath("/favicon.svg"),
  },

  openGraph: {
    title,
    description,
    type: "website",
    images: [
      siteAssetPath("/og.png"),
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      siteAssetPath("/og.png"),
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <a
          href="#main-content"
          className="skip-link"
        >
          Chuyển đến nội dung
        </a>

        <ShopHeader />

        <div id="main-content">
          {children}
        </div>

        <ShopFooter />
      </body>
    </html>
  );
}
