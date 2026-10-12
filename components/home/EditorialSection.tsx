import Link from "next/link";

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
  description = "Luxury: Handcrafted garments with the finesse of haute couture. Legacy: Jaipur’s royal artistry elevated for modern sophistication. Individuality: A wardrobe not for everyone, but “for the one.”",
  subDescription,
  ctaText = "Show More",
  ctaHref = "/collection",
}: EditorialSectionProps) {
  // Parse structured pillars if description follows "Label: text. Label: text." format
  const pillarMatches = Array.from(
    description.matchAll(/([A-Za-z\s]+?):\s*([^:]+?)(?=(?:\s+[A-Za-z\s]+?:|$))/g)
  );

  const pillars = pillarMatches.length > 0
    ? pillarMatches.map((m) => ({ label: m[1].trim(), text: m[2].trim() }))
    : null;

  return (
    <section
      id="collection"
      className="editorial-grid grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 grid-rows-[clamp(320px,34vw,420px)_clamp(320px,34vw,420px)] max-[900px]:grid-rows-none gap-[13px] max-[900px]:gap-[12px] py-[85px] pb-[105px] max-[900px]:py-[60px] max-[600px]:py-[45px] w-[min(1240px,calc(100%-80px))] max-[900px]:w-[min(calc(100%-48px),720px)] max-[600px]:w-[calc(100%-36px)] mx-auto"
      aria-labelledby="editorial-heading"
    >
      {/* 1. Top-Left: Text Block */}
      <div className="scroll-reveal animate__animated animate__fadeInLeft animate__slow col-start-1 row-start-1 max-[900px]:col-span-full max-[600px]:col-auto flex flex-col justify-center pr-[18px] max-[900px]:pb-[24px]">
        {eyebrow && (
          <p className="text-[#705030] text-[9px] font-semibold tracking-[0.22em] leading-[1.6] uppercase mb-[10px]">
            {eyebrow}
          </p>
        )}

        <h2
          id="editorial-heading"
          className="font-serif text-[clamp(24px,2.3vw,33px)] max-[600px]:text-[26px] font-medium tracking-[0.03em] leading-[1.22] text-[#101010] uppercase mb-[18px]"
        >
          {title.includes("•") ? (
            title.split("•").map((part, i, arr) => (
              <span key={i} className="inline-flex items-center">
                <span>{part.trim()}</span>
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

        {pillars ? (
          <div className="space-y-[10px] mb-[26px] max-w-[340px]">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="text-[11.5px] max-[600px]:text-[11px] leading-[1.75] text-[#555]">
                <span className="font-semibold text-[#1a1713] tracking-[0.06em] uppercase text-[10px] mr-1.5 inline-block">
                  {pillar.label} —
                </span>
                <span>{pillar.text}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="max-w-[330px] text-[#555] text-[12px] leading-[1.8] mb-[22px]">{description}</p>
        )}

        {subDescription && !subDescription.toLowerCase().includes("lorem") && (
          <p className="max-w-[330px] text-[11.5px] leading-[1.7] text-[#666] mb-[22px]">{subDescription}</p>
        )}

        <div>
          <Link
            className="inline-flex items-center gap-[14px] px-[28px] py-[10px] border border-[#1a1713] text-[#1a1713] text-[9.5px] font-medium tracking-[0.18em] uppercase no-underline bg-transparent transition-all duration-300 hover:bg-[#1a1713] hover:text-[#FAF8F5] group"
            href={ctaHref}
          >
            <span>{ctaText}</span>
            <span className="text-[#a28349] group-hover:translate-x-1 transition-transform duration-300 text-[12px]" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* 2. Top-Middle: Detail Collage (image_22) */}
      <figure className="scroll-reveal col-start-2 row-start-1 max-[900px]:col-start-1 max-[900px]:row-auto max-[900px]:h-[320px] max-[600px]:h-[300px] overflow-hidden bg-[#e8dfd4] group">
        <img
          src="/images/NewPerson5.jpg"
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
          src="/images/NewPerson1.jpg"
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
