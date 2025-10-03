import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Commercial from "./pages/CommercialService";
import BookService from "./pages/BookServices";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import Residential from "./pages/ResidentialServices";
import EmergencyPage from "./pages/EmergencyElectrician";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AreasService from "./pages/AreasWeService";
import CheckoutPage from "./pages/CheckoutPage";

// Route titles mapping
const routeTitles = {
  "/": "Electric Dreams - Home",
  "/login": "Electric Dreams - Login",
  "/commercial": "Electric Dreams - Commercial Service",
  "/residential": "Electric Dreams - Residential Service",
  "/emergency": "Electric Dreams - Emergency Electrician",
  "/about": "Electric Dreams - About Us",
  "/contact": "Electric Dreams - Contact",
  "/areas": "Electric Dreams - Areas We Service",
  "/checkout": "Electric Dreams - Checkout",
  "/bookservices": "Electric Dreams - Book Service",
};

const RouteWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const title = routeTitles[location.pathname] || "Electric Dreams";
    document.title = title;
  }, [location.pathname]);

  return children;
};

function App() {
  return (

      <RouteWrapper>
        <div className="font-lato">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/areas" element={<AreasService />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/bookservices" element={<BookService />} />
            <Route path="/serviceslist/:id" element={<ServiceDetailsPage />} />
          </Routes>
        </div>
      </RouteWrapper>

  );
}

export default App;
