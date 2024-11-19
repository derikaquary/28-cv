import Link from "next/link";
import Carousel from "./Carousel";

function PageComponent({ content }) {
  const {
    id,
    effect,
    mainImage,
    subImage1,
    subImage2,
    subImage3,
    text1,
    text2,
    text3,
    pageRef,
  } = content;

  return (
    <div
      id={id}
      className="flex flex-col gap-4 items-center h-[100vh] w-full px-3 max-w-7xl mb-3 sm:h-fit">
      <div data-aos="fade-right" data-aos-duration={1000}>
        <Link href={pageRef} target="_blank" rel="noopener noreferrer">
          <button className="px-3 py-2 text-white bg-gray-700 rounded-xl sm:text-3xl">
            click here to visit the web site of this project
          </button>
        </Link>
      </div>
      <div>
        <div
          data-aos={effect}
          data-aos-duration={1000}
          className={`bg-center bg-cover rounded-xl bg-${mainImage} h-[200px] sm:h-[400px] sm:w-[650px]`}></div>
        <p
          data-aos={effect}
          data-aos-duration={1000}
          className="text-white text-sm text-justify w-[300px] sm:w-[650px] sm:text-2xl">
          
        </p>
      </div>
      <div>
        <Carousel
          subImages={[subImage1, subImage2, subImage3]}
          texts={[text1, text2, text3]}
          autoSlide={true}
        />
      </div>
    </div>
  );
}

export default PageComponent;
