// app/stories/page.tsx

import type { Metadata } from "next";

import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/SectionHeading";
import StoryCard from "../components/StoryCard";

import {
  getPublishedStories,
  getFeaturedStories,
} from "../../data/stories";

/* =========================================================
   METADATA
   ========================================================= */

export const metadata: Metadata = {
  title:
    "Câu chuyện | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",

  description:
    "Khám phá câu chuyện phía sau hiện vật, nguồn cảm hứng và cách các giá trị di sản được chuyển hóa thành những sản phẩm văn hóa sáng tạo.",
};

/* =========================================================
   CATEGORY LABELS
   ========================================================= */

const categoryLabels = {
  heritage:
    "Câu chuyện di sản",

  design:
    "Từ di sản đến thiết kế",

  craft:
    "Quá trình thực hiện",

  traceability:
    "Truy xuất & dữ liệu",
} as const;

/* =========================================================
   PAGE
   ========================================================= */

export default function StoriesPage() {
  const stories =
    getPublishedStories();

  const featuredStories =
    getFeaturedStories().filter(
      (story) =>
        story.status ===
        "published",
    );

  const heritageStories =
    stories.filter(
      (story) =>
        story.category ===
        "heritage",
    );

  const designStories =
    stories.filter(
      (story) =>
        story.category ===
        "design",
    );

  const craftStories =
    stories.filter(
      (story) =>
        story.category ===
        "craft",
    );

  const traceabilityStories =
    stories.filter(
      (story) =>
        story.category ===
        "traceability",
    );

  const storyGroups = [
    {
      id:
        "heritage",

      title:
        categoryLabels.heritage,

      description:
        "Tìm hiểu hiện vật, hình tượng, tư liệu và bối cảnh văn hóa đứng phía sau các sản phẩm trong gian hàng.",

      stories:
        heritageStories,
    },

    {
      id:
        "design",

      title:
        categoryLabels.design,

      description:
        "Theo dõi cách những đặc điểm của di sản được lựa chọn, giản lược và tổ chức lại để phù hợp với một sản phẩm mới.",

      stories:
        designStories,
    },

    {
      id:
        "craft",

      title:
        categoryLabels.craft,

      description:
        "Những nội dung về chất liệu, kỹ thuật và quá trình đưa một ý tưởng thiết kế trở thành vật phẩm thực tế.",

      stories:
        craftStories,
    },

    {
      id:
        "traceability",

      title:
        categoryLabels.traceability,

      description:
        "Tìm hiểu cách sản phẩm được kết nối với dữ liệu nguồn, hồ sơ thiết kế và thông tin truy xuất.",

      stories:
        traceabilityStories,
    },
  ].filter(
    (group) =>
      group.stories.length >
      0,
  );

  return (
    <main className="stories-page">
      {/* =====================================================
          01 — BREADCRUMB
      ====================================================== */}

      <div className="site-container stories-page__breadcrumb">
        <Breadcrumb
          items={[
            {
              label:
                "Câu chuyện",
            },
          ]}
        />
      </div>

      {/* =====================================================
          02 — HERO
      ====================================================== */}

      <section className="stories-hero">
        <div className="site-container stories-hero__inner">
          <p className="stories-hero__eyebrow">
            CÂU CHUYỆN
          </p>

          <h1 className="stories-hero__title">
            Đọc câu chuyện
            phía sau mỗi thiết kế
          </h1>

          <p className="stories-hero__description">
            Từ một chi tiết trên hiện vật
            đến cách nó được chuyển hóa
            thành sản phẩm – đây là nơi
            những câu chuyện đó được kể
            rõ hơn.
          </p>

          <div className="stories-hero__meta">
            <span>
              {
                stories.length
              }{" "}
              bài viết
            </span>

            <span
              aria-hidden="true"
            >
              ·
            </span>

            <span>
              Di sản · Thiết kế ·
              Truy xuất
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — CATEGORY NAV
      ====================================================== */}

      {storyGroups.length >
        0 && (
        <section className="stories-nav">
          <div className="site-container">
            <nav
              className="stories-nav__list"
              aria-label="Chủ đề câu chuyện"
            >
              {featuredStories.length >
                0 && (
                <a
                  href="#featured"
                  className="stories-nav__item"
                >
                  Nổi bật
                </a>
              )}

              {storyGroups.map(
                (
                  group,
                ) => (
                  <a
                    key={
                      group.id
                    }
                    href={`#${group.id}`}
                    className="stories-nav__item"
                  >
                    {
                      group.title
                    }
                  </a>
                ),
              )}
            </nav>
          </div>
        </section>
      )}

      {/* =====================================================
          04 — FEATURED STORIES
      ====================================================== */}

      {featuredStories.length >
        0 && (
        <section
          id="featured"
          className="stories-featured"
        >
          <div className="site-container">
            <SectionHeading
              eyebrow="NÊN ĐỌC TRƯỚC"
              title="Những câu chuyện nổi bật"
              description="Bắt đầu với những nội dung giúp thấy rõ nhất mối liên hệ giữa nguồn di sản, thiết kế và sản phẩm."
            />

            <div className="stories-featured__grid">
              {featuredStories.map(
                (
                  story,
                ) => (
                  <StoryCard
                    key={
                      story.id
                    }
                    story={
                      story
                    }
                    showCategory
                  />
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          05 — STORY GROUPS
      ====================================================== */}

      <section className="stories-groups">
        <div className="site-container">
          <div className="stories-groups__list">
            {storyGroups.map(
              (
                group,
                groupIndex,
              ) => (
                <section
                  key={
                    group.id
                  }
                  id={
                    group.id
                  }
                  className="stories-group"
                >
                  <div className="stories-group__header">
                    <span className="stories-group__number">
                      {String(
                        groupIndex +
                          1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <div className="stories-group__heading">
                      <p className="stories-group__eyebrow">
                        CHỦ ĐỀ
                      </p>

                      <h2 className="stories-group__title">
                        {
                          group.title
                        }
                      </h2>

                      <p className="stories-group__description">
                        {
                          group.description
                        }
                      </p>
                    </div>

                    <div className="stories-group__count">
                      <strong>
                        {
                          group
                            .stories
                            .length
                        }
                      </strong>

                      <span>
                        bài viết
                      </span>
                    </div>
                  </div>

                  <div className="stories-group__grid">
                    {group.stories.map(
                      (
                        story,
                      ) => (
                        <StoryCard
                          key={
                            story.id
                          }
                          story={
                            story
                          }
                          showCategory
                        />
                      ),
                    )}
                  </div>
                </section>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — EDITORIAL PRINCIPLE
      ====================================================== */}

      <section className="stories-principle">
        <div className="site-container stories-principle__grid">
          <div className="stories-principle__heading">
            <p className="stories-principle__eyebrow">
              ĐỌC · XEM · KHÁM PHÁ
            </p>

            <h2 className="stories-principle__title">
              Một vật phẩm có thể
              mở ra một câu chuyện
              dài hơn
            </h2>
          </div>

          <div className="stories-principle__content">
            <p>
              Câu chuyện giúp người xem
              nhận ra những chi tiết văn hóa
              phía sau hình dáng, màu sắc
              và họa tiết của sản phẩm.
            </p>

            <p>
              Từ một bài viết, người dùng
              có thể tiếp tục khám phá
              nguồn di sản, sản phẩm hoặc
              hồ sơ truy xuất liên quan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
