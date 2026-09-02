// app/components/StoryCard.tsx

import Link from "next/link";

import {
  siteAssetPath,
} from "../../lib/site-path";

import type {
  ShopStory,
  StoryCategory,
} from "../../data/stories";

type StoryCardProps = {
  story: ShopStory;

  featured?: boolean;

  showCategory?: boolean;

  className?: string;
};

/* =========================================================
   CATEGORY
   ========================================================= */

function getStoryCategoryLabel(
  category:
    StoryCategory,
) {
  switch (category) {
    case "heritage":
      return "Câu chuyện di sản";

    case "design":
      return "Từ di sản đến thiết kế";

    case "craft":
      return "Quá trình thực hiện";

    case "traceability":
      return "Truy xuất & dữ liệu";

    default:
      return "Câu chuyện";
  }
}

/* =========================================================
   COMPONENT
   ========================================================= */

export default function StoryCard({
  story,
  featured = false,
  showCategory = true,
  className = "",
}: StoryCardProps) {
  const href =
    `/stories/${story.slug}`;

  const primaryImage =
    story.images[0];

  const categoryLabel =
    getStoryCategoryLabel(
      story.category,
    );

  const productCount =
    story.productSlugs.length;

  return (
    <article
      className={[
        "story-card",

        featured
          ? "story-card--featured"
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
        className="story-card__image-link"
        aria-label={`Đọc ${story.title}`}
      >
        <div className="story-card__image">
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
              className="story-card__placeholder"
              aria-hidden="true"
            >
              <span>
                Câu chuyện
              </span>
            </div>
          )}

          {story.featured && (
            <span className="story-card__featured">
              Nổi bật
            </span>
          )}
        </div>
      </Link>

      {/* =====================================================
          BODY
      ====================================================== */}

      <div className="story-card__body">
        <div className="story-card__meta">
          {showCategory ? (
            <span className="story-card__category">
              {
                categoryLabel
              }
            </span>
          ) : (
            story.eyebrow && (
              <span className="story-card__eyebrow">
                {
                  story.eyebrow
                }
              </span>
            )
          )}
        </div>

        <h3 className="story-card__title">
          <Link href={href}>
            {
              story.title
            }
          </Link>
        </h3>

        <p className="story-card__excerpt">
          {
            story.excerpt
          }
        </p>

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <div className="story-card__footer">
          <span className="story-card__relations">
            {productCount > 0
              ? `${productCount} sản phẩm liên quan`
              : "Bài viết chuyên đề"}
          </span>

          <Link
            href={href}
            className="story-card__link"
            aria-label={`Đọc câu chuyện ${story.title}`}
          >
            Đọc tiếp

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
