import Carousel from "./Carousel";
import Link from "next/link";

function Ecommerce() {
  return (
    <div
      id="cyan"
      className="flex flex-col items-center justify center h-[100vh] w-[300px] px-3 gap-2">
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration={1000}
          className="rounded-xl bg-e_commerce h-[200px] bg-cover bg-center"></div>
        <p className="text-white text-sm text-justify w-[300px]">
          
        </p>
      </div>
      <div>
        <Carousel autoSlide={true}>
          <div className="flex flex-col items-center mt-3 space-y-2">
            <div className="rounded-xl bg-cloth h-[150px] w-[200px] bg-center bg-cover"></div>
            <p className="text-sm text-justify text-white">
              
            </p>
          </div>
          <div className="flex flex-col items-center mt-3 space-y-2 text-justify">
            <div className="rounded-xl bg-ball h-[150px] w-[200px] bg-center bg-cover"></div>
            <p className="text-sm text-white">
              
            </p>
          </div>
          <div className="flex flex-col items-center mt-3 space-y-2 text-justify">
            <div className="rounded-xl bg-products h-[150px] w-[200px] bg-center bg-cover"></div>
            <p className="text-sm text-white">
              
            </p>
          </div>
        </Carousel>
      </div>
      <div data-aos="fade-left" data-aos-duration={1000}>
        <Link
          href="https://wild-oasis-website-six.vercel.app/"
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

export default Ecommerce;
