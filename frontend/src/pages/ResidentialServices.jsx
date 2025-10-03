import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResidentialBannerSection from "../components/ResidentialBannerSection";
import ResidentialServiceCards from "../components/ResidentialServiceCard";

function Residential() {
  return (
    <div className="font-lato">
      <Navbar />
      <ResidentialBannerSection />
      <ResidentialServiceCards />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Residential;
