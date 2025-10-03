import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceList from "../components/ServiceListCard";
import DetailBanner from "../components/ServicesDetailsBanner";

function BookService() {
  return (
    <div className="font-lato">
      <Navbar />
      <DetailBanner />
      <ServiceList/>
      <Footer />
    </div>
  );
}

export default BookService;
