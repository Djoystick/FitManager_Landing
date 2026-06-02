import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import MechanicsSection from "@/components/MechanicsSection";
import EconomySection from "@/components/EconomySection";
import ArchitectureHub from "@/components/ArchitectureHub";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <HeroSection />
      <StatsBar />
      <MechanicsSection />
      <EconomySection />
      <ArchitectureHub />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </main>
  );
}
