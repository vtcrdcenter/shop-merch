// app/products/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "../components/Breadcrumb";
import CategoryCard from "../components/CategoryCard";
import ProductGrid from "../components/ProductGrid";
import SectionHeading from "../components/SectionHeading";

import {
  productCategories,
  getCategoryBySlug,
} from "../../data/categories";

import {
  getAllProducts,
  getProductsByCategory,
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

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

/* =========================================================
   PAGE
   ========================================================= */

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = searchParams
    ? await searchParams
    : {};

  const activeCategorySlug =
    params.category ?? null;

  const activeCategory =
    activeCategorySlug
      ? getCategoryBySlug(
          activeCategorySlug,
        )
      : undefined;

  const allProducts =
    getAllProducts();

  const visibleProducts =
    activeCategory
      ? getProductsByCategory(
          activeCategory.id,
        )
      : allProducts;

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

      {/* =====================================================
          03 — CATEGORY
      ====================================================== */}

      <section
        className="products-categories"
        aria-labelledby="product-categories-title"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="KHÁM PHÁ THEO DANH MỤC"
            title="Bạn đang tìm loại sản phẩm nào?"
            description="Danh mục được tổ chức theo công năng sử dụng, từ vật phẩm lưu niệm nhỏ đến phụ kiện, sản phẩm trang trí và quà tặng."
          />

          <div className="products-categories__grid">
            {productCategories.map(
              (category) => {
                const count =
                  getProductsByCategory(
                    category.id,
                  ).length;

                return (
                  <CategoryCard
                    key={
                      category.id
                    }
                    category={
                      category
                    }
                    productCount={
                      count
                    }
                  />
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — PRODUCT LIST
      ====================================================== */}

      <section
        className="products-list"
        aria-labelledby="products-list-title"
      >
        <div className="site-container">
          <div className="products-list__header">
            <div>
              <p className="products-list__eyebrow">
                SẢN PHẨM
              </p>

              <h2
                id="products-list-title"
                className="products-list__title"
              >
                {activeCategory
                  ? activeCategory.name
                  : "Tất cả sản phẩm"}
              </h2>

              {activeCategory ? (
                <p className="products-list__description">
                  {
                    activeCategory.description
                  }
                </p>
              ) : (
                <p className="products-list__description">
                  Khám phá toàn bộ các thiết kế
                  hiện có trong gian hàng và
                  tìm hiểu câu chuyện phía sau
                  từng sản phẩm.
                </p>
              )}
            </div>

            <div className="products-list__count">
              {visibleProducts.length}{" "}
              sản phẩm
            </div>
          </div>

          {/* =================================================
              FILTER BAR
          ================================================== */}

          <div
            className="products-filter"
            aria-label="Lọc sản phẩm theo nhóm"
          >
            <Link
              href="/products"
              className={[
                "products-filter__item",
                !activeCategory
                  ? "products-filter__item--active"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              Tất cả
            </Link>

            {productCategories.map(
              (category) => (
                <Link
                  key={
                    category.id
                  }
                  href={`/products?category=${category.slug}`}
                  className={[
                    "products-filter__item",

                    activeCategory?.id ===
                    category.id
                      ? "products-filter__item--active"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {
                    category.shortName
                  }
                </Link>
              ),
            )}
          </div>

          {/* =================================================
              ACTIVE FILTER
          ================================================== */}

          {activeCategory && (
            <div className="products-active-filter">
              <div>
                <span className="products-active-filter__label">
                  Đang xem:
                </span>

                <strong>
                  {
                    activeCategory.shortName
                  }
                </strong>
              </div>

              <Link
                href="/products"
                className="products-active-filter__clear"
              >
                Xem tất cả

                <span aria-hidden="true">
                  {" "}
                  ×
                </span>
              </Link>
            </div>
          )}

          {/* =================================================
              PRODUCT GRID
          ================================================== */}

          <ProductGrid
            products={
              visibleProducts
            }
            columns={3}
            showCategory
            showTraceability
            emptyMessage="Hiện chưa có sản phẩm trong nhóm này."
          />
        </div>
      </section>

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
