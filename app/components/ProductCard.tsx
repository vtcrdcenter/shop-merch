// app/components/ProductCard.tsx

import Link from "next/link";

import {
  siteAssetPath,
} from "../../lib/site-path";

import type {
  ShopProduct,
} from "../../data/products";

import {
  getCategoryById,
} from "../../data/categories";

type ProductCardProps = {
  product: ShopProduct;

  /**
   * Card lớn tại homepage
   * hoặc khu vực nổi bật.
   */
  featured?: boolean;

  /**
   * Hiển thị nhóm sản phẩm.
   */
  showCategory?: boolean;

  /**
   * Hiển thị trạng thái truy xuất.
   */
  showTraceability?: boolean;

  className?: string;
};

/* =========================================================
   PRICE
   ========================================================= */

function formatPrice(
  amount: number | null,
  currency: "VND",
) {
  if (amount === null) {
    return null;
  }

  return new Intl.NumberFormat(
    "vi-VN",
    {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    },
  ).format(amount);
}

/* =========================================================
   AVAILABILITY
   ========================================================= */

function getAvailabilityLabel(
  availability:
    ShopProduct["availability"],
) {
  switch (availability) {
    case "available":
      return "Đang bán";

    case "sold-out":
      return "Tạm hết hàng";

    case "coming-soon":
    default:
      return "Sắp ra mắt";
  }
}

/* =========================================================
   COMPONENT
   ========================================================= */

export default function ProductCard({
  product,
  featured = false,
  showCategory = true,
  showTraceability = true,
  className = "",
}: ProductCardProps) {
  const category =
    getCategoryById(
      product.categoryId,
    );

  const primaryImage =
    product.images[0];

  const href =
    `/products/${product.slug}`;

  const formattedPrice =
    formatPrice(
      product.price.amount,
      product.price.currency,
    );

  const availabilityLabel =
    getAvailabilityLabel(
      product.availability,
    );

  return (
    <article
      className={[
        "product-card",

        featured
          ? "product-card--featured"
          : "",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <Link
        href={href}
        className="product-card__image-link"
        aria-label={`Xem ${product.name}`}
      >
        <div className="product-card__image">
          {primaryImage ? (
            <img
              src={siteAssetPath(
                primaryImage.src,
              )}
              alt={
                primaryImage.alt
              }
              loading="lazy"
            />
          ) : (
            <div
              className="product-card__image-placeholder"
              aria-hidden="true"
            >
              <span>
                Bảo tàng
              </span>
            </div>
          )}

          {/* TRACEABILITY */}

          {product.traceability
            .enabled &&
            showTraceability && (
              <span className="product-card__trace-badge">
                Có hồ sơ truy xuất
              </span>
            )}

          {/* FEATURED */}

          {product.featured && (
            <span className="product-card__featured-badge">
              Nổi bật
            </span>
          )}
        </div>
      </Link>

      {/* =====================================================
          BODY
      ====================================================== */}

      <div className="product-card__body">
        {showCategory &&
          category && (
            <p className="product-card__category">
              {
                category.shortName
              }
            </p>
          )}

        <h3 className="product-card__title">
          <Link href={href}>
            {product.name}
          </Link>
        </h3>

        {product.shortDescription && (
          <p className="product-card__description">
            {
              product.shortDescription
            }
          </p>
        )}

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <div className="product-card__footer">
          <div className="product-card__price">
            <strong>
              {formattedPrice ??
                availabilityLabel}
            </strong>
          </div>

          <Link
            href={href}
            className="product-card__link"
            aria-label={`Xem chi tiết ${product.name}`}
          >
            Xem chi tiết

            <span
              aria-hidden="true"
            >
              {" "}
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
