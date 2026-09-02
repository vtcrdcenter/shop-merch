// app/products/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

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
    "Sản phẩm | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",

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

          <h1 className="products-hero__title">
            Những vật phẩm mang
            câu chuyện lịch sử
          </h1>

          <p className="products-hero__description">
            Từ chi tiết trên hiện vật
            đến những hình thức sử dụng mới,
            mỗi thiết kế mang một cách tiếp cận
            riêng để đưa câu chuyện di sản
            gần hơn với đời sống hôm nay.
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

      {/* =====================================================
          05 — TRACEABILITY
      ====================================================== */}

      <section className="products-trace-callout">
        <div className="site-container products-trace-callout__inner">
          <div className="products-trace-callout__content">
            <p className="products-trace-callout__eyebrow">
              TRUY XUẤT SẢN PHẨM
            </p>

            <h2 className="products-trace-callout__title">
              Tìm hiểu thêm về
              sản phẩm bạn đang xem
            </h2>

            <p className="products-trace-callout__description">
              Với những sản phẩm hỗ trợ truy xuất,
              người dùng có thể tiếp tục kiểm tra
              nguồn cảm hứng, thông tin thiết kế,
              mã nhận diện và các dữ liệu liên quan
              được công bố trên hệ thống.
            </p>
          </div>

          <div className="products-trace-callout__actions">
            <Link
              href="/products/dau-an-thuong-trieu-nguyen"
              className="products-trace-callout__primary"
            >
              Xem sản phẩm mẫu

              <span aria-hidden="true">
                {" "}
                →
              </span>
            </Link>

            <Link
              href="/stories/tu-san-pham-den-ho-so-truy-xuat"
              className="products-trace-callout__secondary"
            >
              Truy xuất hoạt động như thế nào?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
