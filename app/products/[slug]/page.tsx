// app/products/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  siteAssetPath,
} from "../../../lib/site-path";

import Breadcrumb from "../../components/Breadcrumb";
import ProductGallery from "../../components/ProductGallery";
import ProductMeta from "../../components/ProductMeta";
import TraceabilityPanel from "../../components/TraceabilityPanel";
import RelatedProducts from "../../components/RelatedProducts";
import SectionHeading from "../../components/SectionHeading";
import AddToCart from "../../components/AddToCart";

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

/* =========================================================
   STATIC PARAMS
   ========================================================= */

export async function generateStaticParams() {
  return getAllProducts().map(
    (product) => ({
      slug: product.slug,
    }),
  );
}

/* =========================================================
   METADATA
   ========================================================= */

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product =
    getProductBySlug(slug);

  if (!product) {
    return {
      title:
        "Không tìm thấy sản phẩm",
    };
  }

  const primaryImage =
    product.images[0];

  return {
    title:
      product.name,

    description:
      product.shortDescription,

    openGraph: {
      title:
        product.name,

      description:
        product.shortDescription,

      type:
        "website",

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

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  const product =
    getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts =
    getAllProducts();

  const category =
    getCategoryById(
      product.categoryId,
    );

  const heritageSources =
    product.heritageSlugs
      .map(
        (heritageSlug) =>
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

  const productCollections =
    product.collectionSlugs
      .map(
        (collectionSlug) =>
          getCollectionBySlug(
            collectionSlug,
          ),
      )
      .filter(
        (
          collection,
        ): collection is NonNullable<
          ReturnType<
            typeof getCollectionBySlug
          >
        > =>
          Boolean(
            collection,
          ),
      );

  return (
    <main className="product-detail-page">
      {/* =====================================================
          01 — BREADCRUMB
      ====================================================== */}

      <div className="site-container product-detail-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label:
                "Sản phẩm",

              href:
                "/products",
            },

            ...(category
              ? [
                  {
                    label:
                      category.shortName,

                    href:
                      `/products?category=${category.slug}`,
                  },
                ]
              : []),

            {
              label:
                product.name,
            },
          ]}
        />
      </div>

      {/* =====================================================
          02 — PRODUCT HERO
      ====================================================== */}

      <section className="product-detail-hero">
        <div className="site-container product-detail-hero__grid">
          {/* LEFT — GALLERY */}

          <div className="product-detail-hero__gallery">
            <ProductGallery
              images={
                product.images
              }
              productName={
                product.name
              }
            />
          </div>

          {/* RIGHT — PRODUCT INFORMATION */}

          <div className="product-detail-hero__information">
            <ProductMeta
              product={
                product
              }
            />

            <AddToCart product={product} />

            {/* HERITAGE QUICK LINKS */}

            {heritageSources.length >
              0 && (
              <div className="product-detail-hero__heritage">
                <p className="product-detail-hero__label">
                  NGUỒN CẢM HỨNG
                </p>

                <div className="product-detail-hero__heritage-links">
                  {heritageSources.map(
                    (
                      heritage,
                    ) => (
                      <Link
                        key={
                          heritage.id
                        }
                        href={`/heritage/${heritage.slug}`}
                        className="product-detail-hero__heritage-link"
                      >
                        {
                          heritage.shortName
                        }

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

            {/* COLLECTION QUICK LINKS */}

            {productCollections.length >
              0 && (
              <div className="product-detail-hero__collections">
                <p className="product-detail-hero__label">
                  BỘ SƯU TẬP
                </p>

                <div className="product-detail-hero__collection-links">
                  {productCollections.map(
                    (
                      collection,
                    ) => (
                      <Link
                        key={
                          collection.id
                        }
                        href={`/collections/${collection.slug}`}
                        className="product-detail-hero__collection-link"
                      >
                        {
                          collection.name
                        }

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
          03 — PRODUCT STORY
      ====================================================== */}

      <section className="product-detail-intro">
        <div className="site-container product-detail-intro__grid">
          <div className="product-detail-intro__heading">
            <p className="product-detail-intro__eyebrow">
              CÂU CHUYỆN SẢN PHẨM
            </p>

            <h2 className="product-detail-intro__title">
              Một cách đưa
              câu chuyện di sản
              vào đời sống hôm nay
            </h2>
          </div>

          <div className="product-detail-intro__content">
            <p>
              {
                product.description
              }
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — HERITAGE SOURCE
      ====================================================== */}

      {heritageSources.length >
        0 && (
        <section className="product-detail-heritage">
          <div className="site-container">
            <SectionHeading
              eyebrow="NGUỒN CẢM HỨNG"
              title="Câu chuyện bắt đầu từ đâu?"
              description="Khám phá những hiện vật, hình tượng và tư liệu đã trở thành điểm khởi đầu cho thiết kế sản phẩm."
            />

            <div className="product-detail-heritage__grid">
              {heritageSources.map(
                (
                  heritage,
                ) => {
                  const image =
                    heritage
                      .images[0];

                  return (
                    <article
                      key={
                        heritage.id
                      }
                      className="product-detail-heritage__item"
                    >
                      <div className="product-detail-heritage__image">
                        {image ? (
                          <img
                            src={siteAssetPath(
                              image.src,
                            )}
                            alt={
                              image.alt
                            }
                            loading="lazy"
                          />
                        ) : (
                          <div className="product-detail-heritage__placeholder">
                            Hình ảnh
                            tư liệu đang
                            được cập nhật
                          </div>
                        )}
                      </div>

                      <div className="product-detail-heritage__content">
                        <p className="product-detail-heritage__type">
                          NGUỒN DI SẢN
                        </p>

                        <h3>
                          {
                            heritage.name
                          }
                        </h3>

                        {heritage.period && (
                          <p className="product-detail-heritage__period">
                            {
                              heritage.period
                            }
                          </p>
                        )}

                        <p>
                          {
                            heritage.description
                          }
                        </p>

                        {heritage
                          .designElements
                          .length >
                          0 && (
                          <div className="product-detail-heritage__elements">
                            <p>
                              Chi tiết
                              được khai thác
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
                          Khám phá
                          nguồn cảm hứng

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
          05 — FROM HERITAGE TO DESIGN
      ====================================================== */}

      <section className="product-detail-design">
        <div className="site-container">
          <SectionHeading
            eyebrow="TỪ DI SẢN ĐẾN THIẾT KẾ"
            title="Những chi tiết được chuyển hóa như thế nào?"
            description="Thiết kế lựa chọn những đặc điểm nhận diện phù hợp từ nguồn di sản và tổ chức lại để tạo nên hình thức mới cho sản phẩm."
          />

          <div className="product-detail-design__grid">
            <article className="product-detail-design__block">
              <span className="product-detail-design__number">
                01
              </span>

              <p className="product-detail-design__label">
                NGUYÊN TẮC
              </p>

              <h3>
                Giữ lại những
                đặc điểm nhận diện
                quan trọng
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
                THIẾT KẾ
              </p>

              <h3>
                Tổ chức lại
                hình thức và chi tiết
              </h3>

              <p>
                {
                  product.designDescription
                }
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — PRODUCT SPECIFICATION
      ====================================================== */}

      <section className="product-detail-specification">
        <div className="site-container">
          <SectionHeading
            eyebrow="THÔNG TIN SẢN PHẨM"
            title="Thông tin thiết kế"
            description="Các thông tin chính về hình thức, kích thước, công năng và chất liệu của sản phẩm."
          />

          <dl className="product-detail-specification__grid">
            <div className="product-detail-specification__item">
              <dt>
                Mã sản phẩm
              </dt>

              <dd>
                {
                  product.sku
                }
              </dd>
            </div>

            <div className="product-detail-specification__item">
              <dt>
                Loại sản phẩm
              </dt>

              <dd>
                {
                  product.productType
                }
              </dd>
            </div>

            <div className="product-detail-specification__item">
              <dt>
                Kích thước
              </dt>

              <dd>
                {
                  product.dimensions
                }
              </dd>
            </div>

            <div className="product-detail-specification__item">
              <dt>
                Công năng
              </dt>

              <dd>
                {
                  product.function
                }
              </dd>
            </div>

            <div className="product-detail-specification__item product-detail-specification__item--wide">
              <dt>
                Chất liệu
              </dt>

              <dd>
                {product.materials
                  .length >
                0 ? (
                  <ul>
                    {product.materials.map(
                      (
                        material,
                      ) => (
                        <li
                          key={
                            material
                          }
                        >
                          {
                            material
                          }
                        </li>
                      ),
                    )}
                  </ul>
                ) : (
                  "Đang cập nhật"
                )}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* =====================================================
          07 — TRACEABILITY
      ====================================================== */}

      {product.traceability
        .enabled && (
        <section className="product-detail-traceability">
          <div className="site-container">
            <div className="product-detail-traceability__heading">
              <p className="product-detail-traceability__eyebrow">
                TRUY XUẤT SẢN PHẨM
              </p>

              <h2 className="product-detail-traceability__title">
                Tìm hiểu hồ sơ
                phía sau sản phẩm
              </h2>

              <p className="product-detail-traceability__description">
                Sản phẩm này hỗ trợ
                truy xuất để người dùng
                tiếp tục kiểm tra mã nhận diện,
                nguồn cảm hứng và những
                thông tin liên quan được
                công bố trên hệ thống.
              </p>
            </div>

            <TraceabilityPanel
              product={
                product
              }
            />
          </div>
        </section>
      )}

      {/* =====================================================
          08 — COLLECTIONS
      ====================================================== */}

      {productCollections.length >
        0 && (
        <section className="product-detail-collections">
          <div className="site-container">
            <SectionHeading
              eyebrow="BỘ SƯU TẬP"
              title="Khám phá thêm trong cùng chủ đề"
              description="Những sản phẩm có chung nguồn cảm hứng hoặc mạch câu chuyện được tập hợp trong cùng một bộ sưu tập."
            />

            <div className="product-detail-collections__grid">
              {productCollections.map(
                (
                  collection,
                ) => (
                  <Link
                    key={
                      collection.id
                    }
                    href={`/collections/${collection.slug}`}
                    className="product-detail-collections__item"
                  >
                    <p>
                      {
                        collection.eyebrow
                      }
                    </p>

                    <h3>
                      {
                        collection.name
                      }
                    </h3>

                    <span>
                      {
                        collection.shortDescription
                      }
                    </span>

                    <strong>
                      Xem bộ sưu tập

                      <span
                        aria-hidden="true"
                      >
                        {" "}
                        →
                      </span>
                    </strong>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          09 — RELATED PRODUCTS
      ====================================================== */}

      <section className="product-detail-related">
        <div className="site-container">
          <RelatedProducts
            currentProduct={
              product
            }
            products={
              allProducts
            }
            limit={3}
          />
        </div>
      </section>
    </main>
  );
}
