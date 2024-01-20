import { useRef } from "react";
import Header from "../../Common/Header";
import ClientMarquee from "./ClientMarquee";
import HeroSection from "./HeroSection";
import Solutions from "./Solutions";
import Footer from "../../Common/Footer";

const Home = () => {
  const solutionRef = useRef(null);
  //   console
  return (
    <>
      <Header solutionScrollRef={solutionRef}></Header>
      <HeroSection></HeroSection>
      <ClientMarquee></ClientMarquee>
      <Solutions solutionScrollRef={solutionRef}></Solutions>
      <Footer></Footer>
    </>
  );
};

export default Home;
