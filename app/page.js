"use client";

import { useState } from "react";
import Header from "./_components/Header";
import FirstPage from "./_components/FirstPage";
import SecondPage from "./_components/SecondPage";
import ThirdPage from "./_components/ThirdPage";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  function handleSidebar() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <main className="flex flex-col items-center h-full">
      <Header handleSidebar={handleSidebar} />
      {isOpen && (
        <div className="bg-red-400 h-[180px] fixed top-15 left-0 right-0 px-[30px] py-auto border border-black">
          <div className=" flex flex-col justify-between space-y-3">
            <p>green</p>
            <p>red</p>
            <p>yellow</p>
            <p>cyan</p>
            <p>purple</p>
          </div>
        </div>
      )}
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <div id="cyan" className="bg-cyan-400 h-[100vh] w-[300px]"></div>
      <div id="purple" className="bg-purple-400 h-[100vh] w-[300px]"></div>
    </main>
  );
}
