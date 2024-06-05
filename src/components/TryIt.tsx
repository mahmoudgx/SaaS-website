import { motion } from "framer-motion";

const TryIt = () => {
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
          Maximize potential with SaasRevive
        </motion.h1>
        <motion.p
          className="md:text-lg text-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Maximize your team's potential by leveraging the powerful features of
          Slack. The versatile platform provides a streamlined communication hub
          where teams can collaborate seamlessly and stay organized in one
          centralized space.
        </motion.p>
        <motion.button
          className="bg-[#6A65FF] text-white py-3 px-5 rounded w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Try for free
        </motion.button>
      </div>
    </div>
  );
};

export default TryIt;
