import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PaymentPopup = ({ onClose }) => {
  const [animateTick, setAnimateTick] = useState(false);

  useEffect(() => {
    setAnimateTick(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative">
        <motion.div
          animate={animateTick ? { scale: [0, 1.2, 1] } : {}}
          className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-orange-500 text-white text-4xl font-bold mb-4"
        >
          ✔
        </motion.div>
        <h2 className="text-xl font-bold mb-2">Payment Completed</h2>
        <p>Thank you for choosing our electrician service. We will contact you soon.</p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-[#F65616] text-white rounded hover:bg-orange-600"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PaymentPopup;
