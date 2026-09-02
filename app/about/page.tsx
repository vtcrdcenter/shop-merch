// app/about/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/SectionHeading";

/* =========================================================
   METADATA
   ========================================================= */

export const metadata: Metadata = {
  title: "Giới thiệu",

  description:
    "Tìm hiểu về Gian hàng điện tử sản phẩm văn hóa sáng tạo của Bảo tàng Lịch sử Quốc gia, cách sản phẩm được phát triển từ nguồn di sản và hệ thống truy xuất hỗ trợ.",
};

/* =========================================================
   DEVELOPMENT STEPS
   ========================================================= */

const developmentSteps = [
  {
    number: "01",

    title: "Xác định nguồn cảm hứng",

    description:
      "Quá trình bắt đầu từ hiện vật, tư liệu, hình tượng hoặc câu chuyện lịch sử có liên quan.",
  },

  {
    number: "02",

    title: "Lựa chọn chi tiết",

    description:
      "Những đặc điểm phù hợp như hình khối, hoa văn, màu sắc hoặc bố cục được xác định để phát triển thiết kế.",
  },

  {
    number: "03",

    title: "Chuyển hóa thành thiết kế",

    description:
      "Các chi tiết được giản lược, tổ chức lại và điều chỉnh để phù hợp với công năng của sản phẩm mới.",
  },

  {
    number: "04",

    title: "Hoàn thiện sản phẩm",

    description:
      "Thiết kế được tiếp tục hoàn thiện về cấu tạo, chất liệu và hình thức trước khi đưa vào giới thiệu hoặc sản xuất.",
  },

  {
    number: "05",

    title: "Kết nối dữ liệu",

    description:
      "Với sản phẩm hỗ trợ truy xuất, người dùng có thể tiếp tục từ vật phẩm đến hồ sơ dữ liệu tương ứng.",
  },
];

/* =========================================================
   SHOP ECOSYSTEM
   ========================================================= */

const ecosystemItems = [
  {
    title: "Sản phẩm",

    href: "/products",

    description:
      "Các vật phẩm văn hóa sáng tạo được giới thiệu theo danh mục, bộ sưu tập và mục đích sử dụng.",
  },

  {
    title: "Di sản",

    href: "/heritage",

    description:
      "Hiện vật, tư liệu và nguồn văn hóa đứng phía sau từng thiết kế.",
  },

  {
    title: "Bộ sưu tập",

    href: "/collections",

    description:
      "Các sản phẩm có chung nguồn cảm hứng hoặc mạch văn hóa được đặt trong cùng một hệ chủ đề.",
  },

  {
    title: "Câu chuyện",

    href: "/stories",

    description:
      "Những nội dung giúp làm rõ cách nguồn cảm hứng được chuyển hóa thành sản phẩm.",
  },

  {
    title: "Quà tặng",

    href: "/gifts",

    description:
      "Các sản phẩm được gợi ý theo người nhận, mục đích sử dụng và nhu cầu quà tặng.",
  },

  {
    title: "Truy xuất",

    href: "/products/dau-an-thuong-trieu-nguyen",

    description:
      "Lớp dữ liệu bổ sung cho những sản phẩm được kết nối với hồ sơ truy xuất.",
  },
];

