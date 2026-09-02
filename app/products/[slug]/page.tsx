// app/products/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteAssetPath } from "../../../lib/site-path";

import Breadcrumb from "../../components/Breadcrumb";
import ProductGallery from "../../components/ProductGallery";
import ProductMeta from "../../components/ProductMeta";
import TraceabilityPanel from "../../components/TraceabilityPanel";
import RelatedProducts from "../../components/RelatedProducts";
import SectionHeading from "../../components/SectionHeading";

import {
  getAllProducts,
  getProductBySlug,
} from "../../../data/products";

import {
  getCategoryById,
} from "../../../data/categories";

import {
  getHeritageBySlug,
} from "../../../data/heritage";

import {
  getCollectionBySlug,
} from "../../../data/collections";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// ============================================================
// STATIC ROUTES
// ============================================================

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }));
}

// ============================================================
// METADATA
// ============================================================

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title:
        "Không tìm thấy sản phẩm | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",
    };
  }

  const primaryImage = product.images[0];

  return {
    title: `${product.name} | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia`,

    description: product.shortDescription,

    openGraph: {
      title: product.name,

      description: product.shortDescription,

      type: "website",

      images: primaryImage
        ? [
            {
              url: primaryImage.src,
              alt: primaryImage.alt,
            },
          ]
        : undefined,
    },
  };
}

