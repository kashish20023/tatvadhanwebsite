import Link from "next/link";
import { occasionLooks } from "@/data/occasions";
import { OriginButton } from "@/components/ui/origin-button";

interface CollectionSectionProps {
  topEyebrow?: string;
  topTitle?: string;
  topSubtitle?: string;
  featureEyebrow?: string;
  featureTitle?: string;
  featureDescription?: string;
  featureSubDescription?: string;
  featureCtaText?: string;
  featureCtaHref?: string;
}

export function CollectionSection({
  topEyebrow = "TATVADHAN IS NOT FOR EVERYONE. IT IS FOR THE ONE.",
  topTitle = "A MODERN ROYAL’S WARDROBE",
  topSubtitle = "A brand that makes men feel larger-than-life, royal, and unforgettable.",
  featureEyebrow = "Go-to luxury brand for modern grooms pan india",
  featureTitle = "Express identity, pride & presence",
  featureDescription = "Handcrafted, haute-couture ethnic wear blending Jaipur’s royal legacy with modern exclusivity ensuring no two grooms are ever alike.",
  featureSubDescription = "FOR THE DISCERNING MODERN GROOM",
  featureCtaText = "Show More",
  featureCtaHref = "/occasions",
}: CollectionSectionProps) {
  return (
    <section id="discover" className="relative w-full pt-[10px] pb-0 max-[600px]:pb-[72px]" aria-labelledby="discover-heading">
      {/* SVG Royal Mehrab Arch Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none -z-10" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="arch-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,1 L 0,0.45 C 0,0.22 0.26,0.12 0.5,0 C 0.74,0.12 1,0.22 1,0.45 L 1,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="w-[min(1240px,calc(100%-80px))] max-[900px]:w-[min(calc(100%-48px),720px)] max-[600px]:w-[calc(100%-36px)] mx-auto">
        <div className="scroll-reveal w-full max-w-[800px] mx-auto text-center flex flex-col items-center justify-center max-[600px]:px-[16px]">
          <p className="text-[#101010] text-[13px] font-semibold tracking-[0.22em] leading-[1.6] uppercase text-center w-full">
            {topEyebrow}
          </p>
          <h2 id="discover-heading" className="mt-[10px] font-serif text-[clamp(31px,3.2vw,44px)] max-[600px]:text-[34px] font-medium tracking-[-0.015em] leading-[1.12] text-[#a57c36] uppercase text-center w-full">
            {topTitle}
          </h2>
          <p className="max-w-[680px] w-full mx-auto mt-[12px] text-[#62605d] text-[12.5px] leading-[1.85] text-center">
            {topSubtitle.trim()}
          </p>
        </div>

        {/* DESKTOP & TABLET: 3 Arched Mehrab Windows */}
        <div id="occasions" className="hidden md:grid grid-cols-3 gap-[18px] max-[900px]:gap-[12px] w-full mt-[42px] mx-auto" aria-label="Occasion looks showcase">
          {occasionLooks.map((look, index) => (
            <div
              key={look.file}
              className="group relative filter drop-shadow-[0_8px_20px_rgba(30,20,10,0.06)] hover:drop-shadow-[0_16px_32px_rgba(30,20,10,0.12)] transition-all duration-700 ease-out"
            >
              <figure
                className="arch-frame relative w-full h-[clamp(380px,32vw,440px)] max-[900px]:h-[310px] bg-[#e7dfd2] overflow-hidden"
              >
                <img
                  src={look.file}
                  alt={look.alt}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-[1.04] ${index === 0
                    ? "object-[center_30%]"
                    : index === 1
                      ? "object-[center_40%]"
                      : "object-[center_44%]"
                    }`}
                />
                {/* Royal Arched Gold Hairline Accent */}
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-50 group-hover:opacity-90 transition-opacity duration-500"
                  aria-hidden="true"
                >
                  <path
                    d="M 0.5,99.5 L 0.5,45 C 0.5,22 26,12 50,0.5 C 74,12 99.5,22 99.5,45 L 99.5,99.5 Z"
                    fill="none"
                    stroke="#D6B772"
                    strokeWidth="1.2"
                  />
                </svg>
              </figure>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW: 1 Full-Width Top Card + 2 Cards Bottom Grid */}
        <div className="block md:hidden w-full mt-[28px]" aria-label="Occasion looks mobile showcase">
          {/* Top Full-Width Card */}
          <div className="w-full mb-4.5">
            <figure className="relative w-full aspect-[16/11] overflow-hidden rounded-[14px] border border-[#C5AA75]/80 bg-[#e7dfd2] shadow-[0_4px_16px_rgba(30,20,10,0.06)]">
              <img
                src={occasionLooks[0]?.file}
                alt={occasionLooks[0]?.alt || "Hand Embellishment"}
                loading="lazy"
                className="w-full h-full object-cover object-[center_30%]"
              />
            </figure>
          </div>

          {/* Bottom 2-Column Grid */}
          <div className="grid grid-cols-2 gap-3.5">
            {/* Bottom Left Card */}
            <div>
              <figure className="relative w-full aspect-[4/5] overflow-hidden rounded-[14px] border border-[#C5AA75]/80 bg-[#e7dfd2] shadow-[0_4px_16px_rgba(30,20,10,0.06)]">
                <img
                  src={occasionLooks[1]?.file}
                  alt={occasionLooks[1]?.alt || "Artisan Finishing"}
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_40%]"
                />
              </figure>
            </div>

            {/* Bottom Right Card */}
            <div>
              <figure className="relative w-full aspect-[4/5] overflow-hidden rounded-[14px] border border-[#C5AA75]/80 bg-[#e7dfd2] shadow-[0_4px_16px_rgba(30,20,10,0.06)]">
                <img
                  src={occasionLooks[2]?.file}
                  alt={occasionLooks[2]?.alt || "Signature Embroidery"}
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_44%]"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Feature Split Section */}
        {(() => {
          return (
            <div className="grid grid-cols-[0.8fr_1fr] max-[600px]:grid-cols-1 items-center gap-[clamp(40px,8vw,110px)] max-[900px]:gap-[34px] max-[600px]:gap-[24px] w-full mt-[85px] max-[600px]:mt-[55px] mx-auto">
              <div className="scroll-reveal animate__animated animate__fadeInLeft animate__slow max-w-[500px] max-[600px]:max-w-[500px]">
                {featureEyebrow && (
                  <p className="text-[#101010] text-[13px] font-semibold tracking-[0.18em] leading-[1.5] uppercase mb-[10px]">
                    {featureEyebrow}
                  </p>
                )}
                <h3 className="font-serif text-[clamp(28px,2.8vw,38px)] max-[600px]:text-[34px] font-semibold tracking-[-0.015em] leading-[1.16] text-[#a57c36]">
                  {featureTitle}
                </h3>


                <p className="max-w-[380px] md:max-w-[510px] mt-[16px] mb-[22px] py-4 text-[#555] text-[16px] leading-[1.85]">
                  {featureDescription}
                </p>

                {/* {featureSubDescription && !featureSubDescription.toLowerCase().includes("lorem") && (
                  <p className="max-w-[380px] text-[#666] text-[11.5px] leading-[1.75] mb-[22px]">
                    {featureSubDescription}
                  </p>
                )} */}

                <div>
                  <Link href={featureCtaHref}>
                    <OriginButton
                      className="border-[#a57c36] !text-white hover:!text-[#a57c36] text-[9.5px] font-medium tracking-[0.18em] border rounded-none uppercase h-auto py-[10px] px-[20px] bg-[#a57c36] hover:bg-transparent group">
                      <span className="text-[13px] !text-white transition-colors duration-300 group-hover:!text-[#a57c36]">{featureCtaText}</span>
                    </OriginButton>
                  </Link>
                </div>
              </div>
              <figure
                className="overflow-hidden h-[clamp(320px,26vw,380px)] scroll-reveal animate__animated animate__fadeInRight animate__slow max-[600px]:h-[250px] rounded-[2px] group shadow-sm transition-shadow duration-500 hover:shadow-md"
              >
                <img
                  src="/images/NewPersonGroup.webp"
                  alt="A model in traditional couture seated in a Jaipur palace"
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_48%] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-[1.035]"
                />
              </figure>
            </div>
          );
        })()}
      </div>
    </section >
  );
}
