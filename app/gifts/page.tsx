// app/gifts/page.tsx

import type {
  Metadata,
} from "next";

import {
  siteAssetPath,
} from "../../lib/site-path";

import Breadcrumb from "../components/Breadcrumb";
import ProductGrid from "../components/ProductGrid";
import SectionHeading from "../components/SectionHeading";

import {
  getAllGiftGroups,
  getFeaturedGiftGroups,
} from "../../data/gifts";

import {
  getProductBySlug,
} from "../../data/products";

/* =========================================================
   METADATA
   ========================================================= */

export const metadata:
  Metadata = {
  title:
    "Quà tặng",

  description:
    "Khám phá các sản phẩm văn hóa sáng tạo theo nhu cầu quà tặng: quà lưu niệm, quà văn hóa, quà cá nhân, sản phẩm sưu tầm và quà dành cho đối tác.",
};

/* =========================================================
   HELPER
   ========================================================= */

function getGiftProducts(
  productSlugs: string[],
) {
  return productSlugs
    .map(
      (slug) =>
        getProductBySlug(
          slug,
        ),
    )
    .filter(
      (
        product,
      ): product is NonNullable<
        ReturnType<
          typeof getProductBySlug
        >
      > =>
        Boolean(
          product,
        ),
    );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function GiftsPage() {
  const giftGroups =
    getAllGiftGroups();

  /*
   * Chỉ chọn 1 nhóm làm spotlight.
   * Không lặp 3 featured rồi
   * hiển thị lại cả 6 nhóm.
   */
  const spotlightGift =
    getFeaturedGiftGroups()[0];

  const remainingGiftGroups =
    spotlightGift
      ? giftGroups.filter(
          (gift) =>
            gift.id !==
            spotlightGift.id,
        )
      : giftGroups;

  const spotlightProducts =
    spotlightGift
      ? getGiftProducts(
          spotlightGift.productSlugs,
        )
      : [];

  return (
    <main className="gifts-page">
      {/* =====================================================
          01 — BREADCRUMB
      ====================================================== */}

      <div className="site-container gifts-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label:
                "Quà tặng",
            },
          ]}
        />
      </div>

      {/* =====================================================
          02 — HERO
      ====================================================== */}

      <section className="gifts-hero">
        <div className="site-container gifts-hero__inner">
          <p className="gifts-hero__eyebrow">
            QUÀ TẶNG
          </p>

          <h1 className="gifts-hero__title">
            Chọn một món quà
            mang câu chuyện văn hóa
          </h1>

          <p className="gifts-hero__description">
            Từ một vật phẩm nhỏ sau
            chuyến tham quan đến món quà
            dành cho người thân, đối tác
            hoặc những dịp đặc biệt,
            các sản phẩm được gợi ý
            theo nhu cầu sử dụng cụ thể.
          </p>

          <p className="gifts-hero__description gifts-hero__description--secondary">
            Mỗi lựa chọn đều có thể
            tiếp tục dẫn người nhận
            đến nguồn cảm hứng,
            câu chuyện thiết kế
            và thông tin sản phẩm liên quan.
          </p>

          <div className="gifts-hero__meta">
            <span>
              {
                giftGroups.length
              }{" "}
              nhóm gợi ý
            </span>

            <span
              aria-hidden="true"
            >
              ·
            </span>

            <span>
              Từ quà lưu niệm
              đến quà tặng văn hóa
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — QUICK NAV
      ====================================================== */}

      {giftGroups.length >
        0 && (
        <section className="gifts-nav">
          <div className="site-container">
            <nav
              className="gifts-nav__list"
              aria-label="Các nhóm quà tặng"
            >
              {giftGroups.map(
                (
                  gift,
                ) => (
                  <a
                    key={
                      gift.id
                    }
                    href={`#${gift.slug}`}
                    className="gifts-nav__item"
                  >
                    {
                      gift.shortName
                    }
                  </a>
                ),
              )}
            </nav>
          </div>
        </section>
      )}

      {/* =====================================================
          04 — SPOTLIGHT GIFT
      ====================================================== */}

      {spotlightGift && (
        <section
          id={
            spotlightGift.slug
          }
          className="gifts-spotlight"
        >
          <div className="site-container">
            <SectionHeading
              eyebrow="GỢI Ý BẮT ĐẦU"
              title={spotlightGift.name}
              description={
                spotlightGift.description
              }
            />

            <div className="gifts-spotlight__grid">
              {/* IMAGE */}

              <div className="gifts-spotlight__image">
                {spotlightGift.image ? (
                  <img
                    src={siteAssetPath(
                      spotlightGift.image,
                    )}
                    alt={
                      spotlightGift.name
                    }
                  />
                ) : (
                  <div className="gifts-spotlight__placeholder">
                    Quà tặng
                  </div>
                )}
              </div>

              {/* CONTENT */}

              <div className="gifts-spotlight__content">
                <p className="gifts-spotlight__eyebrow">
                  PHÙ HỢP VỚI
                </p>

                <p className="gifts-spotlight__use-case">
                  {
                    spotlightGift.useCase
                  }
                </p>

                <div className="gifts-spotlight__count">
                  <strong>
                    {
                      spotlightProducts.length
                    }
                  </strong>

                  <span>
                    sản phẩm gợi ý
                  </span>
                </div>

                <a
                  href="#gift-groups"
                  className="gifts-spotlight__link"
                >
                  Khám phá thêm
                  các nhóm quà

                  <span
                    aria-hidden="true"
                  >
                    {" "}
                    ↓
                  </span>
                </a>
              </div>
            </div>

            {spotlightProducts.length >
              0 && (
              <div className="gifts-spotlight__products">
                <ProductGrid
                  products={
                    spotlightProducts
                  }
                  columns={3}
                  showCategory
                  showTraceability
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* =====================================================
          05 — OTHER GIFT GROUPS
      ====================================================== */}

      {remainingGiftGroups.length >
        0 && (
        <section
          id="gift-groups"
          className="gifts-groups"
        >
          <div className="site-container">
            <SectionHeading
              eyebrow="KHÁM PHÁ THÊM"
              title="Chọn quà theo từng nhu cầu"
              description="Các nhóm bên dưới được tổ chức theo người nhận, mục đích sử dụng và cách lựa chọn quà."
            />

            <div className="gifts-groups__list">
              {remainingGiftGroups.map(
                (
                  gift,
                  index,
                ) => {
                  const giftProducts =
                    getGiftProducts(
                      gift.productSlugs,
                    );

                  return (
                    <section
                      key={
                        gift.id
                      }
                      id={
                        gift.slug
                      }
                      className="gift-group"
                    >
                      <div className="gift-group__header">
                        <div className="gift-group__number">
                          {String(
                            index +
                              2,
                          ).padStart(
                            2,
                            "0",
                          )}
                        </div>

                        <div className="gift-group__heading">
                          <p className="gift-group__eyebrow">
                            GỢI Ý QUÀ TẶNG
                          </p>

                          <h2 className="gift-group__title">
                            {
                              gift.name
                            }
                          </h2>

                          <p className="gift-group__description">
                            {
                              gift.description
                            }
                          </p>
                        </div>

                        <div className="gift-group__use-case">
                          <span>
                            Phù hợp với
                          </span>

                          <p>
                            {
                              gift.useCase
                            }
                          </p>
                        </div>
                      </div>

                      <div className="gift-group__products">
                        <ProductGrid
                          products={
                            giftProducts
                          }
                          columns={
                            giftProducts.length ===
                            2
                              ? 2
                              : 3
                          }
                          showCategory
                          showTraceability
                          emptyMessage="Hiện chưa có sản phẩm trong nhóm quà tặng này."
                        />
                      </div>
                    </section>
                  );
                },
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          06 — GIFT PHILOSOPHY
      ====================================================== */}

      <section className="gifts-philosophy">
        <div className="site-container gifts-philosophy__grid">
          <div className="gifts-philosophy__heading">
            <p className="gifts-philosophy__eyebrow">
              MỘT MÓN QUÀ CÓ CÂU CHUYỆN
            </p>

            <h2 className="gifts-philosophy__title">
              Giá trị của món quà
              không dừng ở hình thức
            </h2>
          </div>

          <div className="gifts-philosophy__content">
            <p>
              Các sản phẩm trong gian hàng
              được phát triển từ hiện vật,
              hình tượng, tư liệu và
              câu chuyện lịch sử.
              Vì vậy, món quà không chỉ
              là một vật phẩm độc lập.
            </p>

            <p>
              Từ sản phẩm, người nhận
              có thể tiếp tục khám phá
              nguồn di sản, bộ sưu tập,
              câu chuyện thiết kế
              và hồ sơ truy xuất
              khi sản phẩm có hỗ trợ.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
