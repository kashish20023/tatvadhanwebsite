import Link from "next/link";
import { journalStories } from "@/data/occasions";
import type { JournalStory } from "@/types/occasion";

interface JournalSectionProps {
  eyebrow?: string;
  heading?: string;
  ctaText?: string;
  ctaHref?: string;
  stories?: JournalStory[];
  campaignTitle?: string;
  campaignImage?: string;
  campaignHref?: string;
}

export function JournalSection({
  eyebrow = "From the house",
  heading = "News & collections",
  ctaText = "Discover Tatvadhan",
  ctaHref = "/media",
  stories = journalStories,
  campaignTitle = "Explore the Wedding Chapter",
  campaignImage = "/images/image_04.webp",
  campaignHref = "/collection",
}: JournalSectionProps) {
  return (
    <section id="media" className="py-[86px] pb-[94px] max-sm:py-0 bg-transparent" aria-labelledby="journal-heading">
      <div className="w-[min(1240px,calc(100%-80px))] max-[900px]:w-[min(calc(100%-48px),720px)] max-[600px]:w-[calc(100%-36px)] mx-auto">
        <div className="scroll-reveal flex items-end justify-between mb-[33px] max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-[14px]">
          <div>
            <p className="text-[#705030] text-[9px] font-semibold tracking-[0.2em] leading-[1.6] uppercase">{eyebrow}</p>
            <h2 id="journal-heading" className="mt-[9px] font-serif text-[clamp(31px,3vw,42px)] font-bold tracking-[-0.02em] leading-[1.1] text-[#a57c36]">{heading}</h2>
          </div>
          <Link className="inline-flex items-center gap-[24px] pb-[8px] border-b border-[#a28349] text-[#1a1713] text-[9px] tracking-[0.12em] uppercase transition-colors duration-200 hover:text-[#9b7530] m-0 mb-[5px] ml-[20px] max-[600px]:m-0" href={ctaHref}>
            {ctaText} <span className="text-[#a28349] text-[14px]" aria-hidden="true">↗</span>
          </Link>
        </div>

        <div id="journal" className="grid grid-cols-4 max-[900px]:grid-cols-2 gap-[17px] max-[900px]:gap-y-[30px] max-[600px]:gap-x-[12px] max-[600px]:gap-y-[25px]" aria-label="House journals and news updates">
          {stories.map((story, index) => (
            <Link
              className="journal-card relative flex flex-col min-w-0 group"
              href={story.href || (index < 2 ? "/collection" : "/our-story")}
              key={story.title + index}
              data-animation="animate__fadeInUp"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <figure className="overflow-hidden h-[174px] max-[900px]:h-[230px] max-[600px]:h-[145px] bg-[#d1c2ad]">
                <img
                  src={story.file}
                  alt={story.alt}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-[1.035] ${index === 1 ? "object-[center_45%]" : index === 2 ? "object-[center_50%]" : "object-center"
                    }`}
                />
              </figure>
              <p className="mt-[18px] text-[#8c795e] pt-1 text-[8px] tracking-[0.13em] uppercase">{story.date || "Tatvadhan Journal · Jaipur"}</p>
              <h3 className="max-w-[90%] mt-[9px] font-serif text-[21px] max-[600px]:text-[19px] font-medium leading-[1.1] text-[#101010]">{story.title}</h3>
              <p className="max-w-[250px] mt-[9px] text-[#69645d] text-[10px] max-[600px]:text-[9px] leading-[1.8]">
                {story.description ||
                  "News write-ups offer a great way to let clients know about new products and services, events, awards, and more!"}
              </p>
              <span className="absolute right-0 bottom-[2px] text-[#9b7530] text-[17px] max-[600px]:hidden" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>

        <Link
          className="relative block h-[300px] max-[600px]:h-[220px] mt-[56px] max-[600px]:mt-[38px] rounded-[17px] max-[600px]:rounded-[11px] bg-[#251911] text-white overflow-hidden group after:absolute after:inset-x-0 after:bottom-0 after:top-[45%] after:content-[''] after:bg-gradient-to-t after:from-black/56 after:to-transparent after:pointer-events-none"
          href={campaignHref}
          aria-label={campaignTitle}
        >
          <img
            src={campaignImage}
            alt={campaignTitle}
            loading="lazy"
            className="w-full h-full object-cover  object-[center_49%] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-[1.035]"
          />
          <span className="absolute z-[1] right-[28px] bottom-[24px] left-[28px] max-[600px]:right-[16px] max-[600px]:bottom-[16px] max-[600px]:left-[16px] flex justify-between items-center text-[#fff] font-serif text-[25px] max-[600px]:text-[20px]">
            {campaignTitle} <span className="text-[#e8c35a] font-sans text-[17px]" aria-hidden="true">↗</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
