import Link from "next/link";

export default function Homepage() {
    return (
        <div id="#" className="w-[100%] flex-col max-w-[1440px] mx-auto mb-[10rem]">
            <TitleHead />

            <h1 className="mx-[2rem] text-[4rem] text-center mt-[2rem]">
                Antoine <span className="text-[#c8c8ca]">Jonville</span>
            </h1>
            <p className="text-[#9699A2] text-center text-[2rem] mt-[3rem] w-[80%] mx-auto">Création, maintenance de site internet</p>

            <div className="text-center mt-[2rem]">
                <Link href="#services">{"< Mes Services />"}</Link>
            </div>
        </div>
    );
}

function TitleHead() {
    return (
        <div className=" md:flex md:mx-auto md:my-0 md:w-[100%] md:justify-around">
            <p className="mx-auto mb-[2rem] select-none bg-[#64F4AC] text-black w-[181px] text-center p-1 rounded">Front-End Developer</p>
            <p className="mx-auto mb-[2rem] select-none bg-[#64F4AC] text-black w-[181px] text-center p-1 rounded">Back-End Developer</p>
        </div>
    );
}
