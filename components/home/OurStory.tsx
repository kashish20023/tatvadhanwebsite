"use client";

import { useState, useEffect } from "react";
import { storySlides } from "@/data/occasions";
import type { StorySlide } from "@/types/occasion";
import { cn } from "@/lib/utils";

interface OurStoryProps {
  stories?: StorySlide[];
}

export function OurStory({ stories = storySlides }: OurStoryProps) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  // Exactly 3 stories
  const displayStories = stories.slice(0, 3);

  // Preload all 3 images in browser cache immediately so no image is ever blank
  useEffect(() => {
    if (typeof window === "undefined") return;
    displayStories.forEach((story) => {
      const img = new window.Image();
      img.src = story.sideImage;
    });
  }, [displayStories]);

  // Automatically cycle through the 3 stories every 4.5 seconds
  useEffect(() => {
    if (displayStories.length <= 1) return;

    const interval = setInterval(() => {
      setActiveStoryIndex((prev) => (prev + 1) % displayStories.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [displayStories.length]);

  return (
    <section
      id="our-story"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-transparent overflow-hidden"
      aria-labelledby="story-heading"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Eyebrow Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 h-[1px] bg-[#101010]/60" aria-hidden="true" />
            <p className="text-[#101010] text-[13px] font-semibold tracking-[0.18em] leading-[1.5] uppercase mb-[10px]">
              Jaipur Atelier Chronicles
            </p>
            <span className="w-8 h-[1px] bg-[#101010]/60" aria-hidden="true" />
          </div>
          <h2
            id="story-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#a57c36] font-semibold tracking-tight"
          >
            The Heritage & Founder
          </h2>
        </div>

        {/* 2-Column Responsive Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {/* Left: Immersive Royal Archway Card */}
          <div className="lg:col-span-7 scroll-reveal animate__animated animate__fadeInLeft animate__slow relative flex flex-col justify-end min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#ECE7DE] shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-[#251911]">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/image_31.webp"
                alt=""
                loading="eager"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Multi-Stop Royal Ambient Vignette Gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/65 to-black/30 pointer-events-none"
              aria-hidden="true"
            />

            {/* Narrative Content with Smooth Transition */}
            <div className="relative z-10 p-6 sm:p-10 md:p-12 text-center sm:text-left flex flex-col justify-end min-h-[220px]">
              {displayStories.map((story, idx) => {
                const isActive = idx === activeStoryIndex;
                return (
                  <div
                    key={idx}
                    className={cn(
                      "transition-all duration-500 ease-out",
                      isActive
                        ? "opacity-100 translate-y-0 relative z-10 pointer-events-auto"
                        : "opacity-0 translate-y-1 absolute inset-x-6 sm:inset-x-10 md:inset-x-12 bottom-6 sm:bottom-10 md:bottom-12 pointer-events-none"
                    )}
                    aria-hidden={!isActive}
                  >
                    {/* Title in Regal Couture Serif */}
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white font-normal leading-[1.16] mb-4 text-shadow-sm">
                      {story.title}
                    </h3>

                    {/* Narrative Story Body */}
                    <p className="text-xs sm:text-sm md:text-[14px] leading-[1.85] text-white/90 font-light font-sans max-w-xl mx-auto sm:mx-0">
                      {story.narrative}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Companion Fashion Look Card */}
          <div className="lg:col-span-5 flex flex-col h-full">
            {/* Visual Look Card */}
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[580px] scroll-reveal animate__animated animate__fadeInRight animate__slow rounded-2xl sm:rounded-3xl overflow-hidden border border-[#ECE7DE] shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-[#EAE4DC] group">
              {displayStories.map((story, idx) => {
                const isActive = idx === activeStoryIndex;
                return (
                  <div
                    key={idx}
                    className={cn(
                      "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out",
                      isActive
                        ? "opacity-100 z-10 pointer-events-auto"
                        : "opacity-0 z-0 pointer-events-none"
                    )}
                    aria-hidden={!isActive}
                  >
                    <img
                      src={story.sideImage}
                      alt={story.sideAlt || story.title}
                      loading="eager"
                      decoding="sync"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />

                    {/* Subtle Luxury Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
