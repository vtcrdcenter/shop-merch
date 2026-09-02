// app/page.tsx

import type {
  Metadata,
} from "next";

import Link from "next/link";

import {
  siteAssetPath,
} from "../lib/site-path";

import ProductGrid from "./components/ProductGrid";
import HeritageCard from "./components/HeritageCard";
import CollectionCard from "./components/CollectionCard";
import StoryCard from "./components/StoryCard";
import SectionHeading from "./components/SectionHeading";

import {
  getAllProducts,
  getFeaturedProducts,
  getProductBySlug,
} from "../data/products";

import {
  getAllHeritageSources,
  getFeaturedHeritageSources,
} from "../data/heritage";

import {
  getAllCollections,
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

export const metadata:
  Metadata = {
  title:
    "Gian hàng điện tử",

  description:
    "Khám phá các sản phẩm văn hóa sáng tạo được phát triển từ hiện vật, tư liệu và câu chuyện lịch sử của Bảo tàng Lịch sử Quốc gia.",
};

/* =========================================================
   HELPERS
   ========================================================= */

function formatCount(
  value: number,
) {
  return String(
    value,
  ).padStart(
    2,
    "0",
  );
}

/* =========================================================
   HOME PAGE
   ========================================================= */

export default function HomePage() {
  /* ========================================================
     DATA COUNTS
     ======================================================== */

  const allProducts =
    getAllProducts();

  const allHeritage =
    getAllHeritageSources();

  const allCollections =
    getAllCollections();

  const productCount =
    allProducts.length;

  const heritageCount =
    allHeritage.length;

  const collectionCount =
    allCollections.length;

  /* ========================================================
     FEATURED CONTENT
     ======================================================== */

  const featuredProducts =
    getFeaturedProducts().slice(
      0,
      4,
    );

  const featuredHeritage =
    getFeaturedHeritageSources().slice(
      0,
      4,
    );

  const featuredCollections =
    getFeaturedCollections().slice(
      0,
      3,
    );

  const featuredStories =
    getFeaturedStories()
      .filter(
        (
          story,
        ) =>
          story.status ===
          "published",
      )
      .slice(
        0,
        3,
      );

  const featuredGifts =
    getFeaturedGiftGroups().slice(
      0,
      3,
    );

  /* ========================================================
     TRACEABILITY DEMO PRODUCT
     ======================================================== */

  /*
   * Dấu Ấn Thượng Triều Nguyễn hiện là case
   * có luồng dữ liệu đầy đủ nhất:
   *
   * sản phẩm
   * → nguồn di sản
   * → câu chuyện
   * → truy xuất
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
          {/* =================================================
              LEFT
          ================================================== */}

          <div className="home-hero__content">
            <p className="home-hero__eyebrow">
              GIAN HÀNG ĐIỆN TỬ ·
              BẢO TÀNG LỊCH SỬ QUỐC GIA
            </p>

            <h1 className="home-hero__title">
              Mang câu chuyện lịch sử
              vào những vật phẩm
              của hôm nay
            </h1>

            <p className="home-hero__description">
              Khám phá các sản phẩm văn hóa sáng tạo
              được phát triển từ hiện vật, tư liệu,
              hoa văn và câu chuyện lịch sử của
              Bảo tàng Lịch sử Quốc gia.
            </p>

            <div className="home-hero__actions">
              <Link
                href="/products"
                className="home-hero__primary"
              >
                Xem sản phẩm

                <span
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              <Link
                href="/heritage"
                className="home-hero__secondary"
              >
                Khám phá di sản
              </Link>
            </div>

            {/* ===============================================
                META
            ================================================ */}

            <div className="home-hero__meta">
              <div>
                <strong>
                  {formatCount(
                    productCount,
                  )}
                </strong>

                <span>
                  thiết kế đang giới thiệu
                </span>
              </div>

              <div>
                <strong>
                  {formatCount(
                    heritageCount,
                  )}
                </strong>

                <span>
                  nguồn di sản
                </span>
              </div>

              <div>
                <strong>
                  {formatCount(
                    collectionCount,
                  )}
                </strong>

                <span>
                  bộ sưu tập
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT
          ================================================== */}

          <div className="home-hero__visual">
            <div className="home-hero__product-image">
              {heroImage ? (
                <img
                  src={siteAssetPath(
                    heroImage.src,
                  )}
                  alt={
                    heroImage.alt
                  }
                />
              ) : (
                <div className="home-hero__placeholder">
                  Sản phẩm nổi bật
                </div>
              )}

              {heroProduct
                ?.traceability
                .enabled && (
                <span className="home-hero__trace-badge">
                  Có hồ sơ truy xuất
                </span>
              )}
            </div>

            {heroProduct && (
              <div className="home-hero__product-info">
                <p>
                  SẢN PHẨM NỔI BẬT
                </p>

                <h2>
                  {
                    heroProduct.name
                  }
                </h2>

                <span>
                  {
                    heroProduct.productType
                  }
                </span>

                <Link
                  href={`/products/${heroProduct.slug}`}
                >
                  Xem chi tiết

                  <span
                    aria-hidden="true"
                  >
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
                Bắt đầu từ di sản
              </strong>

              <p>
                Mỗi thiết kế được liên kết
                với hiện vật, tư liệu hoặc
                câu chuyện văn hóa cụ thể.
              </p>
            </div>
          </article>

          <article className="home-value">
            <span className="home-value__number">
              02
            </span>

            <div>
              <strong>
                Được chuyển hóa thành thiết kế
              </strong>

              <p>
                Hình khối, họa tiết và màu sắc
                được chọn lọc để phù hợp với
                công năng của sản phẩm mới.
              </p>
            </div>
          </article>

          <article className="home-value">
            <span className="home-value__number">
              03
            </span>

            <div>
              <strong>
                Có câu chuyện để tiếp tục khám phá
              </strong>

              <p>
                Người dùng có thể tiếp tục
                tìm hiểu nguồn cảm hứng phía
                sau từng thiết kế.
              </p>
            </div>
          </article>

          <article className="home-value">
            <span className="home-value__number">
              04
            </span>

            <div>
              <strong>
                Có thể kết nối hồ sơ truy xuất
              </strong>

              <p>
                Một số sản phẩm được liên kết
                với hồ sơ dữ liệu chi tiết
                trên hệ thống truy xuất.
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
            eyebrow="SẢN PHẨM NỔI BẬT"
            title="Những thiết kế đang được giới thiệu"
            description="Từ vật phẩm lưu niệm nhỏ đến phụ kiện cá nhân, mỗi sản phẩm mở ra một cách tiếp cận khác với di sản."
            actionLabel="Xem tất cả sản phẩm"
            actionHref="/products"
          />

          <ProductGrid
            products={
              featuredProducts
            }
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
            eyebrow="NGUỒN CẢM HỨNG"
            title="Khám phá từ di sản"
            description="Tìm hiểu những hiện vật, hình tượng và nguồn tư liệu đã trở thành điểm khởi đầu cho các thiết kế trong gian hàng."
            actionLabel="Xem tất cả nguồn di sản"
            actionHref="/heritage"
          />

          <div className="home-heritage__grid">
            {featuredHeritage.map(
              (
                heritage,
              ) => (
                <HeritageCard
                  key={
                    heritage.id
                  }
                  heritage={
                    heritage
                  }
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
          <div className="home-process__intro">
            <p className="home-process__eyebrow">
              TỪ DI SẢN ĐẾN THIẾT KẾ
            </p>

            <h2 className="home-process__title">
              Giữ tinh thần của nguồn,
              tạo hình thức cho đời sống mới
            </h2>

            <p className="home-process__description">
              Một sản phẩm không nhất thiết
              sao chép nguyên trạng hiện vật.
              Những yếu tố phù hợp được lựa chọn,
              giản lược và tổ chức lại để tạo nên
              một vật phẩm có công năng riêng.
            </p>

            <Link
              href="/stories"
              className="home-process__link"
            >
              Đọc câu chuyện thiết kế

              <span
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>

          <div className="home-process__steps">
            <article className="home-process__step">
              <span>
                01
              </span>

              <div>
                <small>
                  KHỞI ĐẦU
                </small>

                <h3>
                  Nguồn di sản
                </h3>

                <p>
                  Hiện vật, tư liệu,
                  hình tượng hoặc câu chuyện.
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
                  Chi tiết nhận diện
                </h3>

                <p>
                  Hình khối, hoa văn,
                  màu sắc và bố cục.
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
                  Ngôn ngữ thiết kế
                </h3>

                <p>
                  Tổ chức lại các chi tiết
                  cho phù hợp với sản phẩm.
                </p>
              </div>
            </article>

            <article className="home-process__step">
              <span>
                04
              </span>

              <div>
                <small>
                  THÀNH PHẨM
                </small>

                <h3>
                  Vật phẩm đương đại
                </h3>

                <p>
                  Một cách mới để mang
                  câu chuyện di sản vào đời sống.
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
            title="Khám phá theo từng mạch câu chuyện"
            description="Các sản phẩm có chung nguồn cảm hứng được đặt cạnh nhau để tạo nên những bộ sưu tập có bản sắc riêng."
            actionLabel="Xem tất cả bộ sưu tập"
            actionHref="/collections"
          />

          <div className="home-collections__grid">
            {featuredCollections.map(
              (
                collection,
              ) => (
                <CollectionCard
                  key={
                    collection.id
                  }
                  collection={
                    collection
                  }
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
                Chọn một món quà
                mang câu chuyện văn hóa
              </h2>

              <p className="home-gifts__description">
                Gợi ý sản phẩm theo mục đích sử dụng:
                quà lưu niệm, quà tặng cá nhân,
                quà văn hóa hoặc quà dành cho đối tác.
              </p>
            </div>

            <Link
              href="/gifts"
              className="home-gifts__all"
            >
              Xem gợi ý quà tặng

              <span
                aria-hidden="true"
              >
                {" "}
                →
              </span>
            </Link>
          </div>

          <div className="home-gifts__grid">
            {featuredGifts.map(
              (
                gift,
                index,
              ) => (
                <Link
                  key={
                    gift.id
                  }
                  href={`/gifts#${gift.slug}`}
                  className="home-gift-card"
                >
                  <div className="home-gift-card__image">
                    {gift.image ? (
                      <img
                        src={siteAssetPath(
                          gift.image,
                        )}
                        alt={
                          gift.name
                        }
                        loading="lazy"
                      />
                    ) : (
                      <div className="home-gift-card__placeholder">
                        Quà tặng
                      </div>
                    )}

                    <span className="home-gift-card__number">
                      {String(
                        index +
                          1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>
                  </div>

                  <div className="home-gift-card__body">
                    <h3>
                      {
                        gift.name
                      }
                    </h3>

                    <p>
                      {
                        gift.description
                      }
                    </p>

                    <strong>
                      Xem gợi ý

                      <span
                        aria-hidden="true"
                      >
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
            title="Đọc phía sau mỗi thiết kế"
            description="Từ một chi tiết trên hiện vật đến cách nó được đưa vào sản phẩm – những câu chuyện này giúp người xem hiểu thiết kế sâu hơn."
            actionLabel="Xem tất cả câu chuyện"
            actionHref="/stories"
          />

          <div className="home-stories__grid">
            {featuredStories.map(
              (
                story,
              ) => (
                <StoryCard
                  key={
                    story.id
                  }
                  story={
                    story
                  }
                  showCategory
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          09 — TRACEABILITY
      ====================================================== */}

      {traceProduct &&
        traceProduct
          .traceability
          .enabled && (
          <section className="home-trace">
            <div className="site-container home-trace__grid">
              <div className="home-trace__content">
                <p className="home-trace__eyebrow">
                  TRUY XUẤT SẢN PHẨM
                </p>

                <h2 className="home-trace__title">
                  Từ vật phẩm trên tay
                  đến hồ sơ phía sau thiết kế
                </h2>

                <p className="home-trace__description">
                  Với sản phẩm hỗ trợ truy xuất,
                  người dùng có thể tiếp tục kiểm tra
                  mã nhận diện, nguồn cảm hứng,
                  thông tin thiết kế và những dữ liệu
                  được công bố trên hệ thống.
                </p>

                <div className="home-trace__actions">
                  <Link
                    href={`/products/${traceProduct.slug}`}
                    className="home-trace__primary"
                  >
                    Xem sản phẩm mẫu

                    <span
                      aria-hidden="true"
                    >
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

              <div className="home-trace__card">
                <div className="home-trace__card-top">
                  <span>
                    HỒ SƠ TRÌNH DIỄN
                  </span>

                  <strong>
                    ĐÃ KẾT NỐI
                  </strong>
                </div>

                <div className="home-trace__product">
                  <div className="home-trace__product-image">
                    {traceProduct
                      .images[0] ? (
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
                          Hồ sơ
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

                  <i
                    aria-hidden="true"
                  >
                    →
                  </i>

                  <div>
                    <span>
                      02
                    </span>

                    <strong>
                      Nguồn cảm hứng
                    </strong>
                  </div>

                  <i
                    aria-hidden="true"
                  >
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
          10 — ABOUT
      ====================================================== */}

      <section className="home-about">
        <div className="site-container home-about__grid">
          <div>
            <p className="home-about__eyebrow">
              VỀ GIAN HÀNG
            </p>

            <h2 className="home-about__title">
              Một điểm tiếp nối
              của trải nghiệm bảo tàng
            </h2>
          </div>

          <div className="home-about__content">
            <p>
              Gian hàng điện tử giới thiệu
              các sản phẩm văn hóa sáng tạo
              gắn với hiện vật, tư liệu và
              câu chuyện lịch sử của
              Bảo tàng Lịch sử Quốc gia.
            </p>

            <Link
              href="/about"
              className="home-about__link"
            >
              Tìm hiểu về gian hàng

              <span
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
