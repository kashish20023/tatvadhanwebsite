"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNavLinks } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  menuOpen?: boolean;
  onToggleMenu?: () => void;
  onCloseMenu?: () => void;
}

export function Header({
  menuOpen: controlledMenuOpen,
  onToggleMenu,
  onCloseMenu,
}: HeaderProps) {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const isMenuOpen = controlledMenuOpen !== undefined ? controlledMenuOpen : internalMenuOpen;

  const handleToggle = () => {
    if (onToggleMenu) {
      onToggleMenu();
    } else {
      setInternalMenuOpen((prev) => !prev);
    }
  };

  const handleClose = () => {
    if (onCloseMenu) {
      onCloseMenu();
    } else {
      setInternalMenuOpen(false);
    }
  };

  return (
    <>
      <header className="relative z-[5]">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-[72px] max-[600px]:h-[62px] px-[5vw] max-[600px]:px-[18px] bg-black">
          <span aria-hidden="true" />
          <Link className="justify-self-center w-[134px] max-[600px]:w-[112px]" href="/" aria-label="Tatvadhan Jaipur home">
            <Image
              src="/images/image_01.webp"
              alt="Tatvadhan Jaipur"
              width={140}
              height={36}
              priority
              className="w-full h-auto"
            />
          </Link>
          <button
            className="hidden max-[600px]:block justify-self-end text-white border-0 p-[8px] bg-transparent cursor-pointer"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={handleToggle}
          >
            <span className="block w-[24px] h-[1px] my-[6px] bg-[#eee]" />
            <span className="block w-[24px] h-[1px] my-[6px] bg-[#eee]" />
          </button>
        </div>
        <nav
          className={`flex items-center justify-center gap-[clamp(24px,4vw,62px)] min-h-[50px] bg-white border-b border-[#ece9e3] max-[600px]:absolute max-[600px]:top-[62px] max-[600px]:inset-x-0 max-[600px]:items-stretch max-[600px]:gap-0 max-[600px]:pt-[8px] max-[600px]:px-[18px] max-[600px]:pb-[16px] max-[600px]:shadow-[0_12px_20px_rgb(0_0_0_/_10%)] ${isMenuOpen ? "max-[600px]:flex max-[600px]:flex-col" : "max-[600px]:hidden"
            }`}
          aria-label="Main navigation"
        >
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleClose}
              className="text-[10px] font-medium tracking-[0.075em] uppercase text-[#101010] transition-colors duration-200 hover:text-[#9b7530] focus-visible:text-[#9b7530] max-[600px]:py-[14px] max-[600px]:px-[2px] max-[600px]:border-b max-[600px]:border-[#eeeae4]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Synchronized accessible mobile overlay */}
      <MobileMenu isOpen={isMenuOpen} onClose={handleClose} />
    </>
  );
}
