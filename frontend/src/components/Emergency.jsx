// HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";

// 🖼 Import your image
import HeroImage from "../assets/images/emergency_banner.jpg";

const EmergencyHeroSection = () => {
  return (
    <section className="w-full h-screen relative">
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Our Services
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-2xl">
          Professional solutions for all your home and business needs.
        </p>
            <Link to="/contact">
            <button className="mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition">
                Get Started
            </button>
            </Link>
      </div>
    </section>
  );
};

export default EmergencyHeroSection;
