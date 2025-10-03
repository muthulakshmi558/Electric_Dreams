import React from "react";
import workerImg from "../assets/images/membership.jpg"; // replace with your image path

const QualityWorkmanship = () => {
  return (
    <section className="w-full bg-white mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[500px]">
        
        {/* Left Content */}
        <div className="bg-[#0056B3] text-white p-8 md:p-12 flex flex-col justify-center h-full">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Quality Workmanship
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            At electrical dreams, we understand that electrical emergencies can
            happen at any time. Whether it’s a power outage, faulty wiring,
            sparking outlets, or an electrical hazard, our emergency electricians
            are ready to respond quickly to restore safety and functionality to
            your home or business. When you call us for an emergency electrical
            service, our licensed electricians will promptly assess the situation,
            identify the cause, and provide fast, effective repairs. We follow
            safety standards and use high-quality equipment to resolve issues
            safely, preventing further risks or damage.
          </p>

          {/* Buttons row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#F65616] text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-700 transition">
              Call Now
            </button>
            <button className="bg-[#F65616] text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-700 transition">
              Send Message
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-full">
          <img
            src={workerImg}
            alt="Electricians at work"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default QualityWorkmanship;
