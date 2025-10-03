import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import api from "../api/axios";
import { Link } from "react-router-dom";

const ServiceCards = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api
      .get("/services/") // API from Django
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="py-16 px-6 font-[Lato]">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:bg-blue-100 transition duration-300 group"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5 bg-[#0056B3] group-hover:bg-blue-500 transition duration-300">
              <h3 className="text-xl font-bold text-white group-hover:text-black mb-2">
                {service.title}
              </h3>

              {/* Description + Arrow in same row */}
              <div className="flex justify-between items-center">
                <p className="text-white font-bold group-hover:text-black text-md pr-3 flex-1">
                  {service.description}
                </p>
                <Link
                  to={`/bookservices/`} // navigate to detail page
                  className="ml-3 w-9 h-9 flex items-center justify-center rounded-full bg-white text-black transition"
                >
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
