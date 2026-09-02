"use client";

import Link from "next/link";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  siteAssetPath,
} from "../../lib/site-path";

import type {
  HeritageImage,
} from "../../data/heritage";

type HeritageImageSliderProps = {
  images: HeritageImage[];

  href?: string;

  className?: string;

  priority?: boolean;

  showCounter?: boolean;

  showArrows?: boolean;

  showDots?: boolean;
};

export default function HeritageImageSlider({
  images,
  href,
  className = "",
  priority = false,
  showCounter = true,
  showArrows = true,
  showDots = true,
}: HeritageImageSliderProps) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const sliderRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const safeImages =
    images.filter(
      (image) =>
        Boolean(image?.src),
    );

  const imageCount =
    safeImages.length;

  const hasMultipleImages =
    imageCount > 1;

  useEffect(() => {
    setActiveIndex(0);

    sliderRef.current?.scrollTo({
      left: 0,
      behavior: "auto",
    });
  }, [imageCount]);

  function goToImage(
    index: number,
  ) {
    if (
      !sliderRef.current ||
      imageCount === 0
    ) {
      return;
    }

    const normalizedIndex =
      (index + imageCount) %
      imageCount;

    const sliderWidth =
      sliderRef.current
        .clientWidth;

    sliderRef.current.scrollTo({
      left:
        normalizedIndex *
        sliderWidth,

      behavior: "smooth",
    });

    setActiveIndex(
      normalizedIndex,
    );
  }

  function handleScroll() {
    if (!sliderRef.current) {
      return;
    }

    const sliderWidth =
      sliderRef.current
        .clientWidth;

    if (!sliderWidth) {
      return;
    }

    const nextIndex =
      Math.round(
        sliderRef.current
          .scrollLeft /
          sliderWidth,
      );

    if (
      nextIndex >= 0 &&
      nextIndex <
        imageCount &&
      nextIndex !==
        activeIndex
    ) {
      setActiveIndex(
        nextIndex,
      );
    }
  }

  if (imageCount === 0) {
    return (
      <div
        className={[
          "heritage-image-slider",
          "heritage-image-slider--empty",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="heritage-image-slider__placeholder">
          Hình ảnh tư liệu đang
          được cập nhật
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
        ref={sliderRef}
        className="heritage-image-slider__track"
        onScroll={
          handleScroll
        }
      >
        {safeImages.map(
          (
            image,
            index,
          ) => {
            const imageContent =
              (
                <div className="heritage-image-slider__slide-inner">
                  <img
                    src={siteAssetPath(
                      image.src,
                    )}
                    alt={
                      image.alt
                    }
                    loading={
                      priority &&
                      index === 0
                        ? "eager"
                        : "lazy"
                    }
                    draggable={
                      false
                    }
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
                    href={
                      href
                    }
                    className="heritage-image-slider__image-link"
                    aria-label={`Xem chi tiết ${image.alt}`}
                  >
                    {
                      imageContent
                    }
                  </Link>
                ) : (
                  imageContent
                )}
              </div>
            );
          },
        )}
      </div>

      {hasMultipleImages &&
        showArrows && (
          <>
            <button
              type="button"
              className="heritage-image-slider__arrow heritage-image-slider__arrow--prev"
              onClick={() =>
                goToImage(
                  activeIndex -
                    1,
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
                  activeIndex +
                    1,
                )
              }
              aria-label="Xem ảnh tiếp theo"
            >
              ›
            </button>
          </>
        )}

      {hasMultipleImages &&
        showCounter && (
          <div className="heritage-image-slider__counter">
            <span>
              {
                activeIndex +
                1
              }
            </span>

            <span
              aria-hidden="true"
            >
              /
            </span>

            <span>
              {imageCount}
            </span>
          </div>
        )}

      {hasMultipleImages &&
        showDots && (
          <div className="heritage-image-slider__dots">
            {safeImages.map(
              (
                _,
                index,
              ) => (
                <button
                  key={
                    index
                  }
                  type="button"
                  onClick={() =>
                    goToImage(
                      index,
                    )
                  }
                  className={[
                    "heritage-image-slider__dot",

                    index ===
                    activeIndex
                      ? "is-active"
                      : "",
                  ]
                    .filter(
                      Boolean,
                    )
                    .join(
                      " ",
                    )}
                  aria-label={`Xem ảnh ${
                    index + 1
                  }`}
                  aria-current={
                    index ===
                    activeIndex
                      ? "true"
                      : undefined
                  }
                />
              ),
            )}
          </div>
        )}
    </div>
  );
}
