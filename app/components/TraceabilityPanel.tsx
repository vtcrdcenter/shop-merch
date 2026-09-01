import Link from "next/link";

import type { ShopProduct } from "../../data/products";

type TraceabilityPanelProps = {
  product: ShopProduct;

  className?: string;
};

export default function TraceabilityPanel({
  product,
  className = "",
}: TraceabilityPanelProps) {
  const traceability = product.traceability;

  if (!traceability.enabled) {
    return null;
  }

  return (
    <section
      className={[
        "traceability-panel",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={`traceability-${product.id}`}
    >
      <div className="traceability-panel__icon">
        <span aria-hidden="true">
          ✓
        </span>
      </div>

      <div className="traceability-panel__content">
        <p className="traceability-panel__eyebrow">
          TRUY XUẤT SẢN PHẨM
        </p>

        <h2
          id={`traceability-${product.id}`}
          className="traceability-panel__title"
        >
          Sản phẩm hỗ trợ truy xuất nguồn gốc
        </h2>

        <p className="traceability-panel__description">
          Hồ sơ truy xuất giúp kết nối sản phẩm với
          thông tin nguồn di sản, quá trình phát triển
          thiết kế, bảo chứng và các dữ liệu liên quan
          được công bố trên hệ thống.
        </p>

        {traceability.demo && (
          <p className="traceability-panel__note">
            Hồ sơ hiện tại được sử dụng cho mục đích
            trình diễn hệ thống.
          </p>
        )}

        {traceability.url && (
          <Link
            href={traceability.url}
            className="traceability-panel__link"
            target="_blank"
            rel="noreferrer"
          >
            {traceability.demo
              ? "Xem hồ sơ truy xuất mẫu"
              : "Xem hồ sơ truy xuất"}

            <span aria-hidden="true">
              {" "}
              →
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
