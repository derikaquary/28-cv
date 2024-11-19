import Image from "next/image";

export default function Skill() {
  return (
    <div id="skill"  className="flex flex-col items-center justify-center gap-5 px-7 py-7 bg-black/30 rounded-xl">
      <div className="flex flex-col items-center">
      <h2 className="text-4xl text-white">Skill</h2>
      <div className="bg-[rgb(211,21,81)] h-[2px] w-[50px] mt-2"></div>
      </div>
      <div className="grid grid-cols-2 gap-16 sm:flex">
        <div className="relative h-[100px] w-[100px]">
          <Image
            src="/html5_gray.png"
            alt="html logo"
            fill
            className="object-cover "
          />
          <div className="flex items-center justify-center absolute bottom-[-20px] right-[-25px] px-[13px] py-[17px] border-[3px] border-[#ff2630] rounded-full bg-[#ff2630]/30">
            <p className="text-[#ff2630]">98&#37;</p>
          </div>
        </div>
        <div className="relative h-[100px] w-[100px]">
          <Image
            src="/css_gray.png"
            alt="CSS logo"
            fill
            className="object-cover "
          />
          <div className="flex items-center justify-center absolute bottom-[-20px] right-[-25px] px-[13px] py-[17px] border-[3px] border-[#619fe8] rounded-full bg-[#619fe8]/30">
            <p className="text-[#619fe8] ">98&#37;</p>
          </div>
        </div>
        <div className="relative h-[100px] w-[100px]">
          <Image
            src="/javascript_gray.png"
            alt="Javascript logo"
            fill
            className="object-cover -z-[1]"
          />
          <div className="w-full h-full bg-black/30"></div>
          <div className="flex items-center justify-center absolute bottom-[-20px] right-[-25px] px-[13px] py-[17px] border-[3px] border-[#efe76d] rounded-full bg-[#efe76d]/30">
            <p className="text-[#efe76d]">98&#37;</p>
          </div>
        </div>
        <div className="relative h-[100px] w-[100px]">
          <Image
            src="/react_white.png"
            alt="react logo"
            fill
            className="object-cover "
          />
          <div className="flex items-center justify-center absolute bottom-[-20px] right-[-25px] px-[13px] py-[17px] border-[3px] border-[#59d5f0] rounded-full bg-[#59d5f0]/30">
            <p className="text-[#59d5f0]">98&#37;</p>
          </div>
        </div>
        <div className="relative h-[100px] w-[100px]">
          <Image
            src="/nextjs.jpeg"
            alt="Nextjs logo"
            fill
            className="object-cover "
          />
          <div className="flex items-center justify-center absolute bottom-[-20px] right-[-25px] px-[13px] py-[17px] border-[3px] border-gray-400 rounded-full bg-gray-400/30">
            <p className="text-gray-400">98&#37;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
