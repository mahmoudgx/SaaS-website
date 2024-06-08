import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="px-4 md:px-20 py-2.5 md:py-5 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center">
        <div className="text-xl font-bold">{t("welcome")}</div>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto flex-grow`}
        >
          <div
            className={`flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 mt-4 md:mt-0 mx-auto ${
              i18n.language === "ar"
                ? "md:space-x-reverse md:space-x-4"
                : "md:space-x-4"
            }`}
          >
            <a href="#features" className="text-black font-semibold">
              {t("features")}
            </a>
            <a href="#enterprise" className="text-black font-semibold">
              {t("enterprise")}
            </a>
            <a href="#resources" className="text-black font-semibold">
              {t("resources")}
            </a>
            <a href="#pricing" className="text-black font-semibold">
              {t("pricing")}
            </a>
          </div>
          <div
            className={`flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 mt-4 md:mt-0 ${
              i18n.language === "ar"
                ? "md:space-x-reverse md:space-x-2"
                : "md:space-x-2"
            }`}
          >
            <button className="bg-white text-black py-2 px-4 border-2 border-gray-500 rounded">
              {t("login")}
            </button>
            <button className="bg-[#6A65FF] text-white py-2 px-4 rounded">
              {t("try_for_free")}
            </button>
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              defaultValue={i18n.language}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
