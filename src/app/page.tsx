import type { NextPage } from "next";
import AlertBanner from "./components/Banner";
import ComingSection from "./components/ComingSoon";
import DividendsSection from "./components/Dividends";
import FeatureSection from "./components/Feature";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import RegistrationSection from "./components/Registration";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <AlertBanner />
      <HeroSection />
      <FeatureSection />
      <DividendsSection />
      <RegistrationSection />
      <ComingSection />
      <Footer />
    </div>
  );
};

export default Home;
