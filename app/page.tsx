// app/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { siteAssetPath } from "../lib/site-path";

import ProductGrid from "./components/ProductGrid";
import HeritageCard from "./components/HeritageCard";
import CollectionCard from "./components/CollectionCard";
import StoryCard from "./components/StoryCard";
import SectionHeading from "./components/SectionHeading";

import {
  getFeaturedProducts,
  getProductBySlug,
} from "../data/products";

import {
  getFeaturedHeritageSources,
} from "../data/heritage";

import {
  getFeaturedCollections,
} from "../data/collections";

import {
  getFeaturedStories,
} from "../data/stories";

import {
  getFeaturedGiftGroups,
} from "../data/gifts";

/* =========================================================
   METADATA
   ========================================================= */

export const metadata: Metadata = {
  title:
    "Gian hàng điện tử | Bảo tàng Lịch sử Quốc gia",

  description:
    "Khám phá các sản phẩm văn hóa sáng tạo được phát triển từ hiện vật, tư liệu và câu chuyện lịch sử gắn với Bảo tàng Lịch sử Quốc gia.",
};

/* =========================================================
   HOME PAGE
   ========================================================= */

export default function HomePage() {
  const featuredProducts =
    getFeaturedProducts().slice(0, 4);

  const featuredHeritage =
    getFeaturedHeritageSources().slice(0, 4);

  const featuredCollections =
    getFeaturedCollections().slice(0, 3);

  const featuredStories =
    getFeaturedStories()
      .filter(
        (story) =>
          story.status === "published",
      )
      .slice(0, 3);

  const featuredGifts =
    getFeaturedGiftGroups().slice(0, 3);

  /*
   * Magnet là case trình diễn hoàn chỉnh nhất hiện tại:
   * Sản phẩm → nguồn di sản → câu chuyện → truy xuất.
   */
  const traceProduct =
    getProductBySlug(
      "dau-an-thuong-trieu-nguyen",
    );

  const heroProduct =
    traceProduct ??
    featuredProducts[0];

  const heroImage =
    heroProduct?.images?.[0];

  return (
    <main className="home-page">
      {/* =====================================================
          01 — HERO
      ====================================================== */}

      <section className="home-hero">
        <div className="home-hero__background" />

        <div className="site-container home-hero__grid">
          {/* LEFT */}

          <div className="home-hero__content">
            <p className="home-hero__eyebrow">
              BẢO TÀNG LỊCH SỬ QUỐC GIA
            </p>

            <h1 className="home-hero__title">
              Sản phẩm văn hóa
              <br />
              từ những câu chuyện
              <br />
              của di sản
            </h1>

            <p className="home-hero__description">
              Khám phá các sản phẩm văn hóa
              sáng tạo được phát triển từ hiện
              vật, tư liệu và những câu chuyện
              lịch sử gắn với Bảo tàng Lịch sử
              Quốc gia.
            </p>

            <div className="home-hero__actions">
              <Link
                href="/products"
                className="home-hero__primary"
              >
                Khám phá sản phẩm

                <span aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/heritage"
                className="home-hero__secondary"
              >
                Bắt đầu từ Di sản
              </Link>
            </div>

            <div className="home-hero__meta">
              <div>
                <strong>
                  07
                </strong>

                <span>
                  thiết kế đang phát triển
                </span>
              </div>

              <div>
                <strong>
                  05
                </strong>

                <span>
                  nguồn di sản
                </span>
              </div>

              <div>
                <strong>
                  04
                </strong>

                <span>
                  bộ sưu tập
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="home-hero__visual">
            <div className="home-hero__product-image">
              {heroImage ? (
                <img
                  src={siteAssetPath(heroImage.src)}
                  alt={heroImage.alt}
                />
              ) : (
                <div className="home-hero__placeholder">
                  Sản phẩm nổi bật
                </div>
              )}

              {heroProduct?.traceability
                .enabled && (
                <span className="home-hero__trace-badge">
                  Hỗ trợ truy xuất
                </span>
              )}
            </div>

            {heroProduct && (
              <div className="home-hero__product-info">
                <p>
                  SẢN PHẨM NỔI BẬT
                </p>

                <h2>
                  {heroProduct.name}
                </h2>

                <span>
                  {
                    heroProduct.productType
                  }
                </span>

                <Link
                  href={`/products/${heroProduct.slug}`}
                >
                  Xem sản phẩm
                  <span aria-hidden="true">
                    {" "}
                    →
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — SHOP VALUES
      ====================================================== */}

      <section className="home-values">
        <div className="site-container home-values__grid">
          <article className="home-value">
            <span className="home-value__number">
              01
            </span>

            <div>
              <strong>
                Bắt đầu từ nguồn di sản
              </strong>

              <p>
                Hiện vật, tư liệu và câu chuyện
                là cơ sở phát triển thiết kế.
              </p>
            </div>
          </article>

          <article className="home-value">
            <span className="home-value__number">
              02
            </span>

            <div>
              <strong>
                Thiết kế có câu chuyện
              </strong>

              <p>
                Người dùng có thể tìm hiểu cách
                các yếu tố văn hóa được chuyển hóa.
              </p>
            </div>
          </article>

          <article className="home-value">
            <span className="home-value__number">
              03
            </span>

            <div>
              <strong>
                Kết nối hồ sơ dữ liệu
              </strong>

              <p>
                Một số sản phẩm có thể tiếp tục
                tới hồ sơ truy xuất tương ứng.
              </p>
            </div>
          </article>

          <article className="home-value">
            <span className="home-value__number">
              04
            </span>

            <div>
              <strong>
                Trải nghiệm bảo tàng mở rộng
              </strong>

              <p>
                Câu chuyện di sản tiếp tục sau
                khi người dùng rời không gian trưng bày.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          03 — FEATURED PRODUCTS
      ====================================================== */}

      <section className="home-products">
        <div className="site-container">
          <SectionHeading
            eyebrow="SẢN PHẨM"
            title="Thiết kế đang được giới thiệu"
            description="Các phương án sản phẩm được phát triển từ những nguồn văn hóa khác nhau, từ cung đình Nguyễn đến văn hóa Óc Eo."
            actionLabel="Xem tất cả sản phẩm"
            actionHref="/products"
          />

          <ProductGrid
            products={featuredProducts}
            columns={4}
            showCategory
            showTraceability
          />
        </div>
      </section>

      {/* =====================================================
          04 — HERITAGE
      ====================================================== */}

      <section className="home-heritage">
        <div className="site-container">
          <SectionHeading
            eyebrow="DI SẢN"
            title="Bắt đầu từ nguồn"
            description="Khám phá những hiện vật, hình tượng và nguồn tư liệu đang được sử dụng làm cơ sở phát triển các sản phẩm trong gian hàng."
            actionLabel="Khám phá Di sản"
            actionHref="/heritage"
          />

          <div className="home-heritage__grid">
            {featuredHeritage.map(
              (heritage) => (
                <HeritageCard
                  key={heritage.id}
                  heritage={heritage}
                  showPeriod
                  showProductCount
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — HERITAGE TO DESIGN
      ====================================================== */}

      <section className="home-process">
        <div className="site-container home-process__grid">
          {/* TITLE */}

          <div className="home-process__intro">
            <p className="home-process__eyebrow">
              TỪ DI SẢN ĐẾN THIẾT KẾ
            </p>

            <h2 className="home-process__title">
              Một nguồn văn hóa có thể được chuyển hóa
              theo nhiều cách
            </h2>

            <p className="home-process__description">
              Thiết kế không nhất thiết sao chép
              nguyên trạng hiện vật. Hình khối,
              họa tiết, màu sắc, bố cục hoặc câu
              chuyện có thể được lựa chọn và tổ
              chức lại để phù hợp với sản phẩm mới.
            </p>

            <Link
              href="/stories"
              className="home-process__link"
            >
              Đọc câu chuyện thiết kế

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          {/* PROCESS */}

          <div className="home-process__steps">
            <article className="home-process__step">
              <span>
                01
              </span>

              <div>
                <small>
                  NGUỒN
                </small>

                <h3>
                  Di sản
                </h3>

                <p>
                  Xác định hiện vật, tư liệu
                  hoặc nguồn văn hóa.
                </p>
              </div>
            </article>

            <article className="home-process__step">
              <span>
                02
              </span>

              <div>
                <small>
                  LỰA CHỌN
                </small>

                <h3>
                  Yếu tố khai thác
                </h3>

                <p>
                  Hình khối, họa tiết, màu sắc,
                  bố cục hoặc câu chuyện.
                </p>
              </div>
            </article>

            <article className="home-process__step">
              <span>
                03
              </span>

              <div>
                <small>
                  CHUYỂN HÓA
                </small>

                <h3>
                  Thiết kế
                </h3>

                <p>
                  Tổ chức lại các yếu tố phù hợp
                  với công năng mới.
                </p>
              </div>
            </article>

            <article className="home-process__step">
              <span>
                04
              </span>

              <div>
                <small>
                  ĐẦU RA
                </small>

                <h3>
                  Sản phẩm
                </h3>

                <p>
                  Hình thành sản phẩm văn hóa
                  sáng tạo phục vụ người dùng.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — COLLECTIONS
      ====================================================== */}

      <section className="home-collections">
        <div className="site-container">
          <SectionHeading
            eyebrow="BỘ SƯU TẬP"
            title="Khám phá theo chủ đề"
            description="Một bộ sưu tập có thể kết nối nhiều loại sản phẩm khác nhau thông qua cùng một câu chuyện hoặc nguồn cảm hứng."
            actionLabel="Xem tất cả bộ sưu tập"
            actionHref="/collections"
          />

          <div className="home-collections__grid">
            {featuredCollections.map(
              (collection) => (
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                  showProductCount
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — GIFTS
      ====================================================== */}

      <section className="home-gifts">
        <div className="site-container">
          <div className="home-gifts__header">
            <div>
              <p className="home-gifts__eyebrow">
                QUÀ TẶNG
              </p>

              <h2 className="home-gifts__title">
                Chọn quà theo cách bạn muốn trao
              </h2>

              <p className="home-gifts__description">
                Từ quà lưu niệm nhỏ sau chuyến
                tham quan đến quà tặng văn hóa
                và sản phẩm dành cho đối tác.
              </p>
            </div>

            <Link
              href="/gifts"
              className="home-gifts__all"
            >
              Khám phá Quà tặng
              <span aria-hidden="true">
                {" "}
                →
              </span>
            </Link>
          </div>

          <div className="home-gifts__grid">
            {featuredGifts.map(
              (gift, index) => (
                <Link
                  key={gift.id}
                  href={`/gifts#${gift.slug}`}
                  className="home-gift-card"
                >
                  <div className="home-gift-card__image">
                    {gift.image ? (
                      <img
                        src={siteAssetPath(gift.image)}
                        alt={gift.name}
                        loading="lazy"
                      />
                    ) : (
                      <div className="home-gift-card__placeholder">
                        Quà tặng
                      </div>
                    )}

                    <span className="home-gift-card__number">
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>
                  </div>

                  <div className="home-gift-card__body">
                    <h3>
                      {gift.name}
                    </h3>

                    <p>
                      {gift.description}
                    </p>

                    <strong>
                      Xem gợi ý
                      <span aria-hidden="true">
                        {" "}
                        →
                      </span>
                    </strong>
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — STORIES
      ====================================================== */}

      <section className="home-stories">
        <div className="site-container">
          <SectionHeading
            eyebrow="CÂU CHUYỆN"
            title="Đọc phía sau thiết kế"
            description="Tìm hiểu thêm về nguồn cảm hứng, bối cảnh văn hóa và quá trình chuyển hóa từ di sản thành sản phẩm."
            actionLabel="Tất cả câu chuyện"
            actionHref="/stories"
          />

          <div className="home-stories__grid">
            {featuredStories.map(
              (story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  showCategory
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          09 — TRACEABILITY FEATURE
      ====================================================== */}

      {traceProduct &&
        traceProduct.traceability
          .enabled && (
          <section className="home-trace">
            <div className="site-container home-trace__grid">
              {/* LEFT */}

              <div className="home-trace__content">
                <p className="home-trace__eyebrow">
                  TRUY XUẤT SẢN PHẨM
                </p>

                <h2 className="home-trace__title">
                  Từ vật phẩm bạn cầm trên tay
                  đến hồ sơ dữ liệu phía sau
                </h2>

                <p className="home-trace__description">
                  Với sản phẩm hỗ trợ truy xuất,
                  người dùng có thể tiếp tục kiểm
                  tra thông tin nhận diện, nguồn
                  văn hóa, quá trình phát triển
                  thiết kế và các dữ liệu được
                  công bố cho sản phẩm.
                </p>

                <div className="home-trace__actions">
                  <Link
                    href={`/products/${traceProduct.slug}`}
                    className="home-trace__primary"
                  >
                    Xem sản phẩm trình diễn

                    <span aria-hidden="true">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/stories/tu-san-pham-den-ho-so-truy-xuat"
                    className="home-trace__secondary"
                  >
                    Truy xuất hoạt động như thế nào?
                  </Link>
                </div>
              </div>

              {/* RIGHT */}

              <div className="home-trace__card">
                <div className="home-trace__card-top">
                  <span>
                    HỒ SƠ MẪU
                  </span>

                  <strong>
                    ĐÃ KẾT NỐI
                  </strong>
                </div>

                <div className="home-trace__product">
                  <div className="home-trace__product-image">
                    {traceProduct.images[0] ? (
                      <img
                        src={siteAssetPath(
                          traceProduct
                            .images[0]
                            .src,
                        )}
                        alt={
                          traceProduct
                            .images[0]
                            .alt
                        }
                      />
                    ) : (
                      <div className="home-trace__product-placeholder">
                        STT-01
                      </div>
                    )}
                  </div>

                  <div className="home-trace__product-info">
                    <small>
                      SẢN PHẨM
                    </small>

                    <h3>
                      {
                        traceProduct.name
                      }
                    </h3>

                    <dl>
                      <div>
                        <dt>
                          Mã
                        </dt>

                        <dd>
                          {
                            traceProduct.sku
                          }
                        </dd>
                      </div>

                      <div>
                        <dt>
                          Trạng thái
                        </dt>

                        <dd>
                          Hỗ trợ truy xuất
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="home-trace__flow">
                  <div>
                    <span>
                      01
                    </span>

                    <strong>
                      Sản phẩm
                    </strong>
                  </div>

                  <i aria-hidden="true">
                    →
                  </i>

                  <div>
                    <span>
                      02
                    </span>

                    <strong>
                      Nguồn di sản
                    </strong>
                  </div>

                  <i aria-hidden="true">
                    →
                  </i>

                  <div>
                    <span>
                      03
                    </span>

                    <strong>
                      Hồ sơ dữ liệu
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      {/* =====================================================
          10 — ABOUT / FINAL CTA
      ====================================================== */}

      <section className="home-about">
        <div className="site-container home-about__grid">
          <div>
            <p className="home-about__eyebrow">
              GIAN HÀNG ĐIỆN TỬ
            </p>

            <h2 className="home-about__title">
              Một điểm tiếp nối của trải nghiệm bảo tàng
            </h2>
          </div>

          <div className="home-about__content">
            <p>
              Gian hàng không chỉ là nơi giới
              thiệu sản phẩm. Đây còn là không
              gian giúp người dùng tiếp tục tìm
              hiểu câu chuyện của hiện vật và
              nguồn văn hóa thông qua những
              sản phẩm được phát triển từ chúng.
            </p>

            <Link
              href="/about"
              className="home-about__link"
            >
              Tìm hiểu về gian hàng

              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
