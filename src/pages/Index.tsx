import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AttractionsSection from "@/components/AttractionsSection";
import LocationSection from "@/components/LocationSection";
import TicketsSection from "@/components/TicketsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AttractionsSection />
        <LocationSection />
        <TicketsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
