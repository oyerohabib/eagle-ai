"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import MobileAppPreview from "@/app/assets/mobile-app-preview.png";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <div className="text-white py-10 overflow-hidden">
      {/* Background wave effect - I willl be using SVG or CSS to achieve this */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <motion.div
          className="w-full lg:w-3/5 mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="xl:text-7xl lg:text-6xl md:text-5xl text-3xl xl:leading-[108px] leading-[120%] font-poppins mb-7 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Pioneering the Future of Digital Asset Investment
          </motion.h1>

          <motion.p
            className="text-lg leading-7 mb-7 font-poppins"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Eagle AI Labs is revolutionizing crypto asset management through our
            ground-breaking partnership with a U.S.-regulated crypto hedge fund.
            This exclusive collaboration combines our advanced AI-powered BTC
            prediction technology with institutional-grade investment expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button text="Register your interest now" />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <Image
              src={MobileAppPreview}
              alt="Eagle AI Mobile App"
              width={400}
              height={200}
              className="rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
