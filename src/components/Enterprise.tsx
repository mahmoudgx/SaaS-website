import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

interface Stat {
  value: string;
  text: string;
}

const Enterprise = () => {
  const { t } = useTranslation();

  const stats: Stat[] = t("enterprise.stats", { returnObjects: true });

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:p-20 p-5 items-center">
      <motion.div
        className="md:space-y-6 max-sm:text-center space-y-4"
        initial={{ opacity: 0, x: i18n.language === "ar" ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="md:text-3xl text-2xl font-semibold">
          {t("enterprise.title")}
        </h1>
        <p className="text-gray-400">{t("enterprise.description1")}</p>
        <p className="text-gray-400">{t("enterprise.description2")}</p>
        <div
          className={
            i18n.language === "ar"
              ? "md:space-x-reverse space-x-2 space-y-2"
              : "md:space-x-2 space-y-2"
          }
        >
          <button className="bg-[#6A65FF] text-white py-3 px-5 rounded w-full sm:w-auto">
            {t("enterprise.button1")}
          </button>
          <button className="bg-white text-black border-2 py-3 px-5 rounded w-full sm:w-auto">
            {t("enterprise.button2")}
          </button>
        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:w-full w-full md:gap-8 gap-4">
        {stats.map((stat: Stat, index: number) => (
          <motion.div
            key={index}
            className="p-5 border-2 rounded-xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="font-semibold text-4xl my-2">{stat.value}</h1>
            <p className="text-gray-400">{stat.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Enterprise;
