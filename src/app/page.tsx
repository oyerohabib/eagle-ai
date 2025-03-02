import AlertBanner from "./components/Banner";
import DividendsSection from "./components/Dividends";
import FeatureSection from "./components/Feature";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AlertBanner />
      <HeroSection />
      <FeatureSection />
      <DividendsSection />
    </div>
  );
}
