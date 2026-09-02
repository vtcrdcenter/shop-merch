"use client";

import { useState } from "react";
import type { ShopProduct } from "../../data/products";

type Tab = "story" | "info" | "review";

export default function ProductTabs({ product }: { product: ShopProduct }) {
  const [active, setActive] = useState<Tab>("story");
  const tabs: { id: Tab; label: string }[] = [
    { id: "story", label: "Câu chuyện" },
    { id: "info", label: "Thông tin" },
    { id: "review", label: "Đánh giá" },
  ];

  return (
    <section className="product-tabs" aria-label="Thông tin chi tiết sản phẩm">
      <div className="product-tabs__list" role="tablist" aria-label="Nội dung sản phẩm">
        {tabs.map((tab) => (
          <button key={tab.id} type="button" role="tab" aria-selected={active === tab.id} className={active === tab.id ? "is-active" : ""} onClick={() => setActive(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="product-tabs__panel" role="tabpanel">
        {active === "story" && (
          <div className="product-story-panel">
            <div><p className="product-tabs__eyebrow">CÂU CHUYỆN SẢN PHẨM</p><h2>Di sản trong một hình thức mới</h2></div>
            <div><p>{product.description}</p><h3>Nguồn cảm hứng được chuyển hóa</h3><p>{product.transformationPrinciple}</p><p>{product.designDescription}</p></div>
          </div>
        )}
        {active === "info" && (
          <dl className="product-info-panel">
            <div><dt>Mã sản phẩm</dt><dd>{product.sku}</dd></div>
            <div><dt>Loại sản phẩm</dt><dd>{product.productType}</dd></div>
            <div><dt>Kích thước</dt><dd>{product.dimensions}</dd></div>
            <div><dt>Công năng</dt><dd>{product.function}</dd></div>
            <div><dt>Chất liệu</dt><dd>{product.materials.length ? product.materials.join(", ") : "Đang cập nhật"}</dd></div>
          </dl>
        )}
        {active === "review" && (
          <div className="product-review-panel"><span aria-hidden="true">☆</span><h2>Chưa có đánh giá</h2><p>Hãy là người đầu tiên chia sẻ cảm nhận về sản phẩm này.</p></div>
        )}
      </div>
    </section>
  );
}
