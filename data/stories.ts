// data/stories.ts

export type StoryCategory =
  | "heritage"
  | "design"
  | "craft"
  | "traceability";

export type StoryStatus =
  | "published"
  | "draft";

export type StoryImage = {
  src: string;
  alt: string;
};

export type ShopStory = {
  id: string;

  slug: string;

  title: string;

  shortTitle: string;

  eyebrow: string;

  category: StoryCategory;

  excerpt: string;

  /**
   * Nội dung intro.
   * Nội dung bài dài có thể bổ sung sau
   * bằng CMS hoặc markdown.
   */
  introduction: string;

  heritageSlugs: string[];

  productSlugs: string[];

  images: StoryImage[];

  status: StoryStatus;

  featured: boolean;

  order: number;
};

export const stories: ShopStory[] = [
  // =========================================================
  // MŨ THƯỢNG TRIỀU
  // =========================================================

  {
    id: "story-mu-thuong-trieu",

    slug: "mu-thuong-trieu-va-dau-an-thuong-trieu",

    title:
      "Từ mũ thượng triều đến Dấu Ấn Thượng Triều Nguyễn",

    shortTitle:
      "Từ mũ thượng triều đến sản phẩm",

    eyebrow: "TỪ DI SẢN ĐẾN THIẾT KẾ",

    category: "design",

    excerpt:
      "Cách các chi tiết cánh chuồn, rồng, mây, mặt trời và hệ hạt được chuyển hóa thành một mẫu nam châm nhiều lớp.",

    introduction:
      "Dấu Ấn Thượng Triều Nguyễn không sao chép nguyên trạng mũ thượng triều. Thiết kế lựa chọn những dấu hiệu nhận diện chính của hiện vật, điều chỉnh tỷ lệ và tổ chức lại thành các lớp phù hợp với một vật phẩm lưu niệm kích thước nhỏ.",

    heritageSlugs: [
      "mu-thuong-trieu",
    ],

    productSlugs: [
      "dau-an-thuong-trieu-nguyen",
    ],

    images: [
      {
        src: "/product-magnet-lifestyle.jpg",
        alt: "Câu chuyện thiết kế Dấu Ấn Thượng Triều Nguyễn",
      },
    ],

    status: "published",

    featured: true,

    order: 1,
  },

  // =========================================================
  // SẮC MỆNH CHI BẢO
  // =========================================================

  {
    id: "story-sac-menh",

    slug: "sac-menh-chi-bao-trong-thiet-ke-duong-dai",

    title:
      "Ấn “Sắc mệnh chi bảo” trong các thiết kế đương đại",

    shortTitle:
      "Sắc mệnh chi bảo trong thiết kế",

    eyebrow: "MỘT NGUỒN – NHIỀU CÁCH CHUYỂN HÓA",

    category: "heritage",

    excerpt:
      "Từ một bảo ấn, ba sản phẩm khai thác ba lớp giá trị khác nhau: hình tượng rồng, mặt triện và chức năng đóng dấu.",

    introduction:
      "Ấn “Sắc mệnh chi bảo” được sử dụng làm nguồn tham chiếu cho nhiều phương án thiết kế. Ấn Mệnh Keycap khai thác hình tượng rồng và chức năng đóng dấu; Sắc Mệnh Ngọc Son sử dụng mặt triện như chi tiết nhận diện; Sắc Mệnh Kim Đậu đưa mặt triện lên bề mặt sản phẩm thực phẩm.",

    heritageSlugs: [
      "sac-menh-chi-bao",
    ],

    productSlugs: [
      "an-menh-keycap",
      "sac-menh-ngoc-son",
      "sac-menh-kim-dau",
    ],

    images: [
      {
        src: "/product-keycap-lifestyle.jpg",
        alt: "Ấn Sắc mệnh chi bảo và các thiết kế liên quan",
      },
    ],

    status: "published",

    featured: true,

    order: 2,
  },

  // =========================================================
  // PHƯỢNG BÀO
  // =========================================================

  {
    id: "story-phuong-bao",

    slug: "phuong-bao-va-he-thiet-ke-phuong-sac",

    title:
      "Từ Phượng bào đến hệ thiết kế Phượng Sắc",

    shortTitle:
      "Phượng bào và Phượng Sắc",

    eyebrow: "HÌNH TƯỢNG & MÀU SẮC",

    category: "design",

    excerpt:
      "Hình tượng phượng và hệ màu cung đình được giản lược để thích ứng với gương cầm tay và vỏ son.",

    introduction:
      "Hai thiết kế Phượng Sắc Kính và Phượng Sắc Triều Y cùng khai thác hình tượng phượng và hệ màu từ Phượng bào. Các chi tiết được tái bố cục theo hình thức và diện tích bề mặt của từng sản phẩm thay vì sao chép nguyên bố cục triều phục.",

    heritageSlugs: [
      "phuong-bao",
    ],

    productSlugs: [
      "phuong-sac-kinh",
      "phuong-sac-trieu-y",
    ],

    images: [
      {
        src: "/product-lipstick.jpg",
        alt: "Phượng bào và các thiết kế Phượng Sắc",
      },
    ],

    status: "published",

    featured: true,

    order: 3,
  },

  // =========================================================
  // ÓC EO
  // =========================================================

  {
    id: "story-charm-oc-eo",

    slug: "tu-hinh-khoi-oc-eo-den-he-charm-ca-nhan-hoa",

    title:
      "Từ hình khối Óc Eo đến hệ charm cá nhân hóa",

    shortTitle:
      "Từ Óc Eo đến Charm",

    eyebrow: "KHẢO CỔ & CÁ NHÂN HÓA",

    category: "design",

    excerpt:
      "Hệ hạt khảo cổ được chuyển thành các module có thể lựa chọn và phối ghép theo nhu cầu người dùng.",

    introduction:
      "Charm Óc Eo không lấy một hiện vật duy nhất làm nguyên mẫu. Thiết kế xây dựng một hệ module từ nhiều dạng hạt và hình khối khảo cổ, sau đó điều chỉnh kích thước và cơ cấu kết nối để phù hợp với sản phẩm trang sức cá nhân.",

    heritageSlugs: [
      "van-hoa-oc-eo",
    ],

    productSlugs: [
      "charm-oc-eo",
    ],

    images: [
      {
        src: "/product-bracelet-fixed.jpg",
        alt: "Từ hình khối Óc Eo đến hệ Charm Óc Eo",
      },
    ],

    status: "published",

    featured: false,

    order: 4,
  },

  // =========================================================
  // TRUY XUẤT / BẢO CHỨNG
  // =========================================================

  {
    id: "story-traceability",

    slug: "tu-san-pham-den-ho-so-truy-xuat",

    title:
      "Từ sản phẩm đến hồ sơ truy xuất",

    shortTitle:
      "Sản phẩm và truy xuất",

    eyebrow: "MINH BẠCH NGUỒN GỐC",

    category: "traceability",

    excerpt:
      "Cách một sản phẩm được liên kết với dữ liệu nguồn, hồ sơ thiết kế, bảo chứng và thông tin truy xuất.",

    introduction:
      "Trong hệ sinh thái VTC Merchandise, hồ sơ sản phẩm và UID là dữ liệu liên kết giữa gian hàng, nền tảng quản lý sản phẩm, hệ thống truy xuất nguồn gốc và hệ thống bảo chứng. Ở bản demo hiện tại, Dấu Ấn Thượng Triều Nguyễn là sản phẩm được sử dụng để trình diễn luồng này.",

    heritageSlugs: [
      "mu-thuong-trieu",
    ],

    productSlugs: [
      "dau-an-thuong-trieu-nguyen",
    ],

    images: [
      {
        src: "/hero-craft.jpg",
        alt: "Hành trình từ sản phẩm đến hồ sơ truy xuất",
      },
    ],

    status: "published",

    featured: true,

    order: 5,
  },
];

// =========================================================
// HELPERS
// =========================================================

export function getAllStories(): ShopStory[] {
  return [...stories].sort(
    (a, b) => a.order - b.order,
  );
}

export function getPublishedStories(): ShopStory[] {
  return stories
    .filter((story) => story.status === "published")
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedStories(): ShopStory[] {
  return stories
    .filter(
      (story) =>
        story.status === "published" &&
        story.featured,
    )
    .sort((a, b) => a.order - b.order);
}

export function getStoryBySlug(
  slug: string,
): ShopStory | undefined {
  return stories.find(
    (story) => story.slug === slug,
  );
}

export function getStoriesByProductSlug(
  productSlug: string,
): ShopStory[] {
  return stories
    .filter((story) =>
      story.productSlugs.includes(productSlug),
    )
    .sort((a, b) => a.order - b.order);
}

export function getStoriesByCategory(
  category: StoryCategory,
): ShopStory[] {
  return stories
    .filter(
      (story) =>
        story.category === category &&
        story.status === "published",
    )
    .sort((a, b) => a.order - b.order);
}
