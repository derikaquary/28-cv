"use client";

import { useState } from "react";
import Header from "./_components/Header";

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
      <div id="green" className=" h-[100vh] w-[300px] px-3 py-3">
        <div className="flex flex-row justify-between items-center h-[200px] mb-3">
          <div>
            <p className="text-white text-[14px] mb-3">Welcome to my world </p>
            <p className=" text-white text-2xl font-bold">
              Hi, I am <span className="text-[#ad1344]">Derik Aquary</span>, a
              Developer.
            </p>
          </div>
          <div className="bg-[#232932] rounded-md  w-[130px] h-[180px]">
            <div className="bg-my_photo bg-cover bg-center h-[180px] w-[180px] rounded-xl  shadow-sm"></div>
          </div>
        </div>
        <div>
          {" "}
          <div className="mb-3">
            <p className="text-white text-sm text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              temporibus tempora culpa, molestiae animi incidunt magnam eos sed
              illum fugit sint alias sunt eius vitae, inventore id voluptas,
              perspiciatis facilis?
            </p>
          </div>{" "}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-chat bg-cover bg-center h-[70px]"></div>
            <div className="bg-e_commerce bg-cover bg-center h-[70px]"></div>
            <div className="bg-fcc bg-cover bg-center h-[70px]"></div>
            <div className="bg-oasis bg-cover bg-center h-[70px]"></div>
            <div className="bg-pdc bg-cover bg-center h-[70px]"></div>
            <div className="bg-ummu bg-cover bg-center h-[70px]"></div>
          </div>
        </div>
      </div>
      <div
        id="red"
        className="border border-pink-400 h-[100vh] w-[300px] px-3 ">
        <div className="bg-chat h-[200px] bg-cover bg-center"></div>
        <p className="text-white text-sm text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
          velit nulla impedit ex, debitis consequuntur, sunt cupiditate eos nemo
          dicta cumque facere autem omnis quod. Dolore dolor voluptatum.
        </p>
        <div className="flex flex-col items-center text-justify mt-3">
          <div>foto</div>
          <p className="text-white text-sm ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
            animi repellendus ab quos quidem illum esse, libero maiores omnis at
            repudiandae, obcaecati odit magni eum quod. Eos impedit illum
            molestias.
          </p>
        </div>
      </div>
      <div id="yellow" className="bg-yellow-400 h-[100vh] w-[300px]"></div>
      <div id="cyan" className="bg-cyan-400 h-[100vh] w-[300px]"></div>
      <div id="purple" className="bg-purple-400 h-[100vh] w-[300px]"></div>
    </main>
  );
}
