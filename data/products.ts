// data/categories.ts

export type ProductCategoryId =
  | "P1"
  | "P2"
  | "P3"
  | "P4"
  | "P5"
  | "P6"
  | "P7"
  | "P8";

export type ProductCategory = {
  id: ProductCategoryId;

  /**
   * Slug dùng trên URL.
   * Không dùng P1, P2... trên giao diện khách hàng.
   */
  slug: string;

  /**
   * Tên đầy đủ theo taxonomy chính thức.
   */
  name: string;

  /**
   * Tên ngắn dùng cho menu, filter hoặc card.
   */
  shortName: string;

  /**
   * Mô tả ngắn để sử dụng tại trang /products
   * hoặc trang category.
   */
  description: string;

  /**
   * Thứ tự hiển thị.
   */
  order: number;
};

export const productCategories: ProductCategory[] = [
  {
    id: "P1",
    slug: "mo-hinh-phien-ban-hien-vat",
    name: "Mô hình, phiên bản hiện vật và tạo hình diễn giải",
    shortName: "Mô hình & hiện vật",
    description:
      "Các sản phẩm tái hiện, mô phỏng hoặc diễn giải hình thức của hiện vật, kiến trúc và tư liệu bảo tàng.",
    order: 1,
  },

  {
    id: "P2",
    slug: "nghe-thuat-thu-cong-sang-tac",
    name: "Nghệ thuật, thủ công và sản phẩm sáng tác",
    shortName: "Nghệ thuật & thủ công",
    description:
      "Các tác phẩm và sản phẩm sáng tác được phát triển bằng ngôn ngữ nghệ thuật, thủ công và vật liệu sáng tạo.",
    order: 2,
  },

  {
    id: "P3",
    slug: "xuat-ban-pham-noi-dung-tri-thuc",
    name: "Xuất bản phẩm và nội dung tri thức",
    shortName: "Xuất bản & tri thức",
    description:
      "Sách, ấn phẩm, tài liệu và các sản phẩm nội dung giúp mở rộng kiến thức về lịch sử, văn hóa và di sản.",
    order: 3,
  },

  {
    id: "P4",
    slug: "van-phong-pham-qua-nho-luu-niem",
    name: "Văn phòng phẩm, quà nhỏ và vật phẩm lưu niệm",
    shortName: "Quà nhỏ & lưu niệm",
    description:
      "Những vật phẩm nhỏ gọn, dễ sử dụng và phù hợp làm quà lưu niệm sau trải nghiệm tham quan.",
    order: 4,
  },

  {
    id: "P5",
    slug: "gia-dung-noi-that-trang-tri",
    name: "Gia dụng, nội thất và trang trí",
    shortName: "Gia dụng & trang trí",
    description:
      "Các sản phẩm phục vụ không gian sống, trang trí và sử dụng trong gia đình được phát triển từ nguồn cảm hứng văn hóa.",
    order: 5,
  },

  {
    id: "P6",
    slug: "thoi-trang-trang-suc-phu-kien",
    name: "Thời trang, trang sức và phụ kiện cá nhân",
    shortName: "Thời trang & phụ kiện",
    description:
      "Trang sức, phụ kiện cá nhân và sản phẩm làm đẹp được phát triển từ hình tượng, màu sắc và ngôn ngữ mỹ thuật di sản.",
    order: 6,
  },

  {
    id: "P7",
    slug: "do-choi-giao-duc-tre-em",
    name: "Đồ chơi, giáo dục và sản phẩm cho trẻ em",
    shortName: "Đồ chơi & giáo dục",
    description:
      "Các sản phẩm phục vụ học tập, khám phá và trải nghiệm văn hóa dành cho trẻ em và gia đình.",
    order: 7,
  },

  {
    id: "P8",
    slug: "thuc-pham-do-uong-dong-goi",
    name: "Thực phẩm và đồ uống đóng gói",
    shortName: "Ẩm thực & quà tặng",
    description:
      "Thực phẩm và đồ uống đóng gói được phát triển thành sản phẩm quà tặng gắn với câu chuyện và trải nghiệm văn hóa.",
    order: 8,
  },
];

/**
 * Lấy category theo mã P.
 */
export function getCategoryById(id: ProductCategoryId) {
  return productCategories.find((category) => category.id === id);
}

/**
 * Lấy category theo slug.
 */
export function getCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}
