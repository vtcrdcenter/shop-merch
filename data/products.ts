// data/products.ts

import type { ProductCategoryId } from "./categories";

export type ProductAvailability =
  | "available"
  | "coming-soon"
  | "sold-out";

export type ProductPrice = {
  amount: number | null;
  currency: "VND";
};

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductTraceability = {
  enabled: boolean;

  /**
   * true = đang dùng hồ sơ mẫu để trình diễn hệ thống.
   */
  demo: boolean;

  /**
   * URL sang nền tảng truy xuất.
   */
  url: string | null;
};

export type ShopProduct = {
  /**
   * ID nội bộ của sản phẩm.
   */
  id: string;

  /**
   * Mã sản phẩm trong hồ sơ dự án.
   */
  sku: string;

  /**
   * URL:
   * /products/{slug}
   */
  slug: string;

  name: string;

  /**
   * Tên ngắn dùng khi không đủ không gian.
   */
  shortName: string;

  categoryId: ProductCategoryId;

  /**
   * Tên loại sản phẩm mà khách hàng có thể hiểu.
   */
  productType: string;

  /**
   * Nhóm collection.
   * Sau này sẽ map với data/collections.ts.
   */
  collectionSlugs: string[];

  /**
   * Nguồn di sản.
   * Sau này map với data/heritage.ts.
   */
  heritageSlugs: string[];

  shortDescription: string;

  description: string;

  dimensions: string;

  materials: string[];

  function: string;

  transformationPrinciple: string;

  designDescription: string;

  pilotValue: string;

  requirementsBeforePrototype: string[];

  /**
   * Giá chưa được tài liệu NV3.4 xác định.
   */
  price: ProductPrice;

  availability: ProductAvailability;

  /**
   * Trạng thái dự án nội bộ.
   * Không nhất thiết phải hiển thị trên storefront.
   */
  projectStatus: string;

  images: ProductImage[];

  traceability: ProductTraceability;

  featured: boolean;

  order: number;
};

