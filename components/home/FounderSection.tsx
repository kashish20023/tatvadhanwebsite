interface FounderSectionProps {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  portraitImage?: string;
  portraitAlt?: string;
  extendedNote?: string;
  signature?: string;
  caption?: string;
}

export function FounderSection({
  eyebrow = "A vision for today",
  heading = "The Man Himself",
  intro = "Vinayak Agarwal’s journey with fashion is rooted in a passion for Indian craftsmanship and contemporary design. With a vision to create clothing that feels timeless yet relevant, he founded Tatvadhan to bring together traditional aesthetics, modern silhouettes, and effortless style.",
  portraitImage = "/images/image_34.webp",
  portraitAlt = "Vinayak Agarwal, founder of Tatvadhan Jaipur",
  extendedNote = "Vinayak Agarwal’s journey with fashion began with a simple belief — that Indian craftsmanship can evolve with the way we live today. Driven by a passion for design, culture, and contemporary style, he founded Tatvadhan to create clothing that feels rooted yet relevant. His vision is to bring together timeless Indian aesthetics with modern silhouettes, thoughtful details, and an effortless sense of style.",
  signature = "Vinayak Agarwal",
  caption = "Founder, Tatvadhan Jaipur",
}: FounderSectionProps) {
  return (
    <section
      id="the-man-himself"
      className="grid grid-cols-[0.83fr_0.8fr_1fr] max-[900px]:grid-cols-[0.9fr_0.85fr] max-[600px]:grid-cols-2 items-center gap-[clamp(36px,6vw,84px)] max-[600px]:gap-[20px_15px] py-[35px] pb-[100px] max-[600px]:py-[20px] max-[600px]:pb-[68px] w-[min(1240px,calc(100%-80px))] max-[900px]:w-[min(calc(100%-48px),720px)] max-[600px]:w-[calc(100%-36px)] mx-auto"
      aria-labelledby="founder-heading"
    >
      {/* Column 1: Founder introduction and vision */}
      <div className="scroll-reveal max-[600px]:col-span-full animate__animated animate__fadeInLeft animate__slow">
        <p className="text-[#705030] text-[9px] font-semibold tracking-[0.2em] leading-[1.6] uppercase">{eyebrow}</p>
        <h2 id="founder-heading" className="mt-[13px] font-serif text-[clamp(29px,3vw,42px)] max-[600px]:text-[37px] font-medium leading-[1.05] text-[#101010]">{heading}</h2>
        <p className="mt-[18px] text-[#605d59] text-[11px] leading-[1.9] max-[600px]:max-w-[530px]">{intro}</p>
      </div>

      {/* Column 2: Framed Founder Portrait (image_34.webp) */}
      <figure
        className="h-[390px] max-[900px]:h-[360px] scroll-reveal animate__animated animate__zoomIn animate__slow max-[600px]:h-[260px] rounded-[5px] bg-[#e8e3dc] overflow-hidden shadow-sm"
      >
        <img
          src={portraitImage}
          alt={portraitAlt}
          loading="lazy"
          className="w-full h-full object-cover object-[center_23%] transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)]"
        />
      </figure>

      {/* Column 3: Extended philosophy note, italic signature, and caption */}
      <div className="scroll-reveal animate__animated animate__fadeInRight animate__slow max-[900px]:col-span-full max-[900px]:max-w-[580px] max-[900px]:justify-self-end max-[900px]:-mt-[16px] max-[600px]:col-auto max-[600px]:self-center max-[600px]:m-0">
        <p className="mt-[18px] max-[600px]:mt-0 text-[#605d59] text-[11px] max-[600px]:text-[10px] leading-[1.9]">{extendedNote}</p>
        <p className="mt-[24px] max-[600px]:mt-[15px] text-[#6b482c] font-[family-name:var(--signature-font,var(--serif))] text-[27px] max-[600px]:text-[21px] italic">{signature}</p>
        <span className="block mt-[7px] text-[#8c795e] text-[8px] max-[600px]:text-[7px] tracking-[0.14em] uppercase">{caption}</span>
      </div>
    </section>
  );
}
