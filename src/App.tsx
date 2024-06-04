import Blog from "./components/Blog";
import Dashboard from "./components/Dashboard";
import Enterprise from "./components/Enterprise";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar";
import TrustedBy from "./components/TrustedBy";
import TryIt from "./components/TryIt";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Dashboard />
      <TrustedBy />
      <MainLayout />
      <Blog />
      <Enterprise />
      <TryIt />
      <Footer />
    </>
  );
};

export default App;
