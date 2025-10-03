import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceViewDetails from "../components/ServiceDetails";

function ServiceDetailsPage() {
  return (
    <div className="font-lato">
      <Navbar />
      <ServiceViewDetails />
      <Footer />
    </div>
  );
}

export default ServiceDetailsPage;
