import Link from "next/link";
import type { JournalStory } from "@/types/occasion";
import { OriginButton } from "@/components/ui/origin-button";

interface JournalCardItem {
  category: string;
  title: string;
  description: string;
  file: string;
  alt: string;
  href: string;
}

const defaultJournalItems: JournalCardItem[] = [
  {
    category: "COLLECTION LAUNCH",
    title: "Aarico Collection",
    description: "An homage to regal court dress featuring micro-zardozi wire and heritage velvet accents.",
    file: "/images/newcollection.webp",
    alt: "Aarico Collection Launch",
    href: "/collection",
  },
  {
    category: "THE WEDDING CHAPTER",
    title: "The Wedding Chapter",
    description: "Photographed on location within Amber Palace, capturing dialogue between carved sandstone and silk.",
    file: "/images/image_18.webp",
    alt: "The Wedding Chapter",
    href: "/collection",
  },
  {
    category: "STUDY 2026",
    title: "Artisanal Karigar Study",
    description: "Documenting generational handloom techniques preserved across master artisan families in Rajasthan.",
    file: "/images/standi1.webp",
    alt: "Artisanal Karigar Study 2026",
    href: "/our-story",
  },
  {
    category: "FESTIVE COLLECTION",
    title: "Autumn / Winter Peek",
    description: "Warm blush, champagne gold, and muted ivory palettes designed for timeless winter unions.",
    file: "/images/NewPerson1.webp",
    alt: "Autumn / Winter Sneak Peek",
    href: "/our-story",
  },
];

interface JournalSectionProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  stories?: JournalStory[];
}

export function JournalSection({
  eyebrow = "FROM THE HOUSE",
  heading = "News & Collections",
  subtitle = "Explore our latest launches, featured stories and timeless collections, crafted for the modern connoisseur.",
  ctaText = "DISCOVER ALL",
  ctaHref = "/media",
}: JournalSectionProps) {
  return (
    <section
      id="media"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-[#FBF7EE] overflow-hidden"
      aria-labelledby="journal-heading"
    >
      {/* Responsive Background Image (2nd image provided by user) adjusting smoothly across screen sizes */}
      <div
        className="absolute inset-0 pointer-events-none select-none bg-no-repeat transition-all duration-300
          bg-cover bg-center
          sm:bg-[length:100%_100%]
          lg:bg-cover lg:bg-center"
        style={{
          backgroundImage: `url('/images/news-collections-bg.webp')`,
        }}
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-[min(1320px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-[700px]">
            {/* Heading */}
            <h2
              id="journal-heading"
              className="font-serif text-[34px] sm:text-[46px] font-bold text-[#2A2118] tracking-[-0.02em] leading-[1.08] mb-3"
            >
              {heading}
            </h2>
          </div>

          {/* Discover All Button matching existing layout */}
          <div className="self-start md:self-end">
            <Link href={ctaHref}>
              <OriginButton
                className="border-[#a57c36] !text-white hover:!text-[#a57c36] text-[9.5px] font-medium tracking-[0.18em] border rounded-none uppercase h-auto py-[10px] px-[20px] bg-[#a57c36] hover:bg-transparent group">
                <span className="text-[13px] !text-white transition-colors duration-300 group-hover:!text-[#a57c36]">{ctaText}</span>
              </OriginButton>
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          id="journal"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          aria-label="House collections and journal updates"
        >
          {defaultJournalItems.map((item, index) => (
            <Link
              key={item.title + index}
              href={item.href}
              className="group relative flex flex-col min-w-0 bg-[#FFFDF9]/95 border border-[#DFD3C0] hover:border-[#C5A877] rounded-tl-[36px] sm:rounded-tl-[44px] rounded-tr-md rounded-bl-md rounded-br-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(40,30,15,0.04)] hover:shadow-[0_14px_35px_rgba(158,120,56,0.12)]"
            >
              {/* Corner Architectural Arch Flourish */}
              <div
                className="absolute top-1.5 left-1.5 w-7 h-7 border-t border-l border-[#C8A870]/70 rounded-tl-[20px] pointer-events-none z-20"
                aria-hidden="true"
              />

              {/* Card Image with Mughal Arch Top-Left Curve */}
              <figure className="relative w-full h-[200px] sm:h-[210px] lg:h-[195px] xl:h-[215px] overflow-hidden bg-[#E8E0D2] rounded-tl-[34px] sm:rounded-tl-[42px] border-b border-[#EAE1D1]">
                <img
                  src={item.file}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-[1.04]"
                />
              </figure>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-5 sm:p-6 pb-5">
                {/* Category Eyebrow */}
                <div className="flex items-center gap-1.5 mb-2">
                  <p className="text-[#201A14] text-[12px] sm:text-[14px] font-semibold tracking-[0.22em] uppercase">
                    {item.category}
                  </p>
                </div>

                {/* Card Title */}
                <h3 className="text-[#9E7838] font-serif text-[26px] sm:text-[26px] font-semibold leading-[1.2] mb-2.5 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#6D6355] text-[14px] sm:text-[16px] leading-[1.65] font-normal mb-6 flex-1">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JournalSection;
