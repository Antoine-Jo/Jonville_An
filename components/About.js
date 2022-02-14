import Image from "next/image";
import Link from "next/link";
import Picture from "./Picture";

export default function About() {
  return (
    <div id="about" className="bg-[#25262A] pt-[5rem] flex flex-col">
      <div className="mx-auto">
        <Image
          src="/me.jpg"
          alt="me"
          width="375"
          height="480"
          className="rounded-[1.3rem] object-cover"
        />
      </div>
      <div className="flex-col mx-auto text-center mt-[2rem] text-[1.2rem]">
        <p>Antoine Jonville, 33ans, Cannes(06, Alpes-Maritimes)</p>
        <p className="max-w-[1025px] mx-auto my-[1rem] text-[#9699A2]">
          J&#39;ai commencé le développement web en autodidacte, étant passionné
          par le monde de l&#39;informatique, j&#39;ai effectué une formation de
          6 mois avec OpenClassrooms sur le parcours Développeur Web. Je suis
          quelqu&#39;un de curieux et passionné, j&#39;aime expérimenter,
          découvrir et apprendre au fur et à mesure de mes projets
          professionnels et personnels.
        </p>
      </div>
      <div className="flex flex-col mx-auto max-w-[1050px]">
        <h2 className="self-center mt-[2rem] text-[1.8rem]">
          Mes compétences :
        </h2>
        <p className="mt-[2rem]">
          Vous pouvez retrouver mes projets publics en visitant mon Github, en
          cliquant ci-dessous :
        </p>
        <Link href="https://github.com/Antoine-Jo">
          <a target="_blank" rel="noreferrer" className="self-center">
            <Image src="/github.svg" width="40" height="48" alt="github" />
          </a>
        </Link>
      </div>

      <div className="flex flex-wrap justify-around mx-auto mt-[3rem] max-w-[1050px]">
        <Picture title="HTML" source="/html.svg" />

        <Picture title="CSS" source="/css.svg" />

        <Picture title="Sass" source="/sass.svg" />

        <Picture title="JavaScript" source="/javascript.svg" />

        <Picture title="React" source="/reactjs.svg" />

        <Picture title="Redux" source="/redux.svg" />

        <Picture title="NextJS" source="/nextjs.svg" />

        <Picture title="NodeJS" source="/nodejs.svg" />

        <Picture title="MongoDB" source="/mongodb.svg" />

        <Picture title="MySQL" source="/mysql.svg" />
      </div>

      <h2 className="self-center mt-[2rem] text-[1.8rem]">Mes Formations :</h2>
      <div className="flex rounded-[1.2rem] h-[6.5rem] px-[10px] mx-auto mt-[3rem] mb-[5rem] items-center border-2 border-solid border-[#7451eb] max-w-[648px]">
        <Image
          src="/openclassroom.jpg"
          alt="Logo d'OpenClassrooms"
          height="90px"
          width="90px"
          className="rounded-[15px] object-cover"
        />
        <p className="ml-[10px]">
          Diplômé en Février 2022 de la formation &quot;Développement Web&quot;
          (Niveau bac+2)
        </p>
      </div>
    </div>
  );
}
