import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactPageForm from "../components/ContactPageForm"
import ContactBannerSection from "../components/ContactBanner";

function ContactPage() {
  return (
    <div className="font-lato">
      <Navbar />
      <ContactBannerSection />
      <ContactPageForm />
      <Footer />
    </div>
  );
}

export default ContactPage;
