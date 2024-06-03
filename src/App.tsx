import Dashboard from "./components/Dashboard";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TrustedBy from "./components/TrustedBy";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Dashboard />
      <TrustedBy />
      <Features />
    </>
  );
};

export default App;
