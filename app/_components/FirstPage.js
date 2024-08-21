"use client";

import { FaWhatsapp } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function FirstPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="green"
      className=" flex flex-col items-center h-[100vh] w-[300px] ">
      <div>
        <p className="text-white text-[14px] mb-3 text-lg">
          Welcome to my world{" "}
        </p>
        <p className=" text-white text-2xl font-bold">
          Hi, I am <span className="text-[#ad1344]">Derik Aquary</span>, a
          Developer.
        </p>
      </div>

      <div className="bg-my_photo bg-cover bg-center h-[220px] w-[220px] rounded-xl ml-[20px] my-[15px]"></div>
      <p className=" justify-center text-xl text-white flex flex-row gap-1">
        <FaWhatsapp size={30} /> +6281268644726
      </p>

      <div className=" w-[300px] mt-6">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-fcc bg-cover bg-center h-[80px]"></div>
          <div className=" rounded-xl bg-pdc bg-cover bg-center h-[80px]"></div>
          <div className="rounded-xl bg-oasis bg-cover bg-center h-[80px]"></div>
          <div className="rounded-xl bg-e_commerce bg-cover bg-center h-[80px]"></div>
          <div className="rounded-xl bg-chat bg-cover bg-center h-[80px]"></div>
          <div className="rounded-xl bg-ummu bg-cover bg-center h-[80px]"></div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
