import Link from "next/link";

export default function ShopFooter() {
  return (
    <footer className="shop-footer">
      <div className="site-container shop-footer__main">
        <div className="shop-footer__identity">
          <p className="shop-footer__eyebrow">
            BẢO TÀNG LỊCH SỬ
            QUỐC GIA
          </p>

          <h2>
            Gian hàng điện tử
          </h2>

          <p>
            Không gian giới thiệu
            các sản phẩm văn hóa
            sáng tạo được phát triển
            từ hiện vật, tư liệu và
            những câu chuyện lịch sử.
          </p>
        </div>

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
            Truy xuất sản phẩm
          </Link>
        </div>

        <div className="shop-footer__column">
          <h3>
            Hỗ trợ
          </h3>

          <span>
            Hướng dẫn mua hàng
          </span>

          <span>
            Vận chuyển & đổi trả
          </span>

          <span>
            Chính sách bảo mật
          </span>

          <span>
            Liên hệ
          </span>
        </div>
      </div>

      <div className="shop-footer__bottom">
        <div className="site-container shop-footer__bottom-inner">
          <span>
            © Bảo tàng Lịch sử
            Quốc gia
          </span>

          <span>
            Hệ thống hỗ trợ:
            VTC Merchandise
          </span>
        </div>
      </div>
    </footer>
  );
}
