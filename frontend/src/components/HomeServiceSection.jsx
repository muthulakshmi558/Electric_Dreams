import React from "react";
import { useNavigate } from "react-router-dom"; // ⬅ import navigation
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Img1 from "../assets/images/ac_installing.jpg";
import Img2 from "../assets/images/lightning_installation.jpg";
import Img3 from "../assets/images/fast_reliable_help.jpg";
import Img4 from "../assets/images/convenience_efficiency.jpg";
import Img5 from "../assets/images/power_distribution.jpg";
import Img6 from "../assets/images/protect_home.jpg";

const services = [
  { id: 1, img: Img1, title: "Air Conditioning", desc: "Stay Cool and comfortable" },
  { id: 2, img: Img2, title: "Energy Efficient Lightning", desc: "Affordable pricing" },
  { id: 3, img: Img3, title: "FaST & Reliable Electrical Help", desc: "Expert technicians" },
  { id: 4, img: Img4, title: "Enhance Convenience & Efficiency ", desc: "24/7 support" },
  { id: 5, img: Img5, title: "Sage and Reliable Power Distribution", desc: "Trusted by customers" },
  { id: 6, img: Img6, title: "Protect Your Home", desc: "Fast response time" },
];

const ServicesCarousel = () => {
  const navigate = useNavigate(); // ⬅ hook for navigation

  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Our Services
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={1500}
          spaceBetween={20}
          loop={true}
          grabCursor={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="py-6"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-[#0056B3] text-white p-4 rounded-lg shadow-md flex flex-col items-center text-center h-80">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-4/5 object-cover rounded-xl mb-2"
                />
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm mt-1">{service.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View Source Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/commercial")}
            className="bg-[#F65616] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#CD3A00] transition"
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
