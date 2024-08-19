function FirstPage() {
  return (
    <div
      id="green"
      className=" flex flex-col items-center h-[100vh] w-[300px] ">
      <div>
        <p className="text-white text-[14px] mb-3 text-lg">
          Welcome to my world{" "}
        </p>
        <p className=" text-white text-2xl font-bold">
          Hi, I am <span className="text-[#ad1344]">Derik Aquary</span>, a
          Developer.
        </p>
      </div>

      <div className="bg-my_photo bg-cover bg-center h-[220px] w-[220px] rounded-xl ml-[20px] my-[20px]"></div>

      <div className=" w-[300px]">
        <p className="mb-2 text-white text-lg">Here are some of my work</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-chat bg-cover bg-center h-[80px]"></div>
          <div className="bg-e_commerce bg-cover bg-center h-[80px]"></div>
          <div className="bg-fcc bg-cover bg-center h-[80px]"></div>
          <div className="bg-oasis bg-cover bg-center h-[80px]"></div>
          <div className="bg-pdc bg-cover bg-center h-[80px]"></div>
          <div className="bg-ummu bg-cover bg-center h-[80px]"></div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
