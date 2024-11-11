"use client";

import { useState } from "react";
import Header from "./_components/Header";
import Skill from "./_components/Skill";
import FirstPage from "./_components/FirstPage";



import { skills } from "./_data/skillList";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSidebar() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="flex flex-col items-center px-3 ">
      <Header />
      <FirstPage />
      <div className="grid grid-cols-3 gap-16 mt-5">
        {skills.map(skill=> <Skill skill={skill} key={skill.id} />)}
      </div>
    </div>
  );
}
