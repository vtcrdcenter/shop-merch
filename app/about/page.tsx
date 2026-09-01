// app/about/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title:
    "Giới thiệu | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",

  description:
    "Tìm hiểu về Gian hàng điện tử sản phẩm văn hóa sáng tạo của Bảo tàng Lịch sử Quốc gia, cách sản phẩm được phát triển từ nguồn di sản và hệ thống hỗ trợ truy xuất.",
};

const developmentSteps = [
  {
    number: "01",
    title: "Xác định nguồn di sản",
    description:
      "Sản phẩm được bắt đầu từ hiện vật, tư liệu, hình tượng, câu chuyện lịch sử hoặc nguồn văn hóa có liên quan.",
  },
  {
    number: "02",
    title: "Phát triển phương án thiết kế",
    description:
      "Các đặc điểm phù hợp được lựa chọn, giản lược, tổ chức lại hoặc chuyển hóa để thích ứng với công năng của sản phẩm mới.",
  },
  {
    number: "03",
    title: "Đối chiếu và hoàn thiện hồ sơ",
    description:
      "Nguồn tham chiếu, phương án thiết kế và các thông tin liên quan được tập hợp để phục vụ quá trình rà soát và hoàn thiện sản phẩm.",
  },
  {
    number: "04",
    title: "Sản xuất và phát hành",
    description:
      "Sau khi đáp ứng yêu cầu phát triển, sản phẩm có thể được đưa vào sản xuất, phân phối và giới thiệu trên gian hàng.",
  },
  {
    number: "05",
    title: "Kết nối dữ liệu truy xuất",
    description:
      "Với sản phẩm hỗ trợ truy xuất, người dùng có thể tiếp tục từ sản phẩm vật lý đến hồ sơ dữ liệu tương ứng trên hệ thống.",
  },
];

