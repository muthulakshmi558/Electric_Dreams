import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    number: "1",
    title: "Consultation",
    desc: "We analyze your needs and provide expert advice for the best solution.",
  },
  {
    id: 2,
    number: "2",
    title: "Implementation",
    desc: "Our trained technicians carry out the plan efficiently and professionally.",
  },
  {
    id: 3,
    number: "3",
    title: "Support & Follow-up",
    desc: "We ensure everything works perfectly and provide continuous support.",
  },
];

const Howitworks = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-10 text-black">
          Our Proven 3-Step Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.id * 0.2 }}
              className="border-4 border-[#F65616] rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="text-3xl font-bold text-black mb-4">{step.number}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
