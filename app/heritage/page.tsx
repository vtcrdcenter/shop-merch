// app/heritage/page.tsx

import type { Metadata } from "next";

import Breadcrumb from "../components/Breadcrumb";
import HeritageCard from "../components/HeritageCard";
import SectionHeading from "../components/SectionHeading";

import {
  getAllHeritageSources,
  getFeaturedHeritageSources,
} from "../../data/heritage";

export const metadata: Metadata = {
  title:
    "Di sản | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",

  description:
    "Khám phá các hiện vật, tư liệu, hình tượng và nguồn di sản được sử dụng làm cơ sở phát triển sản phẩm văn hóa sáng tạo.",
};

export default function HeritagePage() {
  const heritageSources =
    getAllHeritageSources();

  const featuredHeritage =
    getFeaturedHeritageSources();

  return (
    <main className="heritage-page">
      {/* ===============================================
          BREADCRUMB
      ================================================ */}

      <div className="site-container heritage-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label: "Di sản",
            },
          ]}
        />
      </div>

      {/* ===============================================
          HERO
      ================================================ */}

      <section className="heritage-hero">
        <div className="site-container heritage-hero__inner">
          <p className="heritage-hero__eyebrow">
            NGUỒN CẢM HỨNG
          </p>

          <h1 className="heritage-hero__title">
            Di sản trong từng thiết kế
          </h1>

          <p className="heritage-hero__description">
            Mỗi sản phẩm được bắt đầu từ một
            nguồn cụ thể: hiện vật, tư liệu,
            hình tượng, triều phục hoặc dấu
            tích khảo cổ. Khu vực này giúp
            người dùng đi ngược từ sản phẩm
            về nguồn văn hóa đã tạo nên thiết kế.
          </p>

          <div className="heritage-hero__meta">
            <span>
              {heritageSources.length} nguồn
              di sản đang giới thiệu
            </span>

            <span aria-hidden="true">
              ·
            </span>

            <span>
              Liên kết trực tiếp với sản phẩm
            </span>
          </div>
        </div>
      </section>

      {/* ===============================================
          FEATURED HERITAGE
      ================================================ */}

      {featuredHeritage.length > 0 && (
        <section className="heritage-featured">
          <div className="site-container">
            <SectionHeading
              eyebrow="NỔI BẬT"
              title="Các nguồn di sản đang được khai thác"
              description="Những nguồn hiện đang có sản phẩm hoặc phương án thiết kế được phát triển trong gian hàng."
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

      {/* ===============================================
          ALL HERITAGE
      ================================================ */}

      <section className="heritage-all">
        <div className="site-container">
          <SectionHeading
            eyebrow="TẤT CẢ NGUỒN DI SẢN"
            title="Khám phá theo nguồn"
            description="Từ hiện vật cung đình Nguyễn đến tư liệu khảo cổ Óc Eo, mỗi nguồn được liên kết với những sản phẩm đã hoặc đang được phát triển."
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

      {/* ===============================================
          EXPLANATION
      ================================================ */}

      <section className="heritage-method">
        <div className="site-container heritage-method__grid">
          <div className="heritage-method__heading">
            <p className="heritage-method__eyebrow">
              TỪ NGUỒN ĐẾN SẢN PHẨM
            </p>

            <h2 className="heritage-method__title">
              Không sao chép hiện vật nguyên trạng
            </h2>
          </div>

          <div className="heritage-method__content">
            <p>
              Nguồn di sản đóng vai trò là căn cứ
              cho quá trình phát triển thiết kế.
              Tùy từng sản phẩm, các yếu tố như
              hình khối, họa tiết, màu sắc, bố cục,
              kỹ thuật hoặc câu chuyện được lựa
              chọn và chuyển hóa để phù hợp với
              công năng mới.
            </p>

            <p>
              Việc tách riêng khu vực Di sản giúp
              người dùng phân biệt rõ giữa nguồn
              văn hóa ban đầu và sản phẩm sáng tạo
              được phát triển từ nguồn đó.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
