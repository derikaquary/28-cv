import Image from "next/image";
import React from "react";

export default function Skill({skill}) {
    const {src, alt, className} = skill
  return (
    <div className="relative h-[100px] w-[100px]">
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
      />
    </div>
  );
}
