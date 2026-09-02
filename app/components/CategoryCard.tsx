// app/components/CategoryCard.tsx

import Link from "next/link";

import type {
  MouseEvent,
} from "react";

import type {
  ProductCategory,
} from "../../data/categories";

type CategoryCardProps = {
  category: ProductCategory;

  /**
   * Có hiển thị số thứ tự 01, 02...
   */
  showIndex?: boolean;

  /**
   * Số sản phẩm trong category.
   */
  productCount?: number;

  /**
   * Category hiện đang được chọn.
   */
  active?: boolean;

  /**
   * Nếu truyền onSelect,
   * Link vẫn giữ href thật để có fallback,
   * nhưng khi JS hoạt động sẽ filter tại client.
   */
  onSelect?: (
    category: ProductCategory,
  ) => void;

  className?: string;
};

/* =========================================================
   HELPERS
   ========================================================= */

function formatIndex(
  order: number,
) {
  return String(
    order,
  ).padStart(
    2,
    "0",
  );
}

/* =========================================================
   COMPONENT
   ========================================================= */

export default function CategoryCard({
  category,
  showIndex = true,
  productCount,
  active = false,
  onSelect,
  className = "",
}: CategoryCardProps) {
  const href =
    `/products?category=${category.slug}`;

  function handleClick(
    event:
      MouseEvent<HTMLAnchorElement>,
  ) {
    if (!onSelect) {
      return;
    }

    event.preventDefault();

    onSelect(
      category,
    );
  }

  return (
    <article
      className={[
        "category-card",

        active
          ? "category-card--active"
          : "",

        className,
      ]
        .filter(
          Boolean,
        )
        .join(
          " ",
        )}
    >
      <Link
        href={href}
        className="category-card__link"
        aria-label={`Xem nhóm ${category.name}`}
        aria-current={
          active
            ? "true"
            : undefined
        }
        onClick={
          handleClick
        }
      >
        {/* ===================================================
            TOP
        ==================================================== */}

        <div className="category-card__top">
          {showIndex && (
            <span className="category-card__index">
              {formatIndex(
                category.order,
              )}
            </span>
          )}

          {typeof productCount ===
            "number" && (
            <span className="category-card__count">
              {
                productCount
              }{" "}
              sản phẩm
            </span>
          )}
        </div>

        {/* ===================================================
            CONTENT
        ==================================================== */}

        <div className="category-card__content">
          <h3 className="category-card__title">
            {
              category.name
            }
          </h3>

          <p className="category-card__description">
            {
              category.description
            }
          </p>
        </div>

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <div className="category-card__footer">
          <span>
            {active
              ? "Đang xem"
              : "Xem sản phẩm"}
          </span>

          <span
            className="category-card__arrow"
            aria-hidden="true"
          >
            {active
              ? "✓"
              : "→"}
          </span>
        </div>
      </Link>
    </article>
  );
}
