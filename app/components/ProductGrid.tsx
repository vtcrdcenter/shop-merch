import type { ShopProduct } from "../../data/products";

import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: ShopProduct[];

  /**
   * Số lượng column chỉ mang tính semantic.
   * CSS sẽ quyết định responsive cuối cùng.
   */
  columns?: 2 | 3 | 4;

  /**
   * Có dùng card nổi bật hay không.
   */
  featuredCards?: boolean;

  /**
   * Hiển thị category trên card.
   */
  showCategory?: boolean;

  /**
   * Hiển thị trạng thái truy xuất.
   */
  showTraceability?: boolean;

  /**
   * Nội dung khi không có sản phẩm.
   */
  emptyMessage?: string;

  className?: string;
};

export default function ProductGrid({
  products,
  columns = 3,
  featuredCards = false,
  showCategory = true,
  showTraceability = true,
  emptyMessage = "Chưa có sản phẩm trong nhóm này.",
  className = "",
}: ProductGridProps) {
  if (!products.length) {
    return (
      <div
        className={[
          "product-grid-empty",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div
      className={[
        "product-grid",
        `product-grid--${columns}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          featured={featuredCards}
          showCategory={showCategory}
          showTraceability={showTraceability}
        />
      ))}
    </div>
  );
}
