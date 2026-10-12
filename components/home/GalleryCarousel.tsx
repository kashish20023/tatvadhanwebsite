"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export interface GalleryLook {
  file: string;
  alt: string;
}

const defaultLooks: GalleryLook[] = [
  {
    file: "/images/image_05.webp",
    alt: "The Wedding Chapter celebratory evening with friends",
  },
  {
    file: "/images/image_19.webp",
    alt: "Model in blush embroidered sherwani lying on carpet",
  },
  {
    file: "/images/image_20.webp",
    alt: "Model in blush embroidered sherwani",
  },
  {
    file: "/images/image_03.webp",
    alt: "Seated traditional couture portrait",
  },
  {
    file: "/images/image_21.webp",
    alt: "Model in embroidered sherwani standing",
  },
  {
    file: "/images/image_02.webp",
    alt: "Couture in Jaipur palace pavilion",
  },
];

interface GalleryCarouselProps {
  title?: string;
  description?: string;
  looks?: GalleryLook[];
}

export function GalleryCarousel({
  title = "Lorem Lipsum",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  looks = defaultLooks,
}: GalleryCarouselProps) {
  const REPEAT_COUNT = 7;
  const INITIAL_INDEX = looks.length * 3;

  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [trackOffset, setTrackOffset] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const updateOffset = useCallback((index: number) => {
    const container = containerRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const containerWidth = container.offsetWidth;
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;

    const targetOffset = containerWidth / 2 - (cardLeft + cardWidth / 2);
    setTrackOffset(targetOffset);
  }, []);

  useEffect(() => {
    updateOffset(currentIndex);

    const handleResize = () => {
      updateOffset(currentIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, updateOffset]);

  const handleTransitionEnd = () => {
    const minThreshold = looks.length;
    const maxThreshold = looks.length * (REPEAT_COUNT - 1);

    if (currentIndex >= maxThreshold) {
      setIsTransitioning(false);
      const wrappedIndex = currentIndex - looks.length * 2;
      setCurrentIndex(wrappedIndex);
      requestAnimationFrame(() => {
        updateOffset(wrappedIndex);
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    } else if (currentIndex < minThreshold) {
      setIsTransitioning(false);
      const wrappedIndex = currentIndex + looks.length * 2;
      setCurrentIndex(wrappedIndex);
      requestAnimationFrame(() => {
        updateOffset(wrappedIndex);
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  const displayItems: { look: GalleryLook; uniqueKey: string; itemIndex: number }[] = [];
  for (let r = 0; r < REPEAT_COUNT; r++) {
    looks.forEach((look, i) => {
      const itemIndex = r * looks.length + i;
      displayItems.push({
        look,
        uniqueKey: `${look.file}-${itemIndex}`,
        itemIndex,
      });
    });
  }

  return (
    <section className="py-[85px] pb-[105px] max-[900px]:py-[65px] max-[900px]:pb-[80px] max-[600px]:py-[50px] max-[600px]:pb-[65px] bg-white overflow-hidden" aria-labelledby="gallery-heading">
      <div className="max-w-[580px] mx-auto text-center px-[20px]">
        <h2 id="gallery-heading" className="font-sans text-[clamp(34px,3.5vw,44px)] max-[600px]:text-[32px] font-normal text-black leading-[1.15] mb-[12px]">{title}</h2>
        <p className="text-[#222] text-[13px] max-[600px]:text-[12px] leading-[1.6] max-w-[380px] max-[600px]:max-w-[320px] mx-auto">{description}</p>
      </div>

      <div
        className="relative w-full overflow-hidden py-[60px] max-[900px]:pt-[36px] max-[600px]:py-[36px] [&::-webkit-scrollbar]:hidden"
        ref={containerRef}
        aria-label="Tatvadhan collection slider"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex items-center gap-[20px] max-[600px]:gap-[14px] w-max will-change-transform max-[900px]:justify-start max-[900px]:px-[24px] max-[600px]:px-[18px] max-[900px]:snap-x max-[900px]:snap-mandatory"
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(${trackOffset}px)`,
            transition: isTransitioning
              ? "transform 0.75s cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
          }}
        >
          {displayItems.map(({ look, uniqueKey, itemIndex }) => {
            const isCenter = itemIndex === currentIndex;

            return (
              <figure
                key={uniqueKey}
                ref={(el) => {
                  cardRefs.current[itemIndex] = el;
                }}
                className={
                  "relative shrink-0 rounded-[22px] overflow-hidden bg-[#e8dfd4] cursor-pointer select-none max-[900px]:snap-center transition-[width,height,box-shadow,opacity] duration-750 ease-[cubic-bezier(0.25,1,0.5,1)] group " +
                  (isCenter
                    ? "w-[clamp(320px,31vw,450px)] max-[600px]:w-[285px] h-[clamp(430px,42vw,600px)] max-[600px]:h-[380px] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18),0_12px_24px_-8px_rgba(0,0,0,0.08)] opacity-100 z-10"
                    : "w-[clamp(250px,24vw,350px)] max-[600px]:w-[220px] h-[clamp(335px,32vw,470px)] max-[600px]:h-[295px] opacity-88")
                }
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(itemIndex);
                }}
                role="button"
                tabIndex={-1}
                aria-label={`View ${look.alt}`}
              >
                <img
                  src={look.file}
                  alt={look.alt}
                  loading="lazy"
                  className={`w-full h-full object-cover rounded-[22px] pointer-events-none transition-transform duration-600 ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-[1.025] ${isCenter ? "object-[center_30%]" : "object-[center_35%]"
                    }`}
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
