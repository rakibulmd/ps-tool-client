import psLogo from "../assets/ps-logo.png"

const Header = () => {
    return (
        <div className="w-full bg-[#00acef] text-white cursor-default fixed top-0">
            <div className="container mx-auto">
                <nav className="flex justify-between items-center">
                    <div className="flex justify-start items-center">
                        <img src={psLogo} alt="Printing Solution" />
                        <h5 className="text-xl uppercase font-semibold tracking-wider">Printing Solution</h5>
                    </div>
                    <div className="flex justify-evenly gap-4 text-lg">
                        <a className="">Home</a>
                        <a>Home</a>
                        <a>Home</a>
                        <a>Home</a>
                        <a>Icon</a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;