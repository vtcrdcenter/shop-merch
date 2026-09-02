// app/collections/page.tsx

import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title:
    "Bộ sưu tập | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",

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
    getFeaturedCollections();

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
            nguồn cảm hứng được đặt
            cạnh nhau để tạo thành
            những bộ sưu tập mang
            bản sắc và câu chuyện riêng.
          </p>

          <div className="collections-hero__meta">
            <span>
              {collections.length}{" "}
              bộ sưu tập
            </span>

            <span
              aria-hidden="true"
            >
              ·
            </span>

            <span>
              Nhiều loại sản phẩm
              trong cùng một chủ đề
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
              eyebrow="NỔI BẬT"
              title="Những bộ sưu tập đang được giới thiệu"
              description="Bắt đầu với những chủ đề hiện có nhiều thiết kế và thể hiện rõ nhất mối liên hệ giữa di sản và sản phẩm."
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
          04 — ALL COLLECTIONS
      ====================================================== */}

      <section className="collections-all">
        <div className="site-container">
          <SectionHeading
            eyebrow="KHÁM PHÁ"
            title="Tất cả bộ sưu tập"
            description="Mỗi bộ sưu tập kết nối các sản phẩm thông qua cùng một nguồn cảm hứng, hình tượng hoặc câu chuyện văn hóa."
          />

          <div className="collections-all__grid">
            {collections.map(
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
              Một nguồn cảm hứng có
              thể xuất hiện trên nhiều
              loại sản phẩm khác nhau,
              từ vật phẩm lưu niệm nhỏ
              đến phụ kiện, mỹ phẩm
              hay quà tặng.
            </p>

            <p>
              Khi được đặt trong cùng
              một bộ sưu tập, các thiết kế
              giúp người xem nhận ra
              mạch câu chuyện chung phía
              sau những hình thức khác nhau.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
