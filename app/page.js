"use client";

import { useState } from "react";
import Header from "./_components/Header";
import FirstPage from "./_components/FirstPage";
import Image from "next/image";
import Skill from "./_components/Skill";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSidebar() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="flex flex-col items-center px-3 ">
      <Header />
      <FirstPage />
      <Skill/>
    </div>
  );
}
