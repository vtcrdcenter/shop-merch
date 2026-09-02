// app/gifts/page.tsx

import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title:
    "Quà tặng | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",

  description:
    "Khám phá các sản phẩm văn hóa sáng tạo theo nhu cầu quà tặng: quà lưu niệm, quà văn hóa, quà cá nhân, sản phẩm sưu tầm và quà dành cho đối tác.",
};

/* =========================================================
   PAGE
   ========================================================= */

export default function GiftsPage() {
  const giftGroups =
    getAllGiftGroups();

  const featuredGiftGroups =
    getFeaturedGiftGroups();

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
            Tìm một món quà nhỏ sau
            chuyến tham quan, một vật phẩm
            mang dấu ấn văn hóa hay một
            lựa chọn dành cho người thân,
            đối tác và những dịp đặc biệt.
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
          04 — FEATURED GIFT GROUPS
      ====================================================== */}

      {featuredGiftGroups.length >
        0 && (
        <section className="gifts-featured">
          <div className="site-container">
            <SectionHeading
              eyebrow="GỢI Ý"
              title="Chọn quà theo nhu cầu"
              description="Bắt đầu từ người nhận hoặc dịp tặng để tìm những sản phẩm phù hợp hơn."
            />

            <div className="gifts-featured__grid">
              {featuredGiftGroups.map(
                (
                  gift,
                ) => (
                  <a
                    key={
                      gift.id
                    }
                    href={`#${gift.slug}`}
                    className="gift-feature-card"
                  >
                    <div className="gift-feature-card__image">
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
                        <div className="gift-feature-card__placeholder">
                          Quà tặng
                        </div>
                      )}
                    </div>

                    <div className="gift-feature-card__content">
                      <p className="gift-feature-card__eyebrow">
                        GỢI Ý QUÀ TẶNG
                      </p>

                      <h2 className="gift-feature-card__title">
                        {
                          gift.name
                        }
                      </h2>

                      <p className="gift-feature-card__description">
                        {
                          gift.description
                        }
                      </p>

                      <span className="gift-feature-card__link">
                        Xem gợi ý

                        <span
                          aria-hidden="true"
                        >
                          {" "}
                          →
                        </span>
                      </span>
                    </div>
                  </a>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          05 — ALL GIFT GROUPS
      ====================================================== */}

      <section className="gifts-groups">
        <div className="site-container">
          <SectionHeading
            eyebrow="KHÁM PHÁ"
            title="Gợi ý quà tặng theo từng nhu cầu"
            description="Mỗi nhóm tập hợp những sản phẩm phù hợp với một cách tặng, người nhận hoặc mục đích sử dụng khác nhau."
          />

          <div className="gifts-groups__list">
            {giftGroups.map(
              (
                gift,
                index,
              ) => {
                const giftProducts =
                  gift.productSlugs
                    .map(
                      (
                        slug,
                      ) =>
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
                            1,
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

      {/* =====================================================
          06 — GIFT STORY
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
              Những sản phẩm trong gian hàng
              được phát triển từ hiện vật,
              hình tượng, tư liệu và câu chuyện
              lịch sử. Vì vậy, mỗi món quà
              đều có một nguồn cảm hứng
              có thể tiếp tục khám phá.
            </p>

            <p>
              Với sản phẩm có hỗ trợ truy xuất,
              người nhận có thể xem thêm
              thông tin về nguồn văn hóa,
              thiết kế và hồ sơ dữ liệu liên quan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
