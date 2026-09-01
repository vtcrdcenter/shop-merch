// app/collections/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    (collection) => ({
      slug: collection.slug,
    }),
  );
}

/* =========================================================
   METADATA
   ========================================================= */

export async function generateMetadata({
  params,
}: CollectionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const collection =
    getCollectionBySlug(slug);

  if (!collection) {
    return {
      title:
        "Không tìm thấy bộ sưu tập | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",
    };
  }

  return {
    title: `${collection.name} | Bộ sưu tập | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia`,

    description:
      collection.shortDescription,

    openGraph: {
      title:
        collection.name,

      description:
        collection.shortDescription,

      type: "website",

      images:
        collection.heroImage
          ? [
              {
                url:
                  collection.heroImage,

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
  const { slug } = await params;

  const collection =
    getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const products =
    collection.productSlugs
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
    collection.heritageSlugs
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
    getAllStories()
      .filter(
        (story) =>
          story.status ===
          "published",
      )
      .filter((story) =>
        story.productSlugs.some(
          (productSlug) =>
            collection.productSlugs.includes(
              productSlug,
            ),
        ),
      );

  return (
    <main className="collection-detail-page">
      {/* ===============================================
          BREADCRUMB
      ================================================ */}

      <div className="site-container collection-detail-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label: "Bộ sưu tập",
              href: "/collections",
            },

            {
              label:
                collection.name,
            },
          ]}
        />
      </div>

      {/* ===============================================
          HERO
      ================================================ */}

      <section className="collection-detail-hero">
        <div className="site-container collection-detail-hero__grid">
          <div className="collection-detail-hero__content">
            <p className="collection-detail-hero__eyebrow">
              {
                collection.eyebrow
              }
            </p>

            <h1 className="collection-detail-hero__title">
              {collection.name}
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
                  nguồn di sản
                </span>
              </div>
            </div>
          </div>

          <div className="collection-detail-hero__image">
            {collection.heroImage ? (
              <img
                src={
                  collection.heroImage
                }
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

      {/* ===============================================
          PRODUCTS
      ================================================ */}

      <section className="collection-detail-products">
        <div className="site-container">
          <SectionHeading
            eyebrow="SẢN PHẨM"
            title={`Sản phẩm trong ${collection.name}`}
            description="Các thiết kế được tuyển chọn vào cùng một chủ đề để người dùng có thể khám phá theo câu chuyện thay vì chỉ theo loại sản phẩm."
            actionLabel="Xem tất cả sản phẩm"
            actionHref="/products"
          />

          <ProductGrid
            products={products}
            columns={3}
            showCategory
            showTraceability
            emptyMessage="Bộ sưu tập này hiện chưa có sản phẩm."
          />
        </div>
      </section>

      {/* ===============================================
          HERITAGE SOURCES
      ================================================ */}

      {heritageSources.length >
        0 && (
        <section className="collection-detail-heritage">
          <div className="site-container">
            <SectionHeading
              eyebrow="NGUỒN DI SẢN"
              title="Những nguồn tạo nên bộ sưu tập"
              description="Các hiện vật, tư liệu và hình tượng được sử dụng làm cơ sở cho những thiết kế trong bộ sưu tập."
              actionLabel="Khám phá Di sản"
              actionHref="/heritage"
            />

            <div className="collection-detail-heritage__grid">
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

      {/* ===============================================
          COLLECTION LOGIC
      ================================================ */}

      <section className="collection-detail-concept">
        <div className="site-container collection-detail-concept__grid">
          <div className="collection-detail-concept__heading">
            <p className="collection-detail-concept__eyebrow">
              CHỦ ĐỀ
            </p>

            <h2 className="collection-detail-concept__title">
              Một chủ đề có thể đi qua nhiều loại sản phẩm
            </h2>
          </div>

          <div className="collection-detail-concept__content">
            <p>
              Bộ sưu tập không yêu cầu
              các sản phẩm phải giống nhau
              về công năng. Điểm kết nối
              nằm ở nguồn cảm hứng, bối
              cảnh văn hóa hoặc ngôn ngữ
              thiết kế.
            </p>

            <p>
              Cách tổ chức này cho phép
              một câu chuyện di sản được
              phát triển trên nhiều định
              dạng sản phẩm khác nhau mà
              vẫn giữ được sự liên kết
              giữa các thiết kế.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================================
          STORIES
      ================================================ */}

      {relatedStories.length > 0 && (
        <section className="collection-detail-stories">
          <div className="site-container">
            <SectionHeading
              eyebrow="CÂU CHUYỆN"
              title="Đọc thêm về bộ sưu tập"
              description="Những nội dung giúp làm rõ nguồn cảm hứng và quá trình phát triển các thiết kế."
              actionLabel="Xem tất cả câu chuyện"
              actionHref="/stories"
            />

            <div className="collection-detail-stories__grid">
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

      {/* ===============================================
          MORE COLLECTIONS
      ================================================ */}

      <section className="collection-detail-more">
        <div className="site-container collection-detail-more__inner">
          <div>
            <p className="collection-detail-more__eyebrow">
              KHÁM PHÁ TIẾP
            </p>

            <h2>
              Xem các bộ sưu tập khác
            </h2>
          </div>

          <Link
            href="/collections"
            className="collection-detail-more__link"
          >
            Tất cả bộ sưu tập
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
