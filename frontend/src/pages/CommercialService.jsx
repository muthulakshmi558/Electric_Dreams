import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceBannerSection from "../components/ServiceBannerSection";
import ServiceCards from "../components/ServiceCards";

function Commercial() {
  return (
    <div className="font-lato">
      <Navbar />
      <ServiceBannerSection />
      <ServiceCards />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Commercial;
