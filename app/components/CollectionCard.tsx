import Link from "next/link";

import type { ShopCollection } from "../../data/collections";

type CollectionCardProps = {
  collection: ShopCollection;

  showProductCount?: boolean;

  className?: string;
};

function getStatusLabel(
  status: ShopCollection["status"],
) {
  switch (status) {
    case "active":
      return null;

    case "coming-soon":
      return "Sắp ra mắt";

    case "draft":
    default:
      return "Đang hoàn thiện";
  }
}

export default function CollectionCard({
  collection,
  showProductCount = true,
  className = "",
}: CollectionCardProps) {
  const href = `/collections/${collection.slug}`;

  const statusLabel = getStatusLabel(
    collection.status,
  );

  return (
    <article
      className={[
        "collection-card",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link
        href={href}
        className="collection-card__image-link"
        aria-label={`Xem bộ sưu tập ${collection.name}`}
      >
        <div className="collection-card__image">
          {collection.cardImage ? (
            <img
              src={collection.cardImage}
              alt={`Bộ sưu tập ${collection.name}`}
              loading="lazy"
            />
          ) : (
            <div
              className="collection-card__placeholder"
              aria-hidden="true"
            >
              <span>Bộ sưu tập</span>
            </div>
          )}

          {collection.featured && (
            <span className="collection-card__featured">
              Nổi bật
            </span>
          )}

          {statusLabel && (
            <span className="collection-card__status">
              {statusLabel}
            </span>
          )}
        </div>
      </Link>

      <div className="collection-card__body">
        <p className="collection-card__eyebrow">
          {collection.eyebrow}
        </p>

        <h3 className="collection-card__title">
          <Link href={href}>
            {collection.name}
          </Link>
        </h3>

        <p className="collection-card__description">
          {collection.shortDescription}
        </p>

        <div className="collection-card__footer">
          {showProductCount && (
            <span className="collection-card__count">
              {collection.productSlugs.length} sản phẩm
            </span>
          )}

          <Link
            href={href}
            className="collection-card__link"
          >
            Xem bộ sưu tập
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
