"use client";

import { useMemo, useState } from "react";

import type { ProductImage } from "../../data/products";

type ProductGalleryProps = {
  images: ProductImage[];

  productName: string;

  className?: string;
};

export default function ProductGallery({
  images,
  productName,
  className = "",
}: ProductGalleryProps) {
  const normalizedImages = useMemo(() => {
    if (images.length > 0) {
      return images;
    }

    return [
      {
        src: "",
        alt: productName,
      },
    ];
  }, [images, productName]);

  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage =
    normalizedImages[
      Math.min(activeIndex, normalizedImages.length - 1)
    ];

  return (
    <section
      className={[
        "product-gallery",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={`Hình ảnh sản phẩm ${productName}`}
    >
      <div className="product-gallery__main">
        {activeImage?.src ? (
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="product-gallery__main-image"
          />
        ) : (
          <div
            className="product-gallery__placeholder"
            aria-label={`Chưa có hình ảnh cho ${productName}`}
          >
            <span>Hình ảnh đang được cập nhật</span>
          </div>
        )}
      </div>

      {normalizedImages.length > 1 && (
        <div
          className="product-gallery__thumbnails"
          role="list"
          aria-label="Danh sách hình ảnh sản phẩm"
        >
          {normalizedImages.map((image, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                className={[
                  "product-gallery__thumbnail",
                  isActive
                    ? "product-gallery__thumbnail--active"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setActiveIndex(index)}
                aria-label={`Xem hình ${index + 1} của ${productName}`}
                aria-pressed={isActive}
              >
                {image.src ? (
                  <img
                    src={image.src}
                    alt=""
                  />
                ) : (
                  <span
                    className="product-gallery__thumbnail-placeholder"
                    aria-hidden="true"
                  >
                    —
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
