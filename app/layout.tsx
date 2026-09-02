// app/layout.tsx

import type {
  Metadata,
} from "next";

import ShopHeader from "./components/ShopHeader";
import ShopFooter from "./components/ShopFooter";
import { CartProvider } from "./components/CartProvider";

import {
  siteAssetPath,
} from "../lib/site-path";

import "./globals.css";

/* =========================================================
   SITE METADATA
   ========================================================= */

const siteName =
  "Bảo tàng Lịch sử Quốc gia";

const title =
  "Gian hàng điện tử";

const description =
  "Khám phá các sản phẩm văn hóa sáng tạo được phát triển từ hiện vật, tư liệu và câu chuyện lịch sử của Bảo tàng Lịch sử Quốc gia.";

export const metadata:
  Metadata = {
  /**
   * Chỉ đặt origin tại đây.
   *
   * Không đặt /shop-merch/
   * vì các asset đã được
   * siteAssetPath() thêm basePath.
   */
  metadataBase:
    new URL(
      "https://vtcrdcenter.github.io/",
    ),

  title: {
    default:
      `${title} | ${siteName}`,

    template:
      `%s | ${siteName}`,
  },

  description,

  icons: {
    icon:
      siteAssetPath(
        "/favicon.svg",
      ),

    shortcut:
      siteAssetPath(
        "/favicon.svg",
      ),
  },

  openGraph: {
    title:
      `${title} | ${siteName}`,

    description,

    type:
      "website",

    images: [
      siteAssetPath(
        "/og.png",
      ),
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      `${title} | ${siteName}`,

    description,

    images: [
      siteAssetPath(
        "/og.png",
      ),
    ],
  },
};

/* =========================================================
   ROOT LAYOUT
   ========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
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

        <CartProvider>
          <ShopHeader />

          <div id="main-content">
            {children}
          </div>

          <ShopFooter />
        </CartProvider>
      </body>
    </html>
  );
}
