// app/heritage/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

import {
  notFound,
} from "next/navigation";

import {
  siteAssetPath,
} from "../../../lib/site-path";

import Breadcrumb from "../../components/Breadcrumb";
import ProductGrid from "../../components/ProductGrid";
import SectionHeading from "../../components/SectionHeading";
import StoryCard from "../../components/StoryCard";

import {
  getAllHeritageSources,
  getHeritageBySlug,
} from "../../../data/heritage";

import {
  getProductBySlug,
} from "../../../data/products";

import {
  getPublishedStories,
} from "../../../data/stories";

type HeritageDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   TYPE LABELS
   ========================================================= */

const heritageTypeLabels = {
  artifact: "Hiện vật",
  costume: "Triều phục",
  archaeology: "Khảo cổ",
  "decorative-art": "Mỹ thuật trang trí",
  seal: "Bảo ấn",
  "reference-object": "Hiện vật tham chiếu",
} as const;

/* =========================================================
   STATIC PARAMS
   ========================================================= */

export async function generateStaticParams() {
  return getAllHeritageSources().map(
    (heritage) => ({
      slug: heritage.slug,
    }),
  );
}

/* =========================================================
   METADATA
   ========================================================= */

export async function generateMetadata({
  params,
}: HeritageDetailPageProps): Promise<Metadata> {
  const { slug } =
    await params;

  const heritage =
    getHeritageBySlug(
      slug,
    );

  if (!heritage) {
    return {
      title:
        "Không tìm thấy nguồn di sản",
    };
  }

  const primaryImage =
    heritage.images[0];

  return {
    title:
      heritage.name,

    description:
      heritage.shortDescription,

    openGraph: {
      title:
        heritage.name,

      description:
        heritage.shortDescription,

      type:
        "article",

      images:
        primaryImage
          ? [
              {
                url:
                  siteAssetPath(
                    primaryImage.src,
                  ),

                alt:
                  primaryImage.alt,
              },
            ]
          : undefined,
    },
  };
}

/* =========================================================
   PAGE
   ========================================================= */

