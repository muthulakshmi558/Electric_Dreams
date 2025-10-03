// src/components/ServiceBannerSection.jsx
import serviceImg from "../assets/images/commercial_banner.jpg"; // 👈 put your image in src/assets/

const ContactBannerSection = () => {
  // store image in a variable
  const serviceImage = serviceImg;

  return (
    <div className="bg-[#0056B3] font-[Lato] mt-20 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Title + Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed">
            We'd love to here from you.
          </p>
        </div>


      </div>
    </div>
  );
};

export default ContactBannerSection;