const ecosystemItems = [
  {
    title: "Gian hàng điện tử",
    description:
      "Không gian giới thiệu, quảng bá và bán các sản phẩm văn hóa sáng tạo của Bảo tàng Lịch sử Quốc gia.",
  },
  {
    title: "Nguồn di sản",
    description:
      "Lớp nội dung giúp người dùng nhận biết hiện vật, tư liệu và câu chuyện được sử dụng làm cơ sở phát triển sản phẩm.",
  },
  {
    title: "Hồ sơ sản phẩm",
    description:
      "Tập hợp thông tin về sản phẩm, nguồn cảm hứng, quá trình chuyển hóa thiết kế và các dữ liệu liên quan.",
  },
  {
    title: "Truy xuất sản phẩm",
    description:
      "Kết nối sản phẩm với dữ liệu nhận diện, hồ sơ nguồn và các thông tin được công bố trên hệ thống truy xuất.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <div className="site-container about-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label: "Giới thiệu",
            },
          ]}
        />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="about-hero">
        <div className="site-container about-hero__grid">
          <div className="about-hero__content">
            <p className="about-hero__eyebrow">
              GIỚI THIỆU
            </p>

            <h1 className="about-hero__title">
              Gian hàng điện tử sản phẩm văn hóa sáng tạo
            </h1>

            <p className="about-hero__lead">
              Không gian trực tuyến giới thiệu và kết nối
              các sản phẩm được phát triển từ hiện vật,
              tư liệu và những câu chuyện lịch sử gắn với
              Bảo tàng Lịch sử Quốc gia.
            </p>

            <div className="about-hero__actions">
              <Link
                href="/products"
                className="about-hero__primary"
              >
                Khám phá sản phẩm
                <span aria-hidden="true">
                  {" "}
                  →
                </span>
              </Link>

              <Link
                href="/heritage"
                className="about-hero__secondary"
              >
                Khám phá nguồn di sản
              </Link>
            </div>
          </div>

          <div className="about-hero__identity">
            <div className="about-hero__identity-line">
              <span>01</span>

              <div>
                <small>ĐƠN VỊ</small>

                <strong>
                  Bảo tàng Lịch sử Quốc gia
                </strong>
              </div>
            </div>

            <div className="about-hero__identity-line">
              <span>02</span>

              <div>
                <small>KHÔNG GIAN</small>

                <strong>
                  Gian hàng điện tử
                </strong>
              </div>
            </div>

            <div className="about-hero__identity-line">
              <span>03</span>

              <div>
                <small>PHẠM VI</small>

                <strong>
                  Sản phẩm văn hóa sáng tạo
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PURPOSE
      ====================================================== */}

      <section className="about-purpose">
        <div className="site-container about-purpose__grid">
          <div className="about-purpose__heading">
            <p className="about-purpose__eyebrow">
              VAI TRÒ CỦA GIAN HÀNG
            </p>

            <h2 className="about-purpose__title">
              Mở rộng trải nghiệm bảo tàng ra ngoài không gian trưng bày
            </h2>
          </div>

          <div className="about-purpose__content">
            <p>
              Gian hàng điện tử được tổ chức như một điểm
              tiếp nối của trải nghiệm bảo tàng. Người dùng
              có thể tiếp cận sản phẩm trước, trong hoặc sau
              chuyến tham quan và từ sản phẩm tiếp tục tìm
              hiểu nguồn văn hóa liên quan.
            </p>

            <p>
              Bên cạnh chức năng thương mại, gian hàng còn
              đóng vai trò truyền thông và giáo dục, giúp
              kết nối hiện vật, câu chuyện lịch sử và sản
              phẩm sáng tạo trong cùng một hành trình nội dung.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT THE SHOP CONTAINS
      ====================================================== */}

      <section className="about-scope">
        <div className="site-container">
          <SectionHeading
            eyebrow="TRONG GIAN HÀNG"
            title="Không chỉ có danh mục sản phẩm"
            description="Các lớp thông tin được tổ chức để người dùng có thể đi từ sản phẩm đến nguồn di sản và ngược lại."
          />

          <div className="about-scope__grid">
            {ecosystemItems.map(
              (item, index) => (
                <article
                  key={item.title}
                  className="about-scope__item"
                >
                  <span className="about-scope__number">
                    {String(index + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT DEVELOPMENT
      ====================================================== */}

      <section className="about-development">
        <div className="site-container">
          <SectionHeading
            eyebrow="PHÁT TRIỂN SẢN PHẨM"
            title="Từ nguồn di sản đến sản phẩm"
            description="Một sản phẩm được xây dựng qua nhiều lớp công việc, thay vì chỉ lấy hình ảnh di sản để trang trí lên vật phẩm."
            tone="wine"
          />

          <div className="about-development__list">
            {developmentSteps.map(
              (step) => (
                <article
                  key={step.number}
                  className="about-development__item"
                >
                  <span className="about-development__number">
                    {step.number}
                  </span>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          HERITAGE / PRODUCT RELATIONSHIP
      ====================================================== */}

      <section className="about-relationship">
        <div className="site-container about-relationship__grid">
          <div className="about-relationship__visual">
            <div className="about-relationship__node about-relationship__node--heritage">
              <small>
                NGUỒN
              </small>

              <strong>
                Di sản
              </strong>
            </div>

            <span className="about-relationship__arrow">
              →
            </span>

            <div className="about-relationship__node about-relationship__node--design">
              <small>
                CHUYỂN HÓA
              </small>

              <strong>
                Thiết kế
              </strong>
            </div>

            <span className="about-relationship__arrow">
              →
            </span>

            <div className="about-relationship__node about-relationship__node--product">
              <small>
                ĐẦU RA
              </small>

              <strong>
                Sản phẩm
              </strong>
            </div>

            <span className="about-relationship__arrow">
              →
            </span>

            <div className="about-relationship__node about-relationship__node--trace">
              <small>
                DỮ LIỆU
              </small>

              <strong>
                Truy xuất
              </strong>
            </div>
          </div>

          <div className="about-relationship__content">
            <p className="about-relationship__eyebrow">
              MỘT HÀNH TRÌNH LIÊN TỤC
            </p>

            <h2>
              Người dùng có thể đi ngược từ sản phẩm về nguồn
            </h2>

            <p>
              Cấu trúc của gian hàng được xây dựng để
              tránh việc sản phẩm tồn tại tách rời khỏi
              bối cảnh văn hóa của nó.
            </p>

            <p>
              Từ một trang sản phẩm, người dùng có thể
              tiếp tục sang nguồn di sản, câu chuyện thiết
              kế và hồ sơ truy xuất nếu sản phẩm đó được
              hỗ trợ trên hệ thống.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRACEABILITY
      ====================================================== */}

      <section className="about-traceability">
        <div className="site-container about-traceability__grid">
          <div className="about-traceability__heading">
            <p className="about-traceability__eyebrow">
              TRUY XUẤT
            </p>

            <h2 className="about-traceability__title">
              Dữ liệu tiếp tục sau khi sản phẩm được phát hành
            </h2>
          </div>

          <div className="about-traceability__content">
            <p>
              Với những sản phẩm có hỗ trợ truy xuất,
              thông tin trên gian hàng có thể được kết
              nối với hồ sơ nhận diện chi tiết của sản phẩm.
            </p>

            <p>
              Người dùng có thể kiểm tra mã sản phẩm,
              nguồn văn hóa, thông tin phát triển thiết kế
              và những dữ liệu khác được công bố cho từng
              trường hợp cụ thể.
            </p>

            <Link
              href="/products/dau-an-thuong-trieu-nguyen"
              className="about-traceability__link"
            >
              Xem sản phẩm trình diễn truy xuất
              <span aria-hidden="true">
                {" "}
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          VTC MERCHANDISE ROLE
      ====================================================== */}

      <section className="about-platform">
        <div className="site-container about-platform__grid">
          <div className="about-platform__heading">
            <p className="about-platform__eyebrow">
              HẠ TẦNG HỖ TRỢ
            </p>

            <h2 className="about-platform__title">
              VTC Merchandise trong hệ thống
            </h2>
          </div>

          <div className="about-platform__content">
            <p>
              VTC Merchandise đóng vai trò nền tảng hỗ trợ
              quản lý dữ liệu và kết nối các chức năng liên
              quan đến sản phẩm trong hệ sinh thái.
            </p>

            <p>
              Trên giao diện dành cho người dùng, thương hiệu
              chính vẫn là Bảo tàng Lịch sử Quốc gia và Gian
              hàng điện tử sản phẩm văn hóa sáng tạo. Thông
              tin về VTC Merchandise được thể hiện ở cấp độ
              hệ thống hỗ trợ, không thay thế nhận diện của
              gian hàng.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPLORE
      ====================================================== */}

      <section className="about-explore">
        <div className="site-container">
          <div className="about-explore__header">
            <div>
              <p className="about-explore__eyebrow">
                BẮT ĐẦU KHÁM PHÁ
              </p>

              <h2>
                Đi vào gian hàng từ cách bạn quan tâm
              </h2>
            </div>
          </div>

          <div className="about-explore__grid">
            <Link
              href="/products"
              className="about-explore__item"
            >
              <span>
                01
              </span>

              <h3>
                Sản phẩm
              </h3>

              <p>
                Khám phá toàn bộ các thiết kế
                đang được giới thiệu.
              </p>

              <strong>
                Xem sản phẩm →
              </strong>
            </Link>

            <Link
              href="/heritage"
              className="about-explore__item"
            >
              <span>
                02
              </span>

              <h3>
                Di sản
              </h3>

              <p>
                Bắt đầu từ hiện vật, tư liệu
                và nguồn văn hóa.
              </p>

              <strong>
                Khám phá Di sản →
              </strong>
            </Link>

            <Link
              href="/collections"
              className="about-explore__item"
            >
              <span>
                03
              </span>

              <h3>
                Bộ sưu tập
              </h3>

              <p>
                Xem các sản phẩm được tuyển
                chọn theo cùng một chủ đề.
              </p>

              <strong>
                Xem bộ sưu tập →
              </strong>
            </Link>

            <Link
              href="/stories"
              className="about-explore__item"
            >
              <span>
                04
              </span>

              <h3>
                Câu chuyện
              </h3>

              <p>
                Tìm hiểu sâu hơn về nguồn
                cảm hứng và quá trình thiết kế.
              </p>

              <strong>
                Đọc câu chuyện →
              </strong>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
