import Link from "next/link";

export type BreadcrumbItem = {
  label: string;

  /**
   * Không truyền href cho item cuối cùng.
   */
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];

  /**
   * Có tự thêm Trang chủ hay không.
   */
  includeHome?: boolean;

  className?: string;
};

export default function Breadcrumb({
  items,
  includeHome = true,
  className = "",
}: BreadcrumbProps) {
  const breadcrumbItems: BreadcrumbItem[] =
    includeHome
      ? [
          {
            label: "Trang chủ",
            href: "/",
          },
          ...items,
        ]
      : items;

  return (
    <nav
      className={[
        "breadcrumb",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Đường dẫn trang"
    >
      <ol className="breadcrumb__list">
        {breadcrumbItems.map(
          (item, index) => {
            const isLast =
              index ===
              breadcrumbItems.length - 1;

            return (
              <li
                key={`${item.label}-${index}`}
                className={[
                  "breadcrumb__item",
                  isLast
                    ? "breadcrumb__item--current"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {!isLast && item.href ? (
                  <Link
                    href={item.href}
                    className="breadcrumb__link"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="breadcrumb__current"
                    aria-current={
                      isLast
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <span
                    className="breadcrumb__separator"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </li>
            );
          },
        )}
      </ol>
    </nav>
  );
}
