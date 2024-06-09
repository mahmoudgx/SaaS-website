import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TryIt = () => {
  const { t } = useTranslation();

  return (
    <div className="md:p-20 p-5 space-y-10">
      <div className="border-2 border-transparent rounded-xl text-center md:p-20 py-10 px-5 space-y-10 overflow-hidden bg-blue-600 text-white">
        <motion.h1
          className="md:text-4xl text-3xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("try_it.title")}
        </motion.h1>
        <motion.p
          className="md:text-lg text-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("try_it.description")}
        </motion.p>
        <motion.button
          className="bg-[#6A65FF] text-white py-3 px-5 rounded w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {t("try_it.button")}
        </motion.button>
      </div>
    </div>
  );
};

export default TryIt;
