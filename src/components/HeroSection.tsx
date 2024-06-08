import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      className="relative md:py-20 py-10 bg-[url('./assets/architect.svg')] bg-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-7xl font-bold mb-4 md:leading-snug leading-tight">
          {t("hero.title.part1")}
          <br className="hidden md:inline" /> {t("hero.title.part2")}
        </h1>
        <p className="mb-8 md:text-lg text-sm">
          {t("hero.description.part1")}
          <br className="hidden md:inline" />
          {t("hero.description.part2")}
        </p>
        <div
          className={`flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 mt-4 md:mt-0 ${
            i18n.language === "ar"
              ? "md:space-x-reverse md:space-x-4"
              : "md:space-x-4"
          }`}
        >
          <button className="bg-white border py-3 px-5 rounded w-full sm:w-auto flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Logo"
              className={`h-6 ${i18n.language === "ar" ? "ml-2" : "mr-2"}`}
            />
            {t("hero.signup_google")}
          </button>
          <button className="bg-[#6A65FF] text-white py-3 px-5 rounded w-full sm:w-auto">
            {t("hero.try_for_free")}
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 md:h-[300px] h-[250px] bg-gradient-to-t from-white to-transparent"></div>
    </motion.div>
  );
};

export default HeroSection;
