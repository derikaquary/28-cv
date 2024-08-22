"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa6";

function Header({ handleSidebar }) {
  return (
    <header className="bg-[#212429] h-[50px] fixed left-0 top-0 right-0 flex flex-row items-center justify-between mx-auto max-w-7xl w-full z-50 px-3 sm:h-[100px]">
      <div className="text-white bg-logo bg-center bg-cover h-[40px] w-[40px] rounded-full sm:h-[50px] sm:w-[50px]"></div>
      <nav className="flex flex-row ">
        <FaBars
          onClick={handleSidebar}
          color="white"
          size={35}
          className="sm:hidden"
        />
        <Link
          href="#fcc"
          className="hidden text-white sm:mr-7 sm:block sm:text-lg">
          Calorie
        </Link>
        <Link
          href="#pdc"
          className="hidden text-white sm:mr-7 sm:block sm:text-lg">
          Plant
        </Link>
        <Link
          href="#oasis"
          className="hidden text-white sm:mr-7 sm:block sm:text-lg">
          Oasis
        </Link>
        <Link
          href="#ecommerce"
          className="hidden text-white sm:mr-7 sm:block sm:text-lg">
          E-Commerce
        </Link>
        <Link
          href="#chat"
          className="hidden text-white sm:mr-7 sm:block sm:text-lg">
          ChatBuddy
        </Link>
        <Link
          href="#ummu"
          className="hidden text-white sm:mr-7 sm:block sm:text-lg">
          UMY
        </Link>
      </nav>
    </header>
  );
}

export default Header;
