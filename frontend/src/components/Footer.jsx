import { FaInstagram, FaGoogle, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import logo from "../assets/images/footer_logo.png"; // Import the logo image

const Footer = () => {
  return (
    <footer className="bg-[#E25C26] text-white font-[Lato]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1 - Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="logo" className="w-15 h-15" />
          </div>
          <p className="text-sm leading-relaxed">
            Voltaic Electrical provides expert residential,
            commercial, and emergency electrical services across Perth.
          </p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" className="hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaGoogle />
            </a>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Lighting</li>
            <li>Private Power Poles</li>
            <li>Smoke Alarms</li>
            <li>EV Chargers</li>
            <li>Air Conditioning</li>
            <li>Thermographic Imaging</li>
            <li className="font-semibold">View All</li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Service Areas</li>
            <li>Contact</li>
            <li>Reviews</li>
            <li>Resources</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-xl" /> Location, Chennai
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl" /> (+91) 1234567890
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-xl" /> Support@electricdreams.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#CD3A00] py-4 text-center text-sm">
        © {new Date().getFullYear()} Electric Dreams. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
