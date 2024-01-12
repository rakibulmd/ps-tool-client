
import { useRef } from "react";
import Header from "../../Common/Header";
import Banner from "./Banner";
import ClientMarquee from "./ClientMarquee";
import HeroSection from "./HeroSection";
import Solutions from "./Solutions";

const Home = () => {
    const solutionRef = useRef(null);
    return (
        <>
            <Header solutionScrollRef={solutionRef}></Header>
            <HeroSection></HeroSection>
            <ClientMarquee></ClientMarquee>
            <Solutions solutionScrollRef={solutionRef}></Solutions>
            <Banner></Banner>
        </>
    );
};

export default Home;