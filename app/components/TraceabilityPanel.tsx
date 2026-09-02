// app/components/TraceabilityPanel.tsx

import Link from "next/link";

import type {
  ShopProduct,
} from "../../data/products";
import AttestationBadge from "./AttestationBadge";

type TraceabilityPanelProps = {
  product: ShopProduct;

  className?: string;
};

export default function TraceabilityPanel({
  product,
  className = "",
}: TraceabilityPanelProps) {
  const traceability =
    product.traceability;

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
      {/* =====================================================
          MARK
      ====================================================== */}

      <div className="traceability-panel__icon">
        <span
          aria-hidden="true"
        >
          ✓
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="traceability-panel__content">
        <AttestationBadge
          attestation={{
            status: traceability.demo ? "pending" : "verified",
            organization: "Hệ thống truy xuất VTC",
            code: product.sku,
            label: traceability.demo ? "Hồ sơ mẫu · đang thẩm định" : "Hồ sơ đã bảo chứng",
          }}
        />

        <p className="traceability-panel__eyebrow">
          TRUY XUẤT SẢN PHẨM
        </p>

        <h2
          id={`traceability-${product.id}`}
          className="traceability-panel__title"
        >
          Xem hồ sơ phía sau sản phẩm
        </h2>

        <p className="traceability-panel__description">
          Sản phẩm này được liên kết
          với hồ sơ truy xuất. Tại đó,
          bạn có thể tiếp tục tìm hiểu
          nguồn cảm hứng, thông tin
          thiết kế và những dữ liệu
          liên quan được công bố.
        </p>

        {/* ===================================================
            DEMO NOTICE
        ==================================================== */}

        {traceability.demo && (
          <p className="traceability-panel__note">
            Hồ sơ hiện được sử dụng
            để minh họa luồng truy xuất
            của gian hàng.
          </p>
        )}

        {/* ===================================================
            CTA
        ==================================================== */}

        {traceability.url && (
          <Link
            href={
              traceability.url
            }
            className="traceability-panel__link"
            target="_blank"
            rel="noreferrer"
          >
            {traceability.demo
              ? "Xem hồ sơ truy xuất mẫu"
              : "Xem hồ sơ truy xuất"}

            <span
              aria-hidden="true"
            >
              {" "}
              →
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
