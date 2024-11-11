"use client";

import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  // Toggle menu when hamburger icon is clicked
  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(() => setIsFullyVisible(true), 10);
    } else {
      setIsFullyVisible(false);
      setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  // Hide menu when clicking outside of the menu
  const handleClickOutside = (e) => {
    if (!e.target.closest(".menu") && !e.target.closest(".hamburger")) {
      setIsFullyVisible(false);
      setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed w-full z-[1000]">
      {/* Big Screen */}
      <div className="hidden w-full sm:block">
        <div className="relative z-[1000] w-full bg-gradient-to-l from-color11 from-75% to-color1 sm:flex items-center justify-between sm:h-[76px]">
          <div className="flex items-center justify-between w-full max-w-6xl px-2 py-2 mx-auto">
            <div className="relative h-[50px] w-[50px]">
              <Image
                src="/logo.jpeg"
                alt="Derik logo"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center gap-6 py-2 text-white">
              <Link href="/" className="flex items-center gap-1">
                <FaHome size={20} />
                <p className="text-2xl">Home</p>
              </Link>
              <Link
                href="/pages/reservation"
                className="flex items-center gap-1"
              >
                <BiCategory size={20} />
                Skill
              </Link>
              <Link
                href="/pages/review_page"
                className="flex items-center gap-1"
              >
                <MdRateReview size={20} />
                Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen */}
      <div className="relative z-[1000] flex w-full max-w-7xl flex-col sm:hidden bg-black">
        <div className="flex items-center justify-between px-3 py-2">
          <div className="relative h-[40px] w-[40px]">
            <Image
              src="/logo.jpeg"
              alt="Derik logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-5">
            <RxHamburgerMenu
              size={30}
              color="white"
              onClick={toggleMenu}
              className="cursor-pointer hamburger"
            />
          </div>
        </div>

        {/* Dropdown Menu with Curtain Drop Effect */}
        <div
          className={`absolute left-0 right-0 top-[56px] overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[200px]" : "max-h-0"
          } ${isFullyVisible ? "opacity-100" : "opacity-0"}`}
          style={{
            transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}
        >
          <div className="flex flex-col gap-3 px-3 py-2 text-white menu bg-black/90">
            <Link href="/" className="flex items-center gap-3">
              <FaHome />
              <p>Home</p>
            </Link>
            <Link
              href="/pages/reservation"
              className="flex gap-3 first:items-center"
            >
              <BiCategory />
              <p>Skill</p>
            </Link>
            <Link
              href="/pages/review_page"
              className="flex gap-3 first:items-center"
            >
              <MdRateReview />
              Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
