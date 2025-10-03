import Checkout from "../components/Checkout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function CheckoutPage() {
  return (
    <div className="font-lato">
      <Navbar />
      <Checkout />
      <Footer />
    </div>
  );
}

export default CheckoutPage;
