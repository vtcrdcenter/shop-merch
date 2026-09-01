// data/collections.ts

export type CollectionStatus =
  | "active"
  | "draft"
  | "coming-soon";

export type ShopCollection = {
  id: string;

  slug: string;

  name: string;

  shortName: string;

  eyebrow: string;

  shortDescription: string;

  description: string;

  /**
   * Slug các nguồn di sản liên quan.
   */
  heritageSlugs: string[];

  /**
   * Slug sản phẩm thuộc collection.
   */
  productSlugs: string[];

  heroImage: string | null;

  cardImage: string | null;

  status: CollectionStatus;

  featured: boolean;

  order: number;
};

export const collections: ShopCollection[] = [
  // =========================================================
  // DẤU ẤN CUNG ĐÌNH NGUYỄN
  // =========================================================

  {
    id: "collection-dau-an-cung-dinh-nguyen",

    slug: "dau-an-cung-dinh-nguyen",

    name: "Dấu ấn cung đình Nguyễn",

    shortName: "Dấu ấn cung đình",

    eyebrow: "DI SẢN CUNG ĐÌNH",

    shortDescription:
      "Những thiết kế khai thác hình tượng, hiện vật và mỹ thuật cung đình triều Nguyễn.",

    description:
      "Dấu ấn cung đình Nguyễn là nhóm tuyển chọn các thiết kế được phát triển từ hiện vật, bảo ấn, triều phục và ngôn ngữ mỹ thuật cung đình. Collection này đóng vai trò như một lớp tổ chức nội dung của gian hàng, giúp người dùng tiếp cận nhiều sản phẩm có chung bối cảnh văn hóa.",

    heritageSlugs: [
      "mu-thuong-trieu",
      "sac-menh-chi-bao",
      "phuong-bao",
      "lo-ngoc-thoi-nguyen",
    ],

    productSlugs: [
      "dau-an-thuong-trieu-nguyen",
      "an-menh-keycap",
      "phuong-sac-kinh",
      "sac-menh-ngoc-son",
      "phuong-sac-trieu-y",
      "sac-menh-kim-dau",
    ],

    heroImage: "/collections/dau-an-cung-dinh-nguyen-hero.jpg",

    cardImage: "/collections/dau-an-cung-dinh-nguyen.jpg",

    status: "active",

    featured: true,

    order: 1,
  },

  // =========================================================
  // SẮC MỆNH
  // =========================================================

  {
    id: "collection-sac-menh",

    slug: "sac-menh",

    name: "Sắc Mệnh",

    shortName: "Sắc Mệnh",

    eyebrow: "TỪ BẢO ẤN ĐẾN SẢN PHẨM",

    shortDescription:
      "Những thiết kế có liên hệ trực tiếp với ấn “Sắc mệnh chi bảo”.",

    description:
      "Sắc Mệnh tập hợp các sản phẩm sử dụng hình tượng rồng, mặt triện, hình khối hoặc câu chuyện liên quan đến ấn “Sắc mệnh chi bảo”. Mỗi sản phẩm chuyển hóa nguồn này theo một công năng khác nhau, từ phụ kiện công nghệ đến mỹ phẩm và quà tặng thực phẩm.",

    heritageSlugs: [
      "sac-menh-chi-bao",
      "lo-ngoc-thoi-nguyen",
    ],

    productSlugs: [
      "an-menh-keycap",
      "sac-menh-ngoc-son",
      "sac-menh-kim-dau",
    ],

    heroImage: "/collections/sac-menh-hero.jpg",

    cardImage: "/collections/sac-menh.jpg",

    status: "active",

    featured: true,

    order: 2,
  },

  // =========================================================
  // PHƯỢNG SẮC
  // =========================================================

  {
    id: "collection-phuong-sac",

    slug: "phuong-sac",

    name: "Phượng Sắc",

    shortName: "Phượng Sắc",

    eyebrow: "MỸ THUẬT CUNG ĐÌNH",

    shortDescription:
      "Những thiết kế phát triển từ hình tượng phượng và hệ màu trên Phượng bào.",

    description:
      "Phượng Sắc là nhóm sản phẩm khai thác hình tượng phượng, mây ngũ sắc và hệ màu cung đình từ Phượng bào triều Nguyễn. Các thiết kế được phát triển theo hướng phụ kiện cá nhân và làm đẹp.",

    heritageSlugs: [
      "phuong-bao",
    ],

    productSlugs: [
      "phuong-sac-kinh",
      "phuong-sac-trieu-y",
    ],

    heroImage: "/collections/phuong-sac-hero.jpg",

    cardImage: "/collections/phuong-sac.jpg",

    status: "active",

    featured: true,

    order: 3,
  },

  // =========================================================
  // ÓC EO
  // =========================================================

  {
    id: "collection-oc-eo",

    slug: "oc-eo",

    name: "Dấu ấn Óc Eo",

    shortName: "Óc Eo",

    eyebrow: "KHẢO CỔ & TRANG SỨC",

    shortDescription:
      "Các sản phẩm phát triển từ hình khối và hệ trang sức khảo cổ Óc Eo.",

    description:
      "Dấu ấn Óc Eo là nhóm nội dung dành cho các thiết kế khai thác hình khối, hạt và cấu trúc trang sức khảo cổ Óc Eo. Ở giai đoạn hiện tại, Charm Óc Eo là sản phẩm đầu tiên trong nhóm này.",

    heritageSlugs: [
      "van-hoa-oc-eo",
    ],

    productSlugs: [
      "charm-oc-eo",
    ],

    heroImage: "/collections/oc-eo-hero.jpg",

    cardImage: "/collections/oc-eo.jpg",

    status: "coming-soon",

    featured: false,

    order: 4,
  },
];

// =========================================================
// HELPERS
// =========================================================

export function getAllCollections(): ShopCollection[] {
  return [...collections].sort(
    (a, b) => a.order - b.order,
  );
}

export function getFeaturedCollections(): ShopCollection[] {
  return collections
    .filter((collection) => collection.featured)
    .sort((a, b) => a.order - b.order);
}

export function getCollectionBySlug(
  slug: string,
): ShopCollection | undefined {
  return collections.find(
    (collection) => collection.slug === slug,
  );
}

export function getCollectionsByProductSlug(
  productSlug: string,
): ShopCollection[] {
  return collections
    .filter((collection) =>
      collection.productSlugs.includes(productSlug),
    )
    .sort((a, b) => a.order - b.order);
}
