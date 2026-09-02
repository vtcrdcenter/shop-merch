// app/components/HeritageCard.tsx

import Link from "next/link";

import HeritageImageSlider from "./HeritageImageSlider";

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

      <div className="heritage-card__image">
        <HeritageImageSlider
          images={
            heritage.images
          }
          href={href}
          showArrows
          showCounter
          showDots
          className="heritage-card__slider"
        />

        {heritage.featured && (
          <span className="heritage-card__badge">
            Nổi bật
          </span>
        )}
      </div>

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
              sản phẩm liên quan
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
