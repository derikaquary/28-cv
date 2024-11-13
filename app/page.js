"use client";

import { useState } from "react";
import Header from "./_components/Header";
import FirstPage from "./_components/FirstPage";
import Skill from "./_components/Skill";
import Projects from "./_components/Projects";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSidebar() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="flex flex-col items-center gap-[100px] px-3 pb-5">
      <Header />
      <FirstPage />
      <Skill />
      <Projects />
      
    </div>
  );
}
