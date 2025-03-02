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
      <div className="relative bg-cover bg-no-repeat bg-[url(/bg-hero.png)]">
        <AlertBanner />
        <HeroSection />
      </div>
      <FeatureSection />
      <div className="relative bg-cover bg-no-repeat bg-[url(/bg-dividend.png)]">
        <DividendsSection />
        <RegistrationSection />
      </div>
      <ComingSection />
      <Footer />
    </div>
  );
};

export default Home;
