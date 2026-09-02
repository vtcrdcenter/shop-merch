"use client";

import Link from "next/link";

import {
  usePathname,
} from "next/navigation";

import {
  useState,
} from "react";

/* =========================================================
   NAVIGATION
   ========================================================= */

const navigation = [
  {
    label:
      "Sản phẩm",

    href:
      "/products",
  },

  {
    label:
      "Di sản",

    href:
      "/heritage",
  },

  {
    label:
      "Bộ sưu tập",

    href:
      "/collections",
  },

  {
    label:
      "Quà tặng",

    href:
      "/gifts",
  },

  {
    label:
      "Câu chuyện",

    href:
      "/stories",
  },

  {
    label:
      "Giới thiệu",

    href:
      "/about",
  },
];

/* =========================================================
   HELPERS
   ========================================================= */

function isActiveRoute(
  pathname: string,
  href: string,
) {
  if (
    href === "/"
  ) {
    return (
      pathname === "/"
    );
  }

  return (
    pathname === href ||
    pathname.startsWith(
      `${href}/`,
    )
  );
}

/* =========================================================
   COMPONENT
   ========================================================= */

export default function ShopHeader() {
  const pathname =
    usePathname() ??
    "/";

  const [
    menuOpen,
    setMenuOpen,
  ] = useState(
    false,
  );

  return (
    <header className="shop-header">
      {/* =====================================================
          01 — UTILITY BAR
      ====================================================== */}

      <div className="shop-header__utility">
        <div className="site-container shop-header__utility-inner">
          <p className="shop-header__utility-title">
            Gian hàng điện tử
            của Bảo tàng
            Lịch sử Quốc gia
          </p>

          <div className="shop-header__utility-links">
            <Link
              href="/products/dau-an-thuong-trieu-nguyen"
              className="shop-header__utility-link"
            >
              Sản phẩm có truy xuất
            </Link>

            <span
              className="shop-header__utility-divider"
              aria-hidden="true"
            >
              /
            </span>

            <span className="shop-header__language">
              VI
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          02 — BRAND
      ====================================================== */}

      <div className="shop-header__brand-row">
        <div className="site-container shop-header__brand-inner">
          <Link
            href="/"
            className="shop-header__brand"
            aria-label="Trang chủ Gian hàng điện tử Bảo tàng Lịch sử Quốc gia"
            onClick={() =>
              setMenuOpen(
                false,
              )
            }
          >
            <div
              className="shop-header__brand-mark"
              aria-hidden="true"
            >
              BTL
            </div>

            <div className="shop-header__brand-copy">
              <strong>
                BẢO TÀNG
                LỊCH SỬ
                QUỐC GIA
              </strong>

              <span>
                GIAN HÀNG
                ĐIỆN TỬ
              </span>
            </div>
          </Link>

          {/* =================================================
              ACTIONS
          ================================================== */}

          <div className="shop-header__actions">
            <Link
              href="/products"
              className="shop-header__search-link"
            >
              Tìm sản phẩm
            </Link>

            <button
              type="button"
              className="shop-header__menu-toggle"
              aria-expanded={
                menuOpen
              }
              aria-controls="shop-navigation"
              aria-label={
                menuOpen
                  ? "Đóng menu"
                  : "Mở menu"
              }
              onClick={() =>
                setMenuOpen(
                  (
                    current,
                  ) =>
                    !current,
                )
              }
            >
              <span>
                {menuOpen
                  ? "Đóng"
                  : "Menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          03 — MAIN NAVIGATION
      ====================================================== */}

      <nav
        id="shop-navigation"
        className={[
          "shop-header__navigation",

          menuOpen
            ? "shop-header__navigation--open"
            : "",
        ]
          .filter(
            Boolean,
          )
          .join(
            " ",
          )}
        aria-label="Điều hướng chính"
      >
        <div className="site-container">
          <ul className="shop-header__navigation-list">
            {navigation.map(
              (
                item,
              ) => {
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
                    className="shop-header__navigation-item"
                  >
                    <Link
                      href={
                        item.href
                      }
                      className={[
                        "shop-header__nav-link",

                        active
                          ? "shop-header__nav-link--active"
                          : "",
                      ]
                        .filter(
                          Boolean,
                        )
                        .join(
                          " ",
                        )}
                      aria-current={
                        active
                          ? "page"
                          : undefined
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
