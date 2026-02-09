import Image from "next/image";

export default function Portfolio() {
  return (
    <div id="portfolio" className="flex flex-col items-center bg-[#25262A]">
      <h2 className="text-[2rem] mt-[5rem] border-b-[1px] border-solid border-[#64F4AC]">
        WORK IN PROGRESS
      </h2>
      <div className="mt-[3rem] mb-[5rem]">
        <Image src="/404.webp" width="300" height="300" alt="404" />
      </div>
    </div>
  );
}
