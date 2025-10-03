import ElectricianSection from "../components/ElectricianSection";
import EmergencyHeroSection from "../components/Emergency";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import QualityWorkmanship from "../components/QualityWorkmanship";
import GetInTouch from "../components/GetinTouch";
import EmergencySigns from "../components/EmergencyContent";

function EmergencyPage() {
  return (
    <div className="font-lato">
      <Navbar />
      <EmergencyHeroSection />
      <ElectricianSection />
      <QualityWorkmanship />
      <GetInTouch />
      <EmergencySigns />

      <Footer />
    </div>
  );
}

export default EmergencyPage;
