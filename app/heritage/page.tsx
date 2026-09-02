// app/heritage/page.tsx

import type {
  Metadata,
} from "next";

import Breadcrumb from "../components/Breadcrumb";
import HeritageCard from "../components/HeritageCard";
import SectionHeading from "../components/SectionHeading";

import {
  getAllHeritageSources,
  getFeaturedHeritageSources,
} from "../../data/heritage";

/* =========================================================
   METADATA
   ========================================================= */

export const metadata:
  Metadata = {
  title:
    "Di sản",

  description:
    "Khám phá các hiện vật, hình tượng và nguồn tư liệu đã trở thành điểm khởi đầu cho những sản phẩm văn hóa sáng tạo trong gian hàng.",
};

/* =========================================================
   PAGE
   ========================================================= */

export default function HeritagePage() {
  const heritageSources =
    getAllHeritageSources();

  const featuredHeritage =
    getFeaturedHeritageSources().slice(
      0,
      2,
    );

  const featuredIds =
    new Set(
      featuredHeritage.map(
        (heritage) =>
          heritage.id,
      ),
    );

  const remainingHeritage =
    heritageSources.filter(
      (heritage) =>
        !featuredIds.has(
          heritage.id,
        ),
    );

  return (
    <main className="heritage-page">
      {/* =====================================================
          01 — BREADCRUMB
      ====================================================== */}

      <div className="site-container heritage-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label:
                "Di sản",
            },
          ]}
        />
      </div>

      {/* =====================================================
          02 — HERO
      ====================================================== */}

      <section className="heritage-hero">
        <div className="site-container heritage-hero__inner">
          <p className="heritage-hero__eyebrow">
            NGUỒN CẢM HỨNG
          </p>

          <h1 className="heritage-hero__title">
            Khám phá câu chuyện
            phía sau mỗi thiết kế
          </h1>

          <p className="heritage-hero__description">
            Mỗi sản phẩm được phát triển
            từ một nguồn văn hóa cụ thể:
            hiện vật, triều phục, bảo ấn,
            tư liệu khảo cổ hoặc hình thức
            trang trí truyền thống.
          </p>

          <p className="heritage-hero__description heritage-hero__description--secondary">
            Từ đây, người xem có thể
            đi ngược từ sản phẩm về nguồn
            cảm hứng đã tạo nên thiết kế,
            đồng thời tiếp tục khám phá
            những sản phẩm liên quan.
          </p>

          <div className="heritage-hero__meta">
            <span>
              {
                heritageSources.length
              }{" "}
              nguồn đang giới thiệu
            </span>

            <span
              aria-hidden="true"
            >
              ·
            </span>

            <span>
              Kết nối với sản phẩm
              trong gian hàng
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — FEATURED HERITAGE
      ====================================================== */}

      {featuredHeritage.length >
        0 && (
        <section className="heritage-featured">
          <div className="site-container">
            <SectionHeading
              eyebrow="NGUỒN TIÊU BIỂU"
              title="Bắt đầu từ những dấu ấn chính"
              description="Hai nguồn di sản đang tạo nên những mạch thiết kế rõ nhất trong hệ sản phẩm của gian hàng."
            />

            <div className="heritage-featured__grid">
              {featuredHeritage.map(
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
          04 — MORE HERITAGE
      ====================================================== */}

      {remainingHeritage.length >
        0 && (
        <section className="heritage-all">
          <div className="site-container">
            <SectionHeading
              eyebrow="KHÁM PHÁ THÊM"
              title="Những nguồn cảm hứng khác"
              description="Mỗi nguồn được liên kết với những thiết kế cụ thể để người xem có thể tiếp tục đi từ câu chuyện văn hóa tới sản phẩm."
            />

            <div className="heritage-all__grid">
              {remainingHeritage.map(
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
          05 — FROM HERITAGE TO PRODUCT
      ====================================================== */}

      <section className="heritage-method">
        <div className="site-container heritage-method__grid">
          <div className="heritage-method__heading">
            <p className="heritage-method__eyebrow">
              TỪ DI SẢN ĐẾN SẢN PHẨM
            </p>

            <h2 className="heritage-method__title">
              Giữ dấu ấn nhận diện,
              chuyển hóa thành sản phẩm mới
            </h2>
          </div>

          <div className="heritage-method__content">
            <p>
              Tùy từng nguồn,
              các yếu tố như hình khối,
              họa tiết, màu sắc, bố cục
              hoặc câu chuyện được lựa chọn
              để phát triển thành ngôn ngữ
              thiết kế của sản phẩm.
            </p>

            <p>
              Việc phát triển sản phẩm
              không đặt mục tiêu sao chép
              nguyên trạng hiện vật.
              Những đặc điểm có giá trị
              nhận diện được chọn lọc,
              giản lược và tổ chức lại
              cho phù hợp với công năng
              và hình thức sử dụng mới.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
