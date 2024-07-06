import { useState } from "react";
import Banner from "../assets/banner.png";
import Money from "../assets/money.png";
import ReferralModal from "./ReferralModal"; // Import the ReferralModal component

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="relative py-10 px-5 lg:px-20 h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg shadow-gray-600 p-10 lg:p-20 rounded-lg flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex flex-col items-start space-y-5">
          <h1 className="text-black cursor-context-menu text-center md:text-start text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5.2vw] 3xl:text-[5.5rem] font-bold max-w-lg xl:max-w-[700px]">
            Let’s Learn & Earn
          </h1>
          <p className="max-w-sm lg:max-w-md xl:max-w-[630px] font-semibold text-sm md:text-start text-center md:text-base xl:text-[20px] text-gray-700">
            Get a chance to win up to{" "}
            <span className="text-blue-600">Rs. 15,000</span>
          </p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={handleOpen}
          >
            Refer Now
          </button>
        </div>

        <div className="relative mt-10 lg:mt-0 w-full lg:w-auto flex justify-center">
          <img src={Banner} alt="Phone with App" className="w-full lg:w-3/4" />
          <div className="absolute top-[-50px] left-[-50px]">
            <img src={Money} alt="Dollar Icon" className="w-20 h-20" />
          </div>
          <div className="absolute top-[-50px] right-[-50px]">
            <img src={Money} alt="Dollar Icon" className="w-20 h-20" />
          </div>
          <div className="absolute bottom-[-50px] left-1/4">
            <img src={Money} alt="Dollar Icon" className="w-20 h-20" />
          </div>
          <div className="absolute bottom-[-50px] right-1/4">
            <img src={Money} alt="Dollar Icon" className="w-20 h-20" />
          </div>
        </div>
      </div>
      <ReferralModal open={open} handleClose={handleClose} />
    </section>
  );
};

export default HeroSection;
