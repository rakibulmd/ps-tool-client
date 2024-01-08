import Header from "../../Common/Header";
import Banner from "./Banner";
import ClientMarquee from "./ClientMarquee";
import HeroSection from "./HeroSection";
import Solutions from "./Solutions";

const Home = () => {
    return (
        <>
            <Header></Header>
            <HeroSection></HeroSection>
            <ClientMarquee></ClientMarquee>
            <Solutions></Solutions>
            <Banner></Banner>
        </>
    );
};

export default Home;