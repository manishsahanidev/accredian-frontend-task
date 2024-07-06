import Benefit from "./components/Benefit";
import FAQ from "./components/FAQ";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Support from "./components/Support";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Benefit />
      <FAQ />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
