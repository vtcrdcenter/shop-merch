"use client";

import { useEffect, useMemo, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import { productCategories } from "../../data/categories";
import type { ShopProduct } from "../../data/products";

type ProductCatalogProps = { products: ShopProduct[] };

function categoryFromUrl() {
  if (typeof window === "undefined") return null;
  const slug = new URLSearchParams(window.location.search).get("category");
  return productCategories.some((item) => item.slug === slug) ? slug : null;
}

function syncUrl(slug: string | null) {
  const url = new URL(window.location.href);
  if (slug) {
    url.searchParams.set("category", slug);
  } else {
    url.searchParams.delete("category");
  }
  window.history.pushState({}, "", `${url.pathname}${url.search}`);
}

function money(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value);
}

export default function ProductCatalog({ products }: ProductCatalogProps) {
  const ceiling = Math.max(500000, ...products.map((item) => item.price.amount ?? 0));
  const [categorySlug, setCategorySlug] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState(ceiling);

  useEffect(() => {
    const read = () => setCategorySlug(categoryFromUrl());
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);

  const counts = useMemo(() => {
    const result = new Map<string, number>();
    products.forEach((item) => result.set(item.categoryId, (result.get(item.categoryId) ?? 0) + 1));
    return result;
  }, [products]);

  const categories = productCategories.filter((item) => (counts.get(item.id) ?? 0) > 0);
  const activeCategory = categories.find((item) => item.slug === categorySlug);
  const visibleProducts = products.filter((item) => {
    const matchesCategory = !activeCategory || item.categoryId === activeCategory.id;
    const matchesPrice = item.price.amount === null || item.price.amount <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  function chooseCategory(slug: string | null) {
    setCategorySlug(slug);
    syncUrl(slug);
  }

  return (
    <section id="products-list" className="products-list" aria-labelledby="products-list-title">
      <div className="site-container catalog-layout">
        <aside className="catalog-sidebar" aria-label="Bộ lọc sản phẩm">
          <div className="catalog-sidebar__heading">
            <span>BỘ LỌC</span>
            <button type="button" onClick={() => { chooseCategory(null); setMaxPrice(ceiling); }}>Đặt lại</button>
          </div>
          <fieldset className="catalog-filter-group">
            <legend>Danh mục</legend>
            <button className={!activeCategory ? "is-active" : ""} type="button" onClick={() => chooseCategory(null)}>
              <span>Tất cả sản phẩm</span><small>{products.length}</small>
            </button>
            {categories.map((category) => (
              <button key={category.id} className={activeCategory?.id === category.id ? "is-active" : ""} type="button" onClick={() => chooseCategory(category.slug)}>
                <span>{category.shortName}</span><small>{counts.get(category.id)}</small>
              </button>
            ))}
          </fieldset>
          <fieldset className="catalog-filter-group catalog-price-filter">
            <legend>Khoảng giá</legend>
            <input aria-label="Giá tối đa" type="range" min="0" max={ceiling} step="50000" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} />
            <div><span>0 ₫</span><strong>Đến {money(maxPrice)} ₫</strong></div>
          </fieldset>
          <p className="catalog-sidebar__note">Bộ lọc luôn sẵn sàng khi danh mục mở rộng.</p>
        </aside>
        <div className="catalog-results">
          <div className="products-list__header">
            <div>
              <p className="products-list__eyebrow">SẢN PHẨM</p>
              <h2 id="products-list-title" className="products-list__title">{activeCategory?.name ?? "Tất cả sản phẩm"}</h2>
              <p className="products-list__description">{activeCategory?.description ?? "Chọn thiết kế phù hợp, xem giá và khám phá câu chuyện phía sau từng sản phẩm."}</p>
            </div>
            <span className="products-list__count">{visibleProducts.length} sản phẩm</span>
          </div>
          <ProductGrid products={visibleProducts} columns={3} showCategory showTraceability={false} emptyMessage="Không có sản phẩm phù hợp với bộ lọc." />
        </div>
      </div>
    </section>
  );
}
