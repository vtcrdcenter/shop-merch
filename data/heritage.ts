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

  documentationNote: string;

  designElements: string[];

  productSlugs: string[];

  images: HeritageImage[];

  status: HeritageStatus;

  featured: boolean;

  order: number;
};

export const heritageSources: HeritageSource[] = [
  // =========================================================
  // 01 — MŨ THƯỢNG TRIỀU THỜI NGUYỄN
  // =========================================================

  {
    id: "heritage-mu-thuong-trieu",

    slug: "mu-thuong-trieu",

    name: "Mũ thượng triều thời Nguyễn",

    shortName: "Mũ thượng triều",

    type: "artifact",

    period: "Thế kỷ XIX–XX",

    managingInstitution:
      "Bảo tàng Lịch sử Quốc gia",

    shortDescription:
      "Nguồn tạo hình cho sản phẩm Dấu Ấn Thượng Triều Nguyễn.",

    description:
      "Mũ thượng triều thời Nguyễn được sử dụng làm nguồn tạo hình chính cho sản phẩm Dấu Ấn Thượng Triều Nguyễn. Trong quá trình phát triển thiết kế, các đặc điểm nhận diện như cánh chuồn, trục đối xứng, hình tượng rồng, mây, mặt trời và hệ hạt trang trí được lựa chọn để chuyển hóa sang cấu trúc của sản phẩm mới.",

    documentationNote:
      "Hình ảnh được sử dụng để giới thiệu và đối chiếu nguồn di sản với phương án thiết kế. Thông tin kiểm kê, niên đại và phạm vi sử dụng hình ảnh cần được tiếp tục chuẩn hóa theo hồ sơ chính thức.",

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
        src: "/heritage/mu-thuong-trieu-nguyen-1.png",
        alt: "Mũ thượng triều thời Nguyễn – tư liệu nguồn 1",
      },
      {
        src: "/heritage/mu-thuong-trieu-nguyen-2.png",
        alt: "Mũ thượng triều thời Nguyễn – tư liệu nguồn 2",
      },
    ],

    status: "documented",

    featured: true,

    order: 1,
  },

  // =========================================================
  // 02 — ẤN SẮC MỆNH CHI BẢO
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
      "Ấn “Sắc mệnh chi bảo” là một trong những nguồn di sản được khai thác xuyên suốt trong hệ sản phẩm. Hình khối bảo ấn, hình tượng rồng, mặt triện và đặc trưng của thao tác đóng dấu được lựa chọn và chuyển hóa ở những mức độ khác nhau tùy theo công năng của từng sản phẩm.",

    documentationNote:
      "Hình ảnh trên trang được sử dụng làm tư liệu tham chiếu trong quá trình phát triển thiết kế. Thông tin hiện vật, nơi lưu giữ và quyền sử dụng hình ảnh cần được đối chiếu trong hồ sơ chính thức.",

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
        src: "/heritage/sac-menh-chi-bao-1.png",
        alt: "Ấn Sắc mệnh chi bảo – tư liệu nguồn 1",
      },
      {
        src: "/heritage/sac-menh-chi-bao-2.png",
        alt: "Ấn Sắc mệnh chi bảo – tư liệu nguồn 2",
      },
    ],

    status: "documented",

    featured: true,

    order: 2,
  },

  // =========================================================
  // 03 — PHƯỢNG BÀO TRIỀU NGUYỄN
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
      "Nguồn hình tượng, họa tiết và hệ màu cho các thiết kế thuộc dòng Phượng Sắc.",

    description:
      "Phượng bào của Hoàng hậu triều Nguyễn được sử dụng làm nguồn tham chiếu cho hướng thiết kế Phượng Sắc. Các yếu tố được nghiên cứu gồm hình tượng phượng, hệ họa tiết trang trí cung đình, mây ngũ sắc, bố cục triều phục và hệ màu đặc trưng. Những yếu tố này được chọn lọc và tổ chức lại để phù hợp với công năng của sản phẩm đương đại.",

    documentationNote:
      "Nguồn đang được tiếp tục chuẩn hóa theo hồ sơ hiện vật. Tên gọi, niên đại, chủ thể sử dụng và từng mô-típ được khai thác cần được đối chiếu với tư liệu chuyên môn trước khi xuất bản chính thức.",

    designElements: [
      "Hình tượng phượng",
      "Mây ngũ sắc",
      "Hệ màu đỏ – vàng",
      "Bố cục triều phục",
      "Họa tiết cung đình",
    ],

    productSlugs: [
      "phuong-sac-kinh",
      "phuong-sac-trieu-y",
    ],

    images: [
      {
        src: "/heritage/phuong-bao-nguyen-1.jpg",
        alt: "Phượng bào triều Nguyễn – tư liệu nguồn 1",
      },
      {
        src: "/heritage/phuong-bao-nguyen-2.jpg",
        alt: "Phượng bào triều Nguyễn – tư liệu nguồn 2",
      },
    ],

    status: "needs-review",

    featured: true,

    order: 3,
  },

  // =========================================================
  // 04 — VĂN HÓA ÓC EO
  // =========================================================

  {
    id: "heritage-oc-eo",

    slug: "van-hoa-oc-eo",

    name:
      "Trang sức và hình khối khảo cổ Óc Eo",

    shortName: "Văn hóa Óc Eo",

    type: "archaeology",

    period: null,

    managingInstitution: null,

    shortDescription:
      "Hệ hiện vật khảo cổ được sử dụng làm nguồn hình khối cho Charm Óc Eo.",

    description:
      "Nhóm tư liệu khảo cổ Óc Eo được sử dụng để nghiên cứu và phát triển hệ Charm Óc Eo. Phương án không sao chép một hiện vật duy nhất mà khảo sát nhiều dạng hạt, cấu trúc trang sức, hình học và bề mặt vật liệu khác nhau để hình thành hệ charm có khả năng phối ghép.",

    documentationNote:
      "Đây là nhóm tham chiếu gồm nhiều hiện vật khác nhau. Mỗi mẫu charm cần có bảng đối chiếu riêng về nguồn, địa điểm phát hiện, chất liệu, niên đại và tài liệu công bố trước khi hoàn thiện hồ sơ.",

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
        src: "/heritage/oc-eo-trang-suc-1.jpg",
        alt: "Trang sức và hình khối khảo cổ Óc Eo – tư liệu 1",
      },
      {
        src: "/heritage/oc-eo-trang-suc-2.jpg",
        alt: "Trang sức và hình khối khảo cổ Óc Eo – tư liệu 2",
      },
      {
        src: "/heritage/oc-eo-trang-suc-3.jpg",
        alt: "Trang sức và hình khối khảo cổ Óc Eo – tư liệu 3",
      },
      {
        src: "/heritage/oc-eo-trang-suc-4.jpg",
        alt: "Trang sức và hình khối khảo cổ Óc Eo – tư liệu 4",
      },
      {
        src: "/heritage/oc-eo-trang-suc-5.jpg",
        alt: "Trang sức và hình khối khảo cổ Óc Eo – tư liệu 5",
      },
      {
        src: "/heritage/oc-eo-trang-suc-6.jpg",
        alt: "Trang sức và hình khối khảo cổ Óc Eo – tư liệu 6",
      },
    ],

    status: "needs-review",

    featured: true,

    order: 4,
  },

  // =========================================================
  // 05 — LỌ NGỌC THỜI NGUYỄN
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
      "Nguồn tạo hình tham chiếu cho sản phẩm Sắc Mệnh Ngọc Son.",

    description:
      "Hình dáng lọ ngọc thời Nguyễn được sử dụng làm nguồn tham chiếu trong quá trình phát triển hình khối vỏ son Sắc Mệnh Ngọc Son. Phương án nghiên cứu tỷ lệ thân lọ, cấu trúc phần đế, quai cong và cảm giác của vật liệu ngọc để chuyển hóa sang hình thức bao bì và vỏ son.",

    documentationNote:
      "Tên gọi “lọ ngọc thời Nguyễn” hiện được sử dụng ở mức tham chiếu thiết kế. Hồ sơ chính thức cần tiếp tục bổ sung số kiểm kê, kích thước, chất liệu, niên đại và nguồn ảnh.",

    designElements: [
      "Thân lọ",
      "Phần đế",
      "Quai cong",
      "Hình khối đứng",
      "Sắc ngọc sáng",
    ],

    productSlugs: [
      "sac-menh-ngoc-son",
    ],

    images: [
      {
        src: "/heritage/lo-ngoc-nguyen.png",
        alt: "Lọ ngọc thời Nguyễn – tư liệu tham chiếu",
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
    .filter(
      (item) => item.featured,
    )
    .sort(
      (a, b) =>
        a.order - b.order,
    );
}

export function getHeritageBySlug(
  slug: string,
): HeritageSource | undefined {
  return heritageSources.find(
    (item) =>
      item.slug === slug,
  );
}

export function getHeritageByProductSlug(
  productSlug: string,
): HeritageSource[] {
  return heritageSources
    .filter((item) =>
      item.productSlugs.includes(
        productSlug,
      ),
    )
    .sort(
      (a, b) =>
        a.order - b.order,
    );
}
