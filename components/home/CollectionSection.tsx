import Link from "next/link";
import { occasionLooks } from "@/data/occasions";

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
  featureEyebrow = "Go-to luxury brand for modern grooms worldwide",
  featureTitle = "Express identity, pride and presence",
  featureDescription = "• Exclusivity -“No two Tatvadhan grooms are alike.” • Aspirational Luxury - Ethnic wear at par with global luxury standards. • Pride & Power - Wardrobes that embody strength, heritage, and elegance.",
  featureSubDescription = "The Tatvadhan Experience",
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
          <p className="text-[#62605d] text-[9.5px] font-semibold tracking-[0.22em] leading-[1.6] uppercase text-center w-full">
            {topEyebrow}
          </p>
          <h2 id="discover-heading" className="mt-[10px] font-serif text-[clamp(31px,3.2vw,44px)] max-[600px]:text-[34px] font-medium tracking-[-0.015em] leading-[1.12] text-[#705030] uppercase text-center w-full">
            {topTitle}
          </h2>
          <p className="max-w-[680px] w-full mx-auto mt-[12px] text-[#62605d] text-[12.5px] leading-[1.85] text-center">
            {topSubtitle.trim()}
          </p>
        </div>

        <div id="occasions" className="grid grid-cols-3 gap-[18px] max-[900px]:gap-[12px] max-[600px]:gap-[8px] w-full mt-[42px] max-[600px]:mt-[30px] mx-auto" aria-label="Occasion looks showcase">
          {occasionLooks.map((look, index) => (
            <div
              key={look.file}
              className="group relative filter drop-shadow-[0_8px_20px_rgba(30,20,10,0.06)] hover:drop-shadow-[0_16px_32px_rgba(30,20,10,0.12)] transition-all duration-700 ease-out"
            >
              <figure
                className="arch-frame relative w-full h-[clamp(380px,32vw,440px)] max-[900px]:h-[310px] max-[600px]:h-[min(65vw,285px)] bg-[#e7dfd2] overflow-hidden"
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

        {/* Feature Split Section */}
        {(() => {
          // Parse feature description bullets if formatted with "•"
          const bullets = featureDescription.includes("•")
            ? featureDescription
              .split("•")
              .map((b) => b.trim())
              .filter(Boolean)
              .map((item) => {
                const dashIdx = item.indexOf("-");
                if (dashIdx !== -1) {
                  return {
                    label: item.slice(0, dashIdx).trim(),
                    text: item.slice(dashIdx + 1).trim(),
                  };
                }
                return { label: "", text: item };
              })
            : null;

          return (
            <div className="grid grid-cols-[0.8fr_1fr] max-[600px]:grid-cols-1 items-center gap-[clamp(40px,8vw,110px)] max-[900px]:gap-[38px] max-[600px]:gap-[28px] w-full mt-[85px] max-[600px]:mt-[55px] mx-auto">
              <div className="scroll-reveal animate__animated animate__fadeInLeft animate__slow max-w-[420px] max-[600px]:max-w-[470px]">
                {featureEyebrow && (
                  <p className="text-[#705030] text-[9.5px] font-semibold tracking-[0.18em] leading-[1.5] uppercase mb-[10px]">
                    {featureEyebrow}
                  </p>
                )}
                <h3 className="font-serif text-[clamp(28px,2.8vw,38px)] max-[600px]:text-[29px] font-medium tracking-[-0.015em] leading-[1.16] text-[#101010]">
                  {featureTitle}
                </h3>

                {bullets ? (
                  <div className="space-y-[12px] mt-[20px] mb-[26px]">
                    {bullets.map((b, idx) => (
                      <div key={idx} className="text-[12px] max-[600px]:text-[11.5px] leading-[1.75] text-[#555]">
                        {b.label && (
                          <span className="font-semibold text-[#1a1713] tracking-[0.06em] uppercase text-[10.5px] mr-1.5 inline-block">
                            {b.label} —
                          </span>
                        )}
                        <span>{b.text}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="max-w-[380px] mt-[16px] mb-[22px] text-[#555] text-[12px] leading-[1.85]">
                    {featureDescription}
                  </p>
                )}

                {featureSubDescription && !featureSubDescription.toLowerCase().includes("lorem") && (
                  <p className="max-w-[380px] text-[#666] text-[11.5px] leading-[1.75] mb-[22px]">
                    {featureSubDescription}
                  </p>
                )}

                <div>
                  <Link
                    className="inline-flex items-center gap-[16px] pb-[6px] border-b border-[#a28349] text-[#1a1713] text-[9.5px] font-medium tracking-[0.16em] uppercase transition-all duration-300 hover:text-[#9b7530] hover:border-[#101010] group"
                    href={featureCtaHref}
                  >
                    <span>{featureCtaText}</span>
                    <span
                      className="text-[#a28349] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300 text-[13px]"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
              <figure
                className="overflow-hidden h-[clamp(320px,26vw,380px)] scroll-reveal animate__animated animate__fadeInRight animate__slow max-[600px]:h-[250px] rounded-[2px] group shadow-sm transition-shadow duration-500 hover:shadow-md"
              >
                <img
                  src="/images/NewPersonGroup.jpg"
                  alt="A model in traditional couture seated in a Jaipur palace"
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_48%] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] group-hover:scale-[1.035]"
                />
              </figure>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
