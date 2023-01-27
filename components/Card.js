import Link from "next/link";

export default function Card({ title, price, number, options, essentiel }) {
  return (
    <div className="flex flex-col items-center border border-[#fff] border-[1px] w-[70%] sm:w-[45%] lg:w-[30%] rounded-2xl p-[10px] mx-auto mt-[5rem] shadow-white shadow-[0_0_1px_1px_rgba(0,0,0,0.3)]">
      <div className="border border-[#000] border-[2px] rounded-2xl w-[100%] bg-[#25262A] flex-col flex shadow-white shadow-[0_0_2px_1px_rgba(0,0,0,0.3)]">
        <h3 className="text-[3rem] self-center text-[#64F4AC]">{title}</h3>
        <p className="self-center">
          à partir de <span className="font-bold text-[#64F4AC]">{price}</span>€
        </p>
      </div>
      <div className="mt-[2rem] flex flex-col ml-[2rem]">
        <p className="mb-[0.5rem]">
          {">"} {number}
        </p>
        <p className="mb-[0.5rem]">{">"} Site sécurisé en HTTPS</p>
        <p className="mb-[0.5rem]">{">"} Domaine gratuit un an</p>
        <p className="mb-[0.5rem]">{">"} Hébergement gratuit un an</p>
        <p className="mb-[0.5rem]">{">"} Référencement naturel (SEO)</p>
        <p className="mb-[0.5rem]">
          {">"} Design multi-supports (Responsive Design)
        </p>
        <p className="mb-[0.5rem]">{">"} Suivi après prestation</p>
        <p className="mb-[0.5rem]">{"</>"} Html, Css, et JavaScript</p>
        {options && (
          <>
            <p className="mb-[0.5rem]">{"</>"} ReactJS / NextJS</p>
            <p className="mb-[0.5rem]">{"</>"} NodeJS / MySQL - MongoDB</p>
          </>
        )}
      </div>
      {essentiel && (
        <div className="mt-[9rem] bg-[#25262A] border p-[1rem] rounded-xl hover:scale-110 hover:animate-bounce hover:shadow-white hover:shadow-[0_0_2px_1px_rgba(0,0,0,0.3)]">
          <Link href="#contact">
            <a className="text-[#64F4AC] hover:animate-bounce hover:text-[#fff] text-xl">
              EN SAVOIR PLUS
            </a>
          </Link>
        </div>
      )}
      {options && (
        <div className="mt-[5rem] mb-[1rem] bg-[#25262A] border p-[1rem] rounded-xl hover:scale-110 hover:animate-bounce hover:shadow-white hover:shadow-[0_0_2px_1px_rgba(0,0,0,0.3)]">
          <Link href="#contact">
            <a className="text-[#64F4AC] hover:animate-bounce hover:text-[#fff] text-xl">
              EN SAVOIR PLUS
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
