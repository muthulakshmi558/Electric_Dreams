import React from "react";

const DetailBanner = () => {
  return (
    <section className="w-[90%] bg-[#E25C26] py-6 mx-auto rounded-md mb-10 mt-16 md:mt-28 lg:mt-36">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white">
        {/* Left Side Content */}
        <p className="text-lg font-medium text-center md:text-left mb-4 md:mb-0">
          Lightning Installation
        </p>

        {/* Right Side Contact */}
        <p className="text-lg font-semibold text-center md:text-left mb-4 md:mb-0">
          Book Online or Call to Book Your Service
        </p>
      </div>
    </section>
  );
};

export default DetailBanner;
