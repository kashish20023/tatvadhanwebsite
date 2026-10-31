"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUp, MapPin, Mail, PhoneCall, Sparkles } from "lucide-react";
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
  copyrightText = `© ${siteConfig.year} ${siteConfig.name} Jaipur. All rights reserved.`,
}: FooterProps) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [signupMessage, setSignupMessage] = useState("");
  const [signupError, setSignupError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSignupError("");
    if (!email.trim()) return;

    if (!agreed) {
      setSignupError("Please agree to the privacy policy to subscribe.");
      return;
    }

    setSignupMessage("Welcome to the Tatvadhan Inner Circle. We have reserved your welcome privilege.");
    setEmail("");
    setAgreed(false);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="footer"
      className="relative bg-[#070604] text-[#f4f0e8] overflow-hidden pt-16 pb-10"
      aria-labelledby="footer-heading"
    >
      {/* Decorative Royal Hairline Top Border */}
      <div
        className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d0ad5f]/45 to-transparent"
        aria-hidden="true"
      />

      <h2 id="footer-heading" className="sr-only">
        Tatvadhan Jaipur Footer
      </h2>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Atelier Bar: Brand Logo & Private Consultation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 mb-12 border-b border-[#221e17] gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <Link href="/" className="inline-block" aria-label="Tatvadhan Jaipur Home">
              <Image
                src="/images/image_01.webp"
                alt="Tatvadhan Jaipur"
                width={152}
                height={38}
                className="brightness-125 filter object-contain"
              />
            </Link>
            <div className="hidden sm:block h-7 w-[1px] bg-[#2e281f]" aria-hidden="true" />
            <p className="text-[12px] sm:text-[13px] text-[#ab9f8c] tracking-wide font-sans font-light">
              Bespoke Bridal & Ceremonial Couture · Master Karigari of Rajasthan
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#d0ad5f] hover:text-[#f7e4a8] transition-colors duration-200 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d0ad5f] group-hover:rotate-12 transition-transform duration-300" />
              <span>Private Consultation</span>
            </Link>
            <span className="text-[#363025]" aria-hidden="true">|</span>
            <a
              href={`mailto:${contactDetails.email}`}
              className="inline-flex items-center gap-2 text-[11px] text-[#ab9f8c] hover:text-[#f4f0e8] transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-[#d0ad5f]" />
              <span className="hidden sm:inline">{contactDetails.email}</span>
            </a>
          </div>
        </div>

        {/* Main Grid: Newsletter + 3 Nav Columns + Atelier Info */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr_0.9fr_0.9fr] gap-12 lg:gap-14 xl:gap-16">
          {/* Column 1: Newsletter & Boutiques */}
          <div className="max-w-[440px]">
            <p className="text-[#d0ad5f] text-[10px] font-semibold tracking-[0.24em] uppercase">
              The Atelier Registry
            </p>
            <h3 className="mt-3 font-serif text-[23px] sm:text-[25px] font-normal leading-[1.28] text-[#f4f0e8]">
              Sign up for our newsletter to get exclusive updates, runway passes & surprise launch events.
            </h3>

            <form className="mt-6" onSubmit={handleSubmit} noValidate>
              <div className="relative flex items-center border-b border-[#3e382f] focus-within:border-[#e5c983] transition-colors duration-300 pb-2">
                <label className="sr-only" htmlFor="newsletter-email">
                  Your email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (signupError) setSignupError("");
                  }}
                  className="w-full min-w-0 bg-transparent text-[#f4f0e8] text-[12px] placeholder:text-[#80776b] focus:outline-none pr-3 tracking-wide"
                />
                <button
                  type="submit"
                  className="group shrink-0 inline-flex items-center gap-2 text-[#d0ad5f] hover:text-[#f8e3a5] text-[10px] tracking-[0.18em] uppercase font-semibold transition-colors duration-200 cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <span>Sign Up</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

              <label className="inline-flex items-start gap-2.5 mt-3.5 text-[#9e9587] text-[11px] cursor-pointer hover:text-[#d3cbbe] transition-colors select-none leading-relaxed">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    if (signupError) setSignupError("");
                  }}
                  className="mt-0.5 w-3.5 h-3.5 rounded-none border border-[#4a4235] bg-[#12100d] accent-[#d0ad5f] cursor-pointer"
                />
                <span>I agree with the privacy policy and consent to receiving invitations.</span>
              </label>

              {signupError && (
                <p className="mt-2 text-[#e57373] text-[11px]" role="alert">
                  {signupError}
                </p>
              )}

              {signupMessage && (
                <div className="mt-3 p-3 bg-[#17140e] border border-[#d0ad5f]/30 rounded-sm text-[#f1d58f] text-[11px] leading-relaxed" role="status">
                  {signupMessage}
                </div>
              )}
            </form>

            {/* Boutiques Pan India Highlight Card */}
            <div className="mt-9 pt-7 border-t border-[#221e17]">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#17140e] border border-[#3a3326] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#d0ad5f]" />
                </div>
                <div>
                  <p className="font-serif text-[20px] text-[#f4f0e8] leading-tight whitespace-pre-line">
                    {storeCountText}
                  </p>
                  <p className="text-[11px] text-[#938b7e] mt-1 tracking-wide font-sans">
                    Jaipur · New Delhi · Mumbai · Kolkata · Bengaluru
                  </p>
                  <Link
                    href={storeLinkHref}
                    className="group inline-flex items-center gap-2 mt-2.5 text-[#d0ad5f] hover:text-[#f8e3a5] text-[10px] tracking-[0.16em] uppercase font-medium transition-colors"
                  >
                    <span>{storeLinkText}</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Navigation Columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col items-start">
              <h3 className="relative text-[#d0ad5f] text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase pb-2.5 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-5 after:h-[1px] after:bg-[#d0ad5f]/40">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-[#b8b0a2] hover:text-[#f4f0e8] text-[12px] tracking-wide transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="text-[#d0ad5f] opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[9px]" aria-hidden="true">
                        ✦
                      </span>
                      <span className="transition-colors duration-200 group-hover:text-[#f4d994]">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Concierge Connect & Flagship Details */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-14 pt-8 border-t border-[#1d1913]">
          <div className="flex items-center gap-3 text-[12px] text-[#8e8576]">
            <span className="text-[#d0ad5f] font-serif text-[14px]">✦</span>
            <span>Flagship Atelier: World Trade Park, Malviya Nagar, Jaipur</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.18em] uppercase text-[#8e8576] mr-2">
              Connect With Us:
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Tatvadhan on Instagram"
              className="w-8 h-8 rounded-full border border-[#2e281f] flex items-center justify-center text-[#ab9f8c] hover:text-[#d0ad5f] hover:border-[#d0ad5f] hover:bg-[#d0ad5f]/10 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Concierge on WhatsApp"
              className="w-8 h-8 rounded-full border border-[#2e281f] flex items-center justify-center text-[#ab9f8c] hover:text-[#d0ad5f] hover:border-[#d0ad5f] hover:bg-[#d0ad5f]/10 transition-all duration-200"
            >
              <PhoneCall className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${contactDetails.email}`}
              aria-label="Email Tatvadhan Atelier"
              className="w-8 h-8 rounded-full border border-[#2e281f] flex items-center justify-center text-[#ab9f8c] hover:text-[#d0ad5f] hover:border-[#d0ad5f] hover:bg-[#d0ad5f]/10 transition-all duration-200"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div> */}

        {/* Bottom Copyright, Origin, & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-[#19150f] text-[#888072] text-[11px] sm:text-[12px]">
          <p className="order-2 md:order-1 text-center md:text-left">
            {copyrightText}
          </p>

          {/* <div className="order-1 md:order-2 flex items-center gap-2 text-center text-[#9c9485]">
            <span>Crafted with Karigari Heritage</span>
            <span className="text-[#d0ad5f] text-[9px]" aria-hidden="true">✦</span>
            <span>Rajasthan, India</span>
          </div> */}

          {/* <div className="order-1 md:order-2 flex items-center gap-2 text-center text-[#9c9485]">
            <span>Crafted with Karigari Heritage</span>
            <span className="text-[#d0ad5f] text-[9px]" aria-hidden="true">✦</span>
            <span>Rajasthan, India</span>
          </div> */}
          {/* <div className="order-1 md:order-2 flex items-center gap-2 text-center text-[#9c9485]">
            <span>Crafted with Karigari Heritage</span>
            <span className="text-[#d0ad5f] text-[9px]" aria-hidden="true">✦</span>
            <span>Rajasthan, India</span>
          </div> */}

          <div className="order-3 flex items-center gap-6 justify-center md:justify-end">
            <span className="text-[#aba292] font-medium">Owned By World Trade Jaipur</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 text-[#d0ad5f] hover:text-[#f8e3a5] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span className="text-[10px] tracking-[0.16em] uppercase">Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}