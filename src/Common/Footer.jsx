import pslogo from "../assets/logoFull.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container mx-auto p-4">
        <div className="flex justify-between flex-col md:flex-row items-center gap-4">
          <div className="p-5">
            <img src={pslogo} className="max-w-[300px]"></img>
          </div>
          <div className="text-lg flex gap-3 flex-col">
            <p>Head office Address:</p>
            <p>
              (Own Building) House # 48/03, Road # 07 Block #07 Dhour, Turag, Uttara, Dhaka 1230
            </p>
            <p>Cell: 01894531110</p>
            <p>printingsolution2021@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="text-center py-3 bg-gray-800 text-white">
        &copy;{year} | Printing Solution | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
