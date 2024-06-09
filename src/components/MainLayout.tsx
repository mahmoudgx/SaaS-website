import React from "react";
import { useTranslation } from "react-i18next";
import Section, { SectionProps } from "./Section";
import cardone from "../assets/card1.png";
import cardtwo from "../assets/card2.png";
import cardthree from "../assets/card3.png";

const MainLayout: React.FC = () => {
  const { t } = useTranslation();

  const sections: SectionProps[] = [
    {
      image: cardone,
      title: t("section1.title"),
      description: t("section1.description"),
      features: [t("section1.features.0")],
      button: t("section1.button"),
      reverse: false,
    },
    {
      image: cardtwo,
      title: t("section2.title"),
      description: t("section2.description"),
      features: [t("section2.features.0"), t("section2.features.1")],
      button: t("section2.button"),
      reverse: true,
    },
    {
      image: cardthree,
      title: t("section3.title"),
      description: t("section3.description"),
      stats: [
        {
          value: t("section3.stats.0.value"),
          text: t("section3.stats.0.text"),
        },
        {
          value: t("section3.stats.1.value"),
          text: t("section3.stats.1.text"),
        },
      ],
      button: t("section3.button"),
      reverse: false,
    },
  ];

  return (
    <div className="md:space-y-20 py-10 max-sm:text-center">
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
};

export default MainLayout;
