import { motion } from "framer-motion";
import dashboard from "../assets/dashboard.png";

const Dashboard = () => {
  return (
    <motion.div
      className="bg-white relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex justify-center">
        <img
          src={dashboard}
          loading="lazy"
          className="w-full px-5 max-w-4xl"
          alt="Dashboard"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 md:h-[500px] h-[250px] bg-gradient-to-t from-white to-transparent"></div>
    </motion.div>
  );
};

export default Dashboard;
