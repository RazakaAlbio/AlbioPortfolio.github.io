'use client';
import { useState } from "react";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";
import { useScrollToSection } from "@/lib/smooth-scroll";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/30 bg-[#03001410] backdrop-blur-sm z-50 px-2 sm:px-4 md:px-6 lg:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-1 sm:px-2 md:px-[10px]">
        {/* Name Only */}
        <Link
          href="#about-me"
          className="flex items-center"
        >
          <div className="font-bold text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">Razaqa Albio Kasyfi</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[300px] md:w-[400px] lg:w-[500px] h-full flex-row items-center justify-between md:mr-8 lg:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-2 md:mr-[15px] px-2 md:px-4 lg:px-[20px] py-2 md:py-[10px] rounded-full text-gray-200 text-xs md:text-sm lg:text-base">
            {NAV_LINKS.map((link) => (
              <button
                key={link.title}
                onClick={() => handleNavClick(link.link.replace('#', ''))}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition whitespace-nowrap"
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-2 md:gap-3 lg:gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.title}
                onClick={() => handleNavClick(link.link.replace('#', ''))}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center w-full"
              >
                {link.title}
              </button>
            ))}

          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};