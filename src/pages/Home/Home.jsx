import React, { Suspense, useRef } from "react";
import Header from "../../Common/Header";
import ClientMarquee from "./ClientMarquee";
import HeroSection from "./HeroSection";
import Footer from "../../Common/Footer";
const Solutions = React.lazy(() => import("./Solutions"));
const Home = () => {
  const solutionRef = useRef(null);
  return (
    <>
      <Header solutionScrollRef={solutionRef}></Header>
      <HeroSection></HeroSection>
      <ClientMarquee></ClientMarquee>
      <Suspense fallback={<div>Loading...</div>}>
        <Solutions solutionScrollRef={solutionRef}></Solutions>
      </Suspense>
      <Footer></Footer>
    </>
  );
};

export default Home;
