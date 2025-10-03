import TrustedBrands from "../components/BrandsList";
import ClientReview from "../components/ClientReviews";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Howitworks from "../components/HomeHowitworks";
import ServicesCarousel from "../components/HomeServiceSection";
import WhyChooseUs from "../components/HomeWhychooseus";
import Navbar from "../components/Navbar";
import GetInTouch from "../components/GetinTouch";
import FAQSection from "../components/Faq";

function Home() {
  return (
    <div className="font-lato">
      <Navbar />
      <HeroBanner />
      <ServicesCarousel />
      <WhyChooseUs />
      <Howitworks/>
      <ClientReview />
      <TrustedBrands />
      <GetInTouch />
      <FAQSection />
      <Footer />

    </div>
  );
}

export default Home;
