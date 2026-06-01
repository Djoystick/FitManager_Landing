import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import EngineCarouselSection from "@/components/EngineCarouselSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <EngineCarouselSection />
    </main>
  );
}
