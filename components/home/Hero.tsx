"use client";

import { useEffect, useRef, useState } from "react";

interface HeroProps {
  videoSrc?: string;
  fallbackImage?: string;
  eyebrow?: string;
  title?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Hero({
  videoSrc = "/final-render.mp4",
  fallbackImage = "/images/image_18.webp",
  eyebrow = "Tatvadhan · Jaipur",
  title = "The Wedding Chapter",
  ctaText = "Discover the collection",
  ctaHref = "#collection",
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    <section
      className="relative grid min-h-[min(69vw,650px)] max-[600px]:min-h-[560px] h-[66vh] max-[600px]:h-[78vh] max-h-[700px] max-[600px]:max-h-[760px] place-items-center overflow-hidden bg-[#17110e] text-white"
      aria-labelledby="hero-title"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover object-[center_50%] max-[600px]:object-[53%_center]"
        src={fallbackImage}
        alt="The Tatvadhan wedding collection displayed in a heritage interior"
        loading="eager"
      />

      <video
        ref={videoRef}
        src={videoSrc}
        className={
          "absolute inset-0 w-full h-full object-cover object-[center_50%] max-[600px]:object-[53%_center] transition-opacity duration-700 " +
          (videoLoaded ? "opacity-100" : "opacity-0")
        }
        autoPlay
        muted
        loop
        playsInline
        poster={fallbackImage}
        onLoadedData={() => setVideoLoaded(true)}
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(180deg,rgb(0_0_0_/_12%)_5%,rgb(0_0_0_/_18%)_47%,rgb(0_0_0_/_66%)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-[2] pt-[12px] px-[24px] pb-0 max-[600px]:px-[18px] text-center">
        <p className="animate__animated animate__fadeInDown animate__slow animate-on-load text-[#f0d060] text-[9px] font-semibold tracking-[0.2em] leading-[1.6] uppercase">{eyebrow}</p>
        <h1
          id="hero-title"
          className="animate__animated animate__fadeInUp animate__slow animate-on-load mt-[11px] max-[600px]:max-w-[360px] max-[600px]:mx-auto font-serif text-[clamp(39px,5.6vw,75px)] max-[600px]:text-[45px] font-medium tracking-[0.025em] leading-[1.06] text-white [text-shadow:0_2px_20px_rgb(0_0_0_/_15%)]"
        >
          {title}
        </h1>
        <a
          className="animate__animated animate__fadeInUp animate__delay-1s animate-on-load inline-flex items-center gap-[18px] mt-[25px] px-[17px] py-[12px] border border-white/55 text-white text-[9px] tracking-[0.15em] uppercase transition-colors duration-200 hover:bg-white hover:text-[#a57c36]"
          href={ctaHref}
        >
          {ctaText} <span className="text-[#e8c35a] text-[16px]" aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
