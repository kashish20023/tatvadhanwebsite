import Link from "next/link";
import { OriginButton } from "@/components/ui/origin-button";

interface EditorialSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  subDescription?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function EditorialSection({
  eyebrow = "The House Ethos",
  title = "LUXURY • LEGACY • INDIVIDUALITY",
  description = "Crafting bespoke, haute-couture garments that blend Jaipur’s rich royal artistry with modern sophistication for the truly discerning individual.",
  subDescription,
  ctaText = "Show More",
  ctaHref = "/collection",
}: EditorialSectionProps) {
  // Parse structured pillars if description follows "Label: text. Label: text." format

  return (
    <section
      id="collection"
      className="editorial-grid grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 grid-rows-[clamp(320px,34vw,420px)_clamp(320px,34vw,420px)] max-[900px]:grid-rows-none gap-[13px] max-[900px]:gap-[12px] py-[85px] pb-[105px] max-[900px]:py-[60px] max-[600px]:py-[45px] w-[min(1240px,calc(100%-80px))] max-[900px]:w-[min(calc(100%-48px),720px)] max-[600px]:w-[calc(100%-36px)] mx-auto"
      aria-labelledby="editorial-heading"
    >
      {/* 1. Top-Left: Text Block */}
      <div className="scroll-reveal animate__animated animate__fadeInLeft animate__slow col-start-1 row-start-1 max-[900px]:col-span-full max-[600px]:col-auto flex flex-col justify-center pr-[18px] max-[900px]:pb-[24px]">
        {eyebrow && (
          <p className="text-[#101010] text-[13px] font-semibold tracking-[0.22em] leading-[1.6] uppercase mb-[10px]">
            {eyebrow}
          </p>
        )}

        <h2
          id="editorial-heading"
          className="font-serif text-[clamp(24px,2.3vw,33px)] font-semibold max-[600px]:text-[26px] font-medium tracking-[-0.015em] leading-[1.22] text-[#a57c36] uppercase mb-[18px]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {title.includes("•") ? (
            title.split("•").map((part, i, arr) => (
              <span key={i} className="inline-flex items-center font-serif" style={{ fontFamily: "var(--font-serif)" }}>
                <span className="font-serif" style={{ fontFamily: "var(--font-serif)" }}>{part.trim()}</span>
                {i < arr.length - 1 && (
                  <span className="mx-2 text-[#a28349] text-[13px] select-none font-sans" aria-hidden="true">
                    ·
                  </span>
                )}
              </span>
            ))
          ) : (
            title
          )}
        </h2>

        <div className="space-y-[12px] mb-[26px] max-w-[340px]">
          <p className="max-w-[330px] text-[#555] text-[16px] leading-[1.8] mb-[22px]">{description}</p>
          {subDescription && !subDescription.toLowerCase().includes("lorem") && (
            <p className="max-w-[330px] text-[11.5px] leading-[1.7] text-[#666] mb-[22px]">{subDescription}</p>
          )}
        </div>

        <div>
          <Link href={ctaHref}>
            <OriginButton
              className="border-[#a57c36] !text-white hover:!text-[#a57c36] text-[9.5px] font-medium tracking-[0.18em] border rounded-none uppercase h-auto py-[10px] px-[20px] bg-[#a57c36] hover:bg-transparent group">
              <span className="text-[13px] !text-white transition-colors duration-300 group-hover:!text-[#a57c36]">{ctaText}</span>
            </OriginButton>
          </Link>
        </div>

      </div>

      {/* 2. Top-Middle: Detail Collage (image_22) */}
      <figure className="scroll-reveal col-start-2 row-start-1 max-[900px]:col-start-1 max-[900px]:row-auto max-[900px]:h-[320px] max-[600px]:h-[300px] overflow-hidden bg-[#e8dfd4] group">
        <img
          src="/images/NewPerson5.webp"
          alt="Hand-embroidered floral textile and couture details"
          loading="lazy"
          className="w-full h-full object-cover animate__animated animate__fadeInRight animate__slow object-[center_50%] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-[1.035]"
        />
      </figure>

      {/* 3. Top-Right: Lying Down Portrait (image_19) */}
      <figure className="scroll-reveal col-start-3 row-start-1 max-[900px]:col-start-2 max-[900px]:row-auto max-[900px]:h-[320px] max-[600px]:col-start-1 max-[600px]:h-[300px] overflow-hidden bg-[#e8dfd4] group">
        <img
          src="/images/image_19.webp"
          alt="A model wearing a blush embroidered sherwani lying on carpet"
          loading="lazy"
          className="w-full h-full object-cover animate__animated animate__fadeInRight animate__slow object-[center_40%] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-[1.035]"
        />
      </figure>

      {/* 4. Bottom-Left: Standing Portrait (image_21) */}
      <figure className="scroll-reveal col-start-1 row-start-2 max-[900px]:col-start-1 max-[900px]:row-auto max-[900px]:h-[320px] max-[600px]:col-start-1 max-[600px]:h-[300px] overflow-hidden bg-[#e8dfd4] group">
        <img
          src="/images/NewPerson1.webp"
          alt="A model in embroidered sherwani standing in front of heritage carpet"
          loading="lazy"
          className="w-full h-full object-cover animate__animated animate__fadeInLeft animate__slow object-[center_25%] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-[1.035]"
        />
      </figure>

      {/* 5. Bottom-Right: Wide Palace Architecture (image_02) */}
      <figure className="scroll-reveal col-span-2 col-start-2 row-start-2 max-[900px]:col-span-full max-[900px]:col-start-1 max-[900px]:row-auto max-[900px]:h-[340px] max-[600px]:col-span-1 max-[600px]:h-[260px] overflow-hidden bg-[#e8dfd4] group">
        <img
          src="/images/image_02.webp"
          alt="Couture look seated in a Jaipur palace pavilion overlooking domes"
          loading="lazy"
          className="w-full h-full object-cover animate__animated animate__fadeInRight animate__slow object-[center_48%] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-[1.035]"
        />
      </figure>
    </section>
  );
}