export default async function HeritageDetailPage({
  params,
}: HeritageDetailPageProps) {
  const { slug } =
    await params;

  const heritage =
    getHeritageBySlug(
      slug,
    );

  if (!heritage) {
    notFound();
  }

  const primaryImage =
    heritage.images[0];

  const typeLabel =
    heritageTypeLabels[
      heritage.type
    ];

  /* ========================================================
     PRODUCTS
     ======================================================== */

  const products =
    heritage.productSlugs
      .map(
        (productSlug) =>
          getProductBySlug(
            productSlug,
          ),
      )
      .filter(
        (
          product,
        ): product is NonNullable<
          ReturnType<
            typeof getProductBySlug
          >
        > => Boolean(product),
      );

  /* ========================================================
     STORIES
     ======================================================== */

  const relatedStories =
    getPublishedStories()
      .filter(
        (story) =>
          story.heritageSlugs.includes(
            heritage.slug,
          ),
      )
      .slice(0, 3);

  return (
    <main className="heritage-detail-page">
      {/* =====================================================
          01 — BREADCRUMB
      ====================================================== */}

      <div className="site-container heritage-detail-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label: "Di sản",
              href: "/heritage",
            },

            {
              label:
                heritage.shortName,
            },
          ]}
        />
      </div>

      {/* =====================================================
          02 — HERO
      ====================================================== */}

      <section className="heritage-detail-hero">
        <div className="site-container heritage-detail-hero__grid">
          {/* CONTENT */}

          <div className="heritage-detail-hero__content">
            <p className="heritage-detail-hero__eyebrow">
              {typeLabel}
            </p>

            <h1 className="heritage-detail-hero__title">
              {heritage.name}
            </h1>

            <p className="heritage-detail-hero__description">
              {
                heritage.shortDescription
              }
            </p>

            <dl className="heritage-detail-hero__meta">
              {heritage.period && (
                <div>
                  <dt>
                    Niên đại
                  </dt>

                  <dd>
                    {
                      heritage.period
                    }
                  </dd>
                </div>
              )}

              {heritage.managingInstitution && (
                <div>
                  <dt>
                    Đơn vị quản lý
                  </dt>

                  <dd>
                    {
                      heritage.managingInstitution
                    }
                  </dd>
                </div>
              )}

              <div>
                <dt>
                  Sản phẩm liên quan
                </dt>

                <dd>
                  {
                    products.length
                  }
                </dd>
              </div>
            </dl>
          </div>

          {/* IMAGE */}

          <div className="heritage-detail-hero__image">
            {primaryImage ? (
              <img
                src={siteAssetPath(
                  primaryImage.src,
                )}
                alt={
                  primaryImage.alt
                }
              />
            ) : (
              <div className="heritage-detail-hero__placeholder">
                Hình ảnh tư liệu
                đang được cập nhật
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — ABOUT HERITAGE
      ====================================================== */}

      <section className="heritage-detail-about">
        <div className="site-container heritage-detail-about__grid">
          <div className="heritage-detail-about__heading">
            <p className="heritage-detail-about__eyebrow">
              NGUỒN CẢM HỨNG
            </p>

            <h2 className="heritage-detail-about__title">
              Câu chuyện phía sau
              thiết kế
            </h2>
          </div>

          <div className="heritage-detail-about__content">
            <p>
              {
                heritage.description
              }
            </p>
            <div className="demo-note">
              <strong>Ghi chú hồ sơ:</strong>{" "}
              {heritage.documentationNote}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — DESIGN ELEMENTS
      ====================================================== */}

      {heritage.designElements.length >
        0 && (
        <section className="heritage-detail-elements">
          <div className="site-container">
            <SectionHeading
              eyebrow="CHI TIẾT NHẬN DIỆN"
              title="Những yếu tố được đưa vào thiết kế"
              description="Các chi tiết dưới đây được ghi nhận trong dữ liệu nguồn và được sử dụng ở những mức độ khác nhau tùy theo từng sản phẩm."
            />

            <div className="heritage-detail-elements__grid">
              {heritage.designElements.map(
                (
                  element,
                  index,
                ) => (
                  <article
                    key={
                      element
                    }
                    className="heritage-detail-elements__item"
                  >
                    <span>
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <h3>
                      {element}
                    </h3>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          05 — PRODUCTS
      ====================================================== */}

      {products.length > 0 && (
        <section className="heritage-detail-products">
          <div className="site-container">
            <SectionHeading
              eyebrow="SẢN PHẨM LIÊN QUAN"
              title="Từ nguồn cảm hứng đến sản phẩm"
              description="Khám phá những thiết kế hiện đang sử dụng nguồn di sản này làm điểm khởi đầu."
              actionLabel="Xem tất cả sản phẩm"
              actionHref="/products"
            />

            <ProductGrid
              products={products}
              columns={3}
              showCategory
              showTraceability
            />
          </div>
        </section>
      )}

      {/* =====================================================
          06 — STORIES
      ====================================================== */}

      {relatedStories.length > 0 && (
        <section className="heritage-detail-stories">
          <div className="site-container">
            <SectionHeading
              eyebrow="CÂU CHUYỆN"
              title="Đọc thêm về nguồn cảm hứng này"
              description="Những bài viết giúp làm rõ hơn mối liên hệ giữa nguồn di sản và các thiết kế liên quan."
              actionLabel="Xem tất cả câu chuyện"
              actionHref="/stories"
            />

            <div className="heritage-detail-stories__grid">
              {relatedStories.map(
                (story) => (
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
      )}

      {/* =====================================================
          07 — MORE HERITAGE
      ====================================================== */}

      <section className="heritage-detail-more">
        <div className="site-container heritage-detail-more__inner">
          <div>
            <p className="heritage-detail-more__eyebrow">
              KHÁM PHÁ TIẾP
            </p>

            <h2>
              Xem những nguồn
              cảm hứng khác
            </h2>
          </div>

          <Link
            href="/heritage"
            className="heritage-detail-more__link"
          >
            Tất cả nguồn di sản

            <span
              aria-hidden="true"
            >
              {" "}
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
