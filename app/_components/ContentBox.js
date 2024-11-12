import Image from "next/image";
import React from "react";

export default function ContentBox({ content }) {
  const { src, alt } = content;

  return (
    <div className="relative h-[120px] w-[200px] rounded-lg">
      <Image src={src} alt={alt} fill className="object-cover rounded-lg" />
    </div>
  );
}
