import AlertBanner from "./components/AlertBanner";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AlertBanner />
      <HeroSection />
    </div>
  );
}
