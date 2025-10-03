import React from "react";

const EmergencySigns = () => {
  return (
    <section className="w-full flex justify-center py-12 px-4">
      <div className="w-full md:w-4/5 bg-[#0056B3] text-white rounded-xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Signs You Need an Emergency Electrician
        </h2>
        <ul className="list-disc list-inside space-y-3 text-base md:text-lg leading-relaxed">
          <li>Frequent power outages or tripping circuit breakers</li>
          <li>Burning smell from outlets or switches</li>
          <li>Flickering or dimming lights without reason</li>
          <li>Electrical sparks when plugging in appliances</li>
          <li>Buzzing or humming noises from electrical panels</li>
          <li>Hot outlets, switches, or electrical panels</li>
          <li>Exposed or damaged wires creating safety hazards</li>
          <li>Shock or tingling sensation when touching switches/appliances</li>
        </ul>
      </div>
    </section>
  );
};

export default EmergencySigns;
