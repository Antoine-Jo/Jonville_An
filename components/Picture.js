import Image from "next/image";

export default function Picture({ source, title }) {
    return (
        <div className="flex flex-col mb-[2rem]">
            <Image width="100" height="100" alt="html" src={source} quality={100} />
            <h3 className="self-center text-[1rem] font-normal">{title}</h3>
        </div>
    );
}
