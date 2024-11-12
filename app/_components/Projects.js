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
    <div className="mt-[40px] flex gap-4 w-full max-w-4xl h-[450px]">
      <div className="bg-green-400">
        {/* Pass the subImages of the selected content */}
        <Carousel
          subImages={[
            selectedContent.subImage1,
            selectedContent.subImage2,
            selectedContent.subImage3,
          ]}
          texts={[selectedContent.text1, selectedContent.text2, selectedContent.text3]}
        />
      </div>
      <div className="bg-red-400 h-[450px] w-[250px] grid grid-cols-1-col gap-3 items-center justify-center overflow-auto">
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
