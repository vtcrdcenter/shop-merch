// app/stories/[slug]/page.tsx

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
import HeritageCard from "../../components/HeritageCard";
import SectionHeading from "../../components/SectionHeading";
import StoryCard from "../../components/StoryCard";

import {
  getPublishedStories,
  getStoryBySlug,
} from "../../../data/stories";

import {
  getProductBySlug,
} from "../../../data/products";

import {
  getHeritageBySlug,
} from "../../../data/heritage";

type StoryDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   CATEGORY LABELS
   ========================================================= */

const categoryLabels = {
  heritage:
    "Câu chuyện di sản",

  design:
    "Từ di sản đến thiết kế",

  craft:
    "Quá trình thực hiện",

  traceability:
    "Truy xuất & dữ liệu",
} as const;

/* =========================================================
   STATIC PARAMS
   ========================================================= */

export async function generateStaticParams() {
  return getPublishedStories().map(
    (
      story,
    ) => ({
      slug:
        story.slug,
    }),
  );
}

/* =========================================================
   METADATA
   ========================================================= */

export async function generateMetadata({
  params,
}: StoryDetailPageProps): Promise<Metadata> {
  const { slug } =
    await params;

  const story =
    getStoryBySlug(
      slug,
    );

  if (
    !story ||
    story.status !==
      "published"
  ) {
    return {
      title:
        "Không tìm thấy câu chuyện",
    };
  }

  const primaryImage =
    story.images[0];

  return {
    title:
      story.title,

    description:
      story.excerpt,

    openGraph: {
      title:
        story.title,

      description:
        story.excerpt,

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

export default async function StoryDetailPage({
  params,
}: StoryDetailPageProps) {
  const { slug } =
    await params;

  const story =
    getStoryBySlug(
      slug,
    );

  if (
    !story ||
    story.status !==
      "published"
  ) {
    notFound();
  }

  const primaryImage =
    story.images[0];

  /* ========================================================
     RELATED PRODUCTS
     ======================================================== */

  const products =
    story.productSlugs
      .map(
        (
          productSlug,
        ) =>
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
        > =>
          Boolean(
            product,
          ),
      );

  /* ========================================================
     RELATED HERITAGE
     ======================================================== */

  const heritageSources =
    story.heritageSlugs
      .map(
        (
          heritageSlug,
        ) =>
          getHeritageBySlug(
            heritageSlug,
          ),
      )
      .filter(
        (
          heritage,
        ): heritage is NonNullable<
          ReturnType<
            typeof getHeritageBySlug
          >
        > =>
          Boolean(
            heritage,
          ),
      );

  /* ========================================================
     RELATED STORIES
     ======================================================== */

  const relatedStories =
    getPublishedStories()
      .filter(
        (
          item,
        ) =>
          item.slug !==
          story.slug,
      )
      .map(
        (
          item,
        ) => {
          let score = 0;

          if (
            item.category ===
            story.category
          ) {
            score += 3;
          }

          const sharedProduct =
            item.productSlugs.some(
              (
                productSlug,
              ) =>
                story.productSlugs.includes(
                  productSlug,
                ),
            );

          if (
            sharedProduct
          ) {
            score += 4;
          }

          const sharedHeritage =
            item.heritageSlugs.some(
              (
                heritageSlug,
              ) =>
                story.heritageSlugs.includes(
                  heritageSlug,
                ),
            );

          if (
            sharedHeritage
          ) {
            score += 5;
          }

          return {
            story:
              item,

            score,
          };
        },
      )
      .filter(
        (
          item,
        ) =>
          item.score >
          0,
      )
      .sort(
        (
          a,
          b,
        ) =>
          b.score -
          a.score,
      )
      .slice(
        0,
        3,
      )
      .map(
        (
          item,
        ) =>
          item.story,
      );

  const categoryLabel =
    categoryLabels[
      story.category
    ];

  const traceableProduct =
    products.find(
      (
        product,
      ) =>
        product
          .traceability
          .enabled,
    );

  return (
    <main className="story-detail-page">
      {/* =====================================================
          01 — BREADCRUMB
      ====================================================== */}

      <div className="site-container story-detail-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label:
                "Câu chuyện",

              href:
                "/stories",
            },

            {
              label:
                categoryLabel,

              href:
                `/stories#${story.category}`,
            },

            {
              label:
                story.shortTitle ||
                story.title,
            },
          ]}
        />
      </div>

      {/* =====================================================
          02 — STORY HERO
      ====================================================== */}

      <header className="story-detail-hero">
        <div className="site-container story-detail-hero__content">
          <p className="story-detail-hero__category">
            {
              categoryLabel
            }
          </p>

          {story.eyebrow && (
            <p className="story-detail-hero__eyebrow">
              {
                story.eyebrow
              }
            </p>
          )}

          <h1 className="story-detail-hero__title">
            {
              story.title
            }
          </h1>

          <p className="story-detail-hero__lead">
            {
              story.excerpt
            }
          </p>
        </div>
      </header>

      {/* =====================================================
          03 — HERO IMAGE
      ====================================================== */}

      <div className="site-container">
        <div className="story-detail-image">
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
            <div className="story-detail-image__placeholder">
              Hình ảnh câu chuyện
              đang được cập nhật
            </div>
          )}
        </div>
      </div>

      {/* =====================================================
          04 — STORY CONTENT
      ====================================================== */}

      <section className="story-detail-intro">
        <div className="site-container story-detail-intro__grid">
          <aside className="story-detail-intro__aside">
            <p>
              CÂU CHUYỆN
            </p>

            <span>
              {
                categoryLabel
              }
            </span>
          </aside>

          <div className="story-detail-intro__content">
            <p className="story-detail-intro__lead">
              {
                story.introduction
              }
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — HERITAGE SOURCES
      ====================================================== */}

      {heritageSources.length >
        0 && (
        <section className="story-detail-heritage">
          <div className="site-container">
            <SectionHeading
              eyebrow="NGUỒN CẢM HỨNG"
              title="Những nguồn văn hóa liên quan"
              description="Khám phá các hiện vật, hình tượng và tư liệu được liên kết trực tiếp với câu chuyện này."
              actionLabel="Xem tất cả nguồn di sản"
              actionHref="/heritage"
            />

            <div className="story-detail-heritage__grid">
              {heritageSources.map(
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
      )}

      {/* =====================================================
          06 — RELATED PRODUCTS
      ====================================================== */}

      {products.length >
        0 && (
        <section className="story-detail-products">
          <div className="site-container">
            <SectionHeading
              eyebrow="SẢN PHẨM LIÊN QUAN"
              title="Khám phá câu chuyện qua sản phẩm"
              description="Những thiết kế hiện được liên kết trực tiếp với câu chuyện này trong gian hàng."
              actionLabel="Xem tất cả sản phẩm"
              actionHref="/products"
            />

            <ProductGrid
              products={
                products
              }
              columns={3}
              showCategory
              showTraceability
            />
          </div>
        </section>
      )}

      {/* =====================================================
          07 — TRACEABILITY
      ====================================================== */}

      {traceableProduct && (
        <section className="story-detail-trace">
          <div className="site-container story-detail-trace__inner">
            <div className="story-detail-trace__content">
              <p className="story-detail-trace__eyebrow">
                TRUY XUẤT
              </p>

              <h2>
                Từ câu chuyện
                đến hồ sơ sản phẩm
              </h2>

              <p>
                Sản phẩm liên quan
                đến câu chuyện này
                có hỗ trợ truy xuất.
                Người dùng có thể
                tiếp tục kiểm tra
                thông tin được công bố
                trong hồ sơ sản phẩm.
              </p>
            </div>

            <Link
              href={`/products/${traceableProduct.slug}`}
              className="story-detail-trace__link"
            >
              Xem sản phẩm có truy xuất

              <span
                aria-hidden="true"
              >
                {" "}
                →
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* =====================================================
          08 — RELATED STORIES
      ====================================================== */}

      {relatedStories.length >
        0 && (
        <section className="story-detail-related">
          <div className="site-container">
            <SectionHeading
              eyebrow="ĐỌC TIẾP"
              title="Câu chuyện liên quan"
              description="Tiếp tục khám phá những nội dung có chung nguồn cảm hứng, sản phẩm hoặc chủ đề."
              actionLabel="Tất cả câu chuyện"
              actionHref="/stories"
            />

            <div className="story-detail-related__grid">
              {relatedStories.map(
                (
                  relatedStory,
                ) => (
                  <StoryCard
                    key={
                      relatedStory.id
                    }
                    story={
                      relatedStory
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
          09 — BACK
      ====================================================== */}

      <section className="story-detail-back">
        <div className="site-container story-detail-back__inner">
          <div>
            <p className="story-detail-back__eyebrow">
              KHÁM PHÁ THÊM
            </p>

            <h2>
              Những câu chuyện khác
              từ gian hàng
            </h2>
          </div>

          <Link
            href="/stories"
            className="story-detail-back__link"
          >
            Tất cả câu chuyện

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
