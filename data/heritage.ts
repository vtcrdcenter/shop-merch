// data/heritage.ts

export type HeritageStatus =
  | "documented"
  | "needs-review"
  | "reference";

export type HeritageImage = {
  src: string;
  alt: string;
};

export type HeritageSource = {
  id: string;

  slug: string;

  name: string;

  shortName: string;

  /**
   * Nhóm nguồn di sản hiển thị trên website.
   */
  type:
    | "artifact"
    | "costume"
    | "archaeology"
    | "decorative-art"
    | "seal"
    | "reference-object";

  period: string | null;

  managingInstitution: string | null;

  shortDescription: string;

  description: string;

  /**
   * Các yếu tố được sử dụng trong thiết kế.
   */
  designElements: string[];

  /**
   * Slug sản phẩm liên quan.
   */
  productSlugs: string[];

  images: HeritageImage[];

  status: HeritageStatus;

  featured: boolean;

  order: number;
};

export const heritageSources: HeritageSource[] = [
  // =========================================================
  // MŨ THƯỢNG TRIỀU
  // =========================================================

  {
    id: "heritage-mu-thuong-trieu",

    slug: "mu-thuong-trieu",

    name: "Mũ thượng triều thời Nguyễn",

    shortName: "Mũ thượng triều",

    type: "artifact",

    period: "Thế kỷ XIX–XX",

    managingInstitution: "Bảo tàng Lịch sử Quốc gia",

    shortDescription:
      "Nguồn tạo hình cho sản phẩm Dấu Ấn Thượng Triều Nguyễn.",

    description:
      "Mũ thượng triều thời Nguyễn được sử dụng làm nguồn tạo hình chính cho sản phẩm Dấu Ấn Thượng Triều Nguyễn. Hồ sơ thiết kế xác định các dấu hiệu nhận diện được khai thác gồm cánh chuồn, trục đối xứng, rồng, mây, mặt trời và hệ hạt trang trí.",

    designElements: [
      "Cánh chuồn",
      "Trục đối xứng",
      "Hình tượng rồng",
      "Mây",
      "Mặt trời",
      "Hệ hạt trang trí",
    ],

    productSlugs: [
      "dau-an-thuong-trieu-nguyen",
    ],

    images: [
      {
        src: "/heritage/mu-thuong-trieu.jpg",
        alt: "Mũ thượng triều thời Nguyễn",
      },
    ],

    status: "documented",

    featured: true,

    order: 1,
  },

  // =========================================================
  // ẤN SẮC MỆNH CHI BẢO
  // =========================================================

  {
    id: "heritage-sac-menh-chi-bao",

    slug: "sac-menh-chi-bao",

    name: "Ấn “Sắc mệnh chi bảo”",

    shortName: "Sắc mệnh chi bảo",

    type: "seal",

    period: "Minh Mệnh thứ 8, năm 1827",

    managingInstitution: null,

    shortDescription:
      "Bảo ấn được sử dụng làm nguồn cảm hứng cho Keycap, son và bánh đậu xanh.",

    description:
      "Ấn “Sắc mệnh chi bảo” là nguồn di sản được sử dụng trong nhiều phương án thiết kế. Hình tượng rồng, mặt triện và chức năng đóng dấu được khai thác ở các mức độ khác nhau tùy theo công năng sản phẩm.",

    designElements: [
      "Hình tượng rồng",
      "Mặt triện",
      "Hình khối bảo ấn",
      "Chức năng đóng dấu",
    ],

    productSlugs: [
      "an-menh-keycap",
      "sac-menh-ngoc-son",
      "sac-menh-kim-dau",
    ],

    images: [
      {
        src: "/heritage/sac-menh-chi-bao.jpg",
        alt: "Ấn Sắc mệnh chi bảo",
      },
    ],

    status: "documented",

    featured: true,

    order: 2,
  },

  // =========================================================
  // PHƯỢNG BÀO
  // =========================================================

  {
    id: "heritage-phuong-bao",

    slug: "phuong-bao",

    name: "Phượng bào triều Nguyễn",

    shortName: "Phượng bào",

    type: "costume",

    period: "Triều Nguyễn",

    managingInstitution: null,

    shortDescription:
      "Nguồn hình tượng và hệ màu cho Phượng Sắc Kính và Phượng Sắc Triều Y.",

    description:
      "Phượng bào và hệ họa tiết trên triều phục Hoàng hậu được sử dụng làm nguồn tham chiếu cho các sản phẩm thuộc hướng thiết kế Phượng Sắc. Các yếu tố chính gồm hình tượng phượng, mây ngũ sắc, hệ màu đỏ – vàng và một số mô-típ trang trí cung đình.",

    designElements: [
      "Hình tượng phượng",
      "Mây ngũ sắc",
      "Hệ màu đỏ – vàng",
      "Mây",
      "Thủy ba ở mức tham chiếu",
    ],

    productSlugs: [
      "phuong-sac-kinh",
      "phuong-sac-trieu-y",
    ],

    images: [
      {
        src: "/heritage/phuong-bao.jpg",
        alt: "Phượng bào triều Nguyễn",
      },
    ],

    status: "needs-review",

    featured: true,

    order: 3,
  },

  // =========================================================
  // VĂN HÓA ÓC EO
  // =========================================================

  {
    id: "heritage-oc-eo",

    slug: "van-hoa-oc-eo",

    name: "Trang sức và hình khối khảo cổ Óc Eo",

    shortName: "Văn hóa Óc Eo",

    type: "archaeology",

    period: null,

    managingInstitution: null,

    shortDescription:
      "Nguồn hình khối cho hệ Charm Óc Eo.",

    description:
      "Nhóm tư liệu khảo cổ Óc Eo được sử dụng để xây dựng hệ charm dạng module. Phương án không lấy một hiện vật duy nhất mà khai thác nhiều dạng hạt, hình học và cấu trúc trang sức để phát triển thành sản phẩm có thể phối ghép.",

    designElements: [
      "Hoa sen",
      "Hạt cầu",
      "Hạt đa diện",
      "Hình khối có lỗ xuyên",
      "Cấu trúc trang sức",
      "Bề mặt vật liệu",
    ],

    productSlugs: [
      "charm-oc-eo",
    ],

    images: [
      {
        src: "/heritage/oc-eo.jpg",
        alt: "Trang sức và hình khối khảo cổ Óc Eo",
      },
    ],

    status: "needs-review",

    featured: true,

    order: 4,
  },

  // =========================================================
  // LỌ NGỌC THỜI NGUYỄN
  // =========================================================

  {
    id: "heritage-lo-ngoc-thoi-nguyen",

    slug: "lo-ngoc-thoi-nguyen",

    name: "Lọ ngọc thời Nguyễn",

    shortName: "Lọ ngọc thời Nguyễn",

    type: "reference-object",

    period: "Triều Nguyễn",

    managingInstitution: null,

    shortDescription:
      "Nguồn tạo hình chính cho sản phẩm Sắc Mệnh Ngọc Son.",

    description:
      "Hình dáng lọ ngọc thời Nguyễn được sử dụng làm nguồn tạo hình chính cho vỏ son Sắc Mệnh Ngọc Son. Các đặc điểm được khai thác gồm thân đứng, đế vuông, quai cong và cảm giác vật liệu ngọc sáng.",

    designElements: [
      "Thân lọ",
      "Đế vuông",
      "Quai cong",
      "Sắc ngọc sáng",
    ],

    productSlugs: [
      "sac-menh-ngoc-son",
    ],

    images: [
      {
        src: "/heritage/lo-ngoc-thoi-nguyen.jpg",
        alt: "Lọ ngọc thời Nguyễn",
      },
    ],

    status: "needs-review",

    featured: false,

    order: 5,
  },
];

// =========================================================
// HELPERS
// =========================================================

export function getAllHeritageSources(): HeritageSource[] {
  return [...heritageSources].sort(
    (a, b) => a.order - b.order,
  );
}

export function getFeaturedHeritageSources(): HeritageSource[] {
  return heritageSources
    .filter((item) => item.featured)
    .sort((a, b) => a.order - b.order);
}

export function getHeritageBySlug(
  slug: string,
): HeritageSource | undefined {
  return heritageSources.find(
    (item) => item.slug === slug,
  );
}

export function getHeritageByProductSlug(
  productSlug: string,
): HeritageSource[] {
  return heritageSources
    .filter((item) =>
      item.productSlugs.includes(productSlug),
    )
    .sort((a, b) => a.order - b.order);
}
