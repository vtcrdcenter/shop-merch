// app/heritage/page.tsx

import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title:
    "Di sản | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",

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
    getFeaturedHeritageSources();

  return (
    <main className="heritage-page">
      {/* =====================================================
          01 — BREADCRUMB
      ====================================================== */}

      <div className="site-container heritage-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label: "Di sản",
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
            Mỗi sản phẩm bắt đầu từ
            một nguồn cụ thể: hiện vật,
            triều phục, bảo ấn, hình tượng
            hoặc tư liệu khảo cổ. Từ đây,
            người xem có thể đi ngược
            từ sản phẩm về nguồn văn hóa
            đã tạo nên thiết kế.
          </p>

          <div className="heritage-hero__meta">
            <span>
              {heritageSources.length}{" "}
              nguồn đang giới thiệu
            </span>

            <span aria-hidden="true">
              ·
            </span>

            <span>
              Kết nối trực tiếp
              với sản phẩm
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — FEATURED HERITAGE
      ====================================================== */}

      {featuredHeritage.length > 0 && (
        <section className="heritage-featured">
          <div className="site-container">
            <SectionHeading
              eyebrow="NỔI BẬT"
              title="Những nguồn cảm hứng chính"
              description="Bắt đầu với những hiện vật và nguồn văn hóa hiện đang được sử dụng trong nhiều thiết kế của gian hàng."
            />

            <div className="heritage-featured__grid">
              {featuredHeritage.map(
                (heritage) => (
                  <HeritageCard
                    key={heritage.id}
                    heritage={heritage}
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
          04 — ALL HERITAGE
      ====================================================== */}

      <section className="heritage-all">
        <div className="site-container">
          <SectionHeading
            eyebrow="KHÁM PHÁ"
            title="Tất cả nguồn di sản"
            description="Từ hiện vật cung đình triều Nguyễn đến tư liệu khảo cổ Óc Eo, mỗi nguồn được liên kết với những sản phẩm cụ thể trong gian hàng."
          />

          <div className="heritage-all__grid">
            {heritageSources.map(
              (heritage) => (
                <HeritageCard
                  key={heritage.id}
                  heritage={heritage}
                  showPeriod
                  showProductCount
                />
              ),
            )}
          </div>
        </div>
      </section>

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
              thay đổi hình thức thể hiện
            </h2>
          </div>

          <div className="heritage-method__content">
            <p>
              Những yếu tố như hình khối,
              họa tiết, màu sắc, bố cục
              hoặc câu chuyện được lựa chọn
              theo từng sản phẩm cụ thể.
            </p>

            <p>
              Mục tiêu không phải sao chép
              nguyên trạng hiện vật, mà là
              giữ lại những đặc điểm có khả năng
              nhận diện và chuyển chúng sang
              một hình thức phù hợp với đời sống mới.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
