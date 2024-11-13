import React, { useState } from "react";
import { contents } from "../_data/contents";
import ContentBox from "./ContentBox";
import Carousel from "./Carousel";

export default function Projects() {
  // Set the first content as the default
  const [selectedContent, setSelectedContent] = useState(contents[0]);

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div id="projects" className="mt-[40px] flex gap-4 w-full max-w-4xl h-[550px] ">
      <div className="grid items-center justify-center flex-1 grid-cols-1 gap-4 ">
        {/* Pass the subImages of the selected content */}
        <Carousel
          subImages={[
            selectedContent.subImage1,
            selectedContent.subImage2,
            selectedContent.subImage3,
          ]}
          texts={[
            selectedContent.text1,
            selectedContent.text2,
            selectedContent.text3,
          ]}
        />
        <div className="flex flex-col gap-3 px-3 py-2 text-white bg-black/30 rounded-2xl">
          <h2 className="text-xl font-semibold">Food Calorie Check App</h2>
          <p dangerouslySetInnerHTML={{ __html: selectedContent.text1 }} />
        </div>
      </div>
      <div className=" h-[550px] w-[250px] grid grid-cols-1-col gap-3 items-center justify-center overflow-auto">
        {contents.map((content) => (
          <div
            key={content.id}
            onClick={() => handleContentClick(content)} // Handle click to change selected content
          >
            <ContentBox content={content} />
          </div>
        ))}
      </div>
    </div>
  );
}
