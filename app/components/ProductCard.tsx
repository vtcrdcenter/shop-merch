import Link from "next/link";
import { siteAssetPath } from "../../lib/site-path";

import type { ShopProduct } from "../../data/products";
import { getCategoryById } from "../../data/categories";

type ProductCardProps = {
  product: ShopProduct;

  /**
   * true:
   * dùng card lớn tại homepage / featured section.
   */
  featured?: boolean;

  /**
   * Có hiển thị category phía trên tên sản phẩm hay không.
   */
  showCategory?: boolean;

  /**
   * Có hiển thị trạng thái truy xuất hay không.
   */
  showTraceability?: boolean;

  className?: string;
};

function formatPrice(
  amount: number | null,
  currency: "VND",
) {
  if (amount === null) {
    return "Sắp ra mắt";
  }

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function getAvailabilityLabel(
  availability: ShopProduct["availability"],
) {
  switch (availability) {
    case "available":
      return "Có sẵn";

    case "sold-out":
      return "Tạm hết";

    case "coming-soon":
    default:
      return "Sắp ra mắt";
  }
}

export default function ProductCard({
  product,
  featured = false,
  showCategory = true,
  showTraceability = true,
  className = "",
}: ProductCardProps) {
  const category = getCategoryById(product.categoryId);

  const primaryImage = product.images[0];

  const href = `/products/${product.slug}`;

  return (
    <article
      className={[
        "product-card",
        featured ? "product-card--featured" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link
        href={href}
        className="product-card__image-link"
        aria-label={`Xem sản phẩm ${product.name}`}
      >
        <div className="product-card__image">
          {primaryImage ? (
            <img
              src={siteAssetPath(primaryImage.src)}
              alt={primaryImage.alt}
              loading="lazy"
            />
          ) : (
            <div
              className="product-card__image-placeholder"
              aria-hidden="true"
            >
              <span>VTC</span>
            </div>
          )}

          {product.traceability.enabled &&
            showTraceability && (
              <span className="product-card__trace-badge">
                Có truy xuất
              </span>
            )}

          {product.featured && (
            <span className="product-card__featured-badge">
              Nổi bật
            </span>
          )}
        </div>
      </Link>

      <div className="product-card__body">
        {showCategory && category && (
          <p className="product-card__category">
            {category.shortName}
          </p>
        )}

        <h3 className="product-card__title">
          <Link href={href}>
            {product.name}
          </Link>
        </h3>

        {product.shortDescription && (
          <p className="product-card__description">
            {product.shortDescription}
          </p>
        )}

        <div className="product-card__footer">
          <div className="product-card__price">
            {product.price.amount !== null ? (
              <strong>
                {formatPrice(
                  product.price.amount,
                  product.price.currency,
                )}
              </strong>
            ) : (
              <strong>
                {getAvailabilityLabel(
                  product.availability,
                )}
              </strong>
            )}
          </div>

          <Link
            href={href}
            className="product-card__link"
            aria-label={`Xem chi tiết ${product.name}`}
          >
            Xem sản phẩm
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
