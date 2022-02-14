import Image from "next/image";

export default function Picture({ source, title }) {
  return (
    <div className="flex flex-col mr-[2rem] mb-[2rem]">
      <Image width="100" height="100" alt="html" src={source} />
      <h3 className="self-center text-[1rem] font-normal">{title}</h3>
    </div>
  );
}
