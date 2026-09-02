import Link from "next/link";

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
          <p className="shop-footer__eyebrow">
            BẢO TÀNG
            LỊCH SỬ
            QUỐC GIA
          </p>

          <h2>
            Gian hàng điện tử
          </h2>

          <p>
            Không gian giới thiệu
            các sản phẩm văn hóa
            sáng tạo được phát triển
            từ hiện vật, tư liệu
            và những câu chuyện
            lịch sử.
          </p>
        </div>

        {/* ===================================================
            EXPLORE
        ==================================================== */}

        <div className="shop-footer__column">
          <h3>
            Khám phá
          </h3>

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

          <Link href="/products/dau-an-thuong-trieu-nguyen">
            Sản phẩm có truy xuất
          </Link>
        </div>

        {/* ===================================================
            INFORMATION
        ==================================================== */}

        <div className="shop-footer__column">
          <h3>
            Thông tin
          </h3>

          <p className="shop-footer__text">
            Hướng dẫn mua hàng,
            vận chuyển, đổi trả
            và các chính sách
            liên quan sẽ được
            cập nhật khi gian hàng
            chính thức mở bán.
          </p>
        </div>
      </div>

      {/* =====================================================
          02 — BOTTOM
      ====================================================== */}

      <div className="shop-footer__bottom">
        <div className="site-container shop-footer__bottom-inner">
          <span>
            © Bảo tàng
            Lịch sử Quốc gia
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
