import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowToGetSection from "@/components/HowToGetSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import LocationSection from "@/components/LocationSection";
import ImportantPlacesSection from "@/components/ImportantPlacesSection";
import TipsSection from "@/components/TipsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HowToGetSection />
        <ActivitiesSection />
        
        <ImportantPlacesSection />
        <TipsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
