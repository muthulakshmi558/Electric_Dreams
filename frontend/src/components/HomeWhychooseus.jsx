import React from "react";
import { motion } from "framer-motion";

// Example images & icons
import Img1 from "../assets/images/whychooseus1.jpg";
import Img2 from "../assets/images/whychooseus2.jpg";
import Img3 from "../assets/images/whychooseus3.jpg";
import Img4 from "../assets/images/whychooseus4.jpg";

import Icon1 from "../assets/images/whychooseicon1.png";
import Icon2 from "../assets/images/whychooseicon1.png";
import Icon3 from "../assets/images/whychooseicon1.png";
import Icon4 from "../assets/images/whychooseicon1.png";

const reasons = [
  {
    id: 1,
    icon: Icon1,
    number: "50+",
    title: "Years of Experience",
    line1: "Highly trained",
    line2: "professionals ready to help",
  },
  {
    id: 2,
    icon: Icon2,
    number: "100+",
    title: "Affordable Pricing",
    line1: "Competitive rates",
    line2: "for all services",
  },
  {
    id: 3,
    icon: Icon3,
    number: "24/7",
    title: "24/7 Support",
    line1: "Always available",
    line2: "when you need us",
  },
  {
    id: 4,
    icon: Icon4,
    number: "500+",
    title: "Trusted Service",
    line1: "Reliable solutions",
    line2: "customers love",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
        {/* Left Side Images */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2">
          <img src={Img1} alt="Choose 1" className="w-full h-[48vh] object-cover rounded-lg" />
          <img src={Img2} alt="Choose 2" className="w-full h-[48vh] object-cover rounded-lg" />
          <img src={Img3} alt="Choose 3" className="w-full h-[48vh] object-cover rounded-lg" />
          <img src={Img4} alt="Choose 4" className="w-full h-[48vh] object-cover rounded-lg" />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 bg-[#0056B3] text-white p-8 rounded-lg flex flex-col gap-8">
          <p className="text-lg mb-6">
            We provide top-notch services with expert technicians, ensuring reliability, affordability, and 24/7 support.
          </p>

          {/* Boxes 2x2 */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {reasons.map((reason) => (
    <motion.div
      key={reason.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: reason.id * 0.2 }}
      className="bg-white text-black p-4 rounded-lg flex flex-col items-center text-center shadow-md"
    >
      {/* Icon and Number in a row */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 border-2 border-gray-300 flex items-center justify-center rounded">
          <img src={reason.icon} alt={reason.title} className="w-8 h-8 object-contain" />
        </div>
        <span className="text-lg font-bold text-black">{reason.number}</span>
      </div>

      <h3 className="font-semibold text-md">{reason.title}</h3>
      <p className="text-sm mt-1">{reason.line1}</p>
      <p className="text-sm">{reason.line2}</p>
    </motion.div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
