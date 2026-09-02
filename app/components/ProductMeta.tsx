// app/components/ProductMeta.tsx

import type {
  ShopProduct,
} from "../../data/products";

import {
  getCategoryById,
} from "../../data/categories";

type ProductMetaProps = {
  product: ShopProduct;

  className?: string;
};

/* =========================================================
   HELPERS
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

export default function ProductMeta({
  product,
  className = "",
}: ProductMetaProps) {
  const category =
    getCategoryById(
      product.categoryId,
    );

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
    <div
      className={[
        "product-meta",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* =====================================================
          01 — HEADING
      ====================================================== */}

      <div className="product-meta__heading">
        {category && (
          <p className="product-meta__category">
            {category.shortName}
          </p>
        )}

        <h1
          id="product-title"
          className="product-meta__title"
        >
          {product.name}
        </h1>

        <p className="product-meta__type">
          {product.productType}
        </p>
      </div>

      {/* =====================================================
          02 — PRICE / TRACEABILITY
      ====================================================== */}

      <div className="product-meta__status-row">
        <div className="product-meta__price">
          {formattedPrice ? (
            <strong>
              {formattedPrice}
            </strong>
          ) : (
            <div className="product-meta__price-pending">
              <span>
                Giá bán
              </span>

              <strong>
                Đang cập nhật
              </strong>
            </div>
          )}
        </div>

      </div>

      {/* =====================================================
          03 — SHORT DESCRIPTION
      ====================================================== */}

      <p className="product-meta__description">
        {product.shortDescription}
      </p>

      {/* =====================================================
          04 — QUICK INFORMATION
      ====================================================== */}

      <dl className="product-meta__details">
        <div className="product-meta__detail">
          <dt>
            Mã sản phẩm
          </dt>

          <dd>
            {product.sku}
          </dd>
        </div>

        <div className="product-meta__detail">
          <dt>
            Kích thước
          </dt>

          <dd>
            {product.dimensions}
          </dd>
        </div>

        <div className="product-meta__detail">
          <dt>
            Chất liệu
          </dt>

          <dd>
            {product.materials.length >
            0
              ? product.materials.join(
                  ", ",
                )
              : "Đang cập nhật"}
          </dd>
        </div>

        <div className="product-meta__detail">
          <dt>
            Công năng
          </dt>

          <dd>
            {product.function}
          </dd>
        </div>
      </dl>

      {/* =====================================================
          05 — AVAILABILITY
      ====================================================== */}

      <div className="product-meta__project-status">
        <span>
          Tình trạng
        </span>

        <strong>
          {availabilityLabel}
        </strong>
      </div>
    </div>
  );
}
