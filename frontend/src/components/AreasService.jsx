// src/pages/AreasOfService.jsx
const AreasOfService = () => {
  const areas = [
    "Ariyalur", "Chengalpattu", "Chennai",
    "Coimbatore", "Cuddalore", "Dharmapuri",
    "Dindigul", "Erode", "Kallakurichi",
    "Kancheepuram", "Kanniyakumari", "Karur",
    "Krishnagiri", "Madurai", "Mayiladuthurai",
    "Nagapattinam", "Namakkal", "Nilgiris",
    "Perambalur", "Pudukkottai", "Ramanathapuram",
    "Ranipet", "Salem", "Sivaganga",
    "Tenkasi", "Thanjavur", "Theni",
    "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
    "Tirupathur", "Tiruppur", "Tiruvallur",
    "Tiruvannamalai", "Tiruvarur", "Vellore",
    "Viluppuram", "Virudhunagar"
  ];

  return (
    <div className="bg-white py-12 font-[Lato]">
      <div className="w-[90%] mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#E25C26] mb-2">
          Areas we services
        </h2>
        <p className="text-gray-700 mb-8">
          Below are some areas we provide electrical services to. But, don’t worry if your area is not listed, we likely service your area too!
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-100 py-3 px-6 rounded-md shadow-sm cursor-pointer
                         hover:bg-[#F65616] hover:text-white transition duration-300"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreasOfService;
