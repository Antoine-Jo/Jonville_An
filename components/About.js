import Image from "next/image";

export default function About() {
  return (
    <div id="" className="w-[100%] flex-col max-w-[1440px] mx-auto mb-[10rem]">
      <div className="flex mx-auto my-0 w-[100%] justify-around">
        <p className="select-none bg-[#64F4AC] text-black w-[181px] text-center p-1 rounded">
          Front-End Developer
        </p>
        <p className="select-none bg-[#64F4AC] text-black w-[181px] text-center p-1 rounded">
          Back-End Developer
        </p>
      </div>
      <p className="text-[#9699A2] text-[2rem] mt-[5rem] w-[80%] mx-auto">
        Je conçois et code des Web-App magnifiquement simple, et j&#39;aime ce
        que je fais
      </p>
      <div className="bg-[#25262A] w-[150px] h-[150px] rounded-3xl">
        <Image
          src="/javascript1.png"
          width="100"
          height="100"
          alt="Picture JS"
        />
      </div>
    </div>
  );
}
