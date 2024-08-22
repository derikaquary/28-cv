"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa6";

function Header({ handleSidebar }) {
  return (
    <header className="bg-[#212429] h-[50px] fixed left-0 top-0 right-0 flex flex-row items-center justify-between mx-auto max-w-7xl w-full z-50 px-3">
      <div className="text-white">Logo</div>
      <nav className="flex flex-row ">
        <FaBars onClick={handleSidebar} color="white" size={35} />
        <Link href="#fcc" className="hidden text-white">
          Calorie
        </Link>
        <Link href="#pdc" className="hidden text-white">
          Plant
        </Link>
        <Link href="#oasis" className="hidden text-white">
          Oasis
        </Link>
        <Link href="#cyan" className="hidden marker:text-white">
          Cyan
        </Link>
        <Link href="#ecommerce" className="hidden text-white">
          E-Commerce
        </Link>
        <Link href="#chat" className="hidden text-white">
          ChatBuddy
        </Link>
        <Link href="#ummu" className="hidden text-white">
          UMY
        </Link>
      </nav>
    </header>
  );
}

export default Header;
