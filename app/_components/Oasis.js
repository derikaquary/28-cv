import Link from "next/link";
import Carousel from "./Carousel";

function Oasis() {
  return (
    <div
      id="oasis"
      className="flex flex-col gap-4 items-center h-[100vh] w-full px-3 max-w-7xl mb-3 sm:h-fit">
      <div data-aos="fade-right" data-aos-duration={1000}>
        <Link
          href="https://wild-oasis-website-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
          <button className="px-3 py-2 text-white bg-gray-700 rounded-xl sm:text-3xl">
            click here to visit the web site of this project
          </button>
        </Link>
      </div>
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration={1000}
          className={`bg-center bg-cover rounded-xl bg-oasis h-[200px] sm:h-[400px] sm:w-[650px]`}></div>
        <p className="text-white text-sm text-justify w-[300px] sm:w-[650px] sm:text-2xl">
          
        </p>
      </div>
      <div>
        <Carousel autoSlide={true}>
          <div className="flex flex-col items-center mt-3 space-y-2">
            <div
              className={`bg-center bg-cover rounded-xl bg-cabins h-[150px] w-[200px] sm:h-[300px] sm:w-[650px]`}></div>
            <p className="text-white text-sm text-justify sm:w-[650px] sm:text-2xl">
              
            </p>
          </div>
          <div className="flex flex-col items-center mt-3 space-y-2 text-justify">
            <div
              className={`bg-center bg-cover rounded-xl bg-reserve h-[150px] w-[200px] sm:h-[300px] sm:w-[650px]`}></div>

            <p className="text-white text-sm sm:w-[650px] sm:text-2xl">
              
            </p>
          </div>
          <div className="flex flex-col items-center mt-3 space-y-2 text-justify">
            <div
              className={`bg-center bg-cover rounded-xl bg-guest h-[150px] w-[200px] sm:h-[300px] sm:w-[650px]`}></div>

            <p className="text-white text-sm sm:w-[650px] sm:text-2xl">
              
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Oasis;