export const products: ShopProduct[] = [
  // =========================================================
  // STT-01
  // DẤU ẤN THƯỢNG TRIỀU NGUYỄN
  // =========================================================

  {
    id: "stt-01",
    sku: "STT-01",

    slug: "dau-an-thuong-trieu-nguyen",

    name: "Dấu Ấn Thượng Triều Nguyễn",
    shortName: "Dấu Ấn Thượng Triều Nguyễn",

    categoryId: "P4",

    productType: "Nam châm trang trí nhiều lớp",

    collectionSlugs: ["dau-an-cung-dinh-nguyen"],

    heritageSlugs: ["mu-thuong-trieu"],

    shortDescription:
      "Nam châm nhiều lớp được phát triển từ hình dáng và các yếu tố nhận diện của mũ thượng triều thời Nguyễn.",

    description:
      "Thiết kế lấy hình dáng tổng thể từ mũ thượng triều thời Nguyễn, giữ lại các dấu hiệu nhận diện như cánh chuồn, trục đối xứng, rồng, mây, mặt trời và hệ hạt trang trí. Các chi tiết được tổ chức lại thành cấu trúc nhiều lớp phù hợp với một vật phẩm lưu niệm kích thước nhỏ.",

    dimensions: "68 × 54 mm; dày 3 mm",

    materials: [
      "Kẽm hợp kim",
      "Bề mặt mạ viền vàng",
      "Chi tiết màu men hoặc sơn theo mẫu",
      "Hạt trang trí hoặc vật liệu tương đương",
      "Đế nam châm",
    ],

    function:
      "Gắn trên tủ lạnh, bảng từ hoặc các bề mặt kim loại; phù hợp làm quà nhỏ và vật phẩm lưu niệm.",

    transformationPrinciple:
      "Giữ các yếu tố nhận diện cốt lõi của mũ thượng triều nhưng thay đổi tỷ lệ và tổ chức lại theo bề mặt phẳng, nhiều lớp. Cánh chuồn, mây, mặt trời và chuỗi hạt được phân tầng để tạo chiều sâu.",

    designDescription:
      "Lớp nền tạo màu đen và viền vàng; lớp tiếp theo thể hiện cánh chuồn, rồng, mây và chuỗi hạt; lớp trung tâm bổ sung mây, mặt trời đỏ và các chi tiết trang trí. Thiết kế hướng tới cảm giác tinh xảo thay vì mô phỏng nguyên trạng hiện vật.",

    pilotValue:
      "Kiểm thử khả năng nhận diện một hiện vật cung đình qua sản phẩm quà nhỏ, đồng thời đánh giá khả năng gia công kim loại nhiều lớp, hoàn thiện bề mặt và chi tiết đính.",

    requirementsBeforePrototype: [
      "Thẩm định chi tiết rồng, mây và mặt trời so với tư liệu nguồn.",
      "Chốt hệ màu sử dụng trên sản phẩm.",
      "Xác định vật liệu hoàn thiện cuối cùng.",
      "Kiểm tra phương án liên kết giữa các lớp.",
      "Kiểm tra độ bền của chi tiết hạt và tua trang trí.",
      "Kiểm tra lực nam châm.",
    ],

    price: {
      amount: null,
      currency: "VND",
    },

    availability: "coming-soon",

    projectStatus: "Phương án thiết kế / Pilot",

    images: [
      {
        src: "/product-magnet.jpg",
        alt: "Dấu Ấn Thượng Triều Nguyễn",
      },
      {
        src: "/product-magnet-lifestyle.jpg",
        alt: "Dấu Ấn Thượng Triều Nguyễn trong không gian sử dụng",
      },
    ],

    traceability: {
      enabled: true,
      demo: true,
      url: "https://vtcrdcenter.github.io/traceability/heritage/stt-01/",
    },

    featured: true,

    order: 1,
  },

  // =========================================================
  // STT-02
  // ẤN MỆNH KEYCAP
  // =========================================================

  {
    id: "stt-02",
    sku: "STT-02",

    slug: "an-menh-keycap",

    name: "Ấn Mệnh Keycap",
    shortName: "Ấn Mệnh Keycap",

    categoryId: "P4",

    productType: "Keycap phím ESC",

    collectionSlugs: ["sac-menh"],

    heritageSlugs: ["sac-menh-chi-bao"],

    shortDescription:
      "Keycap phím ESC phát triển từ hình tượng rồng và mặt triện của ấn “Sắc mệnh chi bảo”.",

    description:
      "Thiết kế chuyển hóa hình tượng rồng và chức năng đóng dấu của bảo ấn thành một phụ kiện dành cho bàn phím cơ. Cấu trúc được thu nhỏ thành keycap phím ESC, đồng thời giữ mặt triện như một chi tiết nhận diện của sản phẩm.",

    dimensions: "18 × 18 mm; dày 19 mm",

    materials: [
      "Nhựa hoặc resin kỹ thuật",
      "Bề mặt giả đồng hoặc hoàn thiện mạ/sơn",
    ],

    function:
      "Sử dụng tại vị trí phím ESC trên bàn phím cơ; phần nắp theo phương án thiết kế có thể tích hợp chức năng đóng dấu.",

    transformationPrinciple:
      "Giữ hình tượng rồng và chức năng đóng dấu của bảo ấn, thu nhỏ cấu trúc thành keycap. Hiệu ứng ánh sáng đỏ được sử dụng để tạo liên hệ với không gian bàn phím cơ.",

    designDescription:
      "Tầng ngoài tạo hình rồng và mang mặt dấu ở phía dưới; thân keycap được thiết kế tương thích với bàn phím cơ và có thể kết hợp hiệu ứng LED. Tông đồng và chi tiết chạm nổi tạo cảm giác của một vật phẩm sưu tầm kích thước nhỏ.",

    pilotValue:
      "Kiểm thử cách chuyển hóa di sản sang phụ kiện công nghệ và khả năng tiếp cận nhóm người dùng bàn phím cơ, sản phẩm sưu tầm.",

    requirementsBeforePrototype: [
      "Kiểm tra độ chính xác của hình tượng rồng.",
      "Kiểm tra mặt triện.",
      "Kiểm tra tương thích với switch bàn phím.",
      "Kiểm tra trọng lượng và chiều cao keycap.",
      "Kiểm tra độ bền cơ cấu nắp.",
      "Đánh giá khả năng đóng dấu.",
      "Đảm bảo hiệu ứng LED không ảnh hưởng thao tác phím.",
    ],

    price: {
      amount: null,
      currency: "VND",
    },

    availability: "coming-soon",

    projectStatus: "Phương án thiết kế / Pilot",

    images: [
      {
        src: "/product-keycap-fixed.jpg",
        alt: "Ấn Mệnh Keycap",
      },
      {
        src: "/product-keycap-lifestyle.jpg",
        alt: "Ấn Mệnh Keycap trên bàn phím cơ",
      },
    ],

    traceability: {
      enabled: false,
      demo: false,
      url: null,
    },

    featured: true,

    order: 2,
  },

  // =========================================================
  // STT-03
  // PHƯỢNG SẮC KÍNH
  // =========================================================

  {
    id: "stt-03",
    sku: "STT-03",

    slug: "phuong-sac-kinh",

    name: "Phượng Sắc Kính",
    shortName: "Phượng Sắc Kính",

    categoryId: "P6",

    productType: "Gương cầm tay",

    collectionSlugs: ["phuong-sac"],

    heritageSlugs: ["phuong-bao"],

    shortDescription:
      "Gương cầm tay khai thác hình tượng phượng và ngôn ngữ trang trí từ Phượng bào triều Nguyễn.",

    description:
      "Thiết kế sử dụng hình tượng phượng làm chủ thể, kết hợp các lớp mây, thủy ba và hệ màu cung đình. Các yếu tố được tái bố cục theo hình tròn của gương thay vì sao chép nguyên trạng bố cục trên triều phục.",

    dimensions: "70 × 70 mm; dày 8 mm",

    materials: [
      "Kim loại cho khung hoặc vỏ",
      "Thủy tinh cho mặt gương",
      "Bề mặt trang trí in, khắc, đổ màu hoặc men tùy mẫu thử",
    ],

    function:
      "Gương cầm tay phục vụ nhu cầu cá nhân và quà tặng; kích thước nhỏ gọn, phù hợp mang theo.",

    transformationPrinciple:
      "Chọn hình tượng phượng và các lớp mây, sóng làm ngôn ngữ chính; tái bố cục theo hình tròn của gương và rút gọn màu sắc về các nhóm cam, đỏ, xanh và vàng.",

    designDescription:
      "Mặt ngoài là trường trang trí hình tròn với phượng ở trung tâm, mây bố trí xung quanh và lớp thủy ba ở phần chân hình. Viền kim loại đóng vai trò khung, giúp thiết kế phù hợp với công năng gương cầm tay.",

    pilotValue:
      "Kiểm thử khả năng chuyển ngôn ngữ triều phục sang phụ kiện làm đẹp và tạo cơ sở phát triển hệ sản phẩm Phượng Sắc.",

    requirementsBeforePrototype: [
      "Xác định rõ nguồn họa tiết phượng sử dụng.",
      "Chốt vật liệu khung.",
      "Kiểm tra kết cấu bản lề.",
      "Kiểm tra độ bền bề mặt in hoặc khắc.",
      "Xác định phương án bảo vệ bề mặt.",
    ],

    price: {
      amount: null,
      currency: "VND",
    },

    availability: "coming-soon",

    projectStatus: "Phương án thiết kế / Pilot",

    images: [
      {
        src: "/product-mirror-fixed.jpg",
        alt: "Phượng Sắc Kính",
      },
    ],

    traceability: {
      enabled: false,
      demo: false,
      url: null,
    },

    featured: true,

    order: 3,
  },

  // =========================================================
  // STT-04
  // CHARM ÓC EO
  // =========================================================

  {
    id: "stt-04",
    sku: "STT-04",

    slug: "charm-oc-eo",

    name: "Charm Óc Eo",
    shortName: "Charm Óc Eo",

    categoryId: "P6",

    productType: "Hạt charm và phụ kiện phối ghép",

    collectionSlugs: ["oc-eo"],

    heritageSlugs: ["van-hoa-oc-eo"],

    shortDescription:
      "Hệ charm được phát triển từ các hình khối và dạng hạt trang sức khảo cổ Óc Eo.",

    description:
      "Sản phẩm không lấy duy nhất một hiện vật mà phát triển thành hệ module từ nhiều dạng hạt và hình khối khảo cổ Óc Eo. Người dùng có thể lựa chọn, phối ghép và bổ sung charm theo nhu cầu cá nhân.",

    dimensions: "Mỗi hạt khoảng 10 × 10 mm; dày khoảng 10 mm",

    materials: [
      "Đá",
      "Kim loại",
      "Vật liệu và lớp mạ cụ thể được xác định theo từng mẫu charm",
    ],

    function:
      "Sử dụng làm hạt charm cho vòng tay hoặc các phụ kiện cá nhân; có thể mua theo hạt, theo bộ hoặc bổ sung dần.",

    transformationPrinciple:
      "Giữ đặc trưng hình học, bề mặt và màu vật liệu của các dạng hạt ở mức nhận diện; điều chỉnh kích thước, lỗ xuyên và cơ cấu treo để phù hợp với việc phối ghép.",

    designDescription:
      "Hệ sản phẩm gồm nhiều dạng hạt và charm treo có khả năng kết hợp thành vòng tay hoặc phụ kiện khác. Cấu trúc module cho phép người dùng tự tạo tổ hợp riêng.",

    pilotValue:
      "Kiểm thử hành vi sưu tầm, cá nhân hóa và mua lặp lại; đồng thời đánh giá khả năng chuẩn hóa các module theo cùng hệ kết nối.",

    requirementsBeforePrototype: [
      "Lập bảng đối chiếu từng charm với hiện vật hoặc tư liệu nguồn.",
      "Không trộn các hình thức không cùng bối cảnh.",
      "Kiểm tra độ bền.",
      "Kiểm tra trọng lượng.",
      "Chuẩn hóa kích thước lỗ.",
      "Kiểm tra bề mặt tiếp xúc da.",
      "Chốt vật liệu từng charm.",
    ],

    price: {
      amount: null,
      currency: "VND",
    },

    availability: "coming-soon",

    projectStatus: "Phương án thiết kế / Pilot",

    images: [
      {
        src: "/product-bracelet-fixed.jpg",
        alt: "Charm Óc Eo",
      },
    ],

    traceability: {
      enabled: false,
      demo: false,
      url: null,
    },

    featured: true,

    order: 4,
  },

  // =========================================================
  // STT-05-01
  // SẮC MỆNH NGỌC SON
  // =========================================================

  {
    id: "stt-05-01",
    sku: "STT-05-01",

    slug: "sac-menh-ngoc-son",

    name: "Sắc Mệnh Ngọc Son",
    shortName: "Sắc Mệnh Ngọc Son",

    categoryId: "P6",

    productType: "Son môi và bao bì",

    collectionSlugs: ["sac-menh"],

    heritageSlugs: [
      "lo-ngoc-thoi-nguyen",
      "sac-menh-chi-bao",
    ],

    shortDescription:
      "Thiết kế son kết hợp hình dáng lọ ngọc thời Nguyễn với chi tiết nhận diện từ ấn “Sắc mệnh chi bảo”.",

    description:
      "Lọ ngọc thời Nguyễn là nguồn tạo hình chính của vỏ son, trong khi mặt ấn “Sắc mệnh chi bảo” được sử dụng như chi tiết nhận diện bổ trợ. Hình dáng thân lọ, đế vuông và quai cong được thu gọn thành cấu trúc vỏ son.",

    dimensions: "75 × 20 × 20 mm",

    materials: [
      "Nhựa",
      "Kim loại",
      "Vật liệu giả ngọc",
      "Lõi son thực hiện theo tiêu chuẩn chuyên ngành mỹ phẩm",
    ],

    function:
      "Son môi; phần vỏ đồng thời chuyển tải hình thức mỹ thuật cung đình và câu chuyện liên quan đến bảo ấn triều Nguyễn.",

    transformationPrinciple:
      "Giữ dáng thân lọ, đế vuông, quai cong và sắc ngọc sáng; thu gọn tỷ lệ thành vỏ son. Mặt ấn được đưa xuống đáy sản phẩm dưới dạng họa tiết hoặc chi tiết khắc.",

    designDescription:
      "Thỏi son có thân trụ đứng, phần nắp và đế vuông, hai bên bố trí quai cong. Bề mặt sử dụng tông ngọc hồng; đáy sản phẩm bố trí họa tiết lấy từ mặt ấn “Sắc mệnh chi bảo”.",

    pilotValue:
      "Kiểm chứng khả năng chuyển hình thức đồ ngự dụng cung đình thành sản phẩm làm đẹp đương đại và đánh giá mức độ chấp nhận đối với thiết kế dạng quà tặng.",

    requirementsBeforePrototype: [
      "Chốt nguồn hiện vật và tư liệu sử dụng.",
      "Hoàn thiện mapping giữa thiết kế và nguồn.",
      "Chốt cấu tạo vỏ.",
      "Xác định vật liệu cuối cùng.",
      "Tách hồ sơ thiết kế vỏ và hồ sơ chuyên ngành mỹ phẩm.",
    ],

    price: {
      amount: null,
      currency: "VND",
    },

    availability: "coming-soon",

    projectStatus: "Phương án thiết kế / Pilot",

    images: [
      {
        src: "/product-lipstick.jpg",
        alt: "Sắc Mệnh Ngọc Son",
      },
    ],

    traceability: {
      enabled: false,
      demo: false,
      url: null,
    },

    featured: true,

    order: 5,
  },

  // =========================================================
  // STT-05-02
  // PHƯỢNG SẮC TRIỀU Y
  // =========================================================

  {
    id: "stt-05-02",
    sku: "STT-05-02",

    slug: "phuong-sac-trieu-y",

    name: "Phượng Sắc Triều Y",
    shortName: "Phượng Sắc Triều Y",

    categoryId: "P6",

    productType: "Son môi và bao bì",

    collectionSlugs: ["phuong-sac"],

    heritageSlugs: ["phuong-bao"],

    shortDescription:
      "Thiết kế son khai thác hình tượng phượng, mây ngũ sắc và hệ màu đỏ – vàng từ Phượng bào triều Nguyễn.",

    description:
      "Thiết kế không sao chép nguyên trạng triều phục mà lựa chọn các yếu tố có khả năng nhận diện cao gồm phượng, mây ngũ sắc và hệ màu đỏ – vàng; sau đó giản lược thành các mảng trang trí phù hợp với diện tích nhỏ của vỏ son và bao bì.",

    dimensions: "75 × 20 × 20 mm",

    materials: [
      "Nhựa",
      "Kim loại",
      "Kết cấu vật liệu kết hợp",
      "Lõi son thực hiện theo hồ sơ chuyên ngành mỹ phẩm",
    ],

    function:
      "Son môi; phần vỏ và bao bì đồng thời chuyển tải câu chuyện về Phượng bào và mỹ thuật cung đình triều Nguyễn.",

    transformationPrinciple:
      "Lựa chọn phượng, mây ngũ sắc và hệ màu đỏ – vàng làm các yếu tố chính. Các đường nét sóng nước chỉ được sử dụng ở mức tham chiếu bổ trợ khi có đủ căn cứ tư liệu.",

    designDescription:
      "Sản phẩm sử dụng thân son dạng khối đứng, tỷ lệ gọn và phần nắp tạo điểm nhấn bằng sắc đỏ. Các mảng phượng, mây và chi tiết trang trí được phân bố theo chiều dọc để giữ nhận diện mà không sao chép nguyên mẫu triều phục.",

    pilotValue:
      "Đánh giá mức độ chấp nhận của người dùng đối với sản phẩm làm đẹp gắn yếu tố di sản và khả năng phát triển thành một hệ sản phẩm Phượng Sắc.",

    requirementsBeforePrototype: [
      "Chốt hiện vật nguồn.",
      "Xác định chính xác họa tiết được khai thác.",
      "Sử dụng phượng và mây ngũ sắc làm căn cứ chính.",
      "Chỉ sử dụng thủy ba ở mức tham chiếu khi chưa có tài liệu chứng minh trực tiếp.",
      "Hoàn thiện hồ sơ chuyên ngành mỹ phẩm.",
    ],

    price: {
      amount: null,
      currency: "VND",
    },

    availability: "coming-soon",

    projectStatus: "Phương án thiết kế / Pilot",

    /**
     * Hiện chưa gán ảnh để tránh dùng nhầm mockup
     * của Sắc Mệnh Ngọc Son.
     *
     * Khi có asset riêng, thêm:
     *
     * {
     *   src: "/product-phuong-sac-trieu-y.jpg",
     *   alt: "Phượng Sắc Triều Y",
     * }
     */
    images: [],

    traceability: {
      enabled: false,
      demo: false,
      url: null,
    },

    featured: false,

    order: 6,
  },

  // =========================================================
  // STT-06
  // SẮC MỆNH KIM ĐẬU
  // =========================================================

  {
    id: "stt-06",
    sku: "STT-06",

    slug: "sac-menh-kim-dau",

    name: "Sắc Mệnh Kim Đậu",
    shortName: "Sắc Mệnh Kim Đậu",

    categoryId: "P8",

    productType: "Bánh đậu xanh đóng gói",

    collectionSlugs: ["sac-menh"],

    heritageSlugs: ["sac-menh-chi-bao"],

    shortDescription:
      "Bánh đậu xanh dạng quà tặng sử dụng mặt triện của ấn “Sắc mệnh chi bảo” làm chi tiết tạo hình.",

    description:
      "Thiết kế giữ hình khối quen thuộc của bánh đậu xanh và chuyển mặt triện thành dấu khắc chìm trên bề mặt bánh. Câu chuyện sản phẩm được mở rộng thông qua hệ bao bì quà tặng.",

    dimensions: "Bánh 30 × 30 mm; dày 15 mm",

    materials: [
      "Bánh đậu xanh",
      "Bao bì thực phẩm",
      "Vật liệu tiếp xúc thực phẩm theo yêu cầu chuyên ngành",
    ],

    function:
      "Thực phẩm đóng gói dùng làm quà biếu, quà tặng và sản phẩm trải nghiệm tại điểm văn hóa.",

    transformationPrinciple:
      "Giữ hình khối bánh đậu xanh và chuyển mặt triện thành dấu khắc chìm trên một mặt bánh; không thay đổi công năng sử dụng cơ bản của sản phẩm.",

    designDescription:
      "Bánh có hình vuông, trên bề mặt bố trí dấu triện. Sản phẩm được đóng theo bộ trong hộp quà; phần bao bì đảm nhiệm vai trò kể câu chuyện và kết nối sản phẩm với nguồn cảm hứng di sản.",

    pilotValue:
      "Kiểm thử khả năng gia tăng giá trị cảm nhận của một đặc sản quen thuộc bằng câu chuyện và biểu tượng di sản, đồng thời thử nghiệm nhóm thực phẩm đóng gói trong danh mục Pilot.",

    requirementsBeforePrototype: [
      "Xác minh căn cứ lịch sử của câu chuyện sản phẩm.",
      "Thẩm định phạm vi sử dụng mặt triện trên thực phẩm.",
      "Kiểm tra khuôn tạo dấu.",
      "Kiểm soát yêu cầu an toàn thực phẩm.",
      "Hoàn thiện bao bì.",
      "Hoàn thiện nhãn hàng hóa.",
    ],

    price: {
      amount: null,
      currency: "VND",
    },

    availability: "coming-soon",

    projectStatus: "Phương án thiết kế / Pilot",

    images: [
      {
        src: "/product-cake-fixed.jpg",
        alt: "Sắc Mệnh Kim Đậu",
      },
    ],

    traceability: {
      enabled: false,
      demo: false,
      url: null,
    },

    featured: true,

    order: 7,
  },
];

