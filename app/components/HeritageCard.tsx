// app/components/HeritageCard.tsx

import Link from "next/link";

import {
  siteAssetPath,
} from "../../lib/site-path";

import type {
  HeritageSource,
} from "../../data/heritage";

type HeritageCardProps = {
  heritage: HeritageSource;

  showPeriod?: boolean;

  showProductCount?: boolean;

  className?: string;
};

/* =========================================================
   TYPE LABEL
   ========================================================= */

function getHeritageTypeLabel(
  type: HeritageSource["type"],
) {
  switch (type) {
    case "artifact":
      return "Hiện vật";

    case "costume":
      return "Triều phục";

    case "archaeology":
      return "Khảo cổ";

    case "decorative-art":
      return "Mỹ thuật trang trí";

    case "seal":
      return "Bảo ấn";

    case "reference-object":
      return "Hiện vật tham chiếu";

    default:
      return "Di sản";
  }
}

/* =========================================================
   COMPONENT
   ========================================================= */

export default function HeritageCard({
  heritage,
  showPeriod = true,
  showProductCount = true,
  className = "",
}: HeritageCardProps) {
  const href =
    `/heritage/${heritage.slug}`;

  const primaryImage =
    heritage.images[0];

  const typeLabel =
    getHeritageTypeLabel(
      heritage.type,
    );

  const productCount =
    heritage.productSlugs.length;

  return (
    <article
      className={[
        "heritage-card",
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
        className="heritage-card__image-link"
        aria-label={`Khám phá ${heritage.name}`}
      >
        <div className="heritage-card__image">
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
              className="heritage-card__placeholder"
              aria-hidden="true"
            >
              <span>
                Di sản
              </span>
            </div>
          )}

          {heritage.featured && (
            <span className="heritage-card__badge">
              Nổi bật
            </span>
          )}
        </div>
      </Link>

      {/* =====================================================
          BODY
      ====================================================== */}

      <div className="heritage-card__body">
        <div className="heritage-card__meta">
          <span className="heritage-card__type">
            {typeLabel}
          </span>

          {showPeriod &&
            heritage.period && (
              <span className="heritage-card__period">
                {
                  heritage.period
                }
              </span>
            )}
        </div>

        <h3 className="heritage-card__title">
          <Link href={href}>
            {heritage.name}
          </Link>
        </h3>

        <p className="heritage-card__description">
          {
            heritage.shortDescription
          }
        </p>

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <div className="heritage-card__footer">
          {showProductCount && (
            <span className="heritage-card__count">
              {productCount}{" "}
              {productCount === 1
                ? "sản phẩm liên quan"
                : "sản phẩm liên quan"}
            </span>
          )}

          <Link
            href={href}
            className="heritage-card__link"
            aria-label={`Tìm hiểu ${heritage.name}`}
          >
            Tìm hiểu thêm

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
