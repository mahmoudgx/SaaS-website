import { useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "ar") {
      document.body.dir = "rtl";
      document.body.classList.add("font-arabic");
      document.body.classList.remove("font-sans");
    } else {
      document.body.dir = "ltr";
      document.body.classList.add("font-sans");
      document.body.classList.remove("font-arabic");
    }
  }, [i18n.language]);

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