// =========================================================
// HELPERS
// =========================================================

export function getAllProducts(): ShopProduct[] {
  return [...products].sort((a, b) => a.order - b.order);
}

export function getFeaturedProducts(): ShopProduct[] {
  return products
    .filter((product) => product.featured)
    .sort((a, b) => a.order - b.order);
}

export function getProductBySlug(
  slug: string,
): ShopProduct | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductBySku(
  sku: string,
): ShopProduct | undefined {
  return products.find((product) => product.sku === sku);
}

export function getProductsByCategory(
  categoryId: ProductCategoryId,
): ShopProduct[] {
  return products
    .filter((product) => product.categoryId === categoryId)
    .sort((a, b) => a.order - b.order);
}

export function getProductsByHeritage(
  heritageSlug: string,
): ShopProduct[] {
  return products
    .filter((product) =>
      product.heritageSlugs.includes(heritageSlug),
    )
    .sort((a, b) => a.order - b.order);
}

export function getProductsByCollection(
  collectionSlug: string,
): ShopProduct[] {
  return products
    .filter((product) =>
      product.collectionSlugs.includes(collectionSlug),
    )
    .sort((a, b) => a.order - b.order);
}

export function getTraceableProducts(): ShopProduct[] {
  return products
    .filter((product) => product.traceability.enabled)
    .sort((a, b) => a.order - b.order);
}
