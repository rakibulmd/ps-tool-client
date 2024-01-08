import SolutionCard from "./Components/SolutionCard";
import printer from "../../assets/heroPrinters.png";
import inks from "../../assets/inks.jpg";
import spares from "../../assets/spares.jpg";
import conveyor from "../../assets/conveyor.jpeg";
import service from "../../assets/service.jpg";
import solution from "../../assets/tailored_solution.jpg";

const Solutions = () => {
  const ourSolutions = [
    {
      img: printer,
      headline: "High Performance Ink-Jet Printer",
      description:
        "We sell High Performance CIJ Ink-Jet Printer Machines originated from Germany, Korea and China",
    },
    {
        img: service,
        headline: "Maintenance & Servicing",
        description: "We do preventive and corrective maintenance of all Ink Jet Printer Machines."
    },
      {img: inks,
      headline: "Ink and Printing Materials",
      description:
        "We sell all different color, different types of ink, solvent and wash solution for Ink Jet Machines.",
    },
    {
        img: spares,
        headline: "Spare Parts",
        description: "All kind of spare parts are available at competitive price."
    },
    {
        img: solution,
        headline: "Tailored Solutions",
        description: "Different types of problem need different solutions. Your problem - Our Solution!"
    },
    {
        img: conveyor,
        headline: "Conveyor, Rewinder and Related Products.",
        description: "We provide all kinds of marking and batch coding related products including conveyor, rewinder, cable rollers etc."
    },
  ];
  return (
    <div className="w-full bg-[#00acef] cursor-default">
      <div className="container mx-auto py-8">
        <h5 className="text-center text-2xl md:text-3xl lg:text-6xl pb-5 lg:my-5 lg:pb-8 font-light text-white uppercase tracking-wider">Our Solutions</h5>
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
