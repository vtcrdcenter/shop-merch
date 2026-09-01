// app/stories/page.tsx

import type { Metadata } from "next";

import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/SectionHeading";
import StoryCard from "../components/StoryCard";

import {
  getPublishedStories,
  getFeaturedStories,
} from "../../data/stories";

export const metadata: Metadata = {
  title:
    "Câu chuyện | Gian hàng điện tử Bảo tàng Lịch sử Quốc gia",

  description:
    "Khám phá câu chuyện hiện vật, nguồn cảm hứng và quá trình chuyển hóa di sản thành các sản phẩm văn hóa sáng tạo.",
};

const categoryLabels = {
  heritage: "Câu chuyện di sản",
  design: "Từ di sản đến thiết kế",
  craft: "Quá trình thực hiện",
  traceability: "Bảo chứng & truy xuất",
} as const;

export default function StoriesPage() {
  const stories =
    getPublishedStories();

  const featuredStories =
    getFeaturedStories().filter(
      (story) =>
        story.status === "published",
    );

  const heritageStories =
    stories.filter(
      (story) =>
        story.category === "heritage",
    );

  const designStories =
    stories.filter(
      (story) =>
        story.category === "design",
    );

  const craftStories =
    stories.filter(
      (story) =>
        story.category === "craft",
    );

  const traceabilityStories =
    stories.filter(
      (story) =>
        story.category ===
        "traceability",
    );

  const storyGroups = [
    {
      id: "heritage",
      title:
        categoryLabels.heritage,
      description:
        "Các nội dung giúp người đọc hiểu rõ hơn về hiện vật, tư liệu, hình tượng và bối cảnh văn hóa được sử dụng làm nguồn phát triển sản phẩm.",
      stories:
        heritageStories,
    },
    {
      id: "design",
      title:
        categoryLabels.design,
      description:
        "Giải thích cách một đặc điểm của di sản được lựa chọn, giản lược, tổ chức lại và chuyển hóa thành ngôn ngữ thiết kế mới.",
      stories:
        designStories,
    },
    {
      id: "craft",
      title:
        categoryLabels.craft,
      description:
        "Các nội dung về quá trình hiện thực hóa thiết kế, chất liệu, kỹ thuật và những đơn vị tham gia phát triển sản phẩm.",
      stories:
        craftStories,
    },
    {
      id: "traceability",
      title:
        categoryLabels.traceability,
      description:
        "Giải thích cách sản phẩm được kết nối với hồ sơ dữ liệu, thông tin bảo chứng và hệ thống truy xuất.",
      stories:
        traceabilityStories,
    },
  ].filter(
    (group) =>
      group.stories.length > 0,
  );

  return (
    <main className="stories-page">
      {/* =====================================================
          BREADCRUMB
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
          HERO
      ====================================================== */}

      <section className="stories-hero">
        <div className="site-container stories-hero__inner">
          <p className="stories-hero__eyebrow">
            CÂU CHUYỆN
          </p>

          <h1 className="stories-hero__title">
            Phía sau mỗi sản phẩm là một nguồn văn hóa
          </h1>

          <p className="stories-hero__description">
            Tìm hiểu câu chuyện của hiện vật,
            quá trình chuyển hóa từ di sản
            đến thiết kế và cách những sản
            phẩm văn hóa sáng tạo được phát
            triển trong gian hàng.
          </p>

          <div className="stories-hero__meta">
            <span>
              {stories.length} bài
              viết
            </span>

            <span aria-hidden="true">
              ·
            </span>

            <span>
              Di sản, thiết kế và
              truy xuất
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY NAV
      ====================================================== */}

      {storyGroups.length > 0 && (
        <section className="stories-nav">
          <div className="site-container">
            <nav
              className="stories-nav__list"
              aria-label="Chủ đề câu chuyện"
            >
              <a
                href="#featured"
                className="stories-nav__item"
              >
                Nổi bật
              </a>

              {storyGroups.map(
                (group) => (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className="stories-nav__item"
                  >
                    {group.title}
                  </a>
                ),
              )}
            </nav>
          </div>
        </section>
      )}

      {/* =====================================================
          FEATURED STORIES
      ====================================================== */}

      {featuredStories.length > 0 && (
        <section
          id="featured"
          className="stories-featured"
        >
          <div className="site-container">
            <SectionHeading
              eyebrow="NỔI BẬT"
              title="Những câu chuyện nên bắt đầu"
              description="Các nội dung giúp người đọc hình dung nhanh mối liên hệ giữa nguồn di sản, quá trình phát triển thiết kế và sản phẩm."
            />

            <div className="stories-featured__grid">
              {featuredStories.map(
                (story) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    showCategory
                  />
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          STORY GROUPS
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
                  key={group.id}
                  id={group.id}
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
                      (story) => (
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
          EDITORIAL PRINCIPLE
      ====================================================== */}

      <section className="stories-principle">
        <div className="site-container stories-principle__grid">
          <div className="stories-principle__heading">
            <p className="stories-principle__eyebrow">
              KHÔNG CHỈ GIỚI THIỆU SẢN PHẨM
            </p>

            <h2 className="stories-principle__title">
              Tiếp tục trải nghiệm bảo tàng sau chuyến tham quan
            </h2>
          </div>

          <div className="stories-principle__content">
            <p>
              Gian hàng không chỉ cung cấp
              thông tin để lựa chọn sản phẩm.
              Câu chuyện đi kèm giúp người
              dùng tiếp tục tìm hiểu về hiện
              vật và bối cảnh văn hóa sau khi
              rời không gian trưng bày.
            </p>

            <p>
              Khi một sản phẩm có dữ liệu
              truy xuất, câu chuyện cũng trở
              thành một phần trong hành trình
              kết nối giữa vật phẩm người dùng
              sở hữu với nguồn văn hóa đã tạo
              nên thiết kế.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
