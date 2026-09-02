"use client";

import {
  useMemo,
  useState,
} from "react";

import CategoryCard from "../components/CategoryCard";
import ProductGrid from "../components/ProductGrid";

import {
  productCategories,
} from "../../data/categories";

import type {
  ShopProduct,
} from "../../data/products";

type ProductCatalogProps = {
  products: ShopProduct[];
};

export default function ProductCatalog({
  products,
}: ProductCatalogProps) {
  const [
    activeCategory,
    setActiveCategory,
  ] = useState<string | null>(
    null,
  );

  const visibleProducts =
    useMemo(() => {
      if (!activeCategory) {
        return products;
      }

      return products.filter(
        (product) =>
          product.categoryId ===
          activeCategory,
      );
    }, [
      activeCategory,
      products,
    ]);

  const category =
    productCategories.find(
      (item) =>
        item.id ===
        activeCategory,
    );

  return (
    <>
      <section className="products-categories">
        <div className="site-container">
          <div className="section-heading">
            <div className="section-heading__main">
              <p className="section-heading__eyebrow">
                DANH MỤC
              </p>

              <h2 className="section-heading__title">
                Khám phá theo loại
                sản phẩm
              </h2>

              <p className="section-heading__description">
                Chọn nhóm phù hợp
                với nhu cầu sử dụng,
                từ quà nhỏ đến phụ
                kiện cá nhân.
              </p>
            </div>
          </div>

          <div className="products-categories__grid">
            {productCategories.map(
              (item) => (
                <button
                  type="button"
                  key={item.id}
                  className="products-category-button"
                  onClick={() =>
                    setActiveCategory(
                      item.id,
                    )
                  }
                >
                  <CategoryCard
                    category={item}
                    productCount={
                      products.filter(
                        (
                          product,
                        ) =>
                          product.categoryId ===
                          item.id,
                      ).length
                    }
                  />
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="products-list">
        <div className="site-container">
          <div className="products-list__header">
            <div>
              <p className="products-list__eyebrow">
                SẢN PHẨM
              </p>

              <h2 className="products-list__title">
                {category
                  ? category.shortName
                  : "Tất cả sản phẩm"}
              </h2>

              <p className="products-list__description">
                {category
                  ? category.description
                  : "Các sản phẩm văn hóa sáng tạo đang được giới thiệu trên gian hàng."}
              </p>
            </div>

            <span className="products-list__count">
              {
                visibleProducts.length
              }{" "}
              sản phẩm
            </span>
          </div>

          <div className="products-filter">
            <button
              type="button"
              className={
                !activeCategory
                  ? "products-filter__item products-filter__item--active"
                  : "products-filter__item"
              }
              onClick={() =>
                setActiveCategory(
                  null,
                )
              }
            >
              Tất cả
            </button>

            {productCategories.map(
              (item) => (
                <button
                  key={item.id}
                  type="button"
                  className={
                    activeCategory ===
                    item.id
                      ? "products-filter__item products-filter__item--active"
                      : "products-filter__item"
                  }
                  onClick={() =>
                    setActiveCategory(
                      item.id,
                    )
                  }
                >
                  {
                    item.shortName
                  }
                </button>
              ),
            )}
          </div>

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
