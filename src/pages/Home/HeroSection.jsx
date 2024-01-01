// bg-[url('/img/hero-pattern.svg')]
// import HeroBg from "../../assets/heroBg.png";
import { Button } from "@material-tailwind/react";
import HeroPrinters from "../../assets/heroPrinters.png"
const HeroSection = () => {
  return (
    <div className="w-full bg-[#00acef] min-h-[600px] hero-section bg-cover cursor-default rounded-b-[30px] mt-[102px]" style={{ backgroundImage: "url('../src/assets/heroBg.png')" }}>
      <div className="container mx-auto pt-[90px]">
        <div className="flex justify-between">
          <div className="w-1/2 pt-16">
            <h5 className="text-lg text-white uppercase font-semibold tracking-wide">10 years of Excellence</h5>
            <h1 className="text-5xl text-white font-light tracking-wide leading-tight mt-9">Date Coding Solution<br></br>For every industries.</h1>
            <Button className="bg-white text-[#00acef] text-md mt-8 mb-8 font-bold tracking-wide">See Details</Button>
          </div>
          <div className="w-1/2">
             <img src={HeroPrinters} className="z-10 min-w-[110%] h-auto"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
