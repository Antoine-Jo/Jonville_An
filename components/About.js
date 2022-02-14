import Image from "next/image";

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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        accusantium cupiditate incidunt est nobis repellat soluta sapiente.
        Cumque quaerat debitis qui, hic explicabo et aliquid unde voluptas iste
        a optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        accusantium cupiditate incidunt est nobis repellat soluta sapiente.
        Cumque quaerat debitis qui, hic explicabo et aliquid unde voluptas iste
        a optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        accusantium cupiditate incidunt est nobis repellat soluta sapiente.
        Cumque quaerat debitis qui, hic explicabo et aliquid unde voluptas iste
        a optio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        accusantium cupiditate incidunt est nobis repellat soluta sapiente.
        Cumque quaerat debitis qui, hic explicabo et aliquid unde voluptas iste
        a optio.
      </p>
    </div>
  );
}
