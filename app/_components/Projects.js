"use client";

import React, { useState } from "react";
import { contents } from "../_data/contents";
import ContentBox from "./ContentBox";
import Carousel from "./Carousel";
import Link from "next/link";

export const metadata = {
  title: "My Projects",
};

export default function Projects() {
  // Set the first content as the default
  const [selectedContent, setSelectedContent] = useState(contents[0]);

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl text-white">Projects</h2>
        <div className="bg-[rgb(211,21,81)] h-[2px] w-[70px] mt-2"></div>
      </div>
      <div
        id="projects"
        className=" mt-[20px] sm:mt-[40px] flex flex-col items-center sm:flex-row gap-4 w-full max-w-4xl h-[580px] sm:h-[550px] bg-blue-400"
      >
        <div className="flex flex-col items-center justify-center flex-1 bg-green-400 sm:gap-4 sm:grid sm:grid-cols-1">
          {/* Pass the subImages of the selected content */}
          <Carousel
            subImages={[
              selectedContent.subImage1,
              selectedContent.subImage2,
              selectedContent.subImage3,
            ]}
          />
          <div className="flex flex-col gap-3 px-3 py-3 text-white bg-black/30 rounded-2xl ">
            <div className="flex items-center gap-3">
              <h2
                className="text-xl font-semibold"
                dangerouslySetInnerHTML={{ __html: selectedContent.title }}
              />
              <Link
                href={selectedContent.pageRef}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 text-black bg-white rounded-3xl"
              >
                View
              </Link>
            </div>
            <div className="sm:h-[120px] w-full overflow-auto hidden sm:block">
              <p dangerouslySetInnerHTML={{ __html: selectedContent.text1 }} />
            </div>
          </div>
        </div>
        <div className="bg-red-400 h-[550px] w-full sm:w-[250px] grid grid-cols-1 gap-3 items-center justify-center overflow-auto">
          {contents.map((content) => (
            <div
              key={content.id}
              onClick={() => handleContentClick(content)} // Handle click to change selected content
              className={`flex justify-center py-2 px-4 rounded-lg ${
                selectedContent.id === content.id ? "bg-white/40" : " "
              }`}
            >
              <ContentBox content={content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
