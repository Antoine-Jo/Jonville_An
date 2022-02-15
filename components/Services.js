import Card from "./Card";

export default function Services() {
  return (
    <div
      id="services"
      className="flex flex-col max-w-[1050px] mb-[5rem] sm:flex sm:flex-row sm:flex-wrap sm:justify-evenly sm:mx-auto"
    >
      <Card
        title="ESSENTIEL"
        essentiel="essentiel"
        number="Jusqu'à 2 pages"
        price="450"
      />

      <Card
        title="CONFORT"
        options="options"
        number="Jusqu'à 6 pages"
        price="850"
      />

      <Card
        title="PREMIUM"
        options="options"
        number="Suivant les besoins"
        price="1400"
      />
    </div>
  );
}
