// app/products/ProductCatalog.tsx

"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import CategoryCard from "../components/CategoryCard";
import ProductGrid from "../components/ProductGrid";
import SectionHeading from "../components/SectionHeading";

import {
  productCategories,
} from "../../data/categories";

import type {
  ProductCategory,
} from "../../data/categories";

import type {
  ShopProduct,
} from "../../data/products";

type ProductCatalogProps = {
  products:
    ShopProduct[];
};

/* =========================================================
   HELPERS
   ========================================================= */

function getCategorySlugFromUrl() {
  if (
    typeof window ===
    "undefined"
  ) {
    return null;
  }

  const params =
    new URLSearchParams(
      window.location.search,
    );

  const slug =
    params.get(
      "category",
    );

  if (!slug) {
    return null;
  }

  const exists =
    productCategories.some(
      (category) =>
        category.slug ===
        slug,
    );

  return exists
    ? slug
    : null;
}

function updateCategoryInUrl(
  categorySlug:
    string | null,
) {
  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  const url =
    new URL(
      window.location.href,
    );

  if (categorySlug) {
    url.searchParams.set(
      "category",
      categorySlug,
    );
  } else {
    url.searchParams.delete(
      "category",
    );
  }

  const nextUrl =
    `${url.pathname}${url.search}${url.hash}`;

  window.history.pushState(
    {},
    "",
    nextUrl,
  );
}

/* =========================================================
   COMPONENT
   ========================================================= */

export default function ProductCatalog({
  products,
}: ProductCatalogProps) {
  const [
    activeCategorySlug,
    setActiveCategorySlug,
  ] = useState<
    string | null
  >(null);

  /* ========================================================
     READ CATEGORY FROM URL
     ======================================================== */

  useEffect(() => {
    const syncCategoryFromUrl =
      () => {
        setActiveCategorySlug(
          getCategorySlugFromUrl(),
        );
      };

    syncCategoryFromUrl();

    window.addEventListener(
      "popstate",
      syncCategoryFromUrl,
    );

    return () => {
      window.removeEventListener(
        "popstate",
        syncCategoryFromUrl,
      );
    };
  }, []);

  /* ========================================================
     CATEGORY
     ======================================================== */

  const activeCategory =
    useMemo(
      () =>
        productCategories.find(
          (category) =>
            category.slug ===
            activeCategorySlug,
        ),
      [
        activeCategorySlug,
      ],
    );

  /* ========================================================
     PRODUCT COUNT BY CATEGORY
     ======================================================== */

  const productCounts =
    useMemo(() => {
      const counts =
        new Map<
          string,
          number
        >();

      for (
        const product
        of products
      ) {
        const current =
          counts.get(
            product.categoryId,
          ) ?? 0;

        counts.set(
          product.categoryId,
          current + 1,
        );
      }

      return counts;
    }, [
      products,
    ]);

  const visibleCategories = useMemo(
    () => productCategories.filter((category) => (productCounts.get(category.id) ?? 0) > 0),
    [productCounts],
  );

  /* ========================================================
     FILTER PRODUCTS
     ======================================================== */

  const visibleProducts =
    useMemo(() => {
      if (
        !activeCategory
      ) {
        return products;
      }

      return products.filter(
        (product) =>
          product.categoryId ===
          activeCategory.id,
      );
    }, [
      activeCategory,
      products,
    ]);

  /* ========================================================
     CHANGE CATEGORY
     ======================================================== */

  function selectCategory(
    category:
      ProductCategory | null,
  ) {
    const nextSlug =
      category?.slug ??
      null;

    setActiveCategorySlug(
      nextSlug,
    );

    updateCategoryInUrl(
      nextSlug,
    );
  }

  return (
    <>
      {/* =====================================================
          01 — CATEGORY
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
            {visibleCategories.map(
              (
                category,
              ) => (
                <CategoryCard
                  key={
                    category.id
                  }
                  category={
                    category
                  }
                  productCount={
                    productCounts.get(
                      category.id,
                    ) ?? 0
                  }
                  active={
                    activeCategory?.id ===
                    category.id
                  }
                  onSelect={
                    selectCategory
                  }
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — PRODUCT LIST
      ====================================================== */}

      <section
        id="products-list"
        className="products-list"
        aria-labelledby="products-list-title"
      >
        <div className="site-container">
          {/* =================================================
              HEADER
          ================================================== */}

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

              <p className="products-list__description">
                {activeCategory
                  ? activeCategory.description
                  : "Khám phá toàn bộ các thiết kế hiện có trong gian hàng và tìm hiểu câu chuyện phía sau từng sản phẩm."}
              </p>
            </div>

            <span className="products-list__count">
              {
                visibleProducts.length
              }{" "}
              sản phẩm
            </span>
          </div>

          {/* =================================================
              FILTER BAR
          ================================================== */}

          <div
            className="products-filter"
            aria-label="Lọc sản phẩm theo nhóm"
          >
            <button
              type="button"
              className={[
                "products-filter__item",

                !activeCategory
                  ? "products-filter__item--active"
                  : "",
              ]
                .filter(
                  Boolean,
                )
                .join(
                  " ",
                )}
              onClick={() =>
                selectCategory(
                  null,
                )
              }
              aria-pressed={
                !activeCategory
              }
            >
              Tất cả
            </button>

            {visibleCategories.map(
              (
                category,
              ) => {
                const active =
                  activeCategory?.id ===
                  category.id;

                return (
                  <button
                    key={
                      category.id
                    }
                    type="button"
                    className={[
                      "products-filter__item",

                      active
                        ? "products-filter__item--active"
                        : "",
                    ]
                      .filter(
                        Boolean,
                      )
                      .join(
                        " ",
                      )}
                    onClick={() =>
                      selectCategory(
                        category,
                      )
                    }
                    aria-pressed={
                      active
                    }
                  >
                    {
                      category.shortName
                    }
                  </button>
                );
              },
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

              <button
                type="button"
                className="products-active-filter__clear"
                onClick={() =>
                  selectCategory(
                    null,
                  )
                }
              >
                Xem tất cả

                <span
                  aria-hidden="true"
                >
                  {" "}
                  ×
                </span>
              </button>
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
    </>
  );
}
