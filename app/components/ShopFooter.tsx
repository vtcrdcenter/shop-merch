import Link from "next/link";

import {
  siteAssetPath,
} from "../../lib/site-path";

export default function ShopFooter() {
  return (
    <footer className="shop-footer">
      {/* =====================================================
          01 — MAIN FOOTER
      ====================================================== */}

      <div className="site-container shop-footer__main">
        {/* ===================================================
            IDENTITY
        ==================================================== */}

        <div className="shop-footer__identity">
          <Link
            href="/"
            className="shop-footer__brand"
            aria-label="Trang chủ Gian hàng điện tử Bảo tàng Lịch sử Quốc gia"
          >
            <img
              src={siteAssetPath(
                "/museum-logo.png",
              )}
              alt=""
              className="shop-footer__logo"
            />

            <div>
              <p className="shop-footer__eyebrow">
                BẢO TÀNG LỊCH SỬ QUỐC GIA
              </p>

              <h2>
                Gian hàng điện tử
              </h2>
            </div>
          </Link>

          <p className="shop-footer__intro">
            Không gian giới thiệu
            các sản phẩm văn hóa sáng tạo
            được phát triển từ hiện vật,
            tư liệu và những câu chuyện lịch sử.
          </p>
        </div>

        {/* ===================================================
            EXPLORE
        ==================================================== */}

        <div className="shop-footer__column">
          <h3>
            Khám phá
          </h3>

          <Link href="/">Trang chủ</Link>

          <Link href="/products">
            Sản phẩm
          </Link>

          <Link href="/heritage">
            Di sản
          </Link>

          <Link href="/collections">
            Bộ sưu tập
          </Link>

          <Link href="/gifts">
            Quà tặng
          </Link>
        </div>

        {/* ===================================================
            CONTENT
        ==================================================== */}

        <div className="shop-footer__column">
          <h3>
            Nội dung
          </h3>

          <Link href="/stories">
            Câu chuyện
          </Link>

          <Link href="/about">
            Giới thiệu
          </Link>

        </div>

        {/* ===================================================
            INFORMATION
        ==================================================== */}

        <div className="shop-footer__column">
          <h3>
            Thông tin
          </h3>

          <Link href="/policies/shipping">Giao hàng</Link>
          <Link href="/policies/returns">Đổi trả</Link>
          <Link href="/policies/privacy">Bảo mật</Link>
          <p className="shop-footer__text">Quy trình và dữ liệu thương mại trên website hiện là bản demo.</p>
        </div>
      </div>

      {/* =====================================================
          02 — BOTTOM
      ====================================================== */}

      <div className="shop-footer__bottom">
        <div className="site-container shop-footer__bottom-inner">
          <span>
            © Bảo tàng Lịch sử Quốc gia
          </span>

          <span>
            Hạ tầng hỗ trợ:
            VTC Merchandise
          </span>
        </div>
      </div>
    </footer>
  );
}
