import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col">
      <h2 className="text-[2rem] mt-[5rem] border-b-[1px] border-solid border-[#64F4AC] self-center">
        Me Contacter :
      </h2>
      <div className="flex flex-col sm:grid sm:grid-rows-3 sm:grid-cols-2 sm:gap-4 mx-auto items-center mt-[3rem]">
        <Image src="/mobile.svg" width="50" height="50" alt="Icon Mobile" />
        <p className="text-[#fff] text-center underline underline-offset-4 decoration-[#64F4AC]">
          06.29.89.42.74
        </p>

        <Image src="/email.svg" width="40" height="40" alt="Icon Mobile" />
        <Link href="mailto:antoinejonville@yahoo.fr">
          <a className="text-[#fff] text-center underline underline-offset-4 decoration-[#64F4AC]">
            Contact
          </a>
        </Link>

        <Image src="/linkedin.svg" width="40" height="40" alt="Icon Mobile" />
        <Link href="https://www.linkedin.com/in/antoine-jonville">
          <a
            target="_blank"
            rel="noreferrer"
            className="text-[#fff] text-center underline underline-offset-4 decoration-[#64F4AC]"
          >
            LinkedIn
          </a>
        </Link>
      </div>
    </div>
  );
}
