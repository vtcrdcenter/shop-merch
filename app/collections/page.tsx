// app/collections/page.tsx

import type {
  Metadata,
} from "next";

import Breadcrumb from "../components/Breadcrumb";
import CollectionCard from "../components/CollectionCard";
import SectionHeading from "../components/SectionHeading";

import {
  getAllCollections,
  getFeaturedCollections,
} from "../../data/collections";

/* =========================================================
   METADATA
   ========================================================= */

export const metadata:
  Metadata = {
  title:
    "Bộ sưu tập",

  description:
    "Khám phá các bộ sưu tập sản phẩm văn hóa sáng tạo được phát triển từ những nguồn cảm hứng, hiện vật và câu chuyện lịch sử khác nhau.",
};

/* =========================================================
   PAGE
   ========================================================= */

export default function CollectionsPage() {
  const collections =
    getAllCollections();

  const featuredCollections =
    getFeaturedCollections().slice(
      0,
      2,
    );

  const featuredIds =
    new Set(
      featuredCollections.map(
        (collection) =>
          collection.id,
      ),
    );

  const remainingCollections =
    collections.filter(
      (collection) =>
        !featuredIds.has(
          collection.id,
        ),
    );

  return (
    <main className="collections-page">
      {/* =====================================================
          01 — BREADCRUMB
      ====================================================== */}

      <div className="site-container collections-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label:
                "Bộ sưu tập",
            },
          ]}
        />
      </div>

      {/* =====================================================
          02 — HERO
      ====================================================== */}

      <section className="collections-hero">
        <div className="site-container collections-hero__inner">
          <p className="collections-hero__eyebrow">
            BỘ SƯU TẬP
          </p>

          <h1 className="collections-hero__title">
            Khám phá sản phẩm
            theo từng mạch câu chuyện
          </h1>

          <p className="collections-hero__description">
            Những thiết kế có chung
            nguồn cảm hứng được đặt cạnh nhau
            để tạo thành các bộ sưu tập
            có bản sắc và câu chuyện riêng.
          </p>

          <p className="collections-hero__description collections-hero__description--secondary">
            Mỗi bộ sưu tập giúp người xem
            nhận ra cách cùng một nguồn văn hóa
            có thể được chuyển hóa thành
            nhiều loại sản phẩm khác nhau.
          </p>

          <div className="collections-hero__meta">
            <span>
              {
                collections.length
              }{" "}
              bộ sưu tập
            </span>

            <span
              aria-hidden="true"
            >
              ·
            </span>

            <span>
              Kết nối sản phẩm
              theo cùng chủ đề
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — FEATURED COLLECTIONS
      ====================================================== */}

      {featuredCollections.length >
        0 && (
        <section className="collections-featured">
          <div className="site-container">
            <SectionHeading
              eyebrow="BỘ SƯU TẬP TIÊU BIỂU"
              title="Bắt đầu từ những mạch thiết kế chính"
              description="Hai bộ sưu tập hiện tập hợp nhiều sản phẩm và thể hiện rõ nhất mối liên hệ giữa nguồn di sản và thiết kế."
            />

            <div className="collections-featured__grid">
              {featuredCollections.map(
                (
                  collection,
                ) => (
                  <CollectionCard
                    key={
                      collection.id
                    }
                    collection={
                      collection
                    }
                    showProductCount
                  />
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          04 — MORE COLLECTIONS
      ====================================================== */}

      {remainingCollections.length >
        0 && (
        <section className="collections-all">
          <div className="site-container">
            <SectionHeading
              eyebrow="KHÁM PHÁ THÊM"
              title="Những bộ sưu tập khác"
              description="Tiếp tục khám phá các nhóm sản phẩm được phát triển từ những hình tượng, hiện vật và mạch câu chuyện khác nhau."
            />

            <div className="collections-all__grid">
              {remainingCollections.map(
                (
                  collection,
                ) => (
                  <CollectionCard
                    key={
                      collection.id
                    }
                    collection={
                      collection
                    }
                    showProductCount
                  />
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          05 — COLLECTION EXPERIENCE
      ====================================================== */}

      <section className="collections-method">
        <div className="site-container collections-method__grid">
          <div className="collections-method__heading">
            <p className="collections-method__eyebrow">
              KHÁM PHÁ THEO CHỦ ĐỀ
            </p>

            <h2 className="collections-method__title">
              Một câu chuyện,
              nhiều cách hiện diện
            </h2>
          </div>

          <div className="collections-method__content">
            <p>
              Một nguồn cảm hứng có thể
              xuất hiện trên nhiều loại sản phẩm,
              từ vật phẩm lưu niệm,
              phụ kiện cá nhân đến mỹ phẩm
              hoặc quà tặng.
            </p>

            <p>
              Khi được đặt trong cùng
              một bộ sưu tập,
              các thiết kế giúp người xem
              nhận ra mạch câu chuyện chung
              phía sau những hình thức
              và công năng khác nhau.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
