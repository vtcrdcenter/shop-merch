// app/products/page.tsx

import type { Metadata } from "next";

import Breadcrumb from "../components/Breadcrumb";
import ProductCatalog from "./ProductCatalog";

import {
  productCategories,
} from "../../data/categories";

import {
  getAllProducts,
} from "../../data/products";

/* =========================================================
   METADATA
   ========================================================= */

export const metadata: Metadata = {
  title:
    "Sản phẩm",

  description:
    "Khám phá các sản phẩm văn hóa sáng tạo được phát triển từ hiện vật, tư liệu và câu chuyện lịch sử của Bảo tàng Lịch sử Quốc gia.",
};

/* =========================================================
   PAGE
   ========================================================= */

export default function ProductsPage() {
  const allProducts =
    getAllProducts();

  return (
    <main className="products-page">
      {/* =====================================================
          01 — BREADCRUMB
      ====================================================== */}

      <div className="site-container products-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label: "Sản phẩm",
            },
          ]}
        />
      </div>

      {/* =====================================================
          02 — HERO
      ====================================================== */}

      <section className="products-hero">
        <div className="site-container products-hero__inner">
          <p className="products-hero__eyebrow">
            SẢN PHẨM
          </p>

          <h1 className="products-hero__title">Chọn một thiết kế dành cho bạn</h1>

          <p className="products-hero__description">
            Khám phá theo danh mục và mức giá. Câu chuyện văn hóa
            được kể gọn trong từng thiết kế.
          </p>

          <div className="products-hero__meta">
            <span>
              {allProducts.length} sản phẩm
              đang giới thiệu
            </span>

            <span aria-hidden="true">
              ·
            </span>

            <span>
              {productCategories.length} nhóm
              sản phẩm
            </span>
          </div>
        </div>
      </section>

      <ProductCatalog
        products={allProducts}
      />

    </main>
  );
}