// ============================================================
// PAGE
// ============================================================

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = getAllProducts();

  const category = getCategoryById(
    product.categoryId,
  );

  const heritageSources =
    product.heritageSlugs
      .map((heritageSlug) =>
        getHeritageBySlug(heritageSlug),
      )
      .filter(
        (
          heritage,
        ): heritage is NonNullable<
          ReturnType<typeof getHeritageBySlug>
        > => Boolean(heritage),
      );

  const productCollections =
    product.collectionSlugs
      .map((collectionSlug) =>
        getCollectionBySlug(collectionSlug),
      )
      .filter(
        (
          collection,
        ): collection is NonNullable<
          ReturnType<typeof getCollectionBySlug>
        > => Boolean(collection),
      );

  return (
    <main className="product-detail-page">
      {/* =====================================================
          BREADCRUMB
      ====================================================== */}

      <div className="site-container product-detail-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label: "Sản phẩm",
              href: "/products",
            },

            ...(category
              ? [
                  {
                    label: category.shortName,
                    href: `/products?category=${category.slug}`,
                  },
                ]
              : []),

            {
              label: product.name,
            },
          ]}
        />
      </div>

      {/* =====================================================
          PRODUCT HERO
      ====================================================== */}

      <section
        className="product-detail-hero"
        aria-labelledby="product-title"
      >
        <div className="site-container product-detail-hero__grid">
          {/* LEFT: GALLERY */}

          <div className="product-detail-hero__gallery">
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* RIGHT: PRODUCT INFO */}

          <div className="product-detail-hero__information">
            <ProductMeta
              product={product}
            />

            {/* ===============================================
                HERITAGE QUICK LINK
            ================================================ */}

            {heritageSources.length > 0 && (
              <div className="product-detail-hero__heritage">
                <p className="product-detail-hero__label">
                  NGUỒN CẢM HỨNG
                </p>

                <div className="product-detail-hero__heritage-links">
                  {heritageSources.map(
                    (heritage) => (
                      <Link
                        key={heritage.id}
                        href={`/heritage/${heritage.slug}`}
                        className="product-detail-hero__heritage-link"
                      >
                        {heritage.shortName}

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
              </div>
            )}

            {/* ===============================================
                COLLECTION QUICK LINK
            ================================================ */}

            {productCollections.length >
              0 && (
              <div className="product-detail-hero__collections">
                <p className="product-detail-hero__label">
                  BỘ SƯU TẬP
                </p>

                <div className="product-detail-hero__collection-links">
                  {productCollections.map(
                    (collection) => (
                      <Link
                        key={collection.id}
                        href={`/collections/${collection.slug}`}
                        className="product-detail-hero__collection-link"
                      >
                        {collection.name}

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
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT INTRODUCTION
      ====================================================== */}

      <section className="product-detail-intro">
        <div className="site-container product-detail-intro__grid">
          <div className="product-detail-intro__heading">
            <p className="product-detail-intro__eyebrow">
              SẢN PHẨM
            </p>

            <h2 className="product-detail-intro__title">
              Một cách tiếp cận di sản trong đời
              sống đương đại
            </h2>
          </div>

          <div className="product-detail-intro__content">
            <p>
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          HERITAGE SOURCE
      ====================================================== */}

      {heritageSources.length > 0 && (
        <section
          className="product-detail-heritage"
          aria-labelledby="product-heritage-title"
        >
          <div className="site-container">
            <SectionHeading
              eyebrow="NGUỒN DI SẢN"
              title="Nguồn cảm hứng của thiết kế"
              description="Các yếu tố văn hóa và tư liệu nguồn được sử dụng làm cơ sở cho quá trình phát triển sản phẩm."
            />

            <div className="product-detail-heritage__grid">
              {heritageSources.map(
                (heritage) => {
                  const image =
                    heritage.images[0];

                  return (
                    <article
                      key={heritage.id}
                      className="product-detail-heritage__item"
                    >
                      <div className="product-detail-heritage__image">
                        {image ? (
                          <img
                            src={siteAssetPath(image.src)}
                            alt={image.alt}
                            loading="lazy"
                          />
                        ) : (
                          <div className="product-detail-heritage__placeholder">
                            Hình ảnh tư liệu đang
                            được cập nhật
                          </div>
                        )}
                      </div>

                      <div className="product-detail-heritage__content">
                        <p className="product-detail-heritage__type">
                          NGUỒN DI SẢN
                        </p>

                        <h3>
                          {heritage.name}
                        </h3>

                        {heritage.period && (
                          <p className="product-detail-heritage__period">
                            {heritage.period}
                          </p>
                        )}

                        <p>
                          {
                            heritage.description
                          }
                        </p>

                        {heritage.designElements
                          .length > 0 && (
                          <div className="product-detail-heritage__elements">
                            <p>
                              Các yếu tố được khai
                              thác
                            </p>

                            <ul>
                              {heritage.designElements.map(
                                (
                                  element,
                                ) => (
                                  <li
                                    key={
                                      element
                                    }
                                  >
                                    {
                                      element
                                    }
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}

                        <Link
                          href={`/heritage/${heritage.slug}`}
                          className="product-detail-heritage__link"
                        >
                          Khám phá nguồn di sản

                          <span
                            aria-hidden="true"
                          >
                            {" "}
                            →
                          </span>
                        </Link>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          FROM HERITAGE TO DESIGN
      ====================================================== */}

      <section
        className="product-detail-design"
        aria-labelledby="product-design-title"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="TỪ DI SẢN ĐẾN THIẾT KẾ"
            title="Cách các yếu tố di sản được chuyển hóa"
            description="Thiết kế không sao chép nguyên trạng hiện vật mà lựa chọn, giản lược và tổ chức lại các yếu tố phù hợp với công năng của sản phẩm."
          />

          <div className="product-detail-design__grid">
            <article className="product-detail-design__block">
              <span className="product-detail-design__number">
                01
              </span>

              <p className="product-detail-design__label">
                NGUYÊN TẮC CHUYỂN HÓA
              </p>

              <h3>
                Từ đặc điểm nhận diện đến ngôn
                ngữ sản phẩm
              </h3>

              <p>
                {
                  product.transformationPrinciple
                }
              </p>
            </article>

            <article className="product-detail-design__block">
              <span className="product-detail-design__number">
                02
              </span>

              <p className="product-detail-design__label">
                PHƯƠNG ÁN THIẾT KẾ
              </p>

              <h3>
                Tổ chức hình thức và chi tiết
              </h3>

              <p>
                {product.designDescription}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT SPECIFICATION
      ====================================================== */}

      <section
        className="product-detail-specification"
        aria-labelledby="product-specification-title"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="THÔNG TIN SẢN PHẨM"
            title="Thông số và cấu tạo dự kiến"
            description="Các thông tin dưới đây phản ánh phương án thiết kế và trạng thái Pilot hiện tại."
          />

          <div className="product-detail-specification__grid">
            {/* SKU */}

            <div className="product-detail-specification__item">
              <dt>
                Mã sản phẩm
              </dt>

              <dd>
                {product.sku}
              </dd>
            </div>

            {/* TYPE */}

            <div className="product-detail-specification__item">
              <dt>
                Loại sản phẩm
              </dt>

              <dd>
                {product.productType}
              </dd>
            </div>

            {/* SIZE */}

            <div className="product-detail-specification__item">
              <dt>
                Kích thước
              </dt>

              <dd>
                {product.dimensions}
              </dd>
            </div>

            {/* FUNCTION */}

            <div className="product-detail-specification__item">
              <dt>
                Công năng
              </dt>

              <dd>
                {product.function}
              </dd>
            </div>

            {/* MATERIAL */}

            <div className="product-detail-specification__item product-detail-specification__item--wide">
              <dt>
                Chất liệu dự kiến
              </dt>

              <dd>
                <ul>
                  {product.materials.map(
                    (material) => (
                      <li key={material}>
                        {material}
                      </li>
                    ),
                  )}
                </ul>
              </dd>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PILOT DEVELOPMENT
      ====================================================== */}

      <section
        className="product-detail-pilot"
        aria-labelledby="product-pilot-title"
      >
        <div className="site-container product-detail-pilot__grid">
          <div className="product-detail-pilot__heading">
            <p className="product-detail-pilot__eyebrow">
              PHÁT TRIỂN SẢN PHẨM
            </p>

            <h2
              id="product-pilot-title"
              className="product-detail-pilot__title"
            >
              Giá trị kiểm thử trong giai đoạn
              Pilot
            </h2>
          </div>

          <div className="product-detail-pilot__content">
            <p className="product-detail-pilot__value">
              {product.pilotValue}
            </p>

            {product
              .requirementsBeforePrototype
              .length > 0 && (
              <div className="product-detail-pilot__requirements">
                <h3>
                  Nội dung cần hoàn thiện trước
                  khi làm mẫu
                </h3>

                <ol>
                  {product.requirementsBeforePrototype.map(
                    (
                      requirement,
                      index,
                    ) => (
                      <li
                        key={`${requirement}-${index}`}
                      >
                        <span>
                          {String(
                            index + 1,
                          ).padStart(
                            2,
                            "0",
                          )}
                        </span>

                        <p>
                          {requirement}
                        </p>
                      </li>
                    ),
                  )}
                </ol>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          COLLECTIONS
      ====================================================== */}

      {productCollections.length >
        0 && (
        <section className="product-detail-collections">
          <div className="site-container">
            <SectionHeading
              eyebrow="BỘ SƯU TẬP"
              title="Khám phá trong cùng chủ đề"
              description="Các bộ sưu tập giúp kết nối những sản phẩm có chung bối cảnh văn hóa, nguồn cảm hứng hoặc ngôn ngữ thiết kế."
            />

            <div className="product-detail-collections__grid">
              {productCollections.map(
                (collection) => (
                  <Link
                    key={collection.id}
                    href={`/collections/${collection.slug}`}
                    className="product-detail-collections__item"
                  >
                    <p>
                      {collection.eyebrow}
                    </p>

                    <h3>
                      {collection.name}
                    </h3>

                    <span>
                      {
                        collection.shortDescription
                      }
                    </span>

                    <strong>
                      Xem bộ sưu tập →
                    </strong>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          TRACEABILITY
      ====================================================== */}

      {product.traceability.enabled && (
        <section className="product-detail-traceability">
          <div className="site-container">
            <TraceabilityPanel
              product={product}
            />
          </div>
        </section>
      )}

      {/* =====================================================
          RELATED PRODUCTS
      ====================================================== */}

      <div className="site-container product-detail-related">
        <RelatedProducts
          currentProduct={product}
          products={allProducts}
          limit={3}
        />
      </div>
    </main>
  );
}
