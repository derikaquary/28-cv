"use client";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState, useCallback } from "react";

export default function Carousel({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = useCallback(
    () => setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1)),
    [children.length]
  );

  const next = useCallback(
    () => setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1)),
    [children.length]
  );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [next, autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative flex justify-center w-[300px] h-[300px] z-10 sm:w-[650px] sm:h-[500px]">
      <div
        className="flex transition-transform ease-out duration-200"
        style={{ transform: `translateX(-${curr * 100}%)`, width: "100%" }}>
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0 ">
            {child}
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
      <div className="absolute bottom-3 right-0 left-0">
        <div className="flex items-center justify-center gap-2 z-10 ">
          {children.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurr(i)}
              className={`
                cursor-pointer transition-all w-3 h-3 bg-white rounded-full ${
                  curr === i ? "p-2" : "bg-opacity-50"
                }
              `}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
