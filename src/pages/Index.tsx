import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import SocialSection from "@/components/SocialSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SparkCursor from "@/components/SparkCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SparkCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <SocialSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
