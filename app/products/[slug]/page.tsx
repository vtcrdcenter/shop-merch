import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteAssetPath } from "../../../lib/site-path";
import Breadcrumb from "../../components/Breadcrumb";
import ProductGallery from "../../components/ProductGallery";
import ProductMeta from "../../components/ProductMeta";
import ProductTabs from "../../components/ProductTabs";
import TraceabilityPanel from "../../components/TraceabilityPanel";
import RelatedProducts from "../../components/RelatedProducts";
import AddToCart from "../../components/AddToCart";
import { getAllProducts, getProductBySlug } from "../../../data/products";
import { getCategoryById } from "../../../data/categories";
import { getHeritageBySlug } from "../../../data/heritage";
import { getCollectionBySlug } from "../../../data/collections";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug((await params).slug);
  if (!product) return { title: "Không tìm thấy sản phẩm" };
  const image = product.images[0];
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: { title: product.name, description: product.shortDescription, type: "website", images: image ? [{ url: siteAssetPath(image.src), alt: image.alt }] : [] },
    twitter: { card: "summary_large_image", title: product.name, description: product.shortDescription, images: image ? [siteAssetPath(image.src)] : [] },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug((await params).slug);
  if (!product) notFound();
  const category = getCategoryById(product.categoryId);
  const heritage = product.heritageSlugs.map(getHeritageBySlug).filter(Boolean);
  const collections = product.collectionSlugs.map(getCollectionBySlug).filter(Boolean);

  return (
    <main className="product-detail-page">
      <div className="site-container product-detail-page__breadcrumb">
        <Breadcrumb items={[{ label: "Sản phẩm", href: "/products" }, ...(category ? [{ label: category.shortName, href: `/products?category=${category.slug}` }] : []), { label: product.name }]} />
      </div>

      <section className="product-detail-hero">
        <div className="site-container product-detail-hero__grid">
          <div className="product-detail-hero__gallery"><ProductGallery images={product.images} productName={product.name} /></div>
          <div className="product-detail-hero__information">
            <ProductMeta product={product} />
            <AddToCart product={product} />
            {(heritage.length > 0 || collections.length > 0) && (
              <div className="product-context-links">
                {heritage.map((item) => item && <Link key={item.id} href={`/heritage/${item.slug}`}>Nguồn cảm hứng: {item.shortName} →</Link>)}
                {collections.map((item) => item && <Link key={item.id} href={`/collections/${item.slug}`}>Bộ sưu tập: {item.name} →</Link>)}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="product-detail-tabs-section"><div className="site-container"><ProductTabs product={product} /></div></section>

      <section className="product-detail-related"><div className="site-container"><RelatedProducts currentProduct={product} products={getAllProducts()} limit={3} /></div></section>

      {product.traceability.enabled && (
        <section className="product-detail-traceability product-detail-traceability--final">
          <div className="site-container">
            <div className="product-detail-traceability__heading">
              <p className="product-detail-traceability__eyebrow">NGUỒN GỐC & HỒ SƠ SẢN PHẨM</p>
              <h2 className="product-detail-traceability__title">Thông tin kiểm chứng, khi bạn cần</h2>
              <p className="product-detail-traceability__description">Tìm hiểu nguồn di sản, quá trình phát triển thiết kế và các thông tin được công bố của sản phẩm.</p>
            </div>
            <TraceabilityPanel product={product} />
          </div>
        </section>
      )}
    </main>
  );
}
