import Blog from "./components/Blog";
import Dashboard from "./components/Dashboard";
import Enterprise from "./components/Enterprise";
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
      <Blog />
      <Enterprise />
    </>
  );
};

export default App;
