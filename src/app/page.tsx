import HeroSection from "@/components/HeroSection";
import ThemeToggle from "@/components/ThemeToggle";
import ArchitectureHub from "@/components/ArchitectureHub";
import FeatureGrid from "@/components/FeatureGrid";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden selection:bg-neon-violet/30 selection:text-white">
      <HeroSection />
      <ThemeToggle />
      <ArchitectureHub />
      <FeatureGrid />
      <RoadmapSection />
      <Footer />
    </main>
  );
}
