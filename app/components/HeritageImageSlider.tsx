"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { siteAssetPath } from "../../lib/site-path";
import type { HeritageImage } from "../../data/heritage";

type HeritageImageSliderProps = {
  images: HeritageImage[];
  href?: string;
  className?: string;
};

export default function HeritageImageSlider({
  images,
  href,
  className = "",
}: HeritageImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const safeImages = images.filter(
    (image) => Boolean(image?.src),
  );

  const imageCount = safeImages.length;
  const hasMultipleImages = imageCount > 1;

  function goToImage(index: number) {
    if (!trackRef.current || imageCount === 0) {
      return;
    }

    const normalizedIndex =
      (index + imageCount) % imageCount;

    const width =
      trackRef.current.clientWidth;

    trackRef.current.scrollTo({
      left: normalizedIndex * width,
      behavior: "smooth",
    });

    setActiveIndex(normalizedIndex);
  }

  function handleScroll() {
    if (!trackRef.current) {
      return;
    }

    const width =
      trackRef.current.clientWidth;

    if (!width) {
      return;
    }

    const index = Math.round(
      trackRef.current.scrollLeft / width,
    );

    if (
      index >= 0 &&
      index < imageCount
    ) {
      setActiveIndex(index);
    }
  }

  if (imageCount === 0) {
    return (
      <div
        className={[
          "heritage-image-slider",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="heritage-image-slider__placeholder">
          Hình ảnh tư liệu đang được cập nhật
        </div>
      </div>
    );
  }

  return (
    <div
      className={[
        "heritage-image-slider",
        hasMultipleImages
          ? "heritage-image-slider--multiple"
          : "heritage-image-slider--single",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        ref={trackRef}
        className="heritage-image-slider__track"
        onScroll={handleScroll}
      >
        {safeImages.map(
          (image, index) => {
            const imageContent = (
              <div className="heritage-image-slider__slide-inner">
                <img
                  src={siteAssetPath(
                    image.src,
                  )}
                  alt={image.alt}
                  loading={
                    index === 0
                      ? "eager"
                      : "lazy"
                  }
                  draggable={false}
                />
              </div>
            );

            return (
              <div
                key={`${image.src}-${index}`}
                className="heritage-image-slider__slide"
              >
                {href ? (
                  <Link
                    href={href}
                    className="heritage-image-slider__image-link"
                    aria-label={`Xem chi tiết ${image.alt}`}
                  >
                    {imageContent}
                  </Link>
                ) : (
                  imageContent
                )}
              </div>
            );
          },
        )}
      </div>

      {hasMultipleImages && (
        <>
          <button
            type="button"
            className="heritage-image-slider__arrow heritage-image-slider__arrow--prev"
            onClick={() =>
              goToImage(
                activeIndex - 1,
              )
            }
            aria-label="Xem ảnh trước"
          >
            ‹
          </button>

          <button
            type="button"
            className="heritage-image-slider__arrow heritage-image-slider__arrow--next"
            onClick={() =>
              goToImage(
                activeIndex + 1,
              )
            }
            aria-label="Xem ảnh tiếp theo"
          >
            ›
          </button>

          <div className="heritage-image-slider__counter">
            {activeIndex + 1}/{imageCount}
          </div>
        </>
      )}
    </div>
  );
}
