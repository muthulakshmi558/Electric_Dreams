import React from "react";

const GetInTouch = () => {
  return (
    <section className="w-[90%] bg-[#E25C26] py-6 mx-auto rounded-md mb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white">
        {/* Left Side Content */}
        <p className="text-lg font-medium text-center md:text-left mb-4 md:mb-0">
          Get in touch with us for fast & reliable service!
        </p>

        {/* Right Side Contact */}
        <a
          href="tel:+911234567890"
          className="text-xl font-bold bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          (+91) 1234567890
        </a>
      </div>
    </section>
  );
};

export default GetInTouch;
