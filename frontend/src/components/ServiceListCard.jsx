import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import { Star } from "lucide-react"; // ⭐ icon from lucide-react

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/serviceslist/")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  const handleViewDetails = (service) => {
    navigate(`/serviceslist/${service.id}`, { state: service });
  };

  return (
    <div className="p-6 font-lato mt-10">
      <h1 className="text-2xl font-bold mb-6">Wall and Ceiling Light</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg p-4 flex justify-between items-center shadow-md"
          >
            {/* Left Section */}
            <div>
              <h3 className="text-lg font-bold font-lato">{service.title}</h3>

{/* Rating & Reviews */}
<div className="flex items-center gap-2 mt-2 border-b border-gray-400 pb-1 w-fit">
  {/* Star inside circle */}
  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0056B3]">
    <Star size={14} className="text-white fill-white" />
  </div>

  {/* Rating + Reviews in one line */}
  <span className="text-black text-sm font-semibold">
    {service.rating}
  </span>
  <span className="text-xs text-gray-600 ">
    ({service.reviews} reviews)
  </span>
</div>

              {/* Price & Duration in one row */}
              <div className="flex items-center gap-4 mt-2">
                <p className="text-lg font-semibold text-black">
                  ₹{service.price}
                </p>
                <p className="text-sm text-[#0056B3]">{service.duration}</p>
              </div>

              {/* View Details Button (no underline) */}
              <button
                onClick={() => handleViewDetails(service)}
                className="mt-3 text-[#CD3A00] font-semibold"
              >
                View Details
              </button>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 object-contain mb-2"
              />
              <button className="px-4 py-2 bg-[#F65616] text-white rounded-lg font-lato hover:bg-[#CD3A00]">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
