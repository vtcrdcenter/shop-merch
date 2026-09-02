// app/stories/page.tsx

import type {
  Metadata,
} from "next";

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

export const metadata:
  Metadata = {
  title:
    "Câu chuyện",

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

  /*
   * Hiện dữ liệu chỉ có 5 bài.
   *
   * Không hiển thị 4 bài featured
   * rồi lặp lại chúng ở nhóm chủ đề.
   *
   * Chỉ lấy 1 bài làm spotlight.
   */
  const spotlightStory =
    getFeaturedStories()[0];

  const groupedStories =
    spotlightStory
      ? stories.filter(
          (story) =>
            story.id !==
            spotlightStory.id,
        )
      : stories;

  const heritageStories =
    groupedStories.filter(
      (story) =>
        story.category ===
        "heritage",
    );

  const designStories =
    groupedStories.filter(
      (story) =>
        story.category ===
        "design",
    );

  const craftStories =
    groupedStories.filter(
      (story) =>
        story.category ===
        "craft",
    );

  const traceabilityStories =
    groupedStories.filter(
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
            Mỗi vật phẩm trong gian hàng
            không chỉ bắt đầu từ một ý tưởng
            tạo hình. Phía sau đó là hiện vật,
            hình tượng, tư liệu và những
            lựa chọn trong quá trình
            phát triển thiết kế.
          </p>

          <p className="stories-hero__description stories-hero__description--secondary">
            Từ một bài viết, người xem
            có thể tiếp tục khám phá
            nguồn di sản, sản phẩm
            và hồ sơ truy xuất liên quan.
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

      {(spotlightStory ||
        storyGroups.length >
          0) && (
        <section className="stories-nav">
          <div className="site-container">
            <nav
              className="stories-nav__list"
              aria-label="Chủ đề câu chuyện"
            >
              {spotlightStory && (
                <a
                  href="#spotlight"
                  className="stories-nav__item"
                >
                  Nên đọc trước
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
          04 — SPOTLIGHT
      ====================================================== */}

      {spotlightStory && (
        <section
          id="spotlight"
          className="stories-featured"
        >
          <div className="site-container">
            <SectionHeading
              eyebrow="NÊN ĐỌC TRƯỚC"
              title="Một câu chuyện để bắt đầu"
              description="Bài viết giúp hình dung rõ cách một nguồn di sản được lựa chọn, chuyển hóa và kết nối với sản phẩm trong gian hàng."
            />

            <div className="stories-featured__grid stories-featured__grid--spotlight">
              <StoryCard
                story={
                  spotlightStory
                }
                showCategory
              />
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          05 — STORY GROUPS
      ====================================================== */}

      {storyGroups.length >
        0 && (
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
      )}

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
              Từ một vật phẩm
              đến một câu chuyện dài hơn
            </h2>
          </div>

          <div className="stories-principle__content">
            <p>
              Câu chuyện giúp người xem
              nhận ra những chi tiết văn hóa
              phía sau hình dáng, màu sắc,
              họa tiết và cấu trúc của
              từng sản phẩm.
            </p>

            <p>
              Nội dung không đứng riêng
              như một chuyên mục tin tức.
              Mỗi bài được liên kết trở lại
              với nguồn di sản và sản phẩm
              tương ứng trong gian hàng.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
