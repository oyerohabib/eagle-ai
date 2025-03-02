import React from "react";
import Image from "next/image";
import Button from "./Button";
import MobileAppPreview from "@/app/assets/mobile-app-preview.png";

const HeroSection: React.FC = () => {
  return (
    <div className="text-white py-10 overflow-hidden">
      {/* Background wave effect - I willl be using SVG or CSS to achieve this */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-3/5 mb-12 lg:mb-0">
          <h1 className="text-7xl leading-[108px] font-poppins mb-7 text-gradient">
            Pioneering the Future of Digital Asset Investment
          </h1>

          <p className="text-lg leading-7 mb-7 font-poppins">
            Eagle AI Labs is revolutionizing crypto asset management through our
            ground-breaking partnership with a U.S.-regulated crypto hedge fund.
            This exclusive collaboration combines our advanced AI-powered BTC
            prediction technology with institutional-grade investment expertise.
          </p>

          <Button text="Register your interest now" />
        </div>

        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src={MobileAppPreview}
              alt="Eagle AI Mobile App"
              width={400}
              height={200}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
