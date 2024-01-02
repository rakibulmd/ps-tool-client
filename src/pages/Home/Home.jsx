import Header from "../../Common/Header";
import ClientMarquee from "./ClientMarquee";
import HeroSection from "./HeroSection";

const Home = () => {
    return (
        <>
            <Header></Header>
            <HeroSection></HeroSection>
            <ClientMarquee></ClientMarquee>
            <ClientMarquee></ClientMarquee>
            <ClientMarquee></ClientMarquee>
            <ClientMarquee></ClientMarquee>
            <ClientMarquee></ClientMarquee>
            {/* <ClientMarquee></ClientMarquee> */}
        </>
    );
};

export default Home;