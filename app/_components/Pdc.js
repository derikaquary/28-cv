import Link from "next/link";
import Carousel from "./Carousel";

function Pdc() {
  return (
    <div
      id="pdc"
      className="flex flex-col gap-4 items-center h-[100vh] w-full px-3 max-w-7xl mb-3 sm:h-fit">
      <div data-aos="fade-right" data-aos-duration={1000}>
        <Link
          href="https://plant-check.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
          <button className="text-white bg-gray-700 rounded-xl px-3 py-2 sm:text-3xl">
            click here to visit the web site of this project
          </button>
        </Link>
      </div>
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration={1000}
          className={`rounded-xl bg-pdc h-[200px] bg-cover bg-center sm:h-[400px] sm:w-[650px]`}></div>
        <p className="text-white text-sm text-justify w-[300px] sm:w-[650px] sm:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
          velit nulla impedit ex, debitis consequuntur, sunt cupiditate eos nemo
          dicta cumque facere autem omnis quod. Dolore dolor voluptatum.
        </p>
      </div>
      <div>
        <Carousel autoSlide={true}>
          <div className="flex flex-col items-center mt-3 space-y-2 ">
            <div
              className={`rounded-xl bg-lettuce h-[150px] w-[200px] bg-center bg-cover sm:h-[300px] sm:w-[650px]`}></div>
            <p className="text-white text-sm text-justify sm:text-2xl sm:w-[650px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, animi repellendus ab quos quidem illum esse, libero
              maiores omnis at repudiandae, obcaecati odit magni eum quod. Eos
              impedit illum molestias.
            </p>
          </div>
          <div className="flex flex-col items-center text-justify mt-3  space-y-2">
            <div
              className={`rounded-xl bg-plantArt h-[150px] w-[200px] bg-center bg-cover sm:h-[300px] sm:w-[650px]`}></div>

            <p className="text-white text-sm sm:text-2xl sm:w-[650px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, animi repellendus ab quos quidem illum esse, libero
              maiores omnis at repudiandae, obcaecati odit magni eum quod. Eos
              impedit illum molestias.
            </p>
          </div>
          <div className="flex flex-col items-center text-justify mt-3  space-y-2">
            <div
              className={`rounded-xl bg-plantCont h-[150px] w-[200px] bg-center bg-cover sm:h-[300px] sm:w-[650px]`}></div>

            <p className="text-white text-sm sm:text-2xl sm:w-[650px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, animi repellendus ab quos quidem illum esse, libero
              maiores omnis at repudiandae, obcaecati odit magni eum quod. Eos
              impedit illum molestias.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Pdc;
