import type { ShopProduct } from "../../data/products";

import ProductGrid from "./ProductGrid";
import SectionHeading from "./SectionHeading";

type RelatedProductsProps = {
  currentProduct: ShopProduct;

  products: ShopProduct[];

  limit?: number;

  className?: string;
};

function getRelatedScore(
  currentProduct: ShopProduct,
  candidate: ShopProduct,
) {
  let score = 0;

  const sameCategory =
    currentProduct.categoryId ===
    candidate.categoryId;

  if (sameCategory) {
    score += 1;
  }

  const sameCollection =
    currentProduct.collectionSlugs.some(
      (slug) =>
        candidate.collectionSlugs.includes(slug),
    );

  if (sameCollection) {
    score += 3;
  }

  const sameHeritage =
    currentProduct.heritageSlugs.some(
      (slug) =>
        candidate.heritageSlugs.includes(slug),
    );

  if (sameHeritage) {
    score += 4;
  }

  return score;
}

export default function RelatedProducts({
  currentProduct,
  products,
  limit = 3,
  className = "",
}: RelatedProductsProps) {
  const relatedProducts = products
    .filter(
      (product) =>
        product.id !== currentProduct.id,
    )
    .map((product) => ({
      product,
      score: getRelatedScore(
        currentProduct,
        product,
      ),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return (
        a.product.order -
        b.product.order
      );
    })
    .slice(0, limit)
    .map((item) => item.product);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section
      className={[
        "related-products",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={`related-products-${currentProduct.id}`}
    >
      <SectionHeading
        eyebrow="KHÁM PHÁ THÊM"
        title="Sản phẩm liên quan"
        description="Những thiết kế có chung nguồn cảm hứng, bộ sưu tập hoặc nhóm sản phẩm."
        actionLabel="Xem tất cả sản phẩm"
        actionHref="/products"
      />

      <div
        id={`related-products-${currentProduct.id}`}
      >
        <ProductGrid
          products={relatedProducts}
          columns={3}
          showCategory
          showTraceability
        />
      </div>
    </section>
  );
}
