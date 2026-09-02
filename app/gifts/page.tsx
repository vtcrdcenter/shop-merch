// app/gifts/page.tsx

import type { Metadata } from "next";
import { siteAssetPath } from "../../lib/site-path";

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

export const metadata: Metadata = {
  title:
    "Quà tặng | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",

  description:
    "Khám phá các sản phẩm văn hóa sáng tạo theo mục đích quà tặng, từ quà lưu niệm, quà văn hóa đến sản phẩm sưu tầm và quà doanh nghiệp.",
};

export default function GiftsPage() {
  const giftGroups =
    getAllGiftGroups();

  const featuredGiftGroups =
    getFeaturedGiftGroups();

  return (
    <main className="gifts-page">
      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <div className="site-container gifts-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label: "Quà tặng",
            },
          ]}
        />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="gifts-hero">
        <div className="site-container gifts-hero__inner">
          <p className="gifts-hero__eyebrow">
            QUÀ TẶNG
          </p>

          <h1 className="gifts-hero__title">
            Chọn một món quà mang câu chuyện văn hóa
          </h1>

          <p className="gifts-hero__description">
            Khám phá sản phẩm theo mục đích sử dụng:
            một món quà nhỏ sau chuyến tham quan,
            quà tặng văn hóa, sản phẩm cá nhân,
            vật phẩm sưu tầm hoặc bộ quà dành cho
            đối tác và sự kiện.
          </p>

          <div className="gifts-hero__meta">
            <span>
              {giftGroups.length} nhóm gợi ý
            </span>

            <span aria-hidden="true">
              ·
            </span>

            <span>
              Từ quà lưu niệm đến quà doanh nghiệp
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK NAV
      ====================================================== */}

      <section className="gifts-nav">
        <div className="site-container">
          <div
            className="gifts-nav__list"
            aria-label="Các nhóm quà tặng"
          >
            {giftGroups.map(
              (gift) => (
                <a
                  key={gift.id}
                  href={`#${gift.slug}`}
                  className="gifts-nav__item"
                >
                  {gift.shortName}
                </a>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED GIFT GROUPS
      ====================================================== */}

      {featuredGiftGroups.length > 0 && (
        <section className="gifts-featured">
          <div className="site-container">
            <SectionHeading
              eyebrow="GỢI Ý"
              title="Chọn quà theo nhu cầu"
              description="Thay vì bắt đầu từ loại sản phẩm, bạn có thể lựa chọn theo mục đích tặng và người nhận."
            />

            <div className="gifts-featured__grid">
              {featuredGiftGroups.map(
                (gift) => (
                  <a
                    key={gift.id}
                    href={`#${gift.slug}`}
                    className="gift-feature-card"
                  >
                    <div className="gift-feature-card__image">
                      {gift.image ? (
                        <img
                          src={siteAssetPath(gift.image)}
                          alt={gift.name}
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
                        {gift.name}
                      </h2>

                      <p className="gift-feature-card__description">
                        {gift.description}
                      </p>

                      <span className="gift-feature-card__link">
                        Khám phá
                        <span aria-hidden="true">
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
          ALL GIFT GROUPS
      ====================================================== */}

      <section className="gifts-groups">
        <div className="site-container">
          <SectionHeading
            eyebrow="TẤT CẢ GỢI Ý"
            title="Khám phá sản phẩm theo mục đích tặng"
            description="Mỗi nhóm dưới đây sử dụng các sản phẩm hiện có trong gian hàng và tổ chức lại theo nhu cầu mua."
          />

          <div className="gifts-groups__list">
            {giftGroups.map(
              (gift, index) => {
                const giftProducts =
                  gift.productSlugs
                    .map((slug) =>
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
                    key={gift.id}
                    id={gift.slug}
                    className="gift-group"
                  >
                    <div className="gift-group__header">
                      <div className="gift-group__number">
                        {String(
                          index + 1,
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
                          {gift.name}
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
                        emptyMessage="Nhóm quà tặng này hiện chưa có sản phẩm."
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
          GIFT PHILOSOPHY
      ====================================================== */}

      <section className="gifts-philosophy">
        <div className="site-container gifts-philosophy__grid">
          <div className="gifts-philosophy__heading">
            <p className="gifts-philosophy__eyebrow">
              MỘT MÓN QUÀ CÓ NGUỒN
            </p>

            <h2 className="gifts-philosophy__title">
              Không chỉ là một vật phẩm lưu niệm
            </h2>
          </div>

          <div className="gifts-philosophy__content">
            <p>
              Các sản phẩm trong gian hàng được
              phát triển từ hiện vật, hình tượng,
              tư liệu và câu chuyện lịch sử.
              Vì vậy, việc lựa chọn quà tặng cũng
              có thể bắt đầu từ chính câu chuyện
              gắn với sản phẩm.
            </p>

            <p>
              Với các sản phẩm hỗ trợ truy xuất,
              người nhận có thể tiếp tục tìm hiểu
              về nguồn di sản, quá trình phát triển
              thiết kế và các thông tin liên quan
              được công bố trên hệ thống.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
