"use client";

import { useState } from "react";
import Link from "next/link";
import { footerColumns } from "@/data/navigation";
import { contactDetails, siteConfig } from "@/data/site";

interface FooterProps {
  storeCountText?: string;
  storeLinkText?: string;
  storeLinkHref?: string;
  copyrightText?: string;
}

export function Footer({
  storeCountText = contactDetails.storeCountText,
  storeLinkText = contactDetails.storeLinkText,
  storeLinkHref = "/our-story",
  copyrightText = `© ${siteConfig.year} ${siteConfig.name}`,
}: FooterProps) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [signupMessage, setSignupMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSignupMessage("Thank you for subscribing to Tatvadhan exclusives.");
    setEmail("");
    setAgreed(false);
  };

  return (
    <footer id="footer" className="pt-[70px] px-[max(40px,calc((100vw-1240px)/2))] pb-[24px] max-[600px]:py-[58px] max-[600px]:px-[20px] max-[600px]:pb-[22px] bg-black text-[#f4f0e8]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Tatvadhan Jaipur Footer
      </h2>

      <div className="grid grid-cols-[1.8fr_0.8fr_0.8fr_0.8fr] max-[900px]:grid-cols-[1.3fr_1fr_1fr] max-[600px]:grid-cols-2 gap-[clamp(34px,6vw,90px)] max-[600px]:gap-[40px_22px] max-w-[1240px] mx-auto">
        {/* Column 1: Newsletter & pan india Stores */}
        <div className="max-w-[370px] max-[900px]:col-span-full max-[900px]:max-w-[550px] max-[600px]:col-span-full">
          <p className="text-[#d0ad5f] text-[9px] font-semibold tracking-[0.2em] leading-[1.6] uppercase">Stay in the know</p>
          <h2 className="max-w-[340px] mt-[12px] font-serif text-[24px] max-[600px]:text-[22px] font-normal leading-[1.25] text-[#f4f0e8]">Sign up for our newsletter to get exclusive updates and surprise launch events pass.</h2>

          <form className="flex mt-[22px]" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="newsletter-email">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full min-w-0 py-[12px] px-[2px] border-0 outline-none bg-transparent text-white text-[11px] placeholder:text-[#b6b0a5]"
            />
            <button type="submit" className="flex shrink-0 items-center gap-[16px] border-0 bg-transparent text-[#f1d58f] text-[9px] tracking-[0.12em] uppercase cursor-pointer">
              Sign up
            </button>
          </form>

          <label className="inline-flex items-center gap-[7px] mt-[10px] text-[#b6b0a5] text-[9px] cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="accent-[#d0ad5f]"
            />
            <span>agree with privacy policy</span>
          </label>

          {signupMessage && (
            <p className="mt-[8px] text-[#f1d58f] text-[10px]" role="status">
              {signupMessage}
            </p>
          )}

          <p className="mt-[35px] text-[#eee7dc] font-serif text-[22px] leading-[1.1] whitespace-pre-line">{storeCountText}</p>
          <Link className="inline-flex items-center gap-[24px] mt-[12px] pb-[8px] text-[#eee7dc] text-[9px] tracking-[0.12em] uppercase transition-colors duration-200 hover:text-[#9b7530]" href={storeLinkHref}>
            {storeLinkText}
          </Link>
        </div>

        {/* Dynamic Navigation Columns */}
        {footerColumns.map((col) => (
          <div className="flex flex-col items-start gap-[13px] max-[600px]:gap-[12px]" key={col.title}>
            <h3 className="mb-[8px] text-[#d0ad5f] text-[9px] max-[600px]:text-[8px] font-semibold tracking-[0.18em] uppercase">{col.title}</h3>
            {col.links.map((link) => (
              <Link href={link.href} key={link.label} className="text-[#c4beb3] text-[10px] max-[600px]:text-[9px] font-semibold transition-colors duration-200 hover:text-[#f1d58f]">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-[1fr_auto_1fr] items-center max-w-[1240px] mt-[65px] max-[600px]:mt-[48px] mx-auto pt-[17px] border-t border-[#38342e] text-[#bcb5a9] text-[9px] max-[600px]:text-[8px]">
        <p>{copyrightText}</p>

        <div className="flex items-center gap-[6px] justify-self-end text-[#d8d0c4]" aria-label="Currency: INR">
          <span>{contactDetails.currency}</span>
        </div>
      </div> */}
    </footer>
  );
}
