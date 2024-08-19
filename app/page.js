"use client";

import { useState } from "react";
import Header from "./_components/Header";
import Carousel from "./_components/Carousel";
import FirstPage from "./_components/FirstPage";

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
      <div
        id="red"
        className="border border-pink-400 h-[100vh] w-[300px] px-3 ">
        <div className="bg-chat h-[200px] bg-cover bg-center"></div>
        <p className="text-white text-sm text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
          velit nulla impedit ex, debitis consequuntur, sunt cupiditate eos nemo
          dicta cumque facere autem omnis quod. Dolore dolor voluptatum.
        </p>
        <Carousel>
          <div className="flex flex-col items-center text-justify mt-3  space-y-2">
            <div className="bg-profile h-[150px] w-[200px] bg-center bg-cover"></div>
            <p className="text-white text-sm ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, animi repellendus ab quos quidem illum esse, libero
              maiores omnis at repudiandae, obcaecati odit magni eum quod. Eos
              impedit illum molestias.
            </p>
          </div>
          <div className="flex flex-col items-center text-justify mt-3  space-y-2">
            <div className="bg-profile h-[150px] w-[200px] bg-center bg-cover"></div>
            <p className="text-white text-sm ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, animi repellendus ab quos quidem illum esse, libero
              maiores omnis at repudiandae, obcaecati odit magni eum quod. Eos
              impedit illum molestias.
            </p>
          </div>
          <div className="flex flex-col items-center text-justify mt-3  space-y-2">
            <div className="bg-profile h-[150px] w-[200px] bg-center bg-cover"></div>
            <p className="text-white text-sm ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, animi repellendus ab quos quidem illum esse, libero
              maiores omnis at repudiandae, obcaecati odit magni eum quod. Eos
              impedit illum molestias.
            </p>
          </div>
        </Carousel>
      </div>
      <div id="yellow" className="bg-yellow-400 h-[100vh] w-[300px]"></div>
      <div id="cyan" className="bg-cyan-400 h-[100vh] w-[300px]"></div>
      <div id="purple" className="bg-purple-400 h-[100vh] w-[300px]"></div>
    </main>
  );
}
