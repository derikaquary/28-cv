"use client";

import { useState } from "react";
import Header from "./_components/Header";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  function handleSidebar() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <main className="flex flex-col items-center relative h-full">
      <Header handleSidebar={handleSidebar} />
      {isOpen && (
        <div className="bg-red-400 h-[100vh] absolute top-[30px] w-full">
          testing
        </div>
      )}
      <div id="green" className="bg-green-400 h-[100vh] w-[300px]"></div>
      <div id="red" className="bg-red-400 h-[100vh] w-[300px]"></div>
      <div id="yellow" className="bg-yellow-400 h-[100vh] w-[300px]"></div>
      <div id="cyan" className="bg-cyan-400 h-[100vh] w-[300px]"></div>
      <div id="purple" className="bg-purple-400 h-[100vh] w-[300px]"></div>
    </main>
  );
}
