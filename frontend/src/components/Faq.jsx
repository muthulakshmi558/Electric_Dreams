import React from "react";

const faqs = [
  {
    question: "Did you charge call-out fee?",
    answer:
      "No! We offer a $0 callout fee During Business Hours, so you only pay for the work we do—no hidden costs or surprises.",
  },
  {
    question: "Do you offer emergency electrical services?",
    answer:
      "Yes! We provide 24/7 emergency electrical repairs, ensuring you get fast and reliable service when you need it most.",
  },
  {
    question: "Do you work with business and commercial properties?",
    answer:
      "Yes! We provide comprehensive commercial electrical services, including office fit-outs, lighting upgrades, and compliance testing.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes! Voltaic Electrical is fully licensed and insured, ensuring all work meets Australian safety standards.",
  },
];

const FAQSection = () => {
  return (
    <section className="w-[80%] py-16 mx-auto px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-10">
          Everything you need to know about our services.
        </p>

        {/* FAQ List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-100 p-5 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-700 text-sm md:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
