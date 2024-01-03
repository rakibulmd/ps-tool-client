import SolutionCard from "./Components/SolutionCard";
import printer from "../../assets/heroPrinters.png";
import inks from "../../assets/inks.jpg";
import spares from "../../assets/spares.jpg";

const Solutions = () => {
  const ourSolutions = [
    {
      img: printer,
      headline: "Ink Jet Printer Sales",
      description:
        "We sell High Performance CIJ Ink-Jet Printer Machines originated from Germany, Korea and China",
    },
      {img: inks,
      headline: "Ink and Material Sales",
      description:
        "We sell all different color, different types of ink, solvent and wash solution for Ink Jet Machines.",
    },
    {
        img: spares,
        headline: "Spare Parts",
        description: "All kind of spare parts are available at competitive price."
    }
  ];
  return (
    <div className="w-full bg-[#00acef] cursor-default">
      <div className="container mx-auto pt-8">
        <div className="flex justify-evenly flex-wrap gap-8">
          {ourSolutions?.map((s, i) => (
            <SolutionCard
              img={s.img}
              headline={s.headline}
              description={s.description}
              key={i}
            ></SolutionCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
