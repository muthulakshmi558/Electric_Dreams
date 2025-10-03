// src/pages/About.jsx
import React from "react";

// ✅ Import images and store them in variables
import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";
import about3 from "../assets/images/about3.jpg";

const About = () => {
  return (
    <div className="font-[Lato] mb-10">
      {/* Page Title */}
      <div className="text-center py-10  mt-20 ">
        <h1 className="text-4xl md:text-5xl text-[#F65616] font-bold">About Us</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto">
          Powering communities with sustainable and efficient energy solutions.
        </p>
      </div>

      {/* Section 1 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-10 items-center">
        <div>
          <img src={about1} alt="Our Team" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#0056B3] mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Electric Dreams Group was founded with a passion for powering the
            community responsibly. We are a team of licensed Master Electricians
            and certified specialists in solar, air conditioning, and thermal
            imaging, dedicated to delivering the highest standard of service.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#CD3A00] mb-4">Our Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Our comprehensive range of services is designed to address a wide
            variety of energy needs across residential, commercial, and
            industrial sectors. From electrical installations and solar systems
            to EV charging stations and industrial lighting, our goal is to offer
            solutions that not only meet immediate requirements but also support
            long-term sustainability.
          </p>
        </div>
        <div>
          <img src={about2} alt="Our Services" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-10 items-center">
        <div>
          <img src={about3} alt="Our Commitment" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#F65616] mb-4">
            Our Commitment to You
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Electric Dreams Solutions Group, client satisfaction isn’t just a
            goal; it’s the foundation of our business. We’re committed to
            transparent communication, exceptional customer service, and
            craftsmanship that lasts. From consultation to completion, we keep
            our clients informed every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
