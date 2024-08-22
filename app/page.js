"use client";

import { useState } from "react";
import Header from "./_components/Header";
import FirstPage from "./_components/FirstPage";
import PageComponent from "@/app/_components/PageComponent";
import { contents } from "./_data/contents";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  function handleSidebar() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <main className="flex flex-col items-center px-3">
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

      <PageComponent
        id={"pdc"}
        effect={"fade-up"}
        mainImage={"pdc"}
        subImage1={"lettuce"}
        subImage2={"plantArt"}
        subImage3={"plantCont"}
        pageRef={"https://plant-check.vercel.app/"}
      />
    </main>
  );
}
