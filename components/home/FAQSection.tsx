"use client";

import { useState } from "react";
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
  eyebrow = "Here to help",
  title = "Got Questions?",
  subtitle = "We’ve Got Answers",
  intro = "Everything you need to know before getting started.",
  faqs = faqItems,
  imageSrc = "/images/NewPerson9.jpg",
  imageAlt = "Indian heritage architecture and couture",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="grid grid-cols-[0.9fr_1.1fr] max-[600px]:grid-cols-1 items-center gap-[clamp(55px,8vw,116px)] max-[900px]:gap-[44px] max-[600px]:gap-[30px] py-[108px] pb-[112px] max-[600px]:py-[72px] w-[min(1240px,calc(100%-80px))] max-[900px]:w-[min(calc(100%-48px),720px)] max-[600px]:w-[calc(100%-36px)] mx-auto"
      aria-labelledby="faq-heading"
    >
      <div className="scroll-reveal">
        <p className="text-[#705030] text-[9px] font-semibold tracking-[0.2em] leading-[1.6] uppercase">{eyebrow}</p>
        <h2 id="faq-heading" className="mt-[14px] font-serif text-[clamp(34px,4vw,51px)] max-[600px]:text-[39px] font-medium leading-[1.04] text-[#101010]">
          {title}
          <br />
          <span className="text-[#a57c36]">{subtitle}</span>
        </h2>
        <p className="mt-[13px] text-[#77716a] text-[11px]">{intro}</p>

        <div className="mt-[29px] border-t border-[#a57c36]" role="region" aria-label="Frequently Asked Questions list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-title-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <div className={"faq-item border-b border-[#a57c36]" + (isOpen ? " active" : "")} key={faq.question}>
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between gap-[20px] py-[16px] border-0 bg-transparent text-left text-[#2a2723] font-serif text-[16px] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="grid w-[22px] h-[22px] flex-none place-items-center border border-[#cfc5b4] rounded-full text-[#987333] font-sans text-[14px]" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pr-[32px] pb-[16px] text-[#77716a] text-[11px] leading-[1.8]" id={contentId} role="region" aria-labelledby={headingId}>
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <figure
        className="h-[480px] max-[900px]:h-[400px] max-[600px]:h-[320px] rounded-[5px_75px_5px_5px] max-[600px]:rounded-[5px_54px_5px_5px] bg-[#cdbba5] overflow-hidden shadow-sm"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-full object-cover object-[center_45%] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)]"
        />
      </figure>
    </section>
  );
}
