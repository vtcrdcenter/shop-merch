// app/collections/page.tsx

import type { Metadata } from "next";

import Breadcrumb from "../components/Breadcrumb";
import CollectionCard from "../components/CollectionCard";
import SectionHeading from "../components/SectionHeading";

import {
  getAllCollections,
  getFeaturedCollections,
} from "../../data/collections";

export const metadata: Metadata = {
  title:
    "Bộ sưu tập | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",

  description:
    "Khám phá các bộ sưu tập sản phẩm văn hóa sáng tạo được tổ chức theo chủ đề, nguồn cảm hứng và ngôn ngữ thiết kế.",
};

export default function CollectionsPage() {
  const collections =
    getAllCollections();

  const featuredCollections =
    getFeaturedCollections();

  return (
    <main className="collections-page">
      {/* ===============================================
          BREADCRUMB
      ================================================ */}

      <div className="site-container collections-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label: "Bộ sưu tập",
            },
          ]}
        />
      </div>

      {/* ===============================================
          HERO
      ================================================ */}

      <section className="collections-hero">
        <div className="site-container collections-hero__inner">
          <p className="collections-hero__eyebrow">
            BỘ SƯU TẬP
          </p>

          <h1 className="collections-hero__title">
            Những chủ đề được phát triển thành sản phẩm
          </h1>

          <p className="collections-hero__description">
            Bộ sưu tập là lớp tuyển chọn giúp kết nối
            những sản phẩm có chung bối cảnh văn hóa,
            nguồn cảm hứng hoặc ngôn ngữ thiết kế.
          </p>

          <div className="collections-hero__meta">
            <span>
              {collections.length} bộ sưu tập
            </span>

            <span aria-hidden="true">
              ·
            </span>

            <span>
              Kết nối nhiều nhóm sản phẩm
            </span>
          </div>
        </div>
      </section>

      {/* ===============================================
          FEATURED COLLECTIONS
      ================================================ */}

      {featuredCollections.length > 0 && (
        <section className="collections-featured">
          <div className="site-container">
            <SectionHeading
              eyebrow="NỔI BẬT"
              title="Các bộ sưu tập đang được giới thiệu"
              description="Những chủ đề hiện có nhiều sản phẩm hoặc có vai trò rõ trong định hướng phát triển gian hàng."
            />

            <div className="collections-featured__grid">
              {featuredCollections.map(
                (collection) => (
                  <CollectionCard
                    key={collection.id}
                    collection={collection}
                    showProductCount
                  />
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* ===============================================
          ALL COLLECTIONS
      ================================================ */}

      <section className="collections-all">
        <div className="site-container">
          <SectionHeading
            eyebrow="TẤT CẢ BỘ SƯU TẬP"
            title="Khám phá theo chủ đề"
            description="Mỗi bộ sưu tập tập hợp các sản phẩm có cùng câu chuyện, bối cảnh hoặc nguồn cảm hứng."
          />

          <div className="collections-all__grid">
            {collections.map(
              (collection) => (
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                  showProductCount
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===============================================
          EXPLANATION
      ================================================ */}

      <section className="collections-method">
        <div className="site-container collections-method__grid">
          <div className="collections-method__heading">
            <p className="collections-method__eyebrow">
              CÁCH TỔ CHỨC
            </p>

            <h2 className="collections-method__title">
              Bộ sưu tập khác với nhóm sản phẩm
            </h2>
          </div>

          <div className="collections-method__content">
            <p>
              Nhóm sản phẩm được tổ chức theo công năng
              và hình thức sử dụng, còn bộ sưu tập được
              xây dựng theo chủ đề và câu chuyện.
            </p>

            <p>
              Vì vậy, cùng một bộ sưu tập có thể bao gồm
              nhiều loại sản phẩm khác nhau như nam châm,
              keycap, gương, mỹ phẩm hoặc thực phẩm đóng gói.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
