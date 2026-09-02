import Link from "next/link";

type SectionHeadingProps = {
  eyebrow?: string;

  title: string;

  description?: string;

  /**
   * CTA của section.
   */
  actionLabel?: string;

  actionHref?: string;

  /**
   * left:
   * heading nằm trái,
   * CTA ở phía còn lại.
   *
   * center:
   * heading căn giữa.
   */
  align?:
    | "left"
    | "center";

  /**
   * default:
   * dùng trên nền sáng.
   *
   * wine:
   * dùng trên nền wine / tối.
   */
  tone?:
    | "default"
    | "wine";

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
    Boolean(
      actionLabel,
    ) &&
    Boolean(
      actionHref,
    );

  return (
    <header
      className={[
        "section-heading",

        `section-heading--${align}`,

        `section-heading--${tone}`,

        hasAction
          ? "section-heading--with-action"
          : "",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="section-heading__main">
        {eyebrow && (
          <p className="section-heading__eyebrow">
            {
              eyebrow
            }
          </p>
        )}

        <h2 className="section-heading__title">
          {
            title
          }
        </h2>

        {description && (
          <p className="section-heading__description">
            {
              description
            }
          </p>
        )}
      </div>

      {/* =====================================================
          ACTION
      ====================================================== */}

      {hasAction && (
        <div className="section-heading__action-wrap">
          <Link
            href={
              actionHref!
            }
            className="section-heading__action"
          >
            {
              actionLabel
            }

            <span
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
