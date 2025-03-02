import AlertBanner from "./components/AlertBanner";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AlertBanner />
      <HeroSection />
      <FeatureSection />
    </div>
  );
}
