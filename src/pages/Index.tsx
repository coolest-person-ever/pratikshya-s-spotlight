import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import SocialSection from "@/components/SocialSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SparkCursor from "@/components/SparkCursor";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingSocials from "@/components/FloatingSocials";
import BackToTop from "@/components/BackToTop";
const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const onComplete = useCallback(() => setLoaded(true), []);

  return (
    <div className="min-h-screen bg-background">
      {!loaded && <LoadingScreen onComplete={onComplete} />}
      <SparkCursor />
      <FloatingSocials />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <SocialSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
