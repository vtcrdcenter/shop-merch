"use client";

import Link from "next/link";
import {
  usePathname,
} from "next/navigation";
import {
  useState,
} from "react";

const navigation = [
  {
    label: "Sản phẩm",
    href: "/products",
  },
  {
    label: "Di sản",
    href: "/heritage",
  },
  {
    label: "Bộ sưu tập",
    href: "/collections",
  },
  {
    label: "Quà tặng",
    href: "/gifts",
  },
  {
    label: "Câu chuyện",
    href: "/stories",
  },
  {
    label: "Giới thiệu",
    href: "/about",
  },
];

function isActiveRoute(
  pathname: string,
  href: string,
) {
  if (href === "/") {
    return pathname === "/";
  }

  return (
    pathname === href ||
    pathname.startsWith(
      `${href}/`,
    )
  );
}

export default function ShopHeader() {
  const pathname =
    usePathname() ?? "/";

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <header className="shop-header">
      {/* UTILITY BAR */}

      <div className="shop-header__utility">
        <div className="site-container shop-header__utility-inner">
          <p>
            Gian hàng điện tử của
            Bảo tàng Lịch sử Quốc gia
          </p>

          <div className="shop-header__utility-links">
            <Link href="/products/dau-an-thuong-trieu-nguyen">
              Truy xuất sản phẩm
            </Link>

            <span
              aria-hidden="true"
            >
              |
            </span>

            <span>
              VI
            </span>
          </div>
        </div>
      </div>

      {/* BRAND */}

      <div className="shop-header__brand-row">
        <div className="site-container shop-header__brand-inner">
          <Link
            href="/"
            className="shop-header__brand"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            <div className="shop-header__brand-mark">
              BTL
            </div>

            <div>
              <strong>
                BẢO TÀNG LỊCH SỬ
                QUỐC GIA
              </strong>

              <span>
                GIAN HÀNG ĐIỆN TỬ
              </span>
            </div>
          </Link>

          <div className="shop-header__actions">
            <Link
              href="/products"
              aria-label="Tìm kiếm sản phẩm"
            >
              Tìm kiếm
            </Link>

            <button
              type="button"
              className="shop-header__menu-toggle"
              aria-expanded={
                menuOpen
              }
              aria-controls="shop-navigation"
              onClick={() =>
                setMenuOpen(
                  (current) =>
                    !current,
                )
              }
            >
              {menuOpen
                ? "Đóng"
                : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* NAV */}

      <nav
        id="shop-navigation"
        className={[
          "shop-header__navigation",
          menuOpen
            ? "shop-header__navigation--open"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-label="Điều hướng chính"
      >
        <div className="site-container">
          <ul>
            {navigation.map(
              (item) => {
                const active =
                  isActiveRoute(
                    pathname,
                    item.href,
                  );

                return (
                  <li
                    key={
                      item.href
                    }
                  >
                    <Link
                      href={
                        item.href
                      }
                      className={
                        active
                          ? "shop-header__nav-link shop-header__nav-link--active"
                          : "shop-header__nav-link"
                      }
                      onClick={() =>
                        setMenuOpen(
                          false,
                        )
                      }
                    >
                      {
                        item.label
                      }
                    </Link>
                  </li>
                );
              },
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
