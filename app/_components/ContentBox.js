import Image from "next/image";
import React from "react";

export default function ContentBox({ content }) {
  const { src, alt } = content;

  return (
    <div className="relative h-[150px] w-[290px] sm:h-[120px] sm:w-[200px] rounded-lg">
      <Image src={src} alt={alt} fill className="object-cover rounded-lg" />
    </div>
  );
}
