// bg-[url('/img/hero-pattern.svg')]
// import HeroBg from "../../assets/heroBg.png";
import { Button } from "@material-tailwind/react";
import HeroPrinters from "../../assets/heroPrinters.png"
import heroBg from "../../assets/heroBg.png"
const HeroSection = () => {
  return (
    <div className="w-full bg-[#00acef] min-h-[600px] hero-section bg-cover cursor-default rounded-b-[30px]" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container mx-auto pt-10 lg:pt-[90px]">
        <div className="md:flex justify-between">
          <div className="md:w-1/2 order-2">
             <img src={HeroPrinters} className="z-10 lg:min-w-[110%] h-auto"></img>
          </div>
          <div className="md:w-1/2 -mt-5 md:mt-0 md:pt-16 order-1 pl-6 lg:pl-0">
            <h5 className="text-lg text-white uppercase font-semibold tracking-wide">10 years of Excellence</h5>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-wide leading-tight mt-5 md:mt-9">Date&nbsp;Coding&nbsp;Solution<br></br>For&nbsp;every&nbsp;industries.</h1>
            <Button className="bg-white text-[#00acef] text-sm md:text-md lg:text-lg mt-8 mb-8 font-bold tracking-wide">See Details</Button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
