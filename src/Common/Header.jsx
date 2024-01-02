import { useState } from "react";
import psLogo from "../assets/ps-logo.png";
import { useEffect } from "react";
import { Button } from "@material-tailwind/react";

const Header = () => {
  const [logoVisible, setLogoVisible] = useState(true);
  const [navbarSticky, setNavbarSticky] = useState(false);

  const handleLogoClick = () => {
    console.log("hello");
  }

  const listenScrollEvent = () => {
    window.scrollY > 0 ? setLogoVisible(false) : setLogoVisible(true);
    window.scrollY > 0 ? setNavbarSticky(true) : setNavbarSticky(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      className={`w-full bg-[#00acef] text-white cursor-default sticky top-0 ${
        navbarSticky ? "shadow-lg" : ""
      } transition-all duration-200 z-50`}
    >
      <div className="container mx-auto">
        <nav className="hidden lg:flex justify-between items-center">
          <div className="flex justify-start items-center cursor-pointer" onClick={handleLogoClick}>
            <img
              src={psLogo}
              alt="Printing Solution"
              className={`transition-all duration-100 ${
                logoVisible ? "w-[120px] " : "w-[70px]"
              } transition-all duration-100`}
            />
            <h5 className="text-xl uppercase font-semibold tracking-wider">Printing Solution</h5>
          </div>
          <div className="flex justify-evenly gap-4 text-xl font-light cursor-pointer items-center transition-all duration-200">
            <a className="hover:text-[#9de3ff] transition-all duration-200">Solutions</a>
            <a className="">Printers</a>
            <a>About</a>
            <a>Contact</a>
            <Button color="white">Login</Button>
          </div>
        </nav>

        {/*  mobile navbar*/}
        <nav className="lg:hidden py-2 px-1">
          <div className="justify-center items-center flex">
            <img
              src={psLogo}
              alt="Printing Solution"
              className="w-[50px]"
            />
            <h5 className="text-sm uppercase font-semibold tracking-wider">Printing Solution</h5>
          </div>
          <div className="flex justify-evenly gap-2 text-sm md:text-md font-light cursor-pointer items-center">
            <a className="">Solutions</a>
            <a className="">Printers</a>
            <a>About</a>
            <a>Contact</a>
            <Button color="white" size="sm">Login</Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
