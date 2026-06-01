import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import EngineCarouselSection from "@/components/EngineCarouselSection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HeroSection />
      <FeaturesSection />
      <EngineCarouselSection />
      <RoadmapSection />
      <Footer />
    </main>
  );
}
