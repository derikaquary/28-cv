import Link from "next/link";
import Carousel from "./Carousel";

function ChatBuddy() {
  return (
    <div
      id="red"
      className="flex flex-col gap-6 items-center justify center h-[100vh] w-[300px] px-3">
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration={1000}
          className="rounded-xl bg-chat h-[200px] bg-cover bg-center"></div>
        <p className="text-white text-sm text-justify w-[300px]">
          
        </p>
      </div>
      <div>
        <Carousel autoSlide={true}>
          <div className="flex flex-col items-center mt-3 space-y-2">
            <div className="rounded-xl bg-profile h-[150px] w-[200px] bg-center bg-cover"></div>
            <p className="text-sm text-justify text-white">
              
            </p>
          </div>
          <div className="flex flex-col items-center mt-3 space-y-2 text-justify">
            <div className="rounded-xl bg-pricing h-[150px] w-[200px] bg-center bg-cover"></div>
            <p className="text-sm text-white">
              
            </p>
          </div>
          <div className="flex flex-col items-center mt-3 space-y-2 text-justify">
            <div className="rounded-xl bg-signup h-[150px] w-[200px] bg-center bg-cover"></div>
            <p className="text-sm text-white">
              
            </p>
          </div>
        </Carousel>
      </div>
      <div>
        <Link
          href="https://chatbuddy-derik-aquarys-projects.vercel.app"
          target="_blank"
          rel="noopener noreferrer">
          <button className="px-3 py-2 text-white bg-gray-700 rounded-xl">
            click here to visit the web site of this project
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ChatBuddy;
