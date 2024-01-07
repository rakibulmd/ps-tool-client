import bannerImage from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="w-full max-h-[600px] overflow-hidden">
            <img src={bannerImage} className="h-full w-full object-cover object-bottom" alt=""></img>
        </div>
    );
};

export default Banner;