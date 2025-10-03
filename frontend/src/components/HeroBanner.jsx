import React from "react";
import { motion } from "framer-motion";
import BannerImg from "../assets/images/homebanner.png"; // 🖼️ Import banner image

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] mt-16 sm:mt-20">
      {/* Banner Image */}
      <img
        src={BannerImg}
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-6 sm:bottom-10 md:bottom-20 left-0 right-0 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#F65616] drop-shadow-lg"
        >
          Powering Your Dreams with Electric Expertise
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 drop-shadow"
        >
          Reliable electrical services for your home & business.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
