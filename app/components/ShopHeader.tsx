"use client";

import Link from "next/link";

import {
  usePathname,
} from "next/navigation";

import {
  useEffect,
  useState,
} from "react";

import {
  siteAssetPath,
} from "../../lib/site-path";
import { useCart } from "./CartProvider";

/* =========================================================
   NAVIGATION
   ========================================================= */

const navigation = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Sản phẩm",
    href: "/products",
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
    label: "Di sản",
    href: "/heritage",
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

/* =========================================================
   HELPERS
   ========================================================= */

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

/* =========================================================
   COMPONENT
   ========================================================= */

export default function ShopHeader() {
  const { count } = useCart();
  const pathname =
    usePathname() ?? "/";

  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);

  /* ========================================================
     ESC TO CLOSE MOBILE MENU
     ======================================================== */

  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (
        event.key === "Escape"
      ) {
        setMenuOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  /* ========================================================
     CLOSE MENU
     ======================================================== */

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="shop-header">
      {/* =====================================================
          01 — UTILITY BAR
      ====================================================== */}

      <div className="shop-header__utility">
        <div className="site-container shop-header__utility-inner">
          <p className="shop-header__utility-title">
            Gian hàng điện tử
            của Bảo tàng Lịch sử Quốc gia
          </p>

          <p className="shop-header__utility-note">
            Quà tặng văn hóa · Giao hàng toàn quốc
          </p>
        </div>
      </div>

      {/* =====================================================
          02 — BRAND ROW
      ====================================================== */}

      <div className="shop-header__brand-row">
        <div className="site-container shop-header__brand-inner">
          {/* =================================================
              BRAND
          ================================================== */}

          <Link
            href="/"
            className="shop-header__brand"
            aria-label="Trang chủ Gian hàng điện tử Bảo tàng Lịch sử Quốc gia"
            onClick={closeMenu}
          >
            <div className="shop-header__logo-wrap">
              <img
                src={siteAssetPath(
                  "/museum-logo.png",
                )}
                alt="Bảo tàng Lịch sử Quốc gia"
                className="shop-header__logo"
              />
            </div>

            <div className="shop-header__brand-copy">
              <strong>
                BẢO TÀNG LỊCH SỬ QUỐC GIA
              </strong>

              <span>
                GIAN HÀNG ĐIỆN TỬ
              </span>
            </div>
          </Link>

          {/* =================================================
              ACTIONS
          ================================================== */}

          <div className="shop-header__actions">
            <Link
              href="/search"
              className="shop-header__search-link"
              onClick={closeMenu}
            >
              <span
                className="shop-header__search-icon"
                aria-hidden="true"
              >
                ⌕
              </span>

              <span>
                Tìm kiếm
              </span>
            </Link>

            <Link href="/cart" className="shop-header__cart-link" onClick={closeMenu} aria-label={`Giỏ hàng có ${count} sản phẩm`}>
              Giỏ hàng <span>{count}</span>
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
                  (current) =>
                    !current,
                )
              }
            >
              <span
                className="shop-header__menu-icon"
                aria-hidden="true"
              >
                <i />
                <i />
                <i />
              </span>

              <span className="shop-header__menu-label">
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
          .filter(Boolean)
          .join(" ")}
        aria-label="Điều hướng chính"
      >
        <div className="site-container">
          <ul className="shop-header__navigation-list">
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
                        .filter(Boolean)
                        .join(" ")}
                      aria-current={
                        active
                          ? "page"
                          : undefined
                      }
                      onClick={closeMenu}
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
