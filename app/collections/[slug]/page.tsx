// app/collections/[slug]/page.tsx

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
import HeritageCard from "../../components/HeritageCard";
import StoryCard from "../../components/StoryCard";

import {
  getAllCollections,
  getCollectionBySlug,
} from "../../../data/collections";

import {
  getProductBySlug,
} from "../../../data/products";

import {
  getHeritageBySlug,
} from "../../../data/heritage";

import {
  getAllStories,
} from "../../../data/stories";

type CollectionDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   STATIC PARAMS
   ========================================================= */

export async function generateStaticParams() {
  return getAllCollections().map(
    (
      collection,
    ) => ({
      slug:
        collection.slug,
    }),
  );
}

/* =========================================================
   METADATA
   ========================================================= */

export async function generateMetadata({
  params,
}: CollectionDetailPageProps): Promise<Metadata> {
  const { slug } =
    await params;

  const collection =
    getCollectionBySlug(
      slug,
    );

  if (!collection) {
    return {
      title:
        "Không tìm thấy bộ sưu tập | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",
    };
  }

  return {
    title:
      `${collection.name} | Bộ sưu tập | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia`,

    description:
      collection.shortDescription,

    openGraph: {
      title:
        collection.name,

      description:
        collection.shortDescription,

      type:
        "website",

      images:
        collection.heroImage
          ? [
              {
                url:
                  siteAssetPath(
                    collection.heroImage,
                  ),

                alt:
                  `Bộ sưu tập ${collection.name}`,
              },
            ]
          : undefined,
    },
  };
}

/* =========================================================
   PAGE
   ========================================================= */

export default async function CollectionDetailPage({
  params,
}: CollectionDetailPageProps) {
  const { slug } =
    await params;

  const collection =
    getCollectionBySlug(
      slug,
    );

  if (!collection) {
    notFound();
  }

  /* ========================================================
     PRODUCTS
     ======================================================== */

  const products =
    collection.productSlugs
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
     HERITAGE
     ======================================================== */

  const heritageSources =
    collection.heritageSlugs
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
     STORIES
     ======================================================== */

  const relatedStories =
    getAllStories()
      .filter(
        (
          story,
        ) =>
          story.status ===
          "published",
      )
      .filter(
        (
          story,
        ) =>
          story.productSlugs.some(
            (
              productSlug,
            ) =>
              collection.productSlugs.includes(
                productSlug,
              ),
          ),
      )
      .slice(
        0,
        3,
      );

  return (
    <main className="collection-detail-page">
      {/* =====================================================
          01 — BREADCRUMB
      ====================================================== */}

      <div className="site-container collection-detail-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label:
                "Bộ sưu tập",

              href:
                "/collections",
            },

            {
              label:
                collection.name,
            },
          ]}
        />
      </div>

      {/* =====================================================
          02 — HERO
      ====================================================== */}

      <section className="collection-detail-hero">
        <div className="site-container collection-detail-hero__grid">
          {/* CONTENT */}

          <div className="collection-detail-hero__content">
            <p className="collection-detail-hero__eyebrow">
              {
                collection.eyebrow
              }
            </p>

            <h1 className="collection-detail-hero__title">
              {
                collection.name
              }
            </h1>

            <p className="collection-detail-hero__description">
              {
                collection.description
              }
            </p>

            <div className="collection-detail-hero__meta">
              <div>
                <strong>
                  {
                    products.length
                  }
                </strong>

                <span>
                  sản phẩm
                </span>
              </div>

              <div>
                <strong>
                  {
                    heritageSources.length
                  }
                </strong>

                <span>
                  nguồn cảm hứng
                </span>
              </div>
            </div>
          </div>

          {/* IMAGE */}

          <div className="collection-detail-hero__image">
            {collection.heroImage ? (
              <img
                src={siteAssetPath(
                  collection.heroImage,
                )}
                alt={`Bộ sưu tập ${collection.name}`}
              />
            ) : (
              <div className="collection-detail-hero__placeholder">
                Hình ảnh bộ sưu tập
                đang được cập nhật
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — COLLECTION STORY
      ====================================================== */}

      <section className="collection-detail-concept">
        <div className="site-container collection-detail-concept__grid">
          <div className="collection-detail-concept__heading">
            <p className="collection-detail-concept__eyebrow">
              CÂU CHUYỆN BỘ SƯU TẬP
            </p>

            <h2 className="collection-detail-concept__title">
              Một nguồn cảm hứng,
              nhiều cách hiện diện
            </h2>
          </div>

          <div className="collection-detail-concept__content">
            <p>
              Những thiết kế trong
              bộ sưu tập cùng bắt đầu
              từ một mạch văn hóa,
              nhưng được phát triển
              thành những vật phẩm
              có hình thức và công năng
              khác nhau.
            </p>

            <p>
              Khi được đặt cạnh nhau,
              các sản phẩm cho thấy
              cách một câu chuyện di sản
              có thể tiếp tục hiện diện
              trong đời sống đương đại.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — PRODUCTS
      ====================================================== */}

      <section className="collection-detail-products">
        <div className="site-container">
          <SectionHeading
            eyebrow="SẢN PHẨM"
            title={`Khám phá ${collection.name}`}
            description="Những thiết kế cùng chia sẻ một nguồn cảm hứng hoặc mạch câu chuyện trong bộ sưu tập này."
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
            emptyMessage="Bộ sưu tập này hiện chưa có sản phẩm."
          />
        </div>
      </section>

      {/* =====================================================
          05 — HERITAGE SOURCES
      ====================================================== */}

      {heritageSources.length >
        0 && (
        <section className="collection-detail-heritage">
          <div className="site-container">
            <SectionHeading
              eyebrow="NGUỒN CẢM HỨNG"
              title="Những câu chuyện phía sau bộ sưu tập"
              description="Khám phá các hiện vật, hình tượng và nguồn tư liệu đã góp phần hình thành ngôn ngữ thiết kế của bộ sưu tập."
              actionLabel="Xem tất cả nguồn di sản"
              actionHref="/heritage"
            />

            <div className="collection-detail-heritage__grid">
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
          06 — STORIES
      ====================================================== */}

      {relatedStories.length >
        0 && (
        <section className="collection-detail-stories">
          <div className="site-container">
            <SectionHeading
              eyebrow="CÂU CHUYỆN"
              title="Đọc thêm về nguồn cảm hứng"
              description="Những bài viết giúp người xem hiểu rõ hơn về hiện vật, hình tượng và cách chúng được chuyển hóa thành thiết kế."
              actionLabel="Xem tất cả câu chuyện"
              actionHref="/stories"
            />

            <div className="collection-detail-stories__grid">
              {relatedStories.map(
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
      )}

      {/* =====================================================
          07 — MORE COLLECTIONS
      ====================================================== */}

      <section className="collection-detail-more">
        <div className="site-container collection-detail-more__inner">
          <div>
            <p className="collection-detail-more__eyebrow">
              KHÁM PHÁ TIẾP
            </p>

            <h2>
              Xem thêm các
              bộ sưu tập khác
            </h2>
          </div>

          <Link
            href="/collections"
            className="collection-detail-more__link"
          >
            Tất cả bộ sưu tập

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
