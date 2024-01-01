import Marquee from "react-fast-marquee";
import nel from "../../assets/nel.png"
import partexStar from "../../assets/partexStar.png"
import danishFoods from "../../assets/danishFoods.png"
import kurmure from "../../assets/kurmure.png"
const ClientMarquee = () => {
  return (
    <div className="my-5">
      <Marquee gradient gradientWidth={300}>
        <div className="flex gap-12 justify-evenly items-center">
          <img src={nel}></img>
          <img src={partexStar}></img>
          <img src={danishFoods}></img>
          <img src={kurmure}></img>
          <img src={partexStar}></img>
          <div className="text-6xl uppercase px-10">Nature&apos;s Dew</div>
        </div>
      </Marquee>
    </div>
  );
};

export default ClientMarquee;
