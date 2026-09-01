import Link from "next/link";

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

function getStoryCategoryLabel(
  category: StoryCategory,
) {
  switch (category) {
    case "heritage":
      return "Câu chuyện di sản";

    case "design":
      return "Từ di sản đến thiết kế";

    case "craft":
      return "Chế tác";

    case "traceability":
      return "Bảo chứng & truy xuất";

    default:
      return "Câu chuyện";
  }
}

export default function StoryCard({
  story,
  featured = false,
  showCategory = true,
  className = "",
}: StoryCardProps) {
  const href = `/stories/${story.slug}`;

  const primaryImage = story.images[0];

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
      <Link
        href={href}
        className="story-card__image-link"
        aria-label={`Đọc câu chuyện ${story.title}`}
      >
        <div className="story-card__image">
          {primaryImage ? (
            <img
              src={primaryImage.src}
              alt={primaryImage.alt}
              loading="lazy"
            />
          ) : (
            <div
              className="story-card__placeholder"
              aria-hidden="true"
            >
              <span>Câu chuyện</span>
            </div>
          )}

          {story.featured && (
            <span className="story-card__featured">
              Nổi bật
            </span>
          )}
        </div>
      </Link>

      <div className="story-card__body">
        <div className="story-card__meta">
          {showCategory && (
            <span className="story-card__category">
              {getStoryCategoryLabel(
                story.category,
              )}
            </span>
          )}

          <span className="story-card__eyebrow">
            {story.eyebrow}
          </span>
        </div>

        <h3 className="story-card__title">
          <Link href={href}>
            {story.title}
          </Link>
        </h3>

        <p className="story-card__excerpt">
          {story.excerpt}
        </p>

        <div className="story-card__footer">
          <span className="story-card__relations">
            {story.productSlugs.length > 0
              ? `${story.productSlugs.length} sản phẩm liên quan`
              : "Nội dung chuyên đề"}
          </span>

          <Link
            href={href}
            className="story-card__link"
          >
            Đọc câu chuyện
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
