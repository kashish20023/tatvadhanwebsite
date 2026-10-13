"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/occasions";
import type { FAQItem } from "@/types/occasion";

interface FAQSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  intro?: string;
  faqs?: FAQItem[];
  imageSrc?: string;
  imageAlt?: string;
}

export function FAQSection({
  eyebrow = "HERE ✦ HELP",
  title = "Got Questions?",
  subtitle = "We’ve Got Answers",
  intro = "Everything you need to know before getting started.",
  faqs = faqItems,
  imageSrc = "/images/NewPerson9.jpg",
  imageAlt = "Luxury Indian bridal jewellery and couture details",
}: FAQSectionProps) {
  // FAQs closed by default; opens when clicked
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative w-full overflow-hidden bg-transparent py-14 sm:py-18 lg:py-[72px]"
    >


      {/* Main 2-Column Grid (Equal ratio, stretching to match height) */}
      <div className="relative z-10 mx-auto grid w-[min(1380px,calc(100%-64px))] max-[600px]:w-[calc(100%-32px)] items-stretch gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">

        {/* LEFT COLUMN: HEADER & FAQ ITEMS */}
        <div className="relative min-w-0 flex flex-col justify-between">
          <div>
            {/* Heading */}
            <h2
              id="faq-heading"
              className="font-serif leading-[1.06] tracking-[-0.025em]"
            >
              <span className="block text-[clamp(36px,3.8vw,52px)] font-normal text-[#1a1714]">
                {title}
              </span>
              <span className="mt-1 block text-[clamp(38px,4.1vw,56px)] font-normal text-[#a57c36]">
                {subtitle}
              </span>
            </h2>

            <p className="max-w-[430px] text-[12px] sm:text-[12.5px] leading-[1.7] text-[#756f66] mt-3">
              {intro}
            </p>
          </div>

          {/* FAQ ACCORDION CARDS LIST */}
          <div
            className="mt-7 space-y-3.5 sm:space-y-4"
            role="region"
            aria-label="Frequently Asked Questions"
          >
            {faqs.map((faq: FAQItem, index: number) => {
              const isOpen = openIndex === index;
              const number = String(index + 1).padStart(2, "0");
              const headingId = `faq-title-${index}`;
              const contentId = `faq-content-${index}`;

              return (
                <article
                  key={faq.question}
                  className={[
                    "w-full overflow-hidden rounded-2xl sm:rounded-[20px] border transition-all duration-300",
                    isOpen
                      ? "bg-[#faf6ee] border-[#cbb082] shadow-[0_10px_26px_rgba(135,105,55,0.08)]"
                      : "bg-[#faf6ee]/90 hover:bg-[#fdfcf9] border-[#e4d8c3] hover:border-[#cbb082] shadow-[0_2px_8px_rgba(135,105,55,0.025)]",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleQuestion(index)}
                    className="flex w-full items-center gap-4 sm:gap-5 px-5 py-4 sm:px-6 sm:py-4.5 text-left transition-colors cursor-pointer"
                  >
                    {/* Question text */}
                    <span
                      className="min-w-0 flex-1 text-[16px] sm:text-[20px] leading-[1.3] text-[#1a1714] font-medium tracking-[0.005em] transition-colors"
                    >
                      {faq.question}
                    </span>

                    {/* Arrow circle icon */}
                    <span
                      aria-hidden="true"
                      className={[
                        "grid h-[32px] w-[32px] sm:h-[34px] sm:w-[34px] shrink-0 place-items-center rounded-full transition-all duration-300 select-none",
                        isOpen
                          ? "bg-[#8e6e37] text-white shadow-sm"
                          : "border border-[#a8864a] bg-transparent text-[#a8864a]",
                      ].join(" ")}
                    >
                      <ChevronDown
                        className={[
                          "w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-300",
                          isOpen ? "rotate-180" : "rotate-0",
                        ].join(" ")}
                      />
                    </span>
                  </button>

                  {/* Expandable answer */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headingId}
                    aria-hidden={!isOpen}
                    className={[
                      "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="pb-5 sm:pb-6 px-5 sm:px-6 pr-8 sm:pr-12 text-[13px] sm:text-[15px] leading-[1.7] text-[#6d675e] font-normal max-w-[540px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: RESPONSIVE HIGH-QUALITY IMAGE */}
        <figure className="relative isolate min-w-0 w-full h-full flex flex-col justify-center">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-full flex-1 overflow-hidden rounded-2xl sm:rounded-[24px] shadow-[0_12px_38px_rgba(40,30,15,0.12)] bg-[#1f1a14] transition-all duration-300">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              quality={95}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 680px"
              className="object-cover object-[center_38%] transition-transform duration-700 ease-out hover:scale-[1.03]"
            />

            {/* Subtle luxury vignette overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#15100a]/20 via-transparent to-[#15100a]/05"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
