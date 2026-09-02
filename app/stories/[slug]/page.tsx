// app/stories/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteAssetPath } from "../../../lib/site-path";

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

const categoryLabels = {
  heritage: "Câu chuyện di sản",
  design: "Từ di sản đến thiết kế",
  craft: "Quá trình thực hiện",
  traceability: "Bảo chứng & truy xuất",
} as const;

/* =========================================================
   STATIC PARAMS
   ========================================================= */

export async function generateStaticParams() {
  return getPublishedStories().map(
    (story) => ({
      slug: story.slug,
    }),
  );
}

/* =========================================================
   METADATA
   ========================================================= */

export async function generateMetadata({
  params,
}: StoryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const story =
    getStoryBySlug(slug);

  if (
    !story ||
    story.status !== "published"
  ) {
    return {
      title:
        "Không tìm thấy câu chuyện | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",
    };
  }

  return {
    title: `${story.title} | Câu chuyện | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia`,

    description:
      story.excerpt,

    openGraph: {
      title: story.title,

      description:
        story.excerpt,

      type: "article",

      images: story.image
        ? [
            {
              url:
                story.image,

              alt:
                story.title,
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
  const { slug } = await params;

  const story =
    getStoryBySlug(slug);

  if (
    !story ||
    story.status !== "published"
  ) {
    notFound();
  }

  const products =
    story.productSlugs
      .map((productSlug) =>
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

  const heritageSources =
    story.heritageSlugs
      .map((heritageSlug) =>
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
        > => Boolean(heritage),
      );

  const relatedStories =
    getPublishedStories()
      .filter(
        (item) =>
          item.slug !==
          story.slug,
      )
      .map((item) => {
        let score = 0;

        if (
          item.category ===
          story.category
        ) {
          score += 3;
        }

        const sharedProduct =
          item.productSlugs.some(
            (productSlug) =>
              story.productSlugs.includes(
                productSlug,
              ),
          );

        if (sharedProduct) {
          score += 4;
        }

        const sharedHeritage =
          item.heritageSlugs.some(
            (heritageSlug) =>
              story.heritageSlugs.includes(
                heritageSlug,
              ),
          );

        if (sharedHeritage) {
          score += 5;
        }

        return {
          story: item,
          score,
        };
      })
      .filter(
        (item) =>
          item.score > 0,
      )
      .sort(
        (a, b) =>
          b.score - a.score,
      )
      .slice(0, 3)
      .map(
        (item) =>
          item.story,
      );

  const categoryLabel =
    categoryLabels[
      story.category
    ];

  return (
    <main className="story-detail-page">
      {/* =====================================================
          BREADCRUMB
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
              href: `/stories#${story.category}`,
            },

            {
              label:
                story.title,
            },
          ]}
        />
      </div>

      {/* =====================================================
          STORY HERO
      ====================================================== */}

      <header className="story-detail-hero">
        <div className="site-container story-detail-hero__content">
          <p className="story-detail-hero__category">
            {categoryLabel}
          </p>

          {story.eyebrow && (
            <p className="story-detail-hero__eyebrow">
              {story.eyebrow}
            </p>
          )}

          <h1 className="story-detail-hero__title">
            {story.title}
          </h1>

          <p className="story-detail-hero__lead">
            {story.excerpt}
          </p>
        </div>
      </header>

      {/* =====================================================
          HERO IMAGE
      ====================================================== */}

      <div className="site-container">
        <div className="story-detail-image">
          {story.image ? (
            <img
              src={siteAssetPath(story.image)}
              alt={story.title}
            />
          ) : (
            <div className="story-detail-image__placeholder">
              Hình ảnh câu chuyện đang được cập nhật
            </div>
          )}
        </div>
      </div>

      {/* =====================================================
          STORY INTRODUCTION
      ====================================================== */}

      <section className="story-detail-intro">
        <div className="site-container story-detail-intro__grid">
          <aside className="story-detail-intro__aside">
            <p>
              CÂU CHUYỆN
            </p>

            <span>
              {categoryLabel}
            </span>
          </aside>

          <div className="story-detail-intro__content">
            <p className="story-detail-intro__lead">
              {story.excerpt}
            </p>

            {heritageSources.length >
              0 && (
              <p>
                Nội dung này được
                kết nối với{" "}
                {heritageSources
                  .map(
                    (heritage) =>
                      heritage.shortName,
                  )
                  .join(", ")}
                , là nguồn văn hóa
                được sử dụng trong
                quá trình phát triển
                các thiết kế liên
                quan.
              </p>
            )}

            {products.length >
              0 && (
              <p>
                Câu chuyện hiện
                được liên kết với{" "}
                {products.length}{" "}
                sản phẩm trong gian
                hàng. Người đọc có
                thể tiếp tục từ nội
                dung này sang hồ sơ
                từng sản phẩm để xem
                cách nguồn cảm hứng
                được chuyển hóa thành
                vật phẩm cụ thể.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          HERITAGE SOURCES
      ====================================================== */}

      {heritageSources.length >
        0 && (
        <section className="story-detail-heritage">
          <div className="site-container">
            <SectionHeading
              eyebrow="NGUỒN DI SẢN"
              title="Nguồn văn hóa liên quan"
              description="Khám phá trực tiếp các nguồn di sản được liên kết với câu chuyện này."
              actionLabel="Xem tất cả Di sản"
              actionHref="/heritage"
            />

            <div className="story-detail-heritage__grid">
              {heritageSources.map(
                (heritage) => (
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
          RELATIONSHIP
      ====================================================== */}

      <section className="story-detail-relationship">
        <div className="site-container story-detail-relationship__grid">
          <div className="story-detail-relationship__heading">
            <p className="story-detail-relationship__eyebrow">
              MỐI LIÊN HỆ
            </p>

            <h2 className="story-detail-relationship__title">
              Từ câu chuyện đến sản phẩm
            </h2>
          </div>

          <div className="story-detail-relationship__content">
            <p>
              Một sản phẩm văn hóa
              sáng tạo không chỉ sử
              dụng hình ảnh của di
              sản như một yếu tố
              trang trí. Nguồn văn
              hóa còn tạo nên bối
              cảnh và câu chuyện cho
              thiết kế.
            </p>

            <p>
              Vì vậy, gian hàng tổ
              chức riêng lớp nội dung
              Câu chuyện để người
              dùng có thể tìm hiểu
              sâu hơn trước hoặc sau
              khi tiếp cận sản phẩm.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED PRODUCTS
      ====================================================== */}

      {products.length > 0 && (
        <section className="story-detail-products">
          <div className="site-container">
            <SectionHeading
              eyebrow="SẢN PHẨM LIÊN QUAN"
              title="Khám phá câu chuyện qua sản phẩm"
              description="Những thiết kế hiện được kết nối với nội dung này trong gian hàng."
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
          TRACEABILITY LINK
      ====================================================== */}

      {products.some(
        (product) =>
          product.traceability
            .enabled,
      ) && (
        <section className="story-detail-trace">
          <div className="site-container story-detail-trace__inner">
            <div className="story-detail-trace__content">
              <p className="story-detail-trace__eyebrow">
                TRUY XUẤT
              </p>

              <h2>
                Từ câu chuyện đến hồ sơ sản phẩm
              </h2>

              <p>
                Một hoặc nhiều sản
                phẩm trong câu chuyện
                này hỗ trợ truy xuất
                dữ liệu. Khi sở hữu
                sản phẩm, người dùng
                có thể tiếp tục kiểm
                tra hồ sơ tương ứng.
              </p>
            </div>

            {products
              .filter(
                (product) =>
                  product
                    .traceability
                    .enabled,
              )
              .slice(0, 1)
              .map(
                (product) => (
                  <Link
                    key={
                      product.id
                    }
                    href={`/products/${product.slug}`}
                    className="story-detail-trace__link"
                  >
                    Xem sản phẩm hỗ
                    trợ truy xuất
                    <span
                      aria-hidden="true"
                    >
                      {" "}
                      →
                    </span>
                  </Link>
                ),
              )}
          </div>
        </section>
      )}

      {/* =====================================================
          RELATED STORIES
      ====================================================== */}

      {relatedStories.length > 0 && (
        <section className="story-detail-related">
          <div className="site-container">
            <SectionHeading
              eyebrow="ĐỌC TIẾP"
              title="Câu chuyện liên quan"
              description="Tiếp tục khám phá các nội dung có chung nguồn di sản, sản phẩm hoặc chủ đề."
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
          BACK
      ====================================================== */}

      <section className="story-detail-back">
        <div className="site-container story-detail-back__inner">
          <div>
            <p className="story-detail-back__eyebrow">
              KHÁM PHÁ THÊM
            </p>

            <h2>
              Những câu chuyện khác từ gian hàng
            </h2>
          </div>

          <Link
            href="/stories"
            className="story-detail-back__link"
          >
            Tất cả câu chuyện
            <span aria-hidden="true">
              {" "}
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
