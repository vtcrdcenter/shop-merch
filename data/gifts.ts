// data/gifts.ts

export type GiftGroup = {
  id: string;

  slug: string;

  name: string;

  shortName: string;

  description: string;

  /**
   * Dùng để giải thích nhóm quà.
   */
  useCase: string;

  /**
   * Slug các sản phẩm thuộc nhóm.
   */
  productSlugs: string[];

  image: string | null;

  featured: boolean;

  order: number;
};

export const giftGroups: GiftGroup[] = [
  // =========================================================
  // QUÀ LƯU NIỆM
  // =========================================================

  {
    id: "gift-luu-niem",

    slug: "qua-luu-niem",

    name: "Quà lưu niệm",

    shortName: "Quà lưu niệm",

    description:
      "Những sản phẩm nhỏ gọn, dễ mang theo và phù hợp mua sau trải nghiệm tham quan.",

    useCase:
      "Phù hợp cho khách tham quan, khách du lịch và người muốn lưu giữ một dấu ấn văn hóa dưới dạng vật phẩm sử dụng hằng ngày.",

    productSlugs: [
      "dau-an-thuong-trieu-nguyen",
      "an-menh-keycap",
      "phuong-sac-kinh",
    ],

    image: "/gifts/qua-luu-niem.jpg",

    featured: true,

    order: 1,
  },

  // =========================================================
  // QUÀ TẶNG VĂN HÓA
  // =========================================================

  {
    id: "gift-van-hoa",

    slug: "qua-tang-van-hoa",

    name: "Quà tặng văn hóa",

    shortName: "Quà văn hóa",

    description:
      "Các sản phẩm có câu chuyện nguồn rõ ràng, phù hợp dùng làm quà tặng gắn với lịch sử và di sản.",

    useCase:
      "Phù hợp cho cá nhân, gia đình, khách quốc tế hoặc các dịp cần một món quà có yếu tố văn hóa và câu chuyện đi kèm.",

    productSlugs: [
      "dau-an-thuong-trieu-nguyen",
      "phuong-sac-kinh",
      "charm-oc-eo",
      "sac-menh-ngoc-son",
      "phuong-sac-trieu-y",
      "sac-menh-kim-dau",
    ],

    image: "/gifts/qua-tang-van-hoa.jpg",

    featured: true,

    order: 2,
  },

  // =========================================================
  // QUÀ TẶNG CÁ NHÂN
  // =========================================================

  {
    id: "gift-ca-nhan",

    slug: "qua-tang-ca-nhan",

    name: "Quà tặng cá nhân",

    shortName: "Quà cá nhân",

    description:
      "Các sản phẩm thiên về sử dụng cá nhân, phụ kiện và khả năng lựa chọn theo sở thích.",

    useCase:
      "Phù hợp với người dùng quan tâm đến trang sức, phụ kiện, làm đẹp hoặc sản phẩm có tính cá nhân hóa.",

    productSlugs: [
      "phuong-sac-kinh",
      "charm-oc-eo",
      "sac-menh-ngoc-son",
      "phuong-sac-trieu-y",
    ],

    image: "/gifts/qua-tang-ca-nhan.jpg",

    featured: true,

    order: 3,
  },

  // =========================================================
  // QUÀ TẶNG SƯU TẦM
  // =========================================================

  {
    id: "gift-suu-tam",

    slug: "qua-tang-suu-tam",

    name: "Sản phẩm sưu tầm",

    shortName: "Sưu tầm",

    description:
      "Các thiết kế có cấu trúc, hình thức hoặc cơ chế sử dụng phù hợp với hành vi sưu tầm.",

    useCase:
      "Phù hợp với người dùng yêu thích vật phẩm nhỏ, phiên bản thiết kế đặc biệt hoặc sản phẩm có thể bổ sung theo thời gian.",

    productSlugs: [
      "an-menh-keycap",
      "charm-oc-eo",
      "dau-an-thuong-trieu-nguyen",
    ],

    image: "/gifts/qua-tang-suu-tam.jpg",

    featured: false,

    order: 4,
  },

  // =========================================================
  // QUÀ TẶNG ẨM THỰC
  // =========================================================

  {
    id: "gift-am-thuc",

    slug: "qua-tang-am-thuc",

    name: "Quà tặng ẩm thực",

    shortName: "Quà ẩm thực",

    description:
      "Sản phẩm thực phẩm đóng gói được phát triển theo hướng quà tặng có câu chuyện văn hóa.",

    useCase:
      "Phù hợp với các dịp biếu tặng, trải nghiệm tại điểm văn hóa hoặc kết hợp trong bộ quà tặng.",

    productSlugs: [
      "sac-menh-kim-dau",
    ],

    image: "/gifts/qua-tang-am-thuc.jpg",

    featured: false,

    order: 5,
  },

  // =========================================================
  // QUÀ TẶNG DOANH NGHIỆP
  // =========================================================

  {
    id: "gift-doanh-nghiep",

    slug: "qua-tang-doanh-nghiep",

    name: "Quà tặng doanh nghiệp",

    shortName: "Quà doanh nghiệp",

    description:
      "Nhóm sản phẩm có thể được tuyển chọn thành bộ quà theo chủ đề văn hóa.",

    useCase:
      "Dành cho nhu cầu quà tặng đối tác, sự kiện hoặc bộ quà có nội dung giới thiệu riêng. Việc đóng bộ, giá và điều kiện đặt hàng cần được xác định ở giai đoạn thương mại.",

    productSlugs: [
      "dau-an-thuong-trieu-nguyen",
      "sac-menh-ngoc-son",
      "sac-menh-kim-dau",
    ],

    image: "/gifts/qua-tang-doanh-nghiep.jpg",

    featured: false,

    order: 6,
  },
];

// =========================================================
// HELPERS
// =========================================================

export function getAllGiftGroups(): GiftGroup[] {
  return [...giftGroups].sort(
    (a, b) => a.order - b.order,
  );
}

export function getFeaturedGiftGroups(): GiftGroup[] {
  return giftGroups
    .filter((gift) => gift.featured)
    .sort((a, b) => a.order - b.order);
}

export function getGiftGroupBySlug(
  slug: string,
): GiftGroup | undefined {
  return giftGroups.find(
    (gift) => gift.slug === slug,
  );
}

export function getGiftGroupsByProductSlug(
  productSlug: string,
): GiftGroup[] {
  return giftGroups
    .filter((gift) =>
      gift.productSlugs.includes(productSlug),
    )
    .sort((a, b) => a.order - b.order);
}
