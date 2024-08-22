"use client";

import { useState } from "react";
import Header from "./_components/Header";
import FirstPage from "./_components/FirstPage";
import Pdc from "@/app/_components/Pdc.js";
import Fcc from "./_components/Fcc";
import Oasis from "./_components/Oasis";
import Ecommerce from "./_components/Ecommerce";
import ChatBuddy from "./_components/ChatBuddy";
import Ummu from "./_components/Ummu";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSidebar() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <main className="flex flex-col items-center px-3">
      <Header handleSidebar={handleSidebar} />
      <div
        className={`${
          isOpen ? "max-h-[180px]" : "max-h-0"
        } overflow-hidden bg-black/60 fixed top-15 left-0 right-0 px-[30px] border border-black z-[1000] transition-all duration-500 ease-in-out`}>
        <div className="flex flex-col justify-between space-y-3">
          <Link href="#fcc" className="text-white">
            Calorie
          </Link>
          <Link href="#pdc" className="text-white">
            Plant
          </Link>
          <Link href="#oasis" className="text-white">
            Oasis
          </Link>
          <Link href="#ecommerce" className="text-white">
            Ecommerce
          </Link>
          <Link href="#ummu" className="text-white">
            UMY
          </Link>
        </div>
      </div>
      <FirstPage />
      <Fcc />
      <Pdc />
      <Oasis />
      <Ecommerce />
      <ChatBuddy />
      <Ummu />
    </main>
  );
}