/* =========================================================
   PAGE
   ========================================================= */

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* =====================================================
          01 — BREADCRUMB
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
          02 — HERO
      ====================================================== */}

      <section className="about-hero">
        <div className="site-container about-hero__grid">
          <div className="about-hero__content">
            <p className="about-hero__eyebrow">
              GIỚI THIỆU
            </p>

            <h1 className="about-hero__title">
              Gian hàng điện tử
              sản phẩm văn hóa sáng tạo
            </h1>

            <p className="about-hero__lead">
              Không gian trực tuyến của
              Bảo tàng Lịch sử Quốc gia,
              nơi những sản phẩm được kết nối
              với hiện vật, tư liệu và câu chuyện
              đã tạo nên nguồn cảm hứng cho chúng.
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
                Khám phá Di sản
              </Link>
            </div>
          </div>

          <div className="about-hero__identity">
            <div className="about-hero__identity-line">
              <span>
                01
              </span>

              <div>
                <small>
                  ĐƠN VỊ
                </small>

                <strong>
                  Bảo tàng
                  Lịch sử Quốc gia
                </strong>
              </div>
            </div>

            <div className="about-hero__identity-line">
              <span>
                02
              </span>

              <div>
                <small>
                  KHÔNG GIAN
                </small>

                <strong>
                  Gian hàng điện tử
                </strong>
              </div>
            </div>

            <div className="about-hero__identity-line">
              <span>
                03
              </span>

              <div>
                <small>
                  NỘI DUNG
                </small>

                <strong>
                  Sản phẩm văn hóa sáng tạo
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — PURPOSE
      ====================================================== */}

      <section className="about-purpose">
        <div className="site-container about-purpose__grid">
          <div className="about-purpose__heading">
            <p className="about-purpose__eyebrow">
              VAI TRÒ CỦA GIAN HÀNG
            </p>

            <h2 className="about-purpose__title">
              Một điểm tiếp nối
              của trải nghiệm bảo tàng
            </h2>
          </div>

          <div className="about-purpose__content">
            <p>
              Người dùng có thể tiếp cận
              sản phẩm trước, trong hoặc sau
              chuyến tham quan và từ một vật phẩm
              tiếp tục tìm hiểu nguồn văn hóa
              liên quan.
            </p>

            <p>
              Vì vậy, gian hàng không chỉ là
              nơi giới thiệu sản phẩm mà còn
              là một không gian nội dung,
              giúp kết nối hiện vật, câu chuyện
              lịch sử và thiết kế đương đại.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — SHOP CONTENT
      ====================================================== */}

      <section className="about-scope">
        <div className="site-container">
          <SectionHeading
            eyebrow="TRONG GIAN HÀNG"
            title="Một hệ nội dung được kết nối"
            description="Sản phẩm, nguồn di sản, bộ sưu tập, câu chuyện, quà tặng và dữ liệu truy xuất được liên kết để người dùng có thể tiếp tục khám phá theo nhiều hướng."
          />

          <div className="about-scope__grid">
            {ecosystemItems.map(
              (
                item,
                index,
              ) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="about-scope__item"
                >
                  <span className="about-scope__number">
                    {String(
                      index + 1,
                    ).padStart(
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

                  <strong className="about-scope__link">
                    Khám phá

                    <span aria-hidden="true">
                      {" "}
                      →
                    </span>
                  </strong>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — PRODUCT DEVELOPMENT
      ====================================================== */}

      <section className="about-development">
        <div className="site-container">
          <SectionHeading
            eyebrow="TỪ DI SẢN ĐẾN SẢN PHẨM"
            title="Một thiết kế bắt đầu như thế nào?"
            description="Sản phẩm được phát triển qua nhiều bước, từ việc xác định nguồn cảm hứng đến khi trở thành một vật phẩm có hình thức và công năng riêng."
            tone="wine"
          />

          <div className="about-development__list">
            {developmentSteps.map(
              (
                step,
              ) => (
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
          06 — RELATIONSHIP
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

            <span
              className="about-relationship__arrow"
              aria-hidden="true"
            >
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

            <span
              className="about-relationship__arrow"
              aria-hidden="true"
            >
              →
            </span>

            <div className="about-relationship__node about-relationship__node--product">
              <small>
                VẬT PHẨM
              </small>

              <strong>
                Sản phẩm
              </strong>
            </div>

            <span
              className="about-relationship__arrow"
              aria-hidden="true"
            >
              →
            </span>

            <div className="about-relationship__node about-relationship__node--trace">
              <small>
                THÔNG TIN
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
              Từ sản phẩm,
              người dùng có thể
              tìm lại câu chuyện ban đầu
            </h2>

            <p>
              Mỗi trang sản phẩm được kết nối
              với nguồn cảm hứng và các nội dung
              liên quan để sản phẩm không tồn tại
              tách rời khỏi bối cảnh văn hóa của nó.
            </p>

            <p>
              Khi có hỗ trợ truy xuất,
              hành trình này còn có thể tiếp tục
              đến hồ sơ dữ liệu của từng sản phẩm.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — TRACEABILITY
      ====================================================== */}

      <section className="about-traceability">
        <div className="site-container about-traceability__grid">
          <div className="about-traceability__heading">
            <p className="about-traceability__eyebrow">
              TRUY XUẤT SẢN PHẨM
            </p>

            <h2 className="about-traceability__title">
              Thông tin không dừng
              ở trang bán hàng
            </h2>
          </div>

          <div className="about-traceability__content">
            <p>
              Với sản phẩm có hỗ trợ truy xuất,
              người dùng có thể tiếp tục kiểm tra
              mã nhận diện, nguồn cảm hứng,
              thông tin thiết kế và những dữ liệu
              được công bố trên hệ thống.
            </p>

            <Link
              href="/products/dau-an-thuong-trieu-nguyen"
              className="about-traceability__link"
            >
              Xem sản phẩm mẫu

              <span aria-hidden="true">
                {" "}
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — VTC MERCHANDISE
      ====================================================== */}

      <section className="about-platform">
        <div className="site-container about-platform__grid">
          <div className="about-platform__heading">
            <p className="about-platform__eyebrow">
              HẠ TẦNG HỖ TRỢ
            </p>

            <h2 className="about-platform__title">
              VTC Merchandise
            </h2>
          </div>

          <div className="about-platform__content">
            <p>
              VTC Merchandise hỗ trợ
              quản lý dữ liệu sản phẩm
              và kết nối các chức năng
              liên quan trong hệ sinh thái.
            </p>

            <p>
              Trên gian hàng, nhận diện chính
              vẫn là Bảo tàng Lịch sử Quốc gia.
              VTC Merchandise được thể hiện
              ở vai trò nền tảng hỗ trợ phía sau,
              không thay thế thương hiệu
              của Bảo tàng.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          09 — EXPLORE
      ====================================================== */}

      <section className="about-explore">
        <div className="site-container">
          <div className="about-explore__header">
            <div>
              <p className="about-explore__eyebrow">
                BẮT ĐẦU KHÁM PHÁ
              </p>

              <h2>
                Chọn cách bạn muốn
                bắt đầu
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
                Khám phá các thiết kế
                đang được giới thiệu
                trong gian hàng.
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
                Bắt đầu từ hiện vật,
                tư liệu và nguồn
                cảm hứng văn hóa.
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
                Xem các sản phẩm
                được kết nối trong
                cùng một mạch chủ đề.
              </p>

              <strong>
                Xem bộ sưu tập →
              </strong>
            </Link>

            <Link
              href="/gifts"
              className="about-explore__item"
            >
              <span>
                04
              </span>

              <h3>
                Quà tặng
              </h3>

              <p>
                Chọn sản phẩm
                theo người nhận,
                mục đích và dịp tặng.
              </p>

              <strong>
                Khám phá quà tặng →
              </strong>
            </Link>

            <Link
              href="/stories"
              className="about-explore__item"
            >
              <span>
                05
              </span>

              <h3>
                Câu chuyện
              </h3>

              <p>
                Đọc thêm về nguồn
                cảm hứng và cách
                thiết kế được hình thành.
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
