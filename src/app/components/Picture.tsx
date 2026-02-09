import Image from "next/image";

type PictureProps = {
    source: string;
    title: string;
};

export default function Picture({ source, title }: PictureProps) {
    return (
        <div className="flex flex-col mb-[2rem]">
            <Image width={100} height={100} alt={title} src={source} quality={100} />
            <h3 className="self-center text-[1rem] font-normal">{title}</h3>
        </div>
    );
}
