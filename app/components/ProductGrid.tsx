import type {
  ShopProduct,
} from "../../data/products";

import ProductCard from "./ProductCard";

type ProductGridProps = {
  products:
    ShopProduct[];

  /**
   * Số cột mong muốn trên màn hình lớn.
   * Responsive cuối cùng do CSS xử lý.
   */
  columns?:
    2 | 3 | 4;

  /**
   * Dùng kiểu ProductCard nổi bật.
   */
  featuredCards?:
    boolean;

  /**
   * Hiển thị nhóm sản phẩm.
   */
  showCategory?:
    boolean;

  /**
   * Hiển thị thông tin truy xuất.
   */
  showTraceability?:
    boolean;

  /**
   * Nội dung khi danh sách rỗng.
   */
  emptyMessage?:
    string;

  className?:
    string;
};

export default function ProductGrid({
  products,
  columns = 3,
  featuredCards = false,
  showCategory = true,
  showTraceability = true,
  emptyMessage =
    "Hiện chưa có sản phẩm.",
  className = "",
}: ProductGridProps) {
  if (
    products.length ===
    0
  ) {
    return (
      <div
        className={[
          "product-grid-empty",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        role="status"
      >
        <p>
          {
            emptyMessage
          }
        </p>
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
      {products.map(
        (
          product,
        ) => (
          <ProductCard
            key={
              product.id
            }
            product={
              product
            }
            featured={
              featuredCards
            }
            showCategory={
              showCategory
            }
            showTraceability={
              showTraceability
            }
          />
        ),
      )}
    </div>
  );
}
