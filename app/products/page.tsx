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

export const metadata: Metadata = {
  title: "Sản phẩm | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",
  description:
    "Khám phá các sản phẩm văn hóa sáng tạo được phát triển từ hiện vật, tư liệu và câu chuyện lịch sử của Bảo tàng Lịch sử Quốc gia.",
};

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

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
      ? getCategoryBySlug(activeCategorySlug)
      : undefined;

  const allProducts = getAllProducts();

  const visibleProducts = activeCategory
    ? getProductsByCategory(activeCategory.id)
    : allProducts;

  return (
    <main className="products-page">
      {/* =====================================================
          BREADCRUMB
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
          HERO
      ====================================================== */}

      <section className="products-hero">
        <div className="site-container products-hero__inner">
          <p className="products-hero__eyebrow">
            GIAN HÀNG ĐIỆN TỬ
          </p>

          <h1 className="products-hero__title">
            Sản phẩm văn hóa sáng tạo
          </h1>

          <p className="products-hero__description">
            Khám phá các thiết kế được phát triển từ
            hiện vật, tư liệu, hình tượng và câu chuyện
            lịch sử. Mỗi sản phẩm là một cách tiếp cận
            mới để đưa giá trị di sản vào đời sống
            đương đại.
          </p>

          <div className="products-hero__meta">
            <span>
              {allProducts.length} thiết kế đang giới thiệu
            </span>

            <span aria-hidden="true">
              ·
            </span>

            <span>
              8 nhóm sản phẩm
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY INTRO
      ====================================================== */}

      <section
        className="products-categories"
        aria-labelledby="product-categories-title"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="DANH MỤC"
            title="Khám phá theo nhóm sản phẩm"
            description="Danh mục được tổ chức theo công năng và hình thức sản phẩm, giúp người dùng dễ dàng tìm kiếm theo nhu cầu."
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
                    key={category.id}
                    category={category}
                    productCount={count}
                  />
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT LIST
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
                  {activeCategory.description}
                </p>
              ) : (
                <p className="products-list__description">
                  Các thiết kế hiện đang được giới thiệu
                  trong giai đoạn phát triển và Pilot.
                </p>
              )}
            </div>

            <div className="products-list__count">
              {visibleProducts.length}{" "}
              {visibleProducts.length === 1
                ? "sản phẩm"
                : "sản phẩm"}
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
                  key={category.id}
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
                  {category.shortName}
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
                  {activeCategory.shortName}
                </strong>
              </div>

              <Link
                href="/products"
                className="products-active-filter__clear"
              >
                Xóa bộ lọc
                <span aria-hidden="true">
                  {" "}
                  ×
                </span>
              </Link>
            </div>
          )}

          {/* =================================================
              GRID
          ================================================== */}

          <ProductGrid
            products={visibleProducts}
            columns={3}
            showCategory
            showTraceability
            emptyMessage="Hiện chưa có sản phẩm trong nhóm này."
          />
        </div>
      </section>

      {/* =====================================================
          TRACEABILITY CALLOUT
      ====================================================== */}

      <section className="products-trace-callout">
        <div className="site-container products-trace-callout__inner">
          <div className="products-trace-callout__content">
            <p className="products-trace-callout__eyebrow">
              BẢO CHỨNG & TRUY XUẤT
            </p>

            <h2 className="products-trace-callout__title">
              Tìm hiểu sâu hơn về sản phẩm
            </h2>

            <p className="products-trace-callout__description">
              Với những sản phẩm hỗ trợ truy xuất,
              người dùng có thể tiếp cận hồ sơ nguồn
              di sản, quá trình phát triển thiết kế và
              các thông tin liên quan được công bố trên
              hệ thống.
            </p>
          </div>

          <div className="products-trace-callout__actions">
            <Link
              href="/products/dau-an-thuong-trieu-nguyen"
              className="products-trace-callout__primary"
            >
              Xem sản phẩm có truy xuất
              <span aria-hidden="true">
                {" "}
                →
              </span>
            </Link>

            <Link
              href="/stories/tu-san-pham-den-ho-so-truy-xuat"
              className="products-trace-callout__secondary"
            >
              Tìm hiểu về truy xuất
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
