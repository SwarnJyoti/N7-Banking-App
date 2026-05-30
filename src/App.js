import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Dashboard from "./components/Dashboard";
import MobileBanking from "./components/MobileBanking";
import Insights from "./components/Insights";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";
import './App.css'
import TopBanner from "./components/TopBanner";
import CoreBankingSection from "./components/CoreBankingSection";
import Section from "./components/Section";
import Section2 from "./components/Section2";

function App() {
  return (
    <div>
      <Hero />
      <Solutions />
      <Dashboard />
      <CoreBankingSection />
      <Section />
      <TopBanner />
      <MobileBanking />
      <Insights />
      <CaseStudies />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;  