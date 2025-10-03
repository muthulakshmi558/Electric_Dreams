// src/components/ServiceBannerSection.jsx
import serviceImg from "../assets/images/commercial_banner.jpg"; // 👈 put your image in src/assets/

const ServiceBannerSection = () => {
  // store image in a variable
  const serviceImage = serviceImg;

  return (
    <div className="bg-[#0056B3] font-[Lato] mt-20 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Title + Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Commercial Services
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed">
            We provide high-quality commercial solutions designed to fit your
            business needs. With expertise and dedication, we ensure the best
            service experience for you.
          </p>
        </div>

        {/* Right: Circle with Image */}
        <div className="flex justify-center">
          <div className="w-60 h-60 md:w-72 md:h-72 rounded-full  flex items-center justify-center">
            <img
              src={serviceImage}
              alt="Service"
              className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBannerSection;
