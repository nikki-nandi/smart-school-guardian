import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import HardwareSection from "@/components/sections/HardwareSection";
import MobileAppSection from "@/components/sections/MobileAppSection";
import PricingSection from "@/components/sections/PricingSection";
import TrustSection from "@/components/sections/TrustSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <HardwareSection />
        <MobileAppSection />
        <PricingSection />
        <TrustSection />
        <RoadmapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
