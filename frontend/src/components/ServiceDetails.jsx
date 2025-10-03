// src/pages/ServiceViewDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import { Star } from "lucide-react";

const ServiceViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  // popup state
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [count, setCount] = useState(1);
  const [visitationOfferThreshold] = useState(200); // display only (can come from backend)
  const [isPostingCart, setIsPostingCart] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`/serviceslist/${id}/`)
      .then((res) => setService(res.data))
      .catch((err) => console.error("Error fetching service details:", err));
  }, [id]);

  if (!service) {
    return (
      <div className="p-6 font-lato ">
        <p>Loading service details...</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-[#0056B3] underline"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  // price calculation (ensure service.price is number)
  const basePrice = Number(service.price) || 0;
  const amount = basePrice * count;

  const handleAddToCartClick = () => {
    setCount(1);
    setShowCartPopup(true);
  };

  const handleClosePopup = () => setShowCartPopup(false);

  const handleIncrement = () => setCount((c) => c + 1);
  const handleDecrement = () => setCount((c) => Math.max(1, c - 1));

  const handleBookNow = async () => {
    // Optional: POST to backend cart endpoint (uncomment if backend cart exists)
    // setIsPostingCart(true);
    // try {
    //   await axiosInstance.post("/cart/", {
    //     service: service.id,
    //     quantity: count,
    //     amount,
    //   });
    // } catch (e) {
    //   console.error(e);
    // } finally {
    //   setIsPostingCart(false);
    // }

    // Navigate to checkout page and pass details via state
navigate("/checkout", {
  state: {
    service_id: service.id,
    title: service.title,
    image: service.image, // ADD THIS
    price: basePrice,
    quantity: count,
    amount,
    duration: service.duration,
  },
});
  };

  return (
    <div className="p-6 font-lato mt-24 relative">
      <h1 className="text-2xl text-black font-bold mt-10 mb-10">
        {service.title || "Service Details"}
      </h1>

      <div className="grid md:grid-cols-3 gap-6 items-start border border-black p-6 rounded-[3px] shadow-md">
        {/* Column 1: Image */}
        <div className="flex justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-48 h-48 object-contain rounded-[3px] border "
          />
        </div>

        {/* Column 2: Details */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">{service.title}</h2>

          <div className="flex items-center gap-2 border-b border-gray-400 pb-1 w-fit">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0056B3]">
              <Star size={14} className="text-white fill-white" />
            </div>
            <span className="text-black text-sm font-semibold">
              {service.rating}
            </span>
            <span className="text-xs text-gray-600">
              ({service.reviews} reviews)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold text-black">₹{service.price}</p>
            <p className="text-sm text-[#0056B3]">{service.duration}</p>
          </div>

          <p className="text-gray-700 text-sm italic">
            {service.short_description}
          </p>
        </div>

        {/* Column 3: Buttons */}
        <div className="flex flex-col gap-3 items-center">
          <button
            onClick={handleAddToCartClick}
            className="px-6 py-2 bg-[#F65616] text-white rounded-2xl hover:bg-[#CD3A00] w-full"
          >
            Add to Cart
          </button>

          <a
            href="tel:+911234567890"
            className="px-6 py-2 bg-[#F65616] text-white rounded-2xl hover:bg-[#003f80] w-full text-center"
          >
            Call (+91)1234567890
          </a>
        </div>
      </div>

      {/* ========== CART POPUP (top-right) ========== */}
      {showCartPopup && (
        <div className="fixed top-6 right-6 w-[360px] z-50">
          <div className="border rounded-lg bg-white shadow-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <h3 className="font-semibold">Cart</h3>
              <button
                onClick={handleClosePopup}
                className="text-gray-600 hover:text-gray-900"
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              {/* Product title */}
              <div>
                <p className="text-sm text-gray-500">Product</p>
                <p className="font-semibold text-black">{service.title}</p>
              </div>

              {/* Quantity control */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDecrement}
                  className="w-8 h-8 flex items-center justify-center border rounded"
                >
                  −
                </button>
                <div className="px-3 py-1 border rounded">{count}</div>
                <button
                  onClick={handleIncrement}
                  className="w-8 h-8 flex items-center justify-center border rounded"
                >
                  +
                </button>

                <div className="ml-auto text-right">
                  <p className="text-xs text-gray-500">Amount</p>
                  <p className="font-semibold">₹{amount}</p>
                </div>
              </div>

              {/* Offer box */}
              <div className="border p-3 rounded text-sm">
                <p className="font-semibold">Get visitation fees offer</p>
                <p>On orders above ₹{visitationOfferThreshold}</p>
              </div>

              {/* View more details */}
              <button
                onClick={() => {
                  // simple expand action — you can show modal detail or navigate to full details section
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-sm text-[#0056B3] underline"
              >
                View more details
              </button>

              {/* UC Promise */}
              <div className="border p-3 rounded">
                <p className="font-semibold mb-2">UC Promise</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✔</span>
                    <span>Verified professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✔</span>
                    <span>Hassle free booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✔</span>
                    <span>Transparent pricing</span>
                  </li>
                </ul>
              </div>

              {/* Book Now */}
              <button
                onClick={handleBookNow}
                disabled={isPostingCart}
                className="w-full bg-[#F65616] text-white py-2 rounded hover:opacity-95"
              >
                {isPostingCart ? "Processing..." : "Book Now"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceViewDetails;
