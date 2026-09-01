import Link from "next/link";

type SectionHeadingProps = {
  eyebrow?: string;

  title: string;

  description?: string;

  /**
   * Link bên phải heading.
   */
  actionLabel?: string;

  actionHref?: string;

  /**
   * left:
   *
   * TITLE                    Action
   *
   * center:
   *
   *            TITLE
   *         description
   */
  align?: "left" | "center";

  /**
   * cream:
   * dùng trên nền sáng.
   *
   * wine:
   * dùng trên nền đỏ wine.
   */
  tone?: "default" | "wine";

  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  align = "left",
  tone = "default",
  className = "",
}: SectionHeadingProps) {
  const hasAction =
    Boolean(actionLabel) &&
    Boolean(actionHref);

  return (
    <header
      className={[
        "section-heading",
        `section-heading--${align}`,
        `section-heading--${tone}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="section-heading__main">
        {eyebrow && (
          <p className="section-heading__eyebrow">
            {eyebrow}
          </p>
        )}

        <h2 className="section-heading__title">
          {title}
        </h2>

        {description && (
          <p className="section-heading__description">
            {description}
          </p>
        )}
      </div>

      {hasAction && (
        <Link
          href={actionHref!}
          className="section-heading__action"
        >
          {actionLabel}

          <span aria-hidden="true">
            →
          </span>
        </Link>
      )}
    </header>
  );
}
