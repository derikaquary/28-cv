import Link from "next/link";
import Carousel from "./Carousel";

function Pdc() {
  return (
    <div
      id="yellow"
      className="flex flex-col items-center justify center h-[100vh] w-[300px] px-3 ">
      <div>
        <div className="bg-pdc h-[200px] bg-cover bg-center"></div>
        <p className="text-white text-sm text-justify w-[300px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
          velit nulla impedit ex, debitis consequuntur, sunt cupiditate eos nemo
          dicta cumque facere autem omnis quod. Dolore dolor voluptatum.
        </p>
      </div>
      <div>
        <Carousel autoSlide={true}>
          <div className="flex flex-col items-center mt-3 space-y-2 ">
            <div className="bg-lettuce h-[150px] w-[200px] bg-center bg-cover"></div>
            <p className="text-white text-sm text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, animi repellendus ab quos quidem illum esse, libero
              maiores omnis at repudiandae, obcaecati odit magni eum quod. Eos
              impedit illum molestias.
            </p>
          </div>
          <div className="flex flex-col items-center text-justify mt-3  space-y-2">
            <div className="bg-plantArt h-[150px] w-[200px] bg-center bg-cover"></div>
            <p className="text-white text-sm ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, animi repellendus ab quos quidem illum esse, libero
              maiores omnis at repudiandae, obcaecati odit magni eum quod. Eos
              impedit illum molestias.
            </p>
          </div>
          <div className="flex flex-col items-center text-justify mt-3  space-y-2">
            <div className="bg-plantCont h-[150px] w-[200px] bg-center bg-cover"></div>
            <p className="text-white text-sm ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, animi repellendus ab quos quidem illum esse, libero
              maiores omnis at repudiandae, obcaecati odit magni eum quod. Eos
              impedit illum molestias.
            </p>
          </div>
        </Carousel>
      </div>
      <div>
        <Link
          href="https://plant-check.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
          <button className="text-white bg-gray-700 rounded-xl px-3 py-2">
            click here to visit the web site of this project
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Pdc;
