"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState, useCallback } from "react";

export default function Carousel({
  subImages = [],
  texts = [],
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
    <div className="overflow-hidden relative flex justify-center h-[300px] w-[300px] z-10 sm:w-auto sm:h-full rounded-xl bg-blue-400">
      <div
        className="flex transition-transform duration-200 ease-out "
        style={{ transform: `translateX(-${curr * 100}%)`, width: "100%" }}
      >
        {subImages.map((subImage, index) => (
          <div
            key={index}
            className="flex flex-col flex-shrink-0 w-full space-y-2 "
          >
            <div
              className={` bg-${subImage} h-[300px] bg-center bg-cover sm:h-[340px] sm:w-full rounded-xl`}
            ></div>
            {/* <p className="text-white text-sm text-justify sm:text-2xl sm:w-[650px]">
              {texts[index]}
            </p> */}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between p-5">
        <button className="-translate-y-10" onClick={prev}>
          <IoIosArrowBack color="white" size={30} />
        </button>
        <button className="-translate-y-10" onClick={next}>
          <IoIosArrowForward color="white" size={30} />
        </button>
      </div>
      <div className="absolute left-0 right-0 bottom-3">
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
