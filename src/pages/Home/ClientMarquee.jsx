import Marquee from "react-fast-marquee";
import nel from "../../assets/nel.jpg"
import partexStar from "../../assets/partexStar.png"
import danishFoods from "../../assets/danishFoods.png"
import kurmure from "../../assets/kurmure.png"
import ifad from "../../assets/ifad.jpg"
import setu from "../../assets/setu.jpg"
const ClientMarquee = () => {
  return (
    <div className="my-5">
      <h5 className="text-xl md:text-2xl lg:text-5xl text-center py-4">We&apos;ve provided solutions to</h5>
      <Marquee gradient gradientWidth={300}>
        <div className="flex gap-4 md:gap-6 justify-evenly items-center h-[60px] md:h-[150px]">
          <img className="max-h-10 md:max-h-32"  src={nel}></img>
          <img className="max-h-10 md:max-h-32" src={kurmure}></img>
          <img className="max-h-10 md:max-h-32" src={danishFoods}></img>
          <img className="max-h-10 md:max-h-32" src={kurmure}></img>
          <img className="max-h-10 md:max-h-32" src={partexStar}></img>
          <img className="max-h-10 md:max-h-32" src={setu}></img>
          <img className="max-h-10 md:max-h-32" src={ifad}></img>
          <div className="text-xl md:text-4xl text-center uppercase leading-5 mx-3">Nature&apos;s<br></br>Dew</div>
        </div>
      </Marquee>
      <h5 className="text-xl md:text-2xl lg:text-5xl text-center py-4">and +70 more...</h5>
    </div>
  );
};

export default ClientMarquee;
