// app/components/CollectionCard.tsx

import Link from "next/link";

import {
  siteAssetPath,
} from "../../lib/site-path";

import type {
  ShopCollection,
} from "../../data/collections";

type CollectionCardProps = {
  collection: ShopCollection;

  showProductCount?: boolean;

  className?: string;
};

/* =========================================================
   STATUS
   ========================================================= */

function getStatusLabel(
  status:
    ShopCollection["status"],
) {
  switch (status) {
    case "active":
      return null;

    case "coming-soon":
      return "Sắp ra mắt";

    case "draft":
    default:
      return "Sắp giới thiệu";
  }
}

/* =========================================================
   COMPONENT
   ========================================================= */

export default function CollectionCard({
  collection,
  showProductCount = true,
  className = "",
}: CollectionCardProps) {
  const href =
    `/collections/${collection.slug}`;

  const statusLabel =
    getStatusLabel(
      collection.status,
    );

  const productCount =
    collection.productSlugs.length;

  return (
    <article
      className={[
        "collection-card",
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
        className="collection-card__image-link"
        aria-label={`Xem bộ sưu tập ${collection.name}`}
      >
        <div className="collection-card__image">
          {collection.cardImage ? (
            <img
              src={siteAssetPath(
                collection.cardImage,
              )}
              alt={`Bộ sưu tập ${collection.name}`}
              loading="lazy"
            />
          ) : (
            <div
              className="collection-card__placeholder"
              aria-hidden="true"
            >
              <span>
                Bộ sưu tập
              </span>
            </div>
          )}

          {/* FEATURED */}

          {collection.featured && (
            <span className="collection-card__featured">
              Nổi bật
            </span>
          )}

          {/* STATUS */}

          {statusLabel && (
            <span className="collection-card__status">
              {
                statusLabel
              }
            </span>
          )}
        </div>
      </Link>

      {/* =====================================================
          BODY
      ====================================================== */}

      <div className="collection-card__body">
        <p className="collection-card__eyebrow">
          {
            collection.eyebrow
          }
        </p>

        <h3 className="collection-card__title">
          <Link href={href}>
            {
              collection.name
            }
          </Link>
        </h3>

        <p className="collection-card__description">
          {
            collection.shortDescription
          }
        </p>

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <div className="collection-card__footer">
          {showProductCount && (
            <span className="collection-card__count">
              {productCount}{" "}
              sản phẩm
            </span>
          )}

          <Link
            href={href}
            className="collection-card__link"
            aria-label={`Khám phá bộ sưu tập ${collection.name}`}
          >
            Khám phá

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
