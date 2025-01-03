"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export default function Carousel({
  subImages = [],
  autoSlide = true,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = useCallback(
    () => setCurr((curr) => (curr === 0 ? subImages.length - 1 : curr - 1)),
    [subImages.length]
  );

  const next = useCallback(
    () => setCurr((curr) => (curr === subImages.length - 1 ? 0 : curr + 1)),
    [subImages.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [next, autoSlide, autoSlideInterval]);

  return (
    <div className=" overflow-hidden relative flex justify-center h-[200px] w-[300px] z-10 sm:w-auto sm:h-full rounded-xl bg-green-400 sm:mb-0 mb-2">
      <div
        className="flex transition-transform duration-200 ease-out "
        style={{ transform: `translateX(-${curr * 100}%)`, width: "100%" }}
      >
        {subImages.map((subImage, index) => (
          <div
            key={index}
            className="flex flex-col flex-shrink-0 w-full space-y-2 "
          >
            <div className="relative h-full sm:h-[340px] sm:w-full rounded-xl">
              <Image
                src={subImage}
                alt="images"
                fill
                className="object-cover"
              />
            </div>
            {/* <p className="text-white text-sm text-justify sm:text-2xl sm:w-[650px]">
              {texts[index]}
            </p> */}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between h-full p-2 ">
        <button className="-translate-y-[2%] rounded-full" onClick={prev}>
          <IoIosArrowBack
            color="black"
            size={30}
            className="rounded-full bg-white/30"
          />
        </button>
        <button className="-translate-y-[2%]" onClick={next}>
          <IoIosArrowForward
            color="black"
            size={30}
            className="rounded-full bg-white/30"
          />
        </button>
      </div>
      <div className="absolute left-0 right-0 bottom-6 sm:bottom-3">
        <div className="z-10 flex items-center justify-center gap-2">
          {subImages.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`cursor-pointer transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
