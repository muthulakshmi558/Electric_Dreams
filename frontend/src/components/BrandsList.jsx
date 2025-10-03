import React from "react";

// Example brand logos
import Brand1 from "../assets/images/brand1.png";
import Brand2 from "../assets/images/brand2.png";
import Brand3 from "../assets/images/brand3.png";
import Brand4 from "../assets/images/brand4.png";

const brands = [Brand1, Brand2, Brand3, Brand4];

const TrustedBrands = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#F65616] mb-10">
          Trusted Brands We Work With
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brands.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="w-40 h-40 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
