import Link from "next/link";

import type { ProductCategory } from "../../data/categories";

type CategoryCardProps = {
  category: ProductCategory;

  /**
   * Có hiển thị số thứ tự 01, 02...
   */
  showIndex?: boolean;

  /**
   * Số sản phẩm trong category.
   * Page cha có thể truyền vào.
   */
  productCount?: number;

  className?: string;
};

function formatIndex(order: number) {
  return String(order).padStart(2, "0");
}

export default function CategoryCard({
  category,
  showIndex = true,
  productCount,
  className = "",
}: CategoryCardProps) {
  const href = `/products?category=${category.slug}`;

  return (
    <article
      className={[
        "category-card",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link
        href={href}
        className="category-card__link"
        aria-label={`Xem nhóm ${category.name}`}
      >
        <div className="category-card__top">
          {showIndex && (
            <span className="category-card__index">
              {formatIndex(category.order)}
            </span>
          )}

          {typeof productCount === "number" && (
            <span className="category-card__count">
              {productCount} sản phẩm
            </span>
          )}
        </div>

        <div className="category-card__content">
          <h3 className="category-card__title">
            {category.name}
          </h3>

          <p className="category-card__description">
            {category.description}
          </p>
        </div>

        <div className="category-card__footer">
          <span>Xem sản phẩm</span>

          <span
            className="category-card__arrow"
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </Link>
    </article>
  );
}
