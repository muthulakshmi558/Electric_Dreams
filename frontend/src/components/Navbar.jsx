import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Simulate search results dynamically
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Simulate dynamic search (replace with actual API call)
    if (query.length > 0) {
      setSearchResults([
        { id: 1, name: "Residential Service" },
        { id: 2, name: "Commercial Service" },
      ]);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 font-lato shadow bg-white">
      {/* Top Row */}
      <div className="flex justify-between items-center px-6 py-2">
        <div className="flex items-center">
          <img src={Logo} alt="Electric Dreams" className="h-10 w-auto" />
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="tel:+911234567890"
            className="bg-[#CD3A00] px-4 py-2 rounded-full text-white font-semibold hover:bg-[#F65616] transition"
          >
            Call (+91)1234567890
          </a>
          <Link
            to="/book"
            className="border-2 border-[#CD3A00] text-[#CD3A00] px-4 py-2 rounded-full bg-white hover:bg-[#CD3A00] hover:text-white transition"
          >
            Book Now
          </Link>
          <button
            className="md:hidden text-[#CD3A00]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Navigation Row */}
      <nav className="bg-[#E25C26] text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/* Search */}
          <div className="relative w-56 flex-shrink-0 hidden md:flex items-center">
            <Search size={18} className="absolute left-3 text-black" />
            <input
              type="text"
              placeholder="Search electricians"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 rounded-full text-black focus:outline-none"
            />
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white text-black rounded-md shadow-lg mt-1 z-50">
                {searchResults.map((res) => (
                  <Link
                    key={res.id}
                    to={`/services/${res.id}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setSearchQuery("")}
                  >
                    {res.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-1 justify-center gap-4 font-semibold items-center text-sm">
            <li>
              <Link
                to="/"
                className="px-2 h-9 flex items-center rounded-md hover:bg-white hover:text-[#CD3A00] transition"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center h-9 px-2 rounded-md hover:bg-white hover:text-[#CD3A00] transition text-sm"
              >
                Services <ChevronDown size={14} className="ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white text-black grid grid-cols-2 gap-3 p-3 rounded-lg shadow-lg text-sm">
                  <Link to="/commercial" className="hover:text-[#0056B3]">
                    Commercial Service
                  </Link>
                  <Link to="/residential" className="hover:text-[#0056B3]">
                    Residential Service
                  </Link>
                  <Link to="/service3" className="hover:text-[#0056B3]">
                    Service 3
                  </Link>
                  <Link to="/service4" className="hover:text-[#0056B3]">
                    Service 4
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/emergency"
                className="px-2 h-9 flex items-center rounded-md hover:bg-white hover:text-[#CD3A00] transition"
              >
                Emergency
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-2 h-9 flex items-center rounded-md hover:bg-white hover:text-[#CD3A00] transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-2 h-9 flex items-center rounded-md hover:bg-white hover:text-[#CD3A00] transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/areas"
                className="px-2 h-9 flex items-center rounded-md hover:bg-white hover:text-[#CD3A00] transition"
              >
                Areas We Service
              </Link>
            </li>
          </ul>

          {/* Account & Cart always visible */}
          <div className="hidden md:flex space-x-3 font-semibold items-center text-sm">
            <Link
              to="/login"
              className="px-3 h-10 flex items-center rounded-md hover:bg-white hover:text-[#CD3A00] transition"
            >
              Account
            </Link>
            <Link
              to="/cart"
              className="px-3 h-10 flex items-center rounded-md hover:bg-white hover:text-[#CD3A00] transition"
            >
              Cart (1)
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-6 py-3 bg-[#CD3A00]">
            <div className="relative w-full mb-3">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              <input
                type="text"
                placeholder="Search electricians"
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 rounded-full text-black focus:outline-none"
              />
            </div>
            <ul className="flex flex-col space-y-1 font-semibold">
              <li><Link to="/" className="px-3 py-2 rounded-md hover:bg-white hover:text-[#CD3A00] transition">Home</Link></li>
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center w-full px-3 py-2 rounded-md hover:bg-white hover:text-[#CD3A00] transition"
                >
                  Services <ChevronDown size={16} className="ml-1" />
                </button>
                {servicesOpen && (
                  <div className="mt-2 grid grid-cols-2 gap-2 bg-white text-black p-3 rounded-md">
                    <Link to="/commercial" className="hover:text-[#0056B3]">Service 1</Link>
                    <Link to="/residential" className="hover:text-[#0056B3]">Service 2</Link>
                  </div>
                )}
              </li>
              <li><Link to="/emergency" className="px-3 py-2 rounded-md hover:bg-white hover:text-[#CD3A00] transition">Emergency</Link></li>
              <li><Link to="/about" className="px-3 py-2 rounded-md hover:bg-white hover:text-[#CD3A00] transition">About</Link></li>
              <li><Link to="/contact" className="px-3 py-2 rounded-md hover:bg-white hover:text-[#CD3A00] transition">Contact</Link></li>
              <li><Link to="/areas" className="px-3 py-2 rounded-md hover:bg-white hover:text-[#CD3A00] transition">Areas We Service</Link></li>
              {/* Mobile Account & Cart */}
              <li><Link to="/login" className="px-3 py-2 rounded-md hover:bg-white hover:text-[#CD3A00] transition">Account</Link></li>
              <li><Link to="/cart" className="px-3 py-2 rounded-md hover:bg-white hover:text-[#CD3A00] transition">Cart (1)</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
