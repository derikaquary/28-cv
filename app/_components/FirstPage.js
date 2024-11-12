"use client";

import Whatsapp from "@/app/_components/Whatsapp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

function FirstPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="green"
      className="flex flex-col gap-4 items-center w-full max-w-4xl sm:flex-row sm:justify-center sm:gap-8 sm:items-center pt-[60px] sm:mt-[60px]"
    >
      <div className="flex flex-col gap-3 ">
        <div>
          <p className="text-white text-[14px] mb-3 text-md ">
            Welcome to my world{" "}
          </p>
          <p className="text-xl font-bold text-center text-white sm:text-xl">
            Hi, I am <span className="text-[#d31551]">Derik Aquary</span>, a
            Developer.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className=" relative h-[220px] rounded-full w-[230px] bg-black/30">
            <Image
              src="/my_photo.png"
              alt="my photo"
              fill
              className="object-contain rounded-full"
            />
          </div>
          <div className="flex items-center justify-center gap-2 ">
            <Whatsapp />
            <p className="text-xl text-white sm:text-xl">+6281268644726</p>
          </div>
        </div>
      </div>
      <div className=" w-[300px] sm:w-full text-white text-justify">
        <p>
          Hello! I&#39;m a dedicated{" "}
          <span className="text-[#d31551] font-bold">
            front-end web developer
          </span>{" "}
          with over a year of experience crafting engaging and efficient web
          interfaces. I specialize in{" "}
          <span className="text-[#d31551] font-bold">
            React.js, Next.js, Tailwind CSS, and JavaScript
          </span>
          , creating modern, responsive, and user-friendly websites. My journey
          in web development began with a strong foundation in{" "}
          <span className="text-[#d31551] font-bold">HTML and CSS</span>, and I
          quickly advanced to building complex, data-driven web applications.
        </p>
        <p className="">
          I currently work as a developer for{" "}
          <span className="text-[#d31551] font-bold">Expert Dream Builder</span>
          , where I manage the company&#39;s websites, enhance the online
          presence, and work closely with the marketing team to align digital
          experiences with business goals. Additionally, I have a thriving
          freelance career, working on various projects, from{" "}
          <span className="text-[#d31551] font-bold">
            e&#45;commerce platforms
          </span>{" "}
          to{" "}
          <span className="text-[#d31551] font-bold">hospitality websites</span>
          , each time focusing on user experience and scalable solutions.
        </p>
        <p className="">
          Let&#39;s connect and create something amazing together&#33;
        </p>
      </div>
    </div>
  );
}

export default FirstPage;
