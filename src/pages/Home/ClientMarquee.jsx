import Marquee from "react-fast-marquee";
import nel from "../../assets/nel.png"
import partexStar from "../../assets/partexStar.png"
import danishFoods from "../../assets/danishFoods.png"
import kurmure from "../../assets/kurmure.png"
const ClientMarquee = () => {
  return (
    <div className="my-5">
      <Marquee gradient gradientWidth={300}>
        <div className="flex gap-4 md:gap-6 justify-evenly items-center h-[60px] md:h-[150px]">
          <img className="max-h-10 md:max-h-32"  src={nel}></img>
          <img className="max-h-10 md:max-h-32" src={kurmure}></img>
          <img className="max-h-10 md:max-h-32" src={danishFoods}></img>
          <img className="max-h-10 md:max-h-32" src={kurmure}></img>
          <img className="max-h-10 md:max-h-32" src={partexStar}></img>
          <div className="text-xl md:text-4xl text-center uppercase leading-5">Nature&apos;s<br></br>Dew</div>
        </div>
      </Marquee>
    </div>
  );
};

export default ClientMarquee;
