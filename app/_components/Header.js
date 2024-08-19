"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa6";

function Header({ handleSidebar }) {
  return (
    <header className="bg-[#212429] h-[50px] fixed left-0 top-0 right-0 flex flex-row items-center justify-between mx-auto max-w-7xl w-[300px] z-50">
      <div className="text-white">Logo</div>
      <nav className="flex flex-row ">
        <FaBars onClick={handleSidebar} color="white" size={35} />
        <Link href="#green" className="hidden text-white">
          Green
        </Link>
        <Link href="#red" className="hidden text-white">
          Red
        </Link>
        <Link href="#yellow" className="hidden text-white">
          Yellow
        </Link>
        <Link href="#cyan" className="hidden marker:text-white">
          Cyan
        </Link>
        <Link href="#purple" className="hidden text-white">
          Purple
        </Link>
      </nav>
    </header>
  );
}

export default Header;
