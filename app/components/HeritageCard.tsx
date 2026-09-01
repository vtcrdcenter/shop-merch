import Link from "next/link";

import type { HeritageSource } from "../../data/heritage";

type HeritageCardProps = {
  heritage: HeritageSource;

  showPeriod?: boolean;

  showProductCount?: boolean;

  className?: string;
};

export default function HeritageCard({
  heritage,
  showPeriod = true,
  showProductCount = true,
  className = "",
}: HeritageCardProps) {
  const href = `/heritage/${heritage.slug}`;

  const primaryImage = heritage.images[0];

  return (
    <article
      className={[
        "heritage-card",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link
        href={href}
        className="heritage-card__image-link"
        aria-label={`Khám phá ${heritage.name}`}
      >
        <div className="heritage-card__image">
          {primaryImage ? (
            <img
              src={primaryImage.src}
              alt={primaryImage.alt}
              loading="lazy"
            />
          ) : (
            <div
              className="heritage-card__placeholder"
              aria-hidden="true"
            >
              <span>Di sản</span>
            </div>
          )}

          {heritage.featured && (
            <span className="heritage-card__badge">
              Nổi bật
            </span>
          )}
        </div>
      </Link>

      <div className="heritage-card__body">
        <div className="heritage-card__meta">
          <span className="heritage-card__type">
            Nguồn di sản
          </span>

          {showPeriod && heritage.period && (
            <span className="heritage-card__period">
              {heritage.period}
            </span>
          )}
        </div>

        <h3 className="heritage-card__title">
          <Link href={href}>
            {heritage.name}
          </Link>
        </h3>

        <p className="heritage-card__description">
          {heritage.shortDescription}
        </p>

        <div className="heritage-card__footer">
          {showProductCount && (
            <span className="heritage-card__count">
              {heritage.productSlugs.length} sản phẩm liên quan
            </span>
          )}

          <Link
            href={href}
            className="heritage-card__link"
          >
            Khám phá
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
