"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  siteAssetPath,
} from "../../lib/site-path";

import type {
  ProductImage,
} from "../../data/products";

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
  const normalizedImages =
    useMemo(() => {
      if (
        images.length >
        0
      ) {
        return images;
      }

      return [
        {
          src: "",
          alt:
            productName,
        },
      ];
    }, [
      images,
      productName,
    ]);

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const safeActiveIndex =
    Math.min(
      activeIndex,
      normalizedImages.length -
        1,
    );

  const activeImage =
    normalizedImages[
      safeActiveIndex
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
      {/* =====================================================
          MAIN IMAGE
      ====================================================== */}

      <div className="product-gallery__main">
        {activeImage?.src ? (
          <img
            src={siteAssetPath(
              activeImage.src,
            )}
            alt={
              activeImage.alt ||
              productName
            }
            className="product-gallery__main-image"
          />
        ) : (
          <div
            className="product-gallery__placeholder"
            role="img"
            aria-label={`Hình ảnh ${productName} đang được cập nhật`}
          >
            <span>
              Hình ảnh sản phẩm
              đang được cập nhật
            </span>
          </div>
        )}
      </div>

      {/* =====================================================
          THUMBNAILS
      ====================================================== */}

      {normalizedImages.length >
        1 && (
        <div
          className="product-gallery__thumbnails"
          role="list"
          aria-label={`Các hình ảnh của ${productName}`}
        >
          {normalizedImages.map(
            (
              image,
              index,
            ) => {
              const isActive =
                index ===
                safeActiveIndex;

              return (
                <div
                  key={`${image.src}-${index}`}
                  role="listitem"
                  className="product-gallery__thumbnail-item"
                >
                  <button
                    type="button"
                    className={[
                      "product-gallery__thumbnail",

                      isActive
                        ? "product-gallery__thumbnail--active"
                        : "",
                    ]
                      .filter(
                        Boolean,
                      )
                      .join(
                        " ",
                      )}
                    onClick={() =>
                      setActiveIndex(
                        index,
                      )
                    }
                    aria-label={`Xem hình ${index + 1} của ${productName}`}
                    aria-pressed={
                      isActive
                    }
                  >
                    {image.src ? (
                      <img
                        src={siteAssetPath(
                          image.src,
                        )}
                        alt=""
                        loading="lazy"
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
                </div>
              );
            },
          )}
        </div>
      )}
    </section>
  );
}
